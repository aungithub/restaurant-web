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
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;

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
(32,'12354545',11,1,18),
(33,'12354545',11,1,18),
(47,'1222222222',0,1,54),
(48,'1555555555',0,1,54),
(49,'5555555555',0,1,54),
(50,'9999999999',0,1,54),
(60,'3333333333',0,1,55),
(61,'5555555555',0,1,55),
(62,'0444444444',0,1,56),
(63,'0654444444',0,1,56),
(66,'0000000000',0,1,57),
(67,'1254444444',0,1,57),
(68,'2222222222',0,1,57),
(69,'1111111145',0,1,58),
(70,'5433333333',0,1,58),
(71,'0844444444',0,1,59),
(72,'0245555555',0,1,60),
(73,'5444444444',0,1,60),
(74,'0277777777',0,1,61);

/*Table structure for table `order_drink` */

DROP TABLE IF EXISTS `order_drink`;

CREATE TABLE `order_drink` (
  `order_id` int(10) NOT NULL,
  `price` float DEFAULT NULL,
  `order_datetime` datetime DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `drink_id` int(10) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`order_id`,`drink_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `order_drink` */

insert  into `order_drink`(`order_id`,`price`,`order_datetime`,`number`,`status`,`drink_id`,`comment`) values 
(35,20,'2018-03-20 14:59:42',1,0,27,''),
(118,8,'2018-03-20 14:59:42',1,0,26,''),
(143,20,'2018-03-30 16:16:11',1,NULL,20,''),
(144,20,'2018-03-31 10:57:36',1,NULL,33,''),
(146,20,'2018-03-31 12:47:46',1,NULL,22,''),
(147,45,'2018-03-31 12:48:08',1,NULL,1,''),
(147,20,'2018-03-31 12:48:08',1,NULL,22,''),
(148,45,'2018-03-31 13:27:20',1,1,1,''),
(149,20,'2018-03-31 15:41:35',1,NULL,33,''),
(150,45,'2018-03-31 15:48:19',1,NULL,1,''),
(151,50,'2018-03-31 15:48:49',1,NULL,29,'');

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
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8;

/*Data for the table `order_food` */

insert  into `order_food`(`order_id`,`order_number`,`price`,`order_datetime`,`number`,`status`,`food_id`,`comment`) values 
(35,1,120,'2018-03-23 10:57:36',1,1,29,''),
(118,1,120,'2018-03-24 12:48:08',1,1,32,''),
(142,1,120,'2018-03-07 14:59:42',1,1,29,''),
(142,1,120,'2018-03-12 14:59:42',1,1,33,''),
(143,1,700,'2018-03-15 16:16:11',1,1,34,''),
(150,1,100,'2018-03-28 12:47:46',1,1,30,''),
(150,1,120,'2018-03-31 13:27:20',1,1,32,''),
(151,1,120,'2018-03-27 12:47:46',1,1,29,''),
(152,1,120,'2018-03-31 16:05:54',1,NULL,29,''),
(152,1,80,'2018-03-31 16:05:54',1,NULL,31,'');

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
  `unitdetail_id` int(10) DEFAULT NULL,
  `drink_menu_status` int(10) DEFAULT NULL,
  PRIMARY KEY (`drink_id`),
  KEY `fk_drink_status` (`drink_status_id`),
  KEY `fk_drink_unit` (`drink_unit_id`),
  KEY `fk_drink_vendor` (`drink_vendor_id`),
  CONSTRAINT `fk_drink_status` FOREIGN KEY (`drink_status_id`) REFERENCES `res_status` (`stat_id`),
  CONSTRAINT `fk_drink_unit` FOREIGN KEY (`drink_unit_id`) REFERENCES `res_unit` (`unit_id`),
  CONSTRAINT `fk_drink_vendor` FOREIGN KEY (`drink_vendor_id`) REFERENCES `res_vendor` (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink` */

insert  into `res_drink`(`drink_id`,`drink_name`,`drink_vendor_id`,`drink_number`,`drink_order_point`,`drink_unit_id`,`drink_price`,`drink_status_id`,`unitdetail_id`,`drink_menu_status`) values 
(1,'coke',3,154,5,24,45,1,28,NULL),
(2,'แป๊ปซี่',5,72,5,24,45,1,29,NULL),
(18,'น้ำแดง',NULL,58,5,24,15,1,30,NULL),
(19,'น้ำเขียว',NULL,30,5,24,20,1,31,NULL),
(20,'hy',NULL,30,13,24,20,1,32,NULL),
(21,'hjk',NULL,7,13,24,30,1,28,NULL),
(22,'tor',NULL,5,10,24,20,1,29,NULL),
(23,'โอวัลติน',NULL,36,5,2,25,1,30,NULL),
(24,'coke',NULL,18,5,3,25,1,31,NULL),
(25,'test',NULL,5,5,2,5,1,30,NULL),
(26,'oooooo',NULL,244,90,2,8,1,33,NULL),
(27,'gas',NULL,140,5,24,20,1,28,NULL),
(28,'dfdf',NULL,30,5,2,50,1,33,NULL),
(29,'mut',NULL,200,5,24,50,1,34,NULL),
(30,'wer',NULL,30,5,2,20,1,NULL,NULL),
(31,'des',NULL,25,5,2,20,1,NULL,NULL),
(32,'โกโก้',NULL,44,5,24,20,1,NULL,NULL),
(33,'ชาเขียว',NULL,20,5,24,20,2,NULL,NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_po` */

insert  into `res_drink_po`(`dp_id`,`dp_date`,`dp_created_by`,`dp_approval_status`,`dp_approved_by`,`dp_rejected_by`,`dp_status_id`) values 
(33,'2017-11-13',24,1,24,NULL,1),
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
(45,'2018-02-23',24,1,24,NULL,1),
(46,'2018-02-23',24,1,24,NULL,1),
(47,'2018-02-24',24,1,24,NULL,1),
(48,'2018-02-24',24,1,24,NULL,1),
(49,'2018-02-25',24,1,24,NULL,1),
(50,'2018-02-25',24,1,24,NULL,1),
(51,'2018-02-27',24,1,24,NULL,1),
(52,'2018-02-27',24,1,24,NULL,1),
(53,'2018-03-02',24,1,24,NULL,1),
(54,'2018-03-05',24,0,NULL,NULL,1),
(55,'2018-03-05',24,1,24,NULL,1),
(56,'2018-03-10',24,1,24,NULL,1);

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
) ENGINE=InnoDB AUTO_INCREMENT=135 DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_po_detail` */

insert  into `res_drink_po_detail`(`dpd_id`,`dp_id`,`drink_id`,`unit_id`,`vendor_id`,`dpd_number`,`dpd_unit_price`,`dpd_total_price`,`dpd_receipt_number`,`dpd_receipt_remaining_number`,`dpd_receipt_by`,`dpd_status_id`,`unitdetail_id`) values 
(53,33,1,NULL,3,30,20,600,10,20,24,1,28),
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
(76,44,23,NULL,3,50,12,600,1,49,24,1,32),
(78,44,2,NULL,5,100,15,1500,4,96,24,1,31),
(79,44,1,NULL,4,100,20,2000,1,99,24,1,32),
(86,44,23,32,3,50,12,600,1,48,24,1,32),
(87,44,23,32,3,50,12,600,1,48,24,1,32),
(88,44,23,32,3,50,12,600,1,48,24,1,32),
(89,44,23,32,3,50,12,600,1,48,24,1,32),
(90,44,23,32,3,50,12,600,1,48,24,1,32),
(91,44,23,32,3,50,12,600,1,48,24,1,32),
(92,44,23,32,3,50,12,600,1,48,24,1,32),
(93,44,23,32,3,50,12,600,1,48,24,1,32),
(94,44,23,32,3,50,12,600,1,48,24,1,32),
(95,44,23,32,3,50,12,600,1,48,24,1,32),
(96,44,23,32,3,50,12,600,1,48,24,1,32),
(97,44,23,32,3,50,12,600,1,48,24,1,32),
(98,44,23,32,3,50,12,600,1,48,24,1,32),
(99,44,23,32,3,50,12,600,1,48,24,1,32),
(100,44,23,32,3,50,12,600,1,48,24,1,32),
(101,44,23,32,3,50,12,600,1,48,24,1,32),
(102,44,23,32,3,50,12,600,1,48,24,1,32),
(103,44,23,32,3,50,12,600,1,48,24,1,32),
(104,44,23,32,3,50,12,600,1,48,24,1,32),
(105,44,23,32,3,50,12,600,2,47,24,1,32),
(106,44,23,32,3,50,12,600,1,47,24,1,32),
(107,44,2,31,5,100,15,1500,1,95,24,1,31),
(108,44,1,32,4,100,20,2000,1,98,24,1,32),
(109,45,26,NULL,1,20,9,180,20,0,24,1,28),
(110,45,27,NULL,4,30,10,300,NULL,NULL,NULL,1,28),
(111,46,27,NULL,3,10,12,120,10,0,24,1,33),
(112,47,28,NULL,5,20,25,500,2,18,24,1,33),
(113,47,28,NULL,6,0,20,0,NULL,NULL,NULL,1,33),
(114,48,28,NULL,5,10,25,250,NULL,NULL,NULL,1,34),
(115,48,2,NULL,4,2,20,40,1,1,24,1,34),
(116,49,1,NULL,3,20,20,400,NULL,NULL,NULL,1,28),
(117,49,2,NULL,4,10,20,200,1,9,24,1,28),
(118,49,18,NULL,3,20,10,200,NULL,NULL,NULL,1,28),
(119,50,2,NULL,4,10,20,200,1,9,24,1,28),
(120,50,2,NULL,5,10,15,150,1,9,24,1,28),
(121,51,30,NULL,4,20,20,400,1,19,24,1,33),
(122,51,30,NULL,6,1,12,12,NULL,NULL,NULL,1,33),
(123,52,31,NULL,7,20,15,300,1,19,24,1,35),
(124,52,1,NULL,4,20,20,400,1,19,24,1,28),
(125,52,2,NULL,4,20,20,400,1,19,24,1,28),
(126,52,2,28,4,20,20,400,1,18,24,1,28),
(127,52,1,28,4,20,20,400,1,18,24,1,28),
(128,53,32,NULL,4,10,12,120,1,9,24,1,28),
(129,53,2,NULL,4,2,20,40,1,1,24,1,28),
(130,54,33,NULL,4,200,12,2400,NULL,NULL,NULL,1,28),
(131,54,32,NULL,4,100,12,1200,NULL,NULL,NULL,1,28),
(132,55,33,NULL,4,0,12,0,NULL,NULL,NULL,1,28),
(133,55,32,NULL,4,10,12,120,1,9,24,1,28),
(134,56,1,NULL,3,10,20,200,NULL,NULL,NULL,1,28);

/*Table structure for table `res_drink_po_vendor` */

DROP TABLE IF EXISTS `res_drink_po_vendor`;

CREATE TABLE `res_drink_po_vendor` (
  `dpv_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dp_id` int(10) NOT NULL,
  `vendor_id` int(10) NOT NULL,
  PRIMARY KEY (`dpv_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `res_drink_po_vendor` */

/*Table structure for table `res_drink_vendor` */

DROP TABLE IF EXISTS `res_drink_vendor`;

CREATE TABLE `res_drink_vendor` (
  `dv_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `drink_id` int(10) DEFAULT NULL,
  `vendor_id` int(10) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`dv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;

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
(48,23,3,12),
(49,24,4,23),
(50,24,3,10),
(53,25,1,5),
(55,27,3,12),
(56,27,4,10),
(57,26,1,9),
(58,28,5,25),
(59,28,6,20),
(60,29,4,20),
(61,29,6,15),
(62,30,6,12),
(63,30,4,20),
(64,31,4,10),
(65,31,7,15),
(66,32,4,12),
(67,32,6,15),
(70,33,4,12),
(71,33,5,15);

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
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

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
(54,'we','we','ed','b5f3729e5418905ad2b21ce186b1c01d','2147483647111',10,2),
(55,'yuu','pio','po','f6122c971aeb03476bf01623b09ddfd4','1111111111111',22,2),
(56,'fass','fass','fass','9b831fa449b0d5a98817f3e46dc10a2f','1255555555555',22,1),
(57,'sa','sa','sa','c12e01f2a13ff5587e1e9e4aedb8242d','1222222222222',21,1),
(58,'We','We','user','4a7d1ed414474e4033ac29ccb8653d9b','1322222222222',21,1),
(59,'me','me','me','ab86a1e1ef70dff97959067b723c5c24','1111111111111',23,1),
(60,'hsdh','jsdjshd','da','5ca2aa845c8cd5ace6b016841f100d82','1244444444444',24,1),
(61,'afgafsgag','sdaasds','user25','9407c826d8e3c07ad37cb2d13d1cb641','1545555555555',25,1);

/*Table structure for table `res_food` */

DROP TABLE IF EXISTS `res_food`;

CREATE TABLE `res_food` (
  `food_id` int(10) NOT NULL AUTO_INCREMENT,
  `food_name` varchar(50) DEFAULT NULL,
  `food_kind_id` int(10) DEFAULT NULL,
  `food_price` int(10) DEFAULT NULL,
  `food_status_id` int(2) DEFAULT NULL,
  `food_menu_status` int(10) DEFAULT NULL,
  `cancel_date` datetime DEFAULT NULL,
  PRIMARY KEY (`food_id`),
  KEY `fk_food_status` (`food_status_id`),
  KEY `fk_food_kind` (`food_kind_id`),
  CONSTRAINT `fk_food_status` FOREIGN KEY (`food_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

/*Data for the table `res_food` */

insert  into `res_food`(`food_id`,`food_name`,`food_kind_id`,`food_price`,`food_status_id`,`food_menu_status`,`cancel_date`) values 
(29,'แกงส้มชะอมทอด',1,120,1,NULL,NULL),
(30,'ผัดผักบุ้งไฟแดง',3,100,1,NULL,NULL),
(31,'ทอดมันปลากราย',4,80,1,NULL,NULL),
(32,'ผัดผักสามสหาย',3,120,1,NULL,NULL),
(33,'ยำสามกรอบ',6,120,1,NULL,NULL),
(34,'ข้าวผัดปูจานใหญ่',3,700,1,NULL,NULL);

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
  `table_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8;

/*Data for the table `res_order` */

insert  into `res_order`(`order_id`,`order_date`,`id_service`,`id_payment`,`table_id`) values 
(1,'0000-00-00 00:00:00',0,0,NULL),
(2,'0000-00-00 00:00:00',1,1,NULL),
(3,'0000-00-00 00:00:00',1,1,NULL),
(4,'0000-00-00 00:00:00',1,1,NULL),
(5,'0000-00-00 00:00:00',1,1,NULL),
(23,'2018-02-11 07:54:07',1,1,NULL),
(35,'2018-03-23 07:30:23',1,1,1000),
(42,'2018-03-08 14:03:58',1,1,NULL),
(43,'2018-03-10 09:52:44',1,1,NULL),
(44,'2018-03-10 09:53:41',1,1,NULL),
(45,'2018-03-10 10:12:52',1,1,NULL),
(46,'2018-03-11 12:01:46',1,1,NULL),
(47,'2018-03-11 12:02:03',1,1,NULL),
(48,'2018-03-11 12:02:24',1,1,NULL),
(49,'2018-03-17 08:19:34',1,1,NULL),
(50,'2018-03-17 08:19:51',1,1,NULL),
(51,'2018-03-17 10:42:25',1,1,NULL),
(52,'2018-03-17 12:30:23',1,1,0),
(53,'2018-03-17 12:31:51',1,1,0),
(54,'2018-03-17 12:38:11',1,1,0),
(55,'2018-03-17 12:38:16',1,1,0),
(56,'2018-03-17 12:38:41',1,1,0),
(57,'2018-03-17 12:40:08',1,1,0),
(58,'2018-03-17 12:48:09',1,1,0),
(59,'2018-03-17 12:48:40',1,1,0),
(60,'2018-03-17 12:50:33',1,1,0),
(61,'2018-03-17 12:52:08',1,1,0),
(62,'2018-03-17 12:56:07',1,1,0),
(63,'2018-03-17 12:56:45',1,1,122),
(64,'2018-03-17 13:02:08',1,1,0),
(65,'2018-03-17 13:02:09',1,1,0),
(66,'2018-03-17 13:02:09',1,1,0),
(67,'2018-03-17 13:02:10',1,1,0),
(68,'2018-03-17 13:02:25',1,1,0),
(69,'2018-03-17 13:02:55',1,1,0),
(70,'2018-03-17 13:05:00',1,1,1002),
(71,'2018-03-17 13:12:18',1,1,1002),
(72,'2018-03-17 13:12:19',1,1,1003),
(73,'2018-03-17 13:12:19',1,1,1001),
(74,'2018-03-17 13:12:20',1,1,1000),
(75,'2018-03-17 13:12:22',1,1,1001),
(76,'2018-03-17 13:12:22',1,1,1002),
(77,'2018-03-17 13:12:23',1,1,1003),
(78,'2018-03-17 13:12:23',1,1,1000),
(79,'2018-03-17 13:12:23',1,1,1001),
(80,'2018-03-17 13:12:24',1,1,1002),
(81,'2018-03-17 13:12:24',1,1,1003),
(82,'2018-03-17 13:12:25',1,1,1000),
(83,'2018-03-17 13:12:25',1,1,1001),
(84,'2018-03-17 13:12:25',1,1,1002),
(85,'2018-03-17 13:12:33',1,1,1000),
(86,'2018-03-18 06:48:33',1,1,0),
(87,'2018-03-18 06:50:18',1,1,0),
(88,'2018-03-18 06:55:20',1,1,0),
(89,'2018-03-18 06:55:57',1,1,0),
(90,'2018-03-18 06:57:40',1,1,0),
(91,'2018-03-18 07:16:26',1,1,0),
(92,'2018-03-18 07:18:39',1,1,0),
(93,'2018-03-18 07:22:02',1,1,0),
(94,'2018-03-18 07:23:14',1,1,0),
(95,'2018-03-18 07:24:43',1,1,0),
(96,'2018-03-18 07:25:01',1,1,0),
(97,'2018-03-18 07:25:14',1,1,0),
(98,'2018-03-18 07:28:39',1,1,0),
(99,'2018-03-18 07:29:50',1,1,0),
(101,'2018-03-18 07:30:28',1,1,0),
(102,'2018-03-18 07:30:56',1,1,1001),
(103,'2018-03-18 07:31:40',1,1,0),
(104,'2018-03-18 07:32:03',1,1,0),
(105,'2018-03-18 07:34:40',1,1,1001),
(106,'2018-03-18 07:35:36',1,1,NULL),
(107,'2018-03-18 07:38:08',1,1,NULL),
(108,'2018-03-18 07:39:12',1,NULL,1000),
(109,'2018-03-19 11:01:25',1,1,NULL),
(110,'2018-03-19 11:02:42',1,1,NULL),
(111,'2018-03-19 11:04:07',1,1,NULL),
(112,'2018-03-19 12:01:19',1,1,NULL),
(113,'2018-03-19 12:04:35',1,1,NULL),
(114,'2018-03-24 11:42:45',1,1,NULL),
(115,'2018-03-24 12:44:51',1,1,NULL),
(116,'2018-03-24 12:46:55',1,1,NULL),
(117,'2018-03-24 12:46:58',1,1,NULL),
(118,'2018-03-24 12:47:25',1,26,NULL),
(119,'2018-03-24 12:49:38',1,1,NULL),
(120,'2018-03-24 12:55:53',1,1,NULL),
(121,'2018-03-24 12:55:54',1,1,NULL),
(122,'2018-03-24 12:55:54',1,1,NULL),
(123,'2018-03-24 12:55:55',1,1,NULL),
(124,'2018-03-24 12:55:55',1,1,NULL),
(125,'2018-03-24 12:55:55',1,1,NULL),
(126,'2018-03-25 09:09:16',1,1,NULL),
(127,'2018-03-25 09:13:01',1,1,NULL),
(128,'2018-03-25 09:14:37',1,1,NULL),
(129,'2018-03-25 09:35:47',1,1,NULL),
(130,'2018-03-25 09:36:23',1,1,NULL),
(131,'2018-03-25 09:40:12',1,1,NULL),
(132,'2018-03-25 09:41:35',1,1,NULL),
(133,'2018-03-25 09:41:35',1,1,NULL),
(134,'2018-03-25 09:45:18',1,1,NULL),
(135,'2018-03-25 09:45:32',1,1,NULL),
(136,'2018-03-25 09:46:01',1,1,NULL),
(137,'2018-03-25 09:52:22',1,1,0),
(138,'2018-03-26 09:00:27',1,NULL,0),
(139,'2018-03-28 08:41:15',1,22,0),
(140,'2018-03-30 13:43:51',1,24,0),
(141,'2018-03-30 14:44:48',1,26,0),
(142,'2018-03-30 14:59:42',1,NULL,0),
(143,'2018-03-30 16:16:11',1,NULL,0),
(144,'2018-03-31 10:57:36',1,31,0),
(145,NULL,NULL,NULL,NULL),
(146,'2018-03-31 12:47:46',1,30,0),
(147,'2018-03-31 12:48:08',1,NULL,0),
(148,'2018-03-31 13:27:20',1,32,0),
(149,'2018-03-31 15:41:35',1,NULL,0),
(150,'2018-03-31 15:48:19',1,NULL,1),
(151,'2018-03-31 15:48:49',1,NULL,9),
(152,'2018-03-31 16:05:54',1,NULL,7);

/*Table structure for table `res_order_detail` */

DROP TABLE IF EXISTS `res_order_detail`;

CREATE TABLE `res_order_detail` (
  `order_id` int(10) NOT NULL AUTO_INCREMENT,
  `order_number` int(10) NOT NULL,
  PRIMARY KEY (`order_id`,`order_number`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8;

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
(34,1),
(35,1),
(36,1),
(37,1),
(38,1),
(39,1),
(40,1),
(41,1),
(42,1),
(43,1),
(44,1),
(45,1),
(46,1),
(47,1),
(48,1),
(49,1),
(50,1),
(51,1),
(52,1),
(53,1),
(54,1),
(55,1),
(56,1),
(57,1),
(58,1),
(59,1),
(60,1),
(61,1),
(62,1),
(63,1),
(64,1),
(65,1),
(66,1),
(67,1),
(68,1),
(69,1),
(70,1),
(71,1),
(72,1),
(73,1),
(74,1),
(75,1),
(76,1),
(77,1),
(78,1),
(79,1),
(80,1),
(81,1),
(82,1),
(83,1),
(84,1),
(85,1),
(86,1),
(87,1),
(88,1),
(89,1),
(90,1),
(91,1),
(92,1),
(93,1),
(94,1),
(95,1),
(96,1),
(97,1),
(98,1),
(99,1),
(100,1),
(101,1),
(102,1),
(103,1),
(104,1),
(105,1),
(106,1),
(107,1),
(108,1),
(109,1),
(110,1),
(111,1),
(112,1),
(113,1),
(114,1),
(115,1),
(116,1),
(117,1),
(118,1),
(119,1),
(120,1),
(121,1),
(122,1),
(123,1),
(124,1),
(125,1),
(126,1),
(127,1),
(128,1),
(129,1),
(130,1),
(131,1),
(132,1),
(133,1),
(134,1),
(135,1),
(136,1),
(137,1),
(138,1),
(139,1),
(140,1),
(141,1),
(142,1),
(143,1),
(144,1),
(146,1),
(147,1),
(148,1),
(149,1),
(150,1),
(151,1),
(152,1);

/*Table structure for table `res_payment` */

DROP TABLE IF EXISTS `res_payment`;

CREATE TABLE `res_payment` (
  `payment_id` int(10) NOT NULL AUTO_INCREMENT,
  `order_id` int(10) NOT NULL,
  `totalprice` double DEFAULT NULL,
  `promotion` double DEFAULT NULL,
  `discount` double DEFAULT NULL,
  `total` double DEFAULT NULL,
  `price` double DEFAULT NULL,
  `changeprice` double DEFAULT NULL,
  PRIMARY KEY (`order_id`,`payment_id`),
  KEY `payment_id` (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

/*Data for the table `res_payment` */

insert  into `res_payment`(`payment_id`,`order_id`,`totalprice`,`promotion`,`discount`,`total`,`price`,`changeprice`) values 
(1,35,705,754.35,NULL,716.6325,1000,283.36749999999995),
(26,118,705,754.35,NULL,716.6325,1000,283.36749999999995),
(27,144,188,201.16,NULL,191.102,1000,808.898),
(28,144,188,201.16,NULL,191.102,1000,808.898),
(31,144,273,292.11,NULL,277.5045,500,222.4955),
(29,146,373,399.11,NULL,379.1545,520,140.84550000000002),
(30,146,373,399.11,NULL,379.1545,520,0),
(32,148,318,340.26,NULL,323.247,500,176.753);

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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

/*Data for the table `res_position` */

insert  into `res_position`(`pos_id`,`pos_name`,`pos_role_id`,`pos_status_id`) values 
(10,'ผู้จัดการ',1,2),
(11,'พนักงานเสิร์ฟ',3,1),
(12,'chef',9,1),
(15,'พนักงานหน้าร้าน',5,1),
(20,'พนักงานหน้าร้าน',5,1),
(21,'ธุรการ',8,1),
(22,'com',11,2),
(23,'me',12,1),
(24,'da',16,1),
(25,'black',17,1);

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `res_promotion` */

insert  into `res_promotion`(`pro_id`,`pro_name`,`pro_discount`,`pro_start`,`pro_end`,`pro_status_id`) values 
(6,'daa',5,'2018-03-01 16:26:55','2018-03-13 16:27:05',1),
(7,'dre',10,'2018-03-14 16:27:29','2018-03-16 16:27:36',1),
(8,'errrr',5,'2018-03-17 16:27:53','2018-03-18 16:28:00',2),
(9,'aun',5,'2018-03-16 15:01:53','2018-03-26 15:02:06',1),
(10,'xxx',5,'2018-03-27 13:51:45','2018-04-07 13:51:51',1);

/*Table structure for table `res_reserve` */

DROP TABLE IF EXISTS `res_reserve`;

CREATE TABLE `res_reserve` (
  `reserve_id` int(10) NOT NULL AUTO_INCREMENT,
  `service_id` int(10) NOT NULL,
  `reserve_name` varchar(100) DEFAULT NULL,
  `reserve_datetime` datetime DEFAULT NULL,
  PRIMARY KEY (`reserve_id`,`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

/*Data for the table `res_reserve` */

insert  into `res_reserve`(`reserve_id`,`service_id`,`reserve_name`,`reserve_datetime`) values 
(35,1,'xxx','2018-04-07 17:25:37'),
(36,1,'dddd','2018-04-07 17:45:42'),
(37,3,'','2018-04-07 17:55:54'),
(38,3,'34','2018-04-07 17:56:17'),
(39,1,'','2018-04-07 19:29:19');

/*Table structure for table `res_reserve_table` */

DROP TABLE IF EXISTS `res_reserve_table`;

CREATE TABLE `res_reserve_table` (
  `reserve_id` int(10) NOT NULL,
  `table_id` int(10) NOT NULL,
  PRIMARY KEY (`reserve_id`,`table_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `res_reserve_table` */

insert  into `res_reserve_table`(`reserve_id`,`table_id`) values 
(36,1),
(37,1),
(37,2),
(37,3),
(37,11),
(38,6),
(38,8),
(38,10);

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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

/*Data for the table `res_role` */

insert  into `res_role`(`role_id`,`role_name`,`role_front`,`role_back`,`role_status_id`) values 
(1,'admin','index,admin_home,user_home','admin_employee,admin_role,admin_food,admin_kind,admin_drink,admin_promotion,admin_unitdetail,admin_table,user_menu,user_reserve,user_payment,user_cookmenu,user_drinkmenu,user_report,user_report_time,user_report_year,user_report_expense',1),
(2,'cook','index,admin_home,user_home','admin_unit,admin_employee,admin_position',2),
(3,'พนักงานเสิร์ฟ','index,admin_home,user_home','admin_food,admin_drink',1),
(5,'พนักงานหน้าร้าน','index,admin_home,user_home','admin_employee,admin_food,admin_drink,admin_promotion,admin_table',1),
(8,'พนักงานเช็คของ','index,admin_home,user_home','admin_account',2),
(9,'chef','index,admin_home,user_home','admin_employee,admin_food',1),
(11,'common','index,admin_home,user_home','admin_employee,admin_food,admin_kind,admin_drink',2),
(12,'me','index,admin_home,user_home','admin_employee,admin_position,user_menu',1),
(14,'saa','index,admin_home,user_home','admin_employee,admin_position,user_menu,user_reserve',1),
(15,'aun','index,admin_home,user_home','admin_employee,admin_position,admin_role,user_menu,user_reserve,user_payment',1),
(16,'da','index,admin_home,user_home','admin_employee,admin_position,user_cookmenu,user_drinkmenu',1),
(17,'black','index,admin_home,user_home','admin_employee,user_menu',1),
(18,'fd','index,admin_home,user_home','admin_employee,user_menu,user_reserve,user_payment,user_cookmenu,user_drinkmenu,user_report',1);

/*Table structure for table `res_service` */

DROP TABLE IF EXISTS `res_service`;

CREATE TABLE `res_service` (
  `service_id` int(10) NOT NULL AUTO_INCREMENT,
  `service_name` varchar(20) DEFAULT NULL,
  `service_status` int(2) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `res_service` */

insert  into `res_service`(`service_id`,`service_name`,`service_status`) values 
(1,'จองโต๊ะ',1),
(2,'walkin',1),
(3,'รวมโต๊ะ',1),
(4,'ย้ายโต๊ะ',1);

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
  `zone_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`table_id`),
  KEY `fk_table_status` (`table_status_id`),
  CONSTRAINT `fk_table_status` FOREIGN KEY (`table_status_id`) REFERENCES `res_status` (`stat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `res_table` */

insert  into `res_table`(`table_id`,`table_number`,`table_status`,`table_status_id`,`zone_id`) values 
(1,4,1,1,1),
(2,4,NULL,1,1),
(3,2,NULL,1,1),
(4,8,NULL,2,1),
(5,4,NULL,1,1),
(6,4,NULL,1,1),
(7,4,NULL,1,2),
(8,4,NULL,1,2),
(9,4,NULL,1,2),
(10,4,NULL,1,2),
(11,8,NULL,1,3);

/*Table structure for table `res_table_zone` */

DROP TABLE IF EXISTS `res_table_zone`;

CREATE TABLE `res_table_zone` (
  `zone_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `zone_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`zone_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `res_table_zone` */

insert  into `res_table_zone`(`zone_id`,`zone_name`) values 
(1,'A'),
(2,'B'),
(3,'C');

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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

/*Data for the table `res_unitdetail` */

insert  into `res_unitdetail`(`unitdetail_id`,`unit_number`,`unit_unit_id`,`unitdetail_number`,`unitdetail_unit_id`,`unitdetail_status_id`) values 
(28,12,24,1,23,1),
(29,6,24,1,23,1),
(30,6,24,1,26,1),
(31,6,24,1,23,1),
(32,50,24,1,27,1),
(33,10,2,1,27,1),
(34,40,24,1,27,1),
(35,5,2,1,27,1),
(36,15,2,1,23,1);

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

/*Table structure for table `res_walkin` */

DROP TABLE IF EXISTS `res_walkin`;

CREATE TABLE `res_walkin` (
  `table_id` int(10) NOT NULL AUTO_INCREMENT,
  `table_number` int(10) DEFAULT NULL,
  `table_status` int(10) DEFAULT NULL,
  `service_id` int(10) NOT NULL,
  PRIMARY KEY (`table_id`,`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `res_walkin` */

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
