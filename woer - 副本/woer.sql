SET NAMES UTF8;
DROP DATABASE IF EXISTS woer;
CREATE DATABASE woer CHARSET=UTF8;
USE woer;
-- 管理员信息
CREATE TABLE woer_admin(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(32),
  password VARCHAR(32)
);
/**插入管理员信息**/
INSERT INTO woer_admin VALUES
(1, 'admin','123456');
/**用户信息**/
CREATE TABLE woer_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(32),
  password VARCHAR(32),
  event VARCHAR(32),
  sex VARCHAR(4),
  date VARCHAR(32),
  phone VARCHAR(16)
);
/**插入用户信息**/
INSERT INTO woer_user VALUES
(1, 'yonghu','123456','婚礼','1','2022-8-1','15535453340');
/**插入首页宴会厅信息**/
CREATE TABLE woer_hotel(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(32),
  image VARCHAR(256),
  price VARCHAR(16),
  detail VARCHAR(128)
);
INSERT INTO woer_hotel VALUES
(1,'香梅花苑主题宴会厅','/image/lun1.webp',3000,'想要红梅花园的感觉吗？'),
(2,'冰雪水晶女王主题宴会厅','/image/lun2.webp',4500,'还你一场冰雪璀璨的婚礼'),
(3,'香槟优雅主题宴会厅','/image/lun3.webp',2800,'消闲舒雅  琴声乐韵'),
(4,'森林幽深主题宴会厅','/image/lun4.webp',4800,'悠远世外  林深见鹿'),
(5,'皇家之殇主题宴会厅','/image/lun5.webp',4300,'皇家豪华  都市风光'),
(6,'少女纯美主题宴会厅','/image/lun6.webp',3500,'洁白婚纱  亿万少女的梦');
CREATE TABLE woer_resever(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32),
  phone VARCHAR(128),
  date VARCHAR(16),
  lable VARCHAR(128)
);