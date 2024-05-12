```sql
/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : ydnode

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 25/10/2021 11:12:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dept
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `DEPTNO` int NOT NULL,
  `DNAME` varchar(14) NOT NULL,
  `LOC` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`DEPTNO`),
  UNIQUE KEY `DNAME` (`DNAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dept
-- ----------------------------
BEGIN;
INSERT INTO `dept` VALUES (10, 'ACCOUNTING', 'NEW YORK');
INSERT INTO `dept` VALUES (20, 'RESEARCH', 'DALLAS');
INSERT INTO `dept` VALUES (30, 'SALES', 'CHICAGO');
INSERT INTO `dept` VALUES (40, 'OPERATIONS', 'BOSTON');
COMMIT;

-- ----------------------------
-- Table structure for emp
-- ----------------------------
DROP TABLE IF EXISTS `emp`;
CREATE TABLE `emp` (
  `EMPNO` int NOT NULL COMMENT '员工编号',
  `ENAME` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `JOB` varchar(9) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '职位',
  `MGR` int DEFAULT NULL COMMENT '上级',
  `HIREdate` date DEFAULT NULL,
  `SAL` double(7,2) DEFAULT NULL COMMENT '工资',
  `COMM` double(7,2) DEFAULT NULL COMMENT '奖金',
  `DEPTNO` int DEFAULT NULL COMMENT '部门编号',
  PRIMARY KEY (`EMPNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of emp
-- ----------------------------
BEGIN;
INSERT INTO `emp` VALUES (7369, 'SMITH', 'CLERK', 7902, '1980-12-17', 800.00, NULL, 20);
INSERT INTO `emp` VALUES (7499, 'ALLEN', 'SALESMAN', 7698, '1981-02-20', 1600.00, 300.00, 30);
INSERT INTO `emp` VALUES (7521, 'WARD', 'SALESMAN', 7698, '1981-02-22', 1250.00, 500.00, 30);
INSERT INTO `emp` VALUES (7566, 'JONES', 'MANAGER', 7839, '1981-04-02', 2975.00, NULL, 20);
INSERT INTO `emp` VALUES (7654, 'MARTIN', 'SALESMAN', 7698, '1981-09-28', 1250.00, 1400.00, 30);
INSERT INTO `emp` VALUES (7698, 'BLAKE', 'MANAGER', 7839, '1981-05-01', 2850.00, NULL, 30);
INSERT INTO `emp` VALUES (7782, 'CLARK', 'MANAGER', 7839, '1981-06-09', 2450.00, NULL, 10);
INSERT INTO `emp` VALUES (7839, 'KING', 'PRESIDENT', NULL, '1981-11-17', 5000.00, NULL, 10);
INSERT INTO `emp` VALUES (7844, 'TURNER', 'SALESMAN', 7698, '1981-09-08', 1500.00, 0.00, 30);
INSERT INTO `emp` VALUES (7900, 'JAMES', 'CLERK', 7698, '1981-12-03', 950.00, NULL, 30);
INSERT INTO `emp` VALUES (7902, 'FORD', 'ANALYST', 7566, '1981-12-03', 3000.00, NULL, 20);
INSERT INTO `emp` VALUES (7934, 'MILLER', 'CLERK', 7782, '1982-01-23', 1300.00, NULL, 10);
COMMIT;

-- ----------------------------
-- Table structure for t_item
-- ----------------------------
DROP TABLE IF EXISTS `t_item`;
CREATE TABLE `t_item` (
  `id` varchar(200) NOT NULL COMMENT '商品id',
  `category_id` bigint DEFAULT NULL COMMENT '分类id',
  `item_type` varchar(100) DEFAULT NULL COMMENT '商品系列',
  `title` varchar(100) DEFAULT NULL COMMENT '商品标题',
  `sell_point` varchar(150) DEFAULT NULL COMMENT '商品卖点',
  `price` bigint DEFAULT NULL COMMENT '商品单价',
  `num` int DEFAULT NULL COMMENT '库存数量',
  `barcode` varchar(30) DEFAULT NULL COMMENT '条形码',
  `image` varchar(500) DEFAULT NULL COMMENT '图片路径',
  `status` int DEFAULT '1' COMMENT '商品状态  1：上架   2：下架   3：删除',
  `priority` int DEFAULT NULL COMMENT '显示优先级',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `modified_time` datetime DEFAULT NULL COMMENT '最后修改时间',
  `created_user` varchar(50) DEFAULT NULL COMMENT '创建人',
  `modified_user` varchar(50) DEFAULT NULL COMMENT '最后修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_item
-- ----------------------------
BEGIN;
INSERT INTO `t_item` VALUES ('10000000', 238, '牛皮纸记事本', '广博(GuangBo)10本装40张A5牛皮纸记事本子日记本办公软抄本GBR0731', '经典回顾！超值特惠！', 23, 99999, NULL, '/images/portal/00GuangBo1040A5GBR0731/collect.png', 1, 53, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000001', 238, '牛皮纸记事本', '广博(GuangBo)10本装40张A5牛皮纸记事本子日记本办公软抄本GBR0731', '经典回顾！超值特惠！', 23, 99999, NULL, '/images/portal/00GuangBo1040A5GBR0731/collect.png', 1, 62, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000002', 238, '皮面日程本', '广博(GuangBo)皮面日程本子 计划记事本效率手册米色FB60322', '经典回顾！超值特惠！', 46, 99999, NULL, '/images/portal/001GuangBo)FB60322/collect.png', 1, 49, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000021', 238, '皮面日程本', '广博(GuangBo)皮面日程本子 计划记事本效率手册蓝色FB60321', '经典回顾！超值特惠！', 22, 99999, NULL, '/images/portal/001GuangBo)FB60322/collect.png', 1, 73, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000003', 238, '记事本日记本笔记本', '广博(GuangBo)16K115页线圈记事本子日记本文具笔记本图案随机', '经典回顾！超值特惠！', 13, 99999, NULL, '/images/portal/01GuangBo16K115FB60506/collect.png', 1, 58, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000004', 241, '计算器', '得力（deli）1548A商务办公桌面计算器 太阳能双电源', '经典回顾！超值特惠！', 58, 99999, NULL, '/images/portal/002calculator1548A/collect.png', 1, 42, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000005', 241, '圆珠笔', '施耐德（Schneider） K15 经典款圆珠笔 (5支混色装)', '经典回顾！超值特惠！', 29, 99999, NULL, '/images/portal/03SchneiderK15/collect.png', 1, 36, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000006', 236, '票据网格拉链袋', '三木(SUNWOOD) C4523 票据网格拉链袋/文件袋 12个装 颜色随机', '经典回顾！超值特惠！', 28, 99999, NULL, '/images/portal/04_SUNWOODC452312/collect.png', 1, 53, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000007', 163, '燃 7000经典版', '戴尔Dell 燃700金色', '下单赠12000毫安移动电源', 32999, 99999, NULL, '/images/portal/11DELLran7000gold/collect.png', 1, 59, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000008', 163, '燃 7000经典版', '戴尔Dell 燃700R1605银色', '仅上海，广州，沈阳仓有货！预购从速！', 4549, 99999, NULL, '/images/portal/11DELLran7000R1605Ssilvery/collect.png', 1, 32, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000009', 163, '燃 7000学习版', '戴尔Dell 燃700金色', '下单赠12000毫安移动电源', 39929, 99999, NULL, '/images/portal/11DELLran7000gold/collect.png', 1, 84, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000010', 163, '燃 7000学习版', '戴尔Dell 燃700R1605银色', '仅上海，广州，沈阳仓有货！预购从速！', 5559, 99999, NULL, '/images/portal/11DELLran7000R1605Ssilvery/collect.png', 1, 21, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000011', 163, '燃 7000高配版', '戴尔Dell 燃700金色', '下单赠12000毫安移动电源', 3994, 99999, NULL, '/images/portal/11DELLran7000gold/collect.png', 1, 56, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000012', 163, '燃 7000高配版', '戴尔Dell 燃700R1605银色', '仅上海，广州，沈阳仓有货！预购从速！', 6559, 99999, NULL, '/images/portal/11DELLran7000R1605Ssilvery/collect.png', 1, 16, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000013', 238, 'A5优品商务笔记本', '齐心（COMIX）C5902 A5优品商务笔记本子记事本日记本122张', '下单即送10400毫安移动电源！再赠手机魔法盒！', 41, 99999, NULL, '/images/portal/02COMIXC5902A5122blue/collect.png', 1, 10, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000014', 163, 'XPS13-9360', '戴尔(DELL)XPS13-9360-R1609 13.3', '仅上海，广州，沈阳仓有货！预购从速！', 4600, 99999, NULL, '/images/portal/12(DELL)XPS13gold/collect.png', 1, 1, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000015', 163, 'XPS13-9360', '戴尔(DELL)XPS13-9360-R1609 13.3', '仅上海，广州，沈阳仓有货！预购从速！', 4601, 99999, NULL, '/images/portal/12DELLXPS13-silvery/collect.png', 1, 73, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000016', 163, 'XPS13-9360', '戴尔(DELL)XPS13-9360-R1609 13.3', '仅上海，广州，沈阳仓有货！预购从速！', 4602, 99999, NULL, '/images/portal/12(DELL)XPS13gold/collect.png', 1, 64, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000017', 163, 'XPS13-9360', '戴尔(DELL)XPS13-9360-R1609 13.3', '仅上海，广州，沈阳仓有货！预购从速！', 4604, 99999, NULL, '/images/portal/12DELLXPS13-silvery/collect.png', 1, 100, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000018', 163, 'XPS13-9360', '戴尔(DELL)XPS13-9360-R1609 13.3', '仅上海，广州，沈阳仓有货！预购从速！', 4605, 99999, NULL, '/images/portal/12(DELL)XPS13gold/collect.png', 1, 7, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000019', 163, 'XPS13-9360', '戴尔(DELL)XPS13-9360-R1609 13.3', '仅上海，广州，沈阳仓有货！预购从速！', 4899, 99999, NULL, '/images/portal/12DELLXPS13-silvery/collect.png', 1, 34, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000020', 163, 'IdeaPad310低配版', '联想（Lenovo）IdeaPad310低配版', '清仓！仅北京，武汉仓有货！', 5119, 99999, NULL, '/images/portal/13LenovoIdeaPad310_black/collect.png', 1, 50, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000021', 163, 'IdeaPad310低配版', '联想（Lenovo）IdeaPad310低配版', '清仓！仅北京，武汉仓有货！', 5129, 99999, NULL, '/images/portal/13LenovoIdeaPad310_silvery/collect.png', 1, 48, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000022', 163, 'IdeaPad310经典版', '联想（Lenovo）IdeaPad310经典版', '清仓！仅北京，武汉仓有货！', 5119, 99999, NULL, '/images/portal/13LenovoIdeaPad310_black/collect.png', 1, 90, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000023', 163, 'IdeaPad310经典版', '联想（Lenovo）IdeaPad310经典版', '清仓！仅北京，武汉仓有货！', 5129, 99999, NULL, '/images/portal/13LenovoIdeaPad310_silvery/collect.png', 1, 6, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000024', 163, 'IdeaPad310高配版', '联想（Lenovo）IdeaPad310高配版', '清仓！仅北京，武汉仓有货！', 5119, 99999, NULL, '/images/portal/13LenovoIdeaPad310_black/collect.png', 1, 60, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000025', 163, 'IdeaPad310高配版', '联想（Lenovo）IdeaPad310高配版', '清仓！仅北京，武汉仓有货！', 5129, 99999, NULL, '/images/portal/13LenovoIdeaPad310_silvery/collect.png', 1, 80, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000026', 163, 'YOGA710', '联想（Lenovo）YOGA710 14英寸触控笔记本（i7-7500U 8G 256GSSD 2G独显 全高清IPS 360°翻转 正版office）金', '【0元献礼】好评过万，销量传奇！经典蓝光电视，独有自然光技术专利，过大年带最好的回家！【0元白条试用，1001个拜年计划】', 59999, 99999, NULL, '/images/portal/14LenovoYOGA710 _gold/collect.png', 1, 19, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000027', 163, 'YOGA710', '联想（Lenovo）YOGA710 14英寸触控笔记本（i7-7500U 8G 256GSSD 2G独显 全高清IPS 360°翻转 正版office）银', '【0元献礼】好评过万，销量传奇！经典蓝光电视，独有自然光技术专利，过大年带最好的回家！【0元白条试用，1001个拜年计划】', 59999, 99999, NULL, '/images/portal/14LenovoYOGA710 _silvery/collect.png', 1, 55, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000028', 163, '310低配版', '联想（Lenovo）小新310低配版', '清仓！仅北京，武汉仓有货！', 4939, 99999, NULL, '/images/portal/15Lenovo_xiaoxin_310_black/collect.png', 1, 19, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000029', 163, '310低配版', '联想（Lenovo）小新310低配版', '清仓！仅北京，武汉仓有货！', 4839, 99999, NULL, '/images/portal/15Lenovo_xiaoxin_310_silvery/collect.png', 1, 27, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000030', 163, '310经典版', '联想（Lenovo）小新310经典版', '清仓！仅北京，武汉仓有货！', 4739, 99999, NULL, '/images/portal/15Lenovo_xiaoxin_310_black/collect.png', 1, 78, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000031', 163, '310经典版', '联想（Lenovo）小新310经典版', '清仓！仅北京，武汉仓有货！', 4639, 99999, NULL, '/images/portal/15Lenovo_xiaoxin_310_silvery/collect.png', 1, 9, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000032', 163, '310高配版', '联想（Lenovo）小新310高配版', '清仓！仅北京，武汉仓有货！', 4539, 99999, NULL, '/images/portal/15Lenovo_xiaoxin_310_black/collect.png', 1, 9, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000033', 163, '310高配版', '联想（Lenovo）小新310高配版', '清仓！仅北京，武汉仓有货！', 4439, 99999, NULL, '/images/portal/15Lenovo_xiaoxin_310_silvery/collect.png', 1, 18, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000034', 163, 'YOGA900', '联想（Lenovo）YOGA900绿色', '青春的活力 清新漂亮高端大气上档次', 5200, 99999, NULL, '/images/portal/16LenovoYOGA900green/collect.png', 1, 63, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000035', 163, 'YOGA900', '联想（Lenovo）YOGA900粉色', '青春的活力 清新漂亮高端大气上档次', 5200, 99999, NULL, '/images/portal/16LenovoYOGA900pink/collect.png', 1, 62, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000036', 163, 'YOGA900', '联想（Lenovo）YOGA900红色', '青春的活力 清新漂亮高端大气上档次', 5200, 99999, NULL, '/images/portal/16LenovoYOGA900red/collect.png', 1, 21, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000037', 163, '小新13旗舰版', '联想(Lenovo)小新Air13 Pro 13.3英寸14.8mm超轻薄笔记本电脑', '青春的活力 青年专属', 6439, 99999, NULL, '/images/portal/17Lenovo)xiaoxinAir13Pro_gold/collect.png', 1, 16, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000038', 163, '小新13旗舰版', '联想(Lenovo)小新Air13 Pro 13.3英寸14.8mm超轻薄笔记本电脑', '青春的活力 青年专属', 6439, 99999, NULL, '/images/portal/17Lenovo)xiaoxinAir13Pro_silvery/collect.png', 1, 17, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000039', 163, 'XPS15', '戴尔(DELL) XPS15 银色', '限时特价！好评过万条优秀产品！', 3333, 99999, NULL, '/images/portal/18(DELL)XPS15_silvery/collect.png', 1, 37, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000391', 163, 'XPS15', '戴尔(DELL) XPS15 金色', '限时特价！好评过万条优秀产品！', 3333, 99999, NULL, '/images/portal/18(DELL)XPS15_silvery/collect.png', 1, 81, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000040', 163, 'DELL 15MF Pro', '戴尔(DELL)魔方15MF Pro-R2505TSS灵越', '15.6英寸二合一翻转笔记本电脑 (i5-7200U 8GB 1TB IPS Win10)触控银', 4443, 99999, NULL, '/images/portal/19DELL15MF Pro/collect.png', 1, 35, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000401', 163, 'DELL 15MF Pro', '戴尔(DELL)魔方15MF Pro-R2505TSS灵越', '15.6英寸二合一翻转笔记本电脑 (i5-7200U 8GB 1TB IPS Win10)触控白', 4443, 99999, NULL, '/images/portal/19DELL15MF Pro/collect.png', 1, 86, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000402', 163, 'DELL 15MF Pro', '戴尔(DELL)魔方15MF Pro-R2505TSS灵越', '15.6英寸二合一翻转笔记本电脑 (i7-7200U 8GB 512GB IPS Win10)触控银', 6443, 99999, NULL, '/images/portal/19DELL15MF Pro/collect.png', 1, 84, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000403', 163, 'DELL 15MF Pro', '戴尔(DELL)魔方15MF Pro-R2505TSS灵越', '15.6英寸二合一翻转笔记本电脑 (i7-7200U 8GB 512GB IPS Win10)触控白', 6443, 99999, NULL, '/images/portal/19DELL15MF Pro/collect.png', 1, 63, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000041', 163, 'DELL XPS15-9550', '戴尔(DELL) XPS15升级版 ', '15.6英寸二合一翻转笔记本电脑 (i5-7200U 8GB 1TGB IPS Win10)触控', 8443, 99999, NULL, '/images/portal/20DellXPS15-9550/collect.png', 1, 61, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000411', 163, 'DELL XPS15-9550', '戴尔(DELL) XPS15升级版 ', '15.6英寸二合一翻转笔记本电脑 (i5-7200U 8GB 256GB IPS Win10)触控', 8443, 99999, NULL, '/images/portal/20DellXPS15-9550/collect.png', 1, 60, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000412', 163, 'DELL XPS15-9550', '戴尔(DELL) XPS15升级版 ', '15.6英寸二合一翻转笔记本电脑 (i7-7200U 8GB 1TB IPS Win10)触控', 8443, 99999, NULL, '/images/portal/20DellXPS15-9550/collect.png', 1, 13, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000413', 163, 'DELL XPS15-9550', '戴尔(DELL) XPS15升级版 ', '15.6英寸二合一翻转笔记本电脑 (i7-7200U 8GB 256GB IPS Win10)触控', 8443, 99999, NULL, '/images/portal/20DellXPS15-9550/collect.png', 1, 83, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000042', 163, 'ThinkPad New s1', '联想ThinkPad New S2（01CD） i5 6代 红色', '经典回顾！超值特惠！', 4399, 99999, NULL, '/images/portal/21ThinkPad_New_S1/collect.png', 1, 99, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000421', 163, 'ThinkPad New s1', '联想ThinkPad New S2（01CD） i7 6700 红', '经典回顾！超值特惠！', 6399, 99999, NULL, '/images/portal/21ThinkPad_New_S1/collect.png', 1, 74, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000422', 163, 'ThinkPad New s1', '联想ThinkPad New S2（01CD） i5 6代 黄', '经典回顾！超值特惠！', 4399, 99999, NULL, '/images/portal/21ThinkPad_New_S1/collect.png', 1, 23, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000424', 163, 'ThinkPad New s1', '联想ThinkPad New S2（01CD） i5 6代 蓝', '经典回顾！超值特惠！', 4399, 99999, NULL, '/images/portal/21ThinkPad_New_S1/collect.png', 1, 87, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('100000425', 163, 'ThinkPad New s1', '联想ThinkPad New S2（01CD） i7 6700 蓝', '经典回顾！超值特惠！', 6399, 99999, NULL, '/images/portal/21ThinkPad_New_S1/collect.png', 1, 59, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000043', 917, '书包 bag', '乐尚书包 电脑包 bag黑色', '给你满载而归的喜悦！', 89, 99999, NULL, '/images/portal/22_LEXON_LNE6025B06T/collect.png', 1, 12, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
INSERT INTO `t_item` VALUES ('10000044', 917, '书包 bag', '乐尚书包 电脑包 bag粉色', '给你满载而归的喜悦！', 89, 99999, NULL, '/images/portal/22_LEXON_LNE6025B06T/collect.png', 1, 62, '2017-10-25 15:08:55', '2017-10-25 15:08:55', 'admin', 'admin');
COMMIT;

-- ----------------------------
-- Table structure for t_item_category
-- ----------------------------
DROP TABLE IF EXISTS `t_item_category`;
CREATE TABLE `t_item_category` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `parent_id` bigint DEFAULT NULL COMMENT '父分类id',
  `name` varchar(150) DEFAULT NULL COMMENT '名称',
  `status` int DEFAULT '1' COMMENT '状态   1：正常   2：删除',
  `sort_order` int DEFAULT NULL COMMENT '排序号',
  `is_parent` tinyint(1) DEFAULT NULL COMMENT '是否是父分类   1：是  0：否',
  `created_time` datetime DEFAULT NULL COMMENT '创建时间',
  `modified_time` datetime DEFAULT NULL COMMENT '最后修改时间',
  `created_user` varchar(50) DEFAULT NULL COMMENT '创建人',
  `modified_user` varchar(50) DEFAULT NULL COMMENT '最后修改人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1183 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_item_category
-- ----------------------------
BEGIN;
INSERT INTO `t_item_category` VALUES (163, 162, '笔记本', 1, 1, 0, '2017-10-25 15:00:55', '2017-10-25 15:00:55', 'admin', 'admin');
INSERT INTO `t_item_category` VALUES (236, 229, '文件管理', 1, 7, 0, '2017-10-25 15:00:55', '2017-10-25 15:00:55', 'admin', 'admin');
INSERT INTO `t_item_category` VALUES (238, 229, '本册/便签', 1, 9, 0, '2017-10-25 15:00:55', '2017-10-25 15:00:55', 'admin', 'admin');
INSERT INTO `t_item_category` VALUES (241, 229, '笔类', 1, 12, 0, '2017-10-25 15:00:55', '2017-10-25 15:00:55', 'admin', 'admin');
INSERT INTO `t_item_category` VALUES (917, 913, '双肩包', 1, 4, 0, '2017-10-25 15:00:55', '2017-10-25 15:00:55', 'admin', 'admin');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

```