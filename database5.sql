/*
SQLyog Community v12.4.3 (64 bit)
MySQL - 10.1.25-MariaDB : Database - restaurant
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`restaurant` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `restaurant`;

/*Table structure for table `emp_tel` */

DROP TABLE IF EXISTS `emp_tel`;

CREATE TABLE `emp_tel` (
  `tel_id` int(10) NOT NULL AUTO_INCREMENT,
  `tel_tel` int(10) DEFAULT NULL,
  `tel_ext` int(10) DEFAULT NULL,
  `tel_status` int(2) DEFAULT NULL,
  `tel_emp_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`tel_id`),
  KEY `fk_tel_status` (`tel_status`),
  KEY `fk_tel_emp` (`tel_emp_id`),
  CONSTRAINT `fk_tel_status` FOREIGN KEY (`tel_status`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `emp_tel` */

insert  into `emp_tel`(`tel_id`,`tel_tel`,`tel_ext`,`tel_status`,`tel_emp_id`) values 
(1,12354545,11,1,18),
(2,12354545,11,1,19),
(3,888888888,0,1,20),
(4,1111,1,1,21),
(5,0,1,1,22),
(6,0,1,1,23),
(7,245784565,0,1,40);

/*Table structure for table `res_drink` */

DROP TABLE IF EXISTS `res_drink`;

CREATE TABLE `res_drink` (
  `drink_id` int(10) NOT NULL AUTO_INCREMENT,
  `drink_name` varchar(20) DEFAULT NULL,
  `drink_vendor_id` int(10) unsigned DEFAULT NULL,
  `drink_number` int(10) DEFAULT NULL,
  `drink_order_point` int(10) DEFAULT '5',
  `drink_unit_id` int(10) DEFAULT NULL,
  `drink_price` int(10) DEFAULT NULL,
  `drink_status_id` int(2) DEFAULT NULL,
  PRIMARY KEY (`drink_id`),
  KEY `fk_drink_status` (`drink_status_id`),
  KEY `fk_drink_unit` (`drink_unit_id`),
  KEY `fk_drink_vendor` (`drink_vendor_id`),
  CONSTRAINT `fk_drink_status` FOREIGN KEY (`drink_status_id`) REFERENCES `res_status` (`stat_id`),
  CONSTRAINT `fk_drink_unit` FOREIGN KEY (`drink_unit_id`) REFERENCES `res_unit` (`unit_id`),
  CONSTRAINT `fk_drink_vendor` FOREIGN KEY (`drink_vendor_id`) REFERENCES `res_vendor` (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink` */

insert  into `res_drink`(`drink_id`,`drink_name`,`drink_vendor_id`,`drink_number`,`drink_order_point`,`drink_unit_id`,`drink_price`,`drink_status_id`) values 
(1,'coke',3,56,5,24,45,1),
(2,'แป๊ปซี่',5,82,5,24,45,1),
(3,'น้ำเปล่า',7,12,5,2,10,1),
(18,'น้ำแดง',NULL,40,5,24,15,1),
(19,'น้ำเขียว',NULL,20,5,24,20,1),
(20,'hy',NULL,30,5,24,20,1);

/*Table structure for table `res_drink_po` */

DROP TABLE IF EXISTS `res_drink_po`;

CREATE TABLE `res_drink_po` (
  `dp_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dp_date` date DEFAULT NULL,
  `dp_created_by` int(10) DEFAULT NULL,
  `dp_approval_status` int(1) NOT NULL DEFAULT '0',
  `dp_approved_by` int(10) DEFAULT NULL,
  `dp_rejected_by` int(10) DEFAULT NULL,
  `dp_status_id` int(2) DEFAULT NULL,
  PRIMARY KEY (`dp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_po` */

insert  into `res_drink_po`(`dp_id`,`dp_date`,`dp_created_by`,`dp_approval_status`,`dp_approved_by`,`dp_rejected_by`,`dp_status_id`) values 
(33,'2017-11-13',24,0,NULL,NULL,1),
(34,'2017-11-13',24,1,24,NULL,1),
(35,'2017-11-13',24,1,24,NULL,1),
(36,'2017-11-15',24,1,24,NULL,1),
(37,'2017-11-15',24,1,24,NULL,1);

/*Table structure for table `res_drink_po_detail` */

DROP TABLE IF EXISTS `res_drink_po_detail`;

CREATE TABLE `res_drink_po_detail` (
  `dpd_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dp_id` int(10) DEFAULT NULL,
  `drink_id` int(10) DEFAULT NULL,
  `unit_id` int(10) DEFAULT NULL,
  `vendor_id` int(10) DEFAULT NULL,
  `dpd_number` int(10) DEFAULT NULL,
  `dpd_unit_price` float DEFAULT NULL,
  `dpd_total_price` float DEFAULT NULL,
  `dpd_receipt_number` int(10) DEFAULT NULL,
  `dpd_receipt_remaining_number` int(10) DEFAULT NULL,
  `dpd_receipt_by` int(10) DEFAULT NULL,
  `dpd_status_id` int(1) DEFAULT NULL,
  `unitdetail_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`dpd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_po_detail` */

insert  into `res_drink_po_detail`(`dpd_id`,`dp_id`,`drink_id`,`unit_id`,`vendor_id`,`dpd_number`,`dpd_unit_price`,`dpd_total_price`,`dpd_receipt_number`,`dpd_receipt_remaining_number`,`dpd_receipt_by`,`dpd_status_id`,`unitdetail_id`) values 
(53,33,1,NULL,3,30,20,600,NULL,NULL,NULL,1,28),
(54,33,2,NULL,4,20,20,400,NULL,NULL,NULL,1,28),
(55,34,2,NULL,4,20,20,400,20,0,24,1,29),
(56,34,1,NULL,5,20,25,500,20,0,24,1,28),
(57,35,3,NULL,4,10,25,250,10,0,24,1,28),
(58,36,1,NULL,4,10,20,200,5,5,24,1,28),
(59,37,1,NULL,5,10,25,250,10,0,24,1,29),
(60,37,18,NULL,3,20,10,200,20,0,24,1,28);

/*Table structure for table `res_drink_vendor` */

DROP TABLE IF EXISTS `res_drink_vendor`;

CREATE TABLE `res_drink_vendor` (
  `dv_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `drink_id` int(10) DEFAULT NULL,
  `vendor_id` int(10) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`dv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_vendor` */

insert  into `res_drink_vendor`(`dv_id`,`drink_id`,`vendor_id`,`price`) values 
(8,2,4,20),
(9,2,5,15),
(13,4,4,25),
(14,7,3,25),
(15,9,4,0),
(16,5,3,25),
(17,6,4,0),
(18,6,5,0),
(19,8,4,12),
(20,12,4,14),
(21,3,4,25),
(22,5,1,25),
(23,15,4,25),
(24,16,4,25),
(25,16,5,25),
(26,17,4,25),
(27,17,5,25),
(28,18,3,10),
(29,19,6,12),
(30,19,3,12),
(31,20,4,20),
(32,20,3,12),
(33,1,3,20),
(34,1,4,20),
(35,1,5,25);

/*Table structure for table `res_employee` */

DROP TABLE IF EXISTS `res_employee`;

CREATE TABLE `res_employee` (
  `emp_id` int(10) NOT NULL AUTO_INCREMENT,
  `emp_firstname` char(20) DEFAULT NULL,
  `emp_lastname` char(20) DEFAULT NULL,
  `emp_user` varchar(40) DEFAULT NULL,
  `emp_pass` varchar(32) DEFAULT NULL,
  `emp_idcard` int(13) DEFAULT NULL,
  `emp_pos_id` int(10) DEFAULT NULL,
  `emp_status_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `fk_employee_position` (`emp_pos_id`),
  KEY `fk_employee_status` (`emp_status_id`),
  CONSTRAINT `fk_employee_position` FOREIGN KEY (`emp_pos_id`) REFERENCES `res_position` (`pos_id`),
  CONSTRAINT `fk_employee_status` FOREIGN KEY (`emp_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

/*Data for the table `res_employee` */

insert  into `res_employee`(`emp_id`,`emp_firstname`,`emp_lastname`,`emp_user`,`emp_pass`,`emp_idcard`,`emp_pos_id`,`emp_status_id`) values 
(24,'สมศรี','อยู่ดี','user1','b59c67bf196a4758191e42f76670ceba',2147483647,10,1),
(25,'สมาน','มานะ','user2','934b535800b1cba8f96a5d72f72f1611',2147483647,12,1),
(26,'มานี','ยะดี','user3','2be9bd7a3434f7038ca27d1918de58bd',2147483647,12,1),
(30,'พรรษา','เสมา','user55','6074c6aa3488f3c2dddff2a7ca821aab',2147483647,15,2),
(34,'สุพรรณี','บุญมี','user8','cf79ae6addba60ad018347359bd144d2',2147483647,20,1),
(35,'สมชาย','รายะมี','user9','fa246d0262c3925617b0c72bb20eeb1d',2147483647,11,1),
(36,'ธัญญลักษณ์','สายา','user10','1e48c4420b7073bc11916c6c1de226bb',2147483647,21,1),
(40,'com','gfdf','reto','d2a452edff079ca6980edcf54cc49945',2147483647,22,1);

/*Table structure for table `res_food` */

DROP TABLE IF EXISTS `res_food`;

CREATE TABLE `res_food` (
  `food_id` int(10) NOT NULL AUTO_INCREMENT,
  `food_name` varchar(50) DEFAULT NULL,
  `food_kind_id` int(10) DEFAULT NULL,
  `food_price` int(10) DEFAULT NULL,
  `food_status_id` int(2) DEFAULT NULL,
  PRIMARY KEY (`food_id`),
  KEY `fk_food_status` (`food_status_id`),
  KEY `fk_food_kind` (`food_kind_id`),
  CONSTRAINT `fk_food_status` FOREIGN KEY (`food_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

/*Data for the table `res_food` */

insert  into `res_food`(`food_id`,`food_name`,`food_kind_id`,`food_price`,`food_status_id`) values 
(28,'แกงส้มปลาช่อน',1,120,1),
(29,'แกงส้มชะอมทอด',1,120,1),
(30,'ผัดผักบุ้งไฟแดง',3,100,1),
(31,'ทอดมันปลากราย',4,80,1),
(32,'ผัดผักสามสหาย',3,120,1),
(33,'ยำสามกรอบ',6,120,1),
(34,'ยำสาหร่ายทะเล',6,150,1);

/*Table structure for table `res_kind` */

DROP TABLE IF EXISTS `res_kind`;

CREATE TABLE `res_kind` (
  `kind_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `kind_name` varchar(20) DEFAULT NULL,
  `kind_status` int(10) DEFAULT NULL,
  PRIMARY KEY (`kind_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `res_kind` */

insert  into `res_kind`(`kind_id`,`kind_name`,`kind_status`) values 
(1,'แกง',2),
(2,'ต้ม',1),
(3,'ผัด',1),
(4,'ทอด',1),
(5,'ของหวาน',1),
(6,'ยำ',1);

/*Table structure for table `res_position` */

DROP TABLE IF EXISTS `res_position`;

CREATE TABLE `res_position` (
  `pos_id` int(10) NOT NULL AUTO_INCREMENT,
  `pos_name` varchar(20) DEFAULT NULL,
  `pos_role_id` int(10) DEFAULT NULL,
  `pos_status_id` int(2) DEFAULT NULL,
  PRIMARY KEY (`pos_id`),
  KEY `fk_pos_role` (`pos_role_id`),
  KEY `fk_pos_status` (`pos_status_id`),
  CONSTRAINT `fk_pos_role` FOREIGN KEY (`pos_role_id`) REFERENCES `res_role` (`role_id`),
  CONSTRAINT `fk_pos_status` FOREIGN KEY (`pos_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

/*Data for the table `res_position` */

insert  into `res_position`(`pos_id`,`pos_name`,`pos_role_id`,`pos_status_id`) values 
(10,'ผู้จัดการ',1,1),
(11,'พนักงานเสิร์ฟ',3,1),
(12,'chef',9,1),
(15,'พนักงานหน้าร้าน',5,1),
(20,'พนักงานหน้าร้าน',5,1),
(21,'ธุรการ',8,1),
(22,'com',11,2);

/*Table structure for table `res_promotion` */

DROP TABLE IF EXISTS `res_promotion`;

CREATE TABLE `res_promotion` (
  `pro_id` int(10) NOT NULL AUTO_INCREMENT,
  `pro_name` varchar(50) DEFAULT NULL,
  `pro_discount` int(10) DEFAULT NULL,
  `pro_start` datetime DEFAULT NULL,
  `pro_end` datetime DEFAULT NULL,
  `pro_status_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`pro_id`),
  KEY `fk_pro_status` (`pro_status_id`),
  CONSTRAINT `fk_pro_status` FOREIGN KEY (`pro_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `res_promotion` */

insert  into `res_promotion`(`pro_id`,`pro_name`,`pro_discount`,`pro_start`,`pro_end`,`pro_status_id`) values 
(1,'ต้นเดือน',5,'2017-10-06 17:01:53','2017-10-29 17:02:01',2),
(3,'กลางเดือน',5,'2017-10-05 23:12:32','2017-10-09 23:12:36',1),
(4,'ครอบครัว',5,'2017-10-10 23:12:32','2017-10-18 23:12:36',1),
(5,'วันลอยกระทง',10,'2017-10-25 23:12:32','2017-10-30 23:12:36',1);

/*Table structure for table `res_role` */

DROP TABLE IF EXISTS `res_role`;

CREATE TABLE `res_role` (
  `role_id` int(10) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(20) DEFAULT NULL,
  `role_front` tinytext,
  `role_back` tinytext,
  `role_status_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  KEY `fk_role_status` (`role_status_id`),
  CONSTRAINT `fk_role_status` FOREIGN KEY (`role_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `res_role` */

insert  into `res_role`(`role_id`,`role_name`,`role_front`,`role_back`,`role_status_id`) values 
(1,'admin','index, admin_home','admin_unit,admin_employee,admin_unitdetail,admin_position,admin_role,admin_promotion,admin_food,admin_drink,admin_kind,admin_table,admin_vendor,admin_drink_po,admin_drink_po_print,admin_drink_po_receipt',1),
(2,'cook','index, admin_home','admin_employee',2),
(3,'พนักงานเสิร์ฟ','index,admin_home','admin_food,admin_drink',1),
(5,'พนักงานหน้าร้าน','index,admin_home','admin_employee,admin_food,admin_drink,admin_promotion,admin_table',1),
(8,'พนักงานเช็คของ','index,admin_home','admin_employee,admin_drink,admin_drink_po,admin_drink_po_print,admin_drink_po_receipt',2),
(9,'chef','index,admin_home','admin_employee,admin_food',1),
(11,'common','index,admin_home','admin_employee,admin_food,admin_kind,admin_drink',2);

/*Table structure for table `res_status` */

DROP TABLE IF EXISTS `res_status`;

CREATE TABLE `res_status` (
  `stat_id` int(10) NOT NULL AUTO_INCREMENT,
  `stat_name` char(20) DEFAULT NULL,
  PRIMARY KEY (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `res_status` */

insert  into `res_status`(`stat_id`,`stat_name`) values 
(1,'ใช้งาน'),
(2,'ไม่ใช้งาน');

/*Table structure for table `res_table` */

DROP TABLE IF EXISTS `res_table`;

CREATE TABLE `res_table` (
  `table_id` int(10) NOT NULL AUTO_INCREMENT,
  `table_number` int(10) DEFAULT NULL,
  `table_status` int(2) DEFAULT NULL,
  `table_status_id` int(2) DEFAULT NULL,
  PRIMARY KEY (`table_id`),
  KEY `fk_table_status` (`table_status_id`),
  CONSTRAINT `fk_table_status` FOREIGN KEY (`table_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `res_table` */

insert  into `res_table`(`table_id`,`table_number`,`table_status`,`table_status_id`) values 
(1,4,NULL,1),
(2,4,NULL,1),
(3,2,NULL,1),
(6,8,NULL,2);

/*Table structure for table `res_unit` */

DROP TABLE IF EXISTS `res_unit`;

CREATE TABLE `res_unit` (
  `unit_id` int(10) NOT NULL AUTO_INCREMENT,
  `unit_name` varchar(30) DEFAULT NULL,
  `unit_number` int(10) DEFAULT NULL,
  `unit_status_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`unit_id`),
  KEY `fk_unit_status` (`unit_status_id`),
  CONSTRAINT `fk_unit_status` FOREIGN KEY (`unit_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

/*Data for the table `res_unit` */

insert  into `res_unit`(`unit_id`,`unit_name`,`unit_number`,`unit_status_id`) values 
(2,'ขวดใหญ่',1234,2),
(3,'โหล',1,2),
(6,'แก้ว',1,2),
(23,'ลังใหญ่',1234,1),
(24,'ขวดเล็ก',1234,1),
(25,'แพ็ค',1234,1),
(26,'ลังเล็ก',1234,1);

/*Table structure for table `res_unitdetail` */

DROP TABLE IF EXISTS `res_unitdetail`;

CREATE TABLE `res_unitdetail` (
  `unitdetail_id` int(10) NOT NULL AUTO_INCREMENT,
  `unit_number` int(10) DEFAULT NULL,
  `unit_unit_id` int(10) DEFAULT NULL,
  `unitdetail_number` int(10) DEFAULT NULL,
  `unitdetail_unit_id` int(10) DEFAULT NULL,
  `unitdetail_status_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`unitdetail_id`),
  KEY `fk_unit_id` (`unit_unit_id`),
  KEY `fk_unitdetail_id` (`unitdetail_unit_id`),
  KEY `unitdetail_status_id` (`unitdetail_status_id`),
  CONSTRAINT `fk_unit_id` FOREIGN KEY (`unit_unit_id`) REFERENCES `res_unit` (`unit_id`),
  CONSTRAINT `fk_unitdetail_id` FOREIGN KEY (`unitdetail_unit_id`) REFERENCES `res_unit` (`unit_id`),
  CONSTRAINT `unitdetail_status_id` FOREIGN KEY (`unitdetail_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

/*Data for the table `res_unitdetail` */

insert  into `res_unitdetail`(`unitdetail_id`,`unit_number`,`unit_unit_id`,`unitdetail_number`,`unitdetail_unit_id`,`unitdetail_status_id`) values 
(28,12,24,1,23,1),
(29,6,24,1,23,1),
(30,6,24,1,26,1),
(31,6,24,1,23,1);

/*Table structure for table `res_vendor` */

DROP TABLE IF EXISTS `res_vendor`;

CREATE TABLE `res_vendor` (
  `vendor_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `vendor_name` varchar(255) DEFAULT NULL,
  `vendor_tel` char(255) DEFAULT NULL,
  `vendor_address` text,
  `vendor_status_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `res_vendor` */

insert  into `res_vendor`(`vendor_id`,`vendor_name`,`vendor_tel`,`vendor_address`,`vendor_status_id`) values 
(1,'เครื่องดื่ม','0247785468','124ฟ อ.เมือง จ.นนทบุรี 11000',2),
(3,'สุปรานีเครื่องดื่ม','0288795487','12 อ.เมือง จ.นนทบุรี',2),
(4,'drinkky','0245877445','17/1  อ.เมือง จ.นนทบุรี 11000',1),
(5,'mut drink','0945878845','97/1 อ.ไทรน้อย จ.นนทบุรี 11150',1),
(6,'เครื่องดื่มขายส่ง','0645795411','31 อ.ไทรน้อย จ.นนทบุรี 11150',2),
(7,'เจ๊มิลล์ เครื่องดื่ม','0819966543','89/7 อ.ปากเกร็ด จ.นนทบุรี 11120',1);

/*Table structure for table `vendor_tel` */

DROP TABLE IF EXISTS `vendor_tel`;

CREATE TABLE `vendor_tel` (
  `vendor_tel_id` int(10) NOT NULL AUTO_INCREMENT,
  `vendor_tel` int(10) DEFAULT NULL,
  `vendor_id` int(10) DEFAULT NULL,
  `vendor_tel_status` int(2) DEFAULT NULL,
  PRIMARY KEY (`vendor_tel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `vendor_tel` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
