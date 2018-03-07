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

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `Account_ID` char(10) NOT NULL DEFAULT '',
  `M_NAME` varchar(50) DEFAULT '',
  `M_LastName` varchar(50) DEFAULT '',
  `M_Username` varchar(50) DEFAULT '',
  `Birthday` date DEFAULT NULL,
  `Gender` char(1) DEFAULT NULL,
  `Country_ID` char(5) DEFAULT NULL,
  `Mobile` char(9) DEFAULT NULL,
  `Email` char(50) DEFAULT NULL,
  PRIMARY KEY (`Account_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `account` */

insert  into `account`(`Account_ID`,`M_NAME`,`M_LastName`,`M_Username`,`Birthday`,`Gender`,`Country_ID`,`Mobile`,`Email`) values 
('','com','com','com','1997-04-21','M','81','111111111','com15546@gmail.com'),
('ACC0000001','xdvcf','dfvds','dfvd','1995-03-12','F','66','084577554','zdx.mzslcds'),
('ACC0000003','xdvcf','dfvds','dfvd','1995-03-12','F','66','084577554','zdx.mzslcds'),
('ACC0000005','ghghg','uygff','dfvd','2001-05-02','M','66','098777777','pklklklkkkkkkjkjkk'),
('ACC0000006','sdfsd','dfdf','yuu','2550-06-25','M','81','845121321','sfdgsdgsdgdd'),
('ACC0000007','aunaun','aun','aun','2559-10-15','F','86','098777777','aunna5546@gmail.com'),
('ACC0000008','aun','aun','aunaun','2535-05-20','F','66','089777754','ayfrtydrrrr');

/*Table structure for table `account_password` */

DROP TABLE IF EXISTS `account_password`;

CREATE TABLE `account_password` (
  `Account_ID` char(10) NOT NULL DEFAULT '',
  `Item` char(3) NOT NULL DEFAULT '',
  `M_Password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Account_ID`,`Item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `account_password` */

insert  into `account_password`(`Account_ID`,`Item`,`M_Password`) values 
('','1','1111'),
('ACC0000001','1','1234'),
('ACC0000002','1','2222'),
('ACC0000003','1','3333'),
('ACC0000004','1','8888'),
('ACC0000005','1','8888'),
('ACC0000006','1','5555'),
('ACC0000007','1','aun1234'),
('ACC0000008','1','1111'),
('ACC0000009','1','com1234');

/*Table structure for table `country` */

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `Country_ID` char(5) NOT NULL DEFAULT '',
  `Country_Name` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`Country_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `country` */

insert  into `country`(`Country_ID`,`Country_Name`) values 
('66','Thailand'),
('81','Japan'),
('86','China');

/*Table structure for table `emp_tel` */

DROP TABLE IF EXISTS `emp_tel`;

CREATE TABLE `emp_tel` (
  `tel_id` int(10) NOT NULL AUTO_INCREMENT,
  `tel_tel` varchar(10) DEFAULT NULL,
  `tel_ext` int(10) DEFAULT NULL,
  `tel_status` int(2) DEFAULT NULL,
  `tel_emp_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`tel_id`),
  KEY `fk_tel_status` (`tel_status`),
  KEY `fk_tel_emp` (`tel_emp_id`),
  CONSTRAINT `fk_tel_status` FOREIGN KEY (`tel_status`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

/*Data for the table `emp_tel` */

insert  into `emp_tel`(`tel_id`,`tel_tel`,`tel_ext`,`tel_status`,`tel_emp_id`) values 
(1,'12354545',11,1,18),
(2,'12354545',11,1,19),
(3,'888888888',0,1,20),
(4,'1111',1,1,21),
(5,'0',1,1,22),
(6,'0',1,1,23),
(7,'245784565',0,1,40),
(8,'875487648',0,1,41),
(9,'987854444',0,1,42),
(10,'899999999',0,1,43),
(11,'874544444',0,1,44),
(12,'874544444',0,1,45),
(13,'1111111111',0,1,46),
(14,'2147483647',0,1,47),
(15,'2147483647',0,1,48),
(16,'2147483647',0,1,49),
(17,'2147483647',0,1,50),
(18,'2147483647',0,1,51),
(19,'2147483647',0,1,18),
(20,'2147483647',0,1,19),
(21,'77777',0,1,52),
(22,'77777',0,1,21),
(23,'12',0,1,53),
(24,'12',0,1,53),
(25,'12',0,1,53),
(26,'12',0,1,53),
(27,'12',0,1,53),
(28,'12',0,1,53),
(29,'1222222222',0,1,54),
(30,'1223333333',0,1,54),
(31,'1555555555',0,1,54),
(34,'0211111111',0,1,55),
(35,'0544444444',0,1,55);

/*Table structure for table `order_food` */

DROP TABLE IF EXISTS `order_food`;

CREATE TABLE `order_food` (
  `order_id` int(10) NOT NULL AUTO_INCREMENT,
  `order_number` int(11) NOT NULL,
  `price` float DEFAULT NULL,
  `order_datetime` datetime DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `food_id` int(10) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`order_id`,`order_number`,`food_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

/*Data for the table `order_food` */

insert  into `order_food`(`order_id`,`order_number`,`price`,`order_datetime`,`number`,`status`,`food_id`,`comment`) values 
(20,1,80,'2018-02-10 13:57:20',1,1,31,NULL),
(20,1,120,'2018-02-10 13:57:20',1,1,32,NULL),
(20,1,120,'2018-02-10 13:57:20',2,1,33,NULL),
(21,1,120,'2018-02-11 07:44:01',3,1,28,NULL),
(22,1,120,'2018-02-11 07:47:38',1,1,28,'adsfsf'),
(23,1,120,'2018-02-11 07:54:07',2,1,28,'หมายเหตุ'),
(24,1,120,'2018-02-11 07:54:37',2,1,28,'หมายเหตุ'),
(24,1,120,'2018-02-11 07:54:37',2,1,29,'หมายเหตุ'),
(24,1,100,'2018-02-11 07:54:37',1,1,30,'หมายเหตุfdfqwdas'),
(25,1,120,'2018-02-11 07:57:59',1,1,28,'frr'),
(25,1,120,'2018-02-11 07:57:59',3,1,32,'gdfd'),
(26,1,120,'2018-02-11 08:03:28',2,1,28,'หมายเหตุ'),
(26,1,120,'2018-02-11 08:03:28',1,1,29,'หมายเหตุ'),
(27,1,120,'2018-02-11 08:04:48',2,1,32,'หมายเหตุ'),
(28,1,120,'2018-02-11 08:06:28',1,1,32,'หมายเหตุ'),
(28,1,120,'2018-02-11 08:06:28',5,1,33,'หมายเหตุ'),
(29,1,100,'2018-02-11 08:07:09',1,1,30,'หมายเหตุ'),
(29,1,120,'2018-02-11 08:07:09',0,1,32,'หมายเหตุ'),
(29,1,120,'2018-02-11 08:07:09',2,1,33,'หมายเหตุ'),
(30,1,120,'2018-02-16 17:46:06',1,1,28,'aaaaaa'),
(30,1,120,'2018-02-16 17:46:06',2,1,29,'dsaaa'),
(31,1,120,'2018-02-16 17:48:09',2,1,28,''),
(32,1,120,'2018-02-17 08:32:53',2,1,28,'sss'),
(33,1,120,'2018-02-17 08:33:27',1,1,28,''),
(33,1,120,'2018-02-17 08:33:27',1,1,29,'com'),
(34,1,120,'2018-02-17 09:17:56',1,1,32,''),
(34,1,700,'2018-02-17 09:17:56',2,1,34,'ไม่ใส่ปู');

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
  `unitdetail_id_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`drink_id`),
  KEY `fk_drink_status` (`drink_status_id`),
  KEY `fk_drink_unit` (`drink_unit_id`),
  KEY `fk_drink_vendor` (`drink_vendor_id`),
  KEY `unitdetail_id` (`unitdetail_id_id`),
  CONSTRAINT `fk_drink_status` FOREIGN KEY (`drink_status_id`) REFERENCES `res_status` (`stat_id`),
  CONSTRAINT `fk_drink_unit` FOREIGN KEY (`drink_unit_id`) REFERENCES `res_unit` (`unit_id`),
  CONSTRAINT `fk_drink_vendor` FOREIGN KEY (`drink_vendor_id`) REFERENCES `res_vendor` (`vendor_id`),
  CONSTRAINT `unitdetail_id` FOREIGN KEY (`unitdetail_id_id`) REFERENCES `res_unitdetail` (`unitdetail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink` */

insert  into `res_drink`(`drink_id`,`drink_name`,`drink_vendor_id`,`drink_number`,`drink_order_point`,`drink_unit_id`,`drink_price`,`drink_status_id`,`unitdetail_id_id`) values 
(1,'coke',3,0,5,24,45,1,NULL),
(2,'แป๊ปซี่',5,0,5,24,45,1,NULL),
(18,'น้ำแดง',NULL,60,5,24,15,1,NULL),
(19,'น้ำเขียว',NULL,30,5,24,20,1,NULL),
(20,'hy',NULL,30,13,24,20,1,NULL),
(21,'hjk',NULL,12,13,24,30,1,NULL),
(22,'tor',NULL,5,10,24,20,1,NULL),
(23,'โอวัลติน',NULL,0,5,24,25,1,NULL),
(24,'coke',NULL,20,5,3,25,1,NULL),
(25,'fd',NULL,0,5,24,20,1,NULL),
(26,'กด',NULL,10,5,2,25,1,NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_po` */

insert  into `res_drink_po`(`dp_id`,`dp_date`,`dp_created_by`,`dp_approval_status`,`dp_approved_by`,`dp_rejected_by`,`dp_status_id`) values 
(33,'2017-11-13',24,0,NULL,NULL,1),
(34,'2017-11-13',24,1,24,NULL,1),
(35,'2017-11-13',24,1,24,NULL,1),
(36,'2017-11-15',24,1,24,NULL,1),
(37,'2017-11-15',24,1,24,NULL,1),
(38,'2017-11-15',24,1,24,NULL,1),
(39,'2017-11-15',24,1,24,NULL,1),
(40,'2017-11-16',24,1,24,NULL,1),
(41,'2017-11-16',24,1,24,NULL,1),
(42,'2017-11-16',24,1,24,NULL,1),
(43,'2017-11-16',24,1,24,NULL,1),
(44,'2018-02-17',24,1,24,NULL,1),
(45,'2018-02-21',24,0,NULL,NULL,1),
(46,'2018-02-21',24,1,24,NULL,1),
(47,'2018-02-22',24,1,24,NULL,1);

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
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_po_detail` */

insert  into `res_drink_po_detail`(`dpd_id`,`dp_id`,`drink_id`,`unit_id`,`vendor_id`,`dpd_number`,`dpd_unit_price`,`dpd_total_price`,`dpd_receipt_number`,`dpd_receipt_remaining_number`,`dpd_receipt_by`,`dpd_status_id`,`unitdetail_id`) values 
(53,33,1,NULL,3,30,20,600,NULL,NULL,NULL,1,28),
(54,33,2,NULL,4,20,20,400,NULL,NULL,NULL,1,28),
(55,34,2,NULL,4,20,20,400,20,0,24,1,29),
(56,34,1,NULL,5,20,25,500,20,0,24,1,28),
(57,35,3,NULL,4,10,25,250,10,0,24,1,28),
(59,37,1,NULL,5,10,25,250,10,0,24,1,29),
(60,37,18,NULL,3,20,10,200,20,0,24,1,28),
(62,39,1,NULL,3,10,20,200,10,0,24,1,28),
(66,41,1,NULL,5,200,25,5000,200,0,24,1,28),
(67,41,2,NULL,4,10,20,200,10,0,24,1,28),
(68,42,1,NULL,3,10,20,200,10,0,24,1,28),
(70,43,2,NULL,4,20,20,400,2,18,24,1,29),
(71,43,2,29,4,20,20,400,2,16,24,1,29),
(72,43,2,29,4,20,20,400,2,16,24,1,29),
(73,43,2,29,4,20,20,400,2,16,24,1,29),
(74,43,2,29,4,20,20,400,2,16,24,1,29),
(75,43,2,29,4,20,20,400,10,8,24,1,29),
(76,44,23,NULL,3,50,12,600,50,0,24,1,32),
(77,44,2,NULL,4,0,20,0,NULL,NULL,NULL,1,32),
(78,44,2,NULL,5,100,15,1500,100,0,24,1,31),
(79,44,1,NULL,4,100,20,2000,100,0,24,1,32),
(80,45,23,NULL,3,50,12,600,NULL,NULL,NULL,1,28),
(81,45,1,NULL,4,200,20,4000,NULL,NULL,NULL,1,28),
(82,46,25,NULL,3,200,12,2400,50,150,24,1,28),
(83,46,25,28,3,200,12,2400,150,0,24,1,28),
(84,47,23,NULL,3,50,12,600,2,48,24,1,28),
(85,47,23,28,3,50,12,600,2,46,24,1,28),
(86,47,23,28,3,50,12,600,5,43,24,1,28),
(87,47,23,28,3,50,12,600,2,43,24,1,28),
(88,47,23,28,3,50,12,600,39,9,24,1,28);

/*Table structure for table `res_drink_vendor` */

DROP TABLE IF EXISTS `res_drink_vendor`;

CREATE TABLE `res_drink_vendor` (
  `dv_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `drink_id` int(10) DEFAULT NULL,
  `vendor_id` int(10) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`dv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_vendor` */

insert  into `res_drink_vendor`(`dv_id`,`drink_id`,`vendor_id`,`price`) values 
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
(33,1,3,20),
(34,1,4,20),
(35,1,5,25),
(40,21,5,20),
(41,21,6,21),
(42,20,3,12),
(43,20,4,20),
(45,22,4,12),
(46,2,4,20),
(47,2,5,15),
(49,24,4,23),
(50,24,3,10),
(51,23,3,12),
(52,25,3,12),
(53,26,5,20);

/*Table structure for table `res_employee` */

DROP TABLE IF EXISTS `res_employee`;

CREATE TABLE `res_employee` (
  `emp_id` int(10) NOT NULL AUTO_INCREMENT,
  `emp_firstname` char(20) DEFAULT NULL,
  `emp_lastname` char(20) DEFAULT NULL,
  `emp_user` varchar(40) DEFAULT NULL,
  `emp_pass` varchar(32) DEFAULT NULL,
  `emp_idcard` varchar(13) DEFAULT NULL,
  `emp_pos_id` int(10) DEFAULT NULL,
  `emp_status_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `fk_employee_position` (`emp_pos_id`),
  KEY `fk_employee_status` (`emp_status_id`),
  CONSTRAINT `fk_employee_position` FOREIGN KEY (`emp_pos_id`) REFERENCES `res_position` (`pos_id`),
  CONSTRAINT `fk_employee_status` FOREIGN KEY (`emp_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

/*Data for the table `res_employee` */

insert  into `res_employee`(`emp_id`,`emp_firstname`,`emp_lastname`,`emp_user`,`emp_pass`,`emp_idcard`,`emp_pos_id`,`emp_status_id`) values 
(24,'สมศรี','อยู่ดี','user1','b59c67bf196a4758191e42f76670ceba','2147483647',10,1),
(25,'สมาน','มานะ','user2','934b535800b1cba8f96a5d72f72f1611','2147483647',12,1),
(26,'มานี','ยะดี','user3','2be9bd7a3434f7038ca27d1918de58bd','2147483647',12,1),
(30,'พรรษา','เสมา','user55','6074c6aa3488f3c2dddff2a7ca821aab','2147483647',15,2),
(34,'สุพรรณี','บุญมี','user8','cf79ae6addba60ad018347359bd144d2','2147483647',20,1),
(35,'สมชาย','รายะมี','user9','fa246d0262c3925617b0c72bb20eeb1d','2147483647',11,1),
(36,'ธัญญลักษณ์','สายา','user10','1e48c4420b7073bc11916c6c1de226bb','2147483647',21,1),
(40,'com','gfdf','reto','d2a452edff079ca6980edcf54cc49945','2147483647',22,2),
(41,'comm','commm','utit','4079016d940210b4ae9ae7d41c4a2065','2147483647',22,2),
(42,'uouuu','tyytt','pou','48042b1dae4950fef2bd2aafa0b971a1','2147483647',22,1),
(43,'hjgh','gfgfg','tuuu','76460865551007d38ffbb834d5896ea4','2147483647',22,1),
(44,'wanwisa','tewin','wanwisa','81dc9bdb52d04dc20036dbd8313ed055','2147483647',10,1),
(45,'kanoksom','sfsdsdsdds','wanwisa','e10adc3949ba59abbe56e057f20f883e','2147483647',10,1),
(46,'sc','sds','sssssssssd','827ccb0eea8a706c4c34a16891f84e7b','2147483647',22,1),
(47,'sds','sds','trtr','b99d193b66a6542917d2b7bee52c2574','2147483647',21,1),
(48,'11','222','55','b53b3a3d6ab90ce0268229151c9bde11','2147483647',10,1),
(49,'ewe','rer','ed','633de4b0c14ca52ea2432a3c8a5c4c31','2147483647',10,1),
(50,'dsds','sd','ww','633de4b0c14ca52ea2432a3c8a5c4c31','2147483647',10,1),
(51,'ede','ede','po','f3ede926587776a8cd79fb2afe4e07b4','2147483647',10,1),
(52,'www','ww','ewew','ad57484016654da87125db86f4227ea3','2147483647',22,1),
(53,'ss','ss','sd','6226f7cbe59e99a90b5cef6f94f966fd','2147483647',10,1),
(54,'we','we','ed','b5f3729e5418905ad2b21ce186b1c01d','2147483647',10,1),
(55,'gfgh','jhghj','yt','fa0ed5b5c600145bdd9a299952b99651','1111111111111',10,1);

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
(34,'ข้าวผัดปูจานใหญ่',3,700,1);

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

/*Table structure for table `res_order` */

DROP TABLE IF EXISTS `res_order`;

CREATE TABLE `res_order` (
  `order_id` int(10) NOT NULL AUTO_INCREMENT,
  `order_date` datetime DEFAULT NULL,
  `id_service` int(10) DEFAULT NULL,
  `id_payment` int(10) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

/*Data for the table `res_order` */

insert  into `res_order`(`order_id`,`order_date`,`id_service`,`id_payment`) values 
(1,'0000-00-00 00:00:00',0,0),
(2,'0000-00-00 00:00:00',1,1),
(3,'0000-00-00 00:00:00',1,1),
(4,'0000-00-00 00:00:00',1,1),
(5,'0000-00-00 00:00:00',1,1),
(6,'0000-00-00 00:00:00',1,1),
(7,'2018-02-10 13:37:12',1,1),
(8,'2018-02-10 13:40:46',1,1),
(9,'2018-02-10 13:42:44',1,1),
(10,'2018-02-10 13:43:35',1,1),
(11,'2018-02-10 13:45:35',1,1),
(12,'2018-02-10 13:48:34',1,1),
(13,'2018-02-10 13:49:11',1,1),
(14,'2018-02-10 13:50:33',1,1),
(15,'2018-02-10 13:50:55',1,1),
(16,'2018-02-10 13:51:04',1,1),
(17,'2018-02-10 13:51:45',1,1),
(18,'2018-02-10 13:53:14',1,1),
(19,'2018-02-10 13:54:32',1,1),
(20,'2018-02-10 13:57:20',1,1),
(21,'2018-02-11 07:44:01',1,1),
(22,'2018-02-11 07:47:38',1,1),
(23,'2018-02-11 07:54:07',1,1),
(24,'2018-02-11 07:54:37',1,1),
(25,'2018-02-11 07:57:59',1,1),
(26,'2018-02-11 08:03:28',1,1),
(27,'2018-02-11 08:04:48',1,1),
(28,'2018-02-11 08:06:28',1,1),
(29,'2018-02-11 08:07:09',1,1),
(30,'2018-02-16 17:46:06',1,1),
(31,'2018-02-16 17:48:09',1,1),
(32,'2018-02-17 08:32:53',1,1),
(33,'2018-02-17 08:33:27',1,1),
(34,'2018-02-17 09:17:56',1,1);

/*Table structure for table `res_order_detail` */

DROP TABLE IF EXISTS `res_order_detail`;

CREATE TABLE `res_order_detail` (
  `order_id` int(10) NOT NULL AUTO_INCREMENT,
  `order_number` int(10) NOT NULL,
  PRIMARY KEY (`order_id`,`order_number`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

/*Data for the table `res_order_detail` */

insert  into `res_order_detail`(`order_id`,`order_number`) values 
(7,1),
(8,1),
(9,1),
(10,1),
(11,1),
(12,1),
(13,1),
(14,1),
(15,1),
(16,1),
(17,1),
(18,1),
(19,1),
(20,1),
(21,1),
(22,1),
(23,1),
(24,1),
(25,1),
(26,1),
(27,1),
(28,1),
(29,1),
(30,1),
(31,1),
(32,1),
(33,1),
(34,1);

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
(10,'ผู้จัดการ',1,2),
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
(1,'admin','index,admin_home','admin_employee,admin_position,admin_role,admin_food,admin_kind,admin_drink,admin_promotion,admin_unit,admin_unitdetail,admin_table,admin_drink_po,admin_drink_po_print,admin_drink_po_receipt',1),
(2,'cook','index, admin_home','admin_unit,admin_employee',2),
(3,'พนักงานเสิร์ฟ','index,admin_home','admin_food,admin_drink',1),
(5,'พนักงานหน้าร้าน','index,admin_home','admin_employee,admin_food,admin_drink,admin_promotion,admin_table',1),
(8,'พนักงานเช็คของ','index,admin_home','admin_account',2),
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

/*Data for the table `res_unit` */

insert  into `res_unit`(`unit_id`,`unit_name`,`unit_number`,`unit_status_id`) values 
(2,'ขวดใหญ่',1234,2),
(3,'โหล',1,2),
(6,'แก้ว',1,2),
(23,'ลังใหญ่',1234,1),
(24,'ขวดเล็ก',1234,1),
(25,'แพ็ค',1234,1),
(26,'ลังเล็ก',1234,1),
(27,'ลังใหญ่มาก',1234,1);

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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

/*Data for the table `res_unitdetail` */

insert  into `res_unitdetail`(`unitdetail_id`,`unit_number`,`unit_unit_id`,`unitdetail_number`,`unitdetail_unit_id`,`unitdetail_status_id`) values 
(28,12,24,1,23,1),
(29,6,24,1,23,1),
(30,6,24,1,26,1),
(31,6,24,1,23,1),
(32,50,24,1,27,1);

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
