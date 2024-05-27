```sql
/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : cc

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 25/10/2021 11:11:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cc_friend
-- ----------------------------
DROP TABLE IF EXISTS `cc_friend`;
CREATE TABLE `cc_friend` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `me_id` bigint DEFAULT NULL COMMENT '本人ID',
  `f_id` bigint DEFAULT NULL COMMENT '朋友ID',
  `state` bigint DEFAULT NULL COMMENT '状态',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime DEFAULT NULL COMMENT '删除时间软删除',
  PRIMARY KEY (`id`),
  KEY `idx_cc_friend_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for cc_resources
-- ----------------------------
DROP TABLE IF EXISTS `cc_resources`;
CREATE TABLE `cc_resources` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `tags` varchar(255) DEFAULT NULL COMMENT '属于那个模块',
  `summary` varchar(255) DEFAULT NULL COMMENT '方法名称',
  `url` varchar(255) NOT NULL COMMENT 'url',
  `method` varchar(255) DEFAULT NULL COMMENT '请求方法',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime DEFAULT NULL COMMENT '删除时间软删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`),
  KEY `idx_cc_resources_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for cc_unique_login
-- ----------------------------
DROP TABLE IF EXISTS `cc_unique_login`;
CREATE TABLE `cc_unique_login` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `uid` bigint DEFAULT NULL COMMENT '用户ID',
  `ip` varchar(255) DEFAULT NULL COMMENT '登录IP地址',
  `token` varchar(255) DEFAULT NULL COMMENT '登陆token',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `deleted_at` datetime DEFAULT NULL COMMENT '删除时间软删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uid` (`uid`),
  UNIQUE KEY `u_id` (`uid`),
  KEY `idx_cc_unique_login_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of cc_unique_login
-- ----------------------------
BEGIN;
INSERT INTO `cc_unique_login` VALUES (1, 1, '172.12.12.18', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTM2Mjc1MTcsImlhdCI6MTYxMTg5OTUxNywiaWQiOjEsIm5iZiI6MTYxMTg5OTUxNywicmVnaW9uX2lkIjowLCJ1c2VyX25hbWUiOiJDYzM2MDQyOCIsInVzZXJfdHlwZSI6MH0.Ev4e9tg6FI6TGjZqKCAy2QInQTlqEIYn-bN7g0dbz8c', '2021-01-29 13:51:57', '2021-01-29 13:51:57', NULL);
INSERT INTO `cc_unique_login` VALUES (2, 2, '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTcyODA1MzksImlhdCI6MTYxNTU1MjUzOSwiaWQiOjIsIm5iZiI6MTYxNTU1MjUzOSwicmVnaW9uX2lkIjowLCJ1c2VyX25hbWUiOiJsY2MiLCJ1c2VyX3R5cGUiOjB9.OQ2ahdyXbr_yXtmCKSqUjwmZ_Z5b71d7P7Bq5SYAdyc', '2021-03-12 20:34:49', '2021-03-12 20:35:39', NULL);
COMMIT;

-- ----------------------------
-- Table structure for cc_user
-- ----------------------------
DROP TABLE IF EXISTS `cc_user`;
CREATE TABLE `cc_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL COMMENT '预留用户ID',
  `name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `sex` int DEFAULT NULL,
  `images_url` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  `last_logon_time` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL COMMENT '删除时间软删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_cc_user_deleted_at` (`deleted_at`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of cc_user
-- ----------------------------
BEGIN;
INSERT INTO `cc_user` VALUES (1, NULL, 'Cc360428', 0, 'http://a.hiphotos.baidu.com/zhidao/pic/item/9358d109b3de9c82b1c389d06e81800a18d843ce.jpg', 'li_chao_cheng@153.com', 'f9347dcfb75de8d7d7b076f96ee41dc8', '42d42395be5287588568337e0fc6a3a7', '2021-01-29 13:50:29', '2021-01-29 13:51:57', '2021-01-29 13:51:57', NULL);
INSERT INTO `cc_user` VALUES (2, NULL, 'lcc', 0, 'http://a.hiphotos.baidu.com/zhidao/pic/item/9358d109b3de9c82b1c389d06e81800a18d843ce.jpg', '1097125645@qq.com', 'a15a1af07780b24f8fdf4e6dbfef46ef', 'dfe0b3e25a61a916e13d7ffa2227ed66', '2021-03-12 20:34:08', '2021-03-12 20:35:39', '2021-03-12 20:35:39', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

```