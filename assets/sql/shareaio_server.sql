```sql
/*
 Navicat Premium Data Transfer

 Source Server         : 22
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : shareaio_server

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 20/04/2022 11:03:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_activists
-- ----------------------------
DROP TABLE IF EXISTS `t_activists`;
CREATE TABLE `t_activists` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `activity_manage_id` bigint NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_activists
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_activity_manage
-- ----------------------------
DROP TABLE IF EXISTS `t_activity_manage`;
CREATE TABLE `t_activity_manage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL DEFAULT '',
  `number` varchar(255) NOT NULL DEFAULT '',
  `describe` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `activity_organizers` varchar(255) NOT NULL DEFAULT '',
  `contacts` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `detailed_address` varchar(255) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `recruitment` bigint NOT NULL DEFAULT '0',
  `already_number` bigint NOT NULL DEFAULT '0',
  `age_limit` varchar(255) NOT NULL DEFAULT '',
  `reward` varchar(255) NOT NULL DEFAULT '',
  `start_time` varchar(255) NOT NULL DEFAULT '',
  `end_time` varchar(255) NOT NULL DEFAULT '',
  `activity_state` bigint NOT NULL DEFAULT '0',
  `release_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `number` (`number`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_activity_manage
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_activity_participants
-- ----------------------------
DROP TABLE IF EXISTS `t_activity_participants`;
CREATE TABLE `t_activity_participants` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `activity_manage_id` bigint NOT NULL,
  `app_user_profile_id` bigint NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_activity_participants
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_address_category
-- ----------------------------
DROP TABLE IF EXISTS `t_address_category`;
CREATE TABLE `t_address_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(11) NOT NULL DEFAULT '',
  `value` varchar(128) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `sort` bigint NOT NULL DEFAULT '0',
  `category_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `value` (`value`),
  UNIQUE KEY `image` (`image`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_address_category
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_admin_message_tank
-- ----------------------------
DROP TABLE IF EXISTS `t_admin_message_tank`;
CREATE TABLE `t_admin_message_tank` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `u_id` bigint NOT NULL DEFAULT '0',
  `push_message_id` bigint NOT NULL DEFAULT '0',
  `see_state` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_admin_message_tank
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_advert_manage
-- ----------------------------
DROP TABLE IF EXISTS `t_advert_manage`;
CREATE TABLE `t_advert_manage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `advert_number` varchar(255) NOT NULL DEFAULT '',
  `banner_url` varchar(255) NOT NULL DEFAULT '',
  `advert_title` varchar(255) NOT NULL DEFAULT '',
  `advert_name` varchar(255) NOT NULL DEFAULT '',
  `start_time_advert` varchar(255) NOT NULL DEFAULT '',
  `end_time_advert` varchar(255) NOT NULL DEFAULT '',
  `advert_business` varchar(255) NOT NULL DEFAULT '',
  `advert_content` varchar(500) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `number_of_visits` bigint NOT NULL DEFAULT '0',
  `release_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_advert_manage
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_app_user_coupon
-- ----------------------------
DROP TABLE IF EXISTS `t_app_user_coupon`;
CREATE TABLE `t_app_user_coupon` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `coupon_manage_id` bigint NOT NULL,
  `user_id` bigint NOT NULL DEFAULT '0',
  `state` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `coupon_manage_id` (`coupon_manage_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_app_user_coupon
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_app_user_profile
-- ----------------------------
DROP TABLE IF EXISTS `t_app_user_profile`;
CREATE TABLE `t_app_user_profile` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_delete` bigint NOT NULL DEFAULT '0',
  `name` varchar(128) NOT NULL DEFAULT '',
  `last_logon_time` varchar(255) NOT NULL DEFAULT '',
  `user_type` bigint NOT NULL DEFAULT '0',
  `nick_name` varchar(255) NOT NULL DEFAULT '',
  `image_url` varchar(255) NOT NULL DEFAULT '',
  `last_name` varchar(255) NOT NULL DEFAULT '',
  `first_name` varchar(255) NOT NULL DEFAULT '',
  `face_book_i_d` varchar(255) NOT NULL DEFAULT '',
  `we_chat_i_d` bigint NOT NULL DEFAULT '0',
  `user_id` bigint NOT NULL DEFAULT '0',
  `profile_id` bigint NOT NULL DEFAULT '0',
  `integral` varchar(255) NOT NULL DEFAULT '',
  `income_integral` varchar(255) NOT NULL DEFAULT '',
  `using_integral` varchar(255) NOT NULL DEFAULT '',
  `star_value` varchar(255) NOT NULL DEFAULT '',
  `grade` varchar(50) NOT NULL DEFAULT '',
  `star` bigint NOT NULL DEFAULT '0',
  `friend_number` bigint NOT NULL DEFAULT '0',
  `follow_number` bigint NOT NULL DEFAULT '0',
  `fans_number` bigint NOT NULL DEFAULT '0',
  `share_number` bigint NOT NULL DEFAULT '0',
  `demand_number` bigint NOT NULL DEFAULT '0',
  `authentication` tinyint(1) NOT NULL DEFAULT '0',
  `reg_time` varchar(50) NOT NULL DEFAULT '',
  `reg_time_s` varchar(255) NOT NULL DEFAULT '',
  `week` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_app_user_profile
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_app_user_profile_t_circles
-- ----------------------------
DROP TABLE IF EXISTS `t_app_user_profile_t_circles`;
CREATE TABLE `t_app_user_profile_t_circles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `t_app_user_profile_id` bigint NOT NULL,
  `t_circle_id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_app_user_profile_t_circles
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_authentication
-- ----------------------------
DROP TABLE IF EXISTS `t_authentication`;
CREATE TABLE `t_authentication` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `actual_name` varchar(50) NOT NULL DEFAULT '',
  `document_number` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `user_id` bigint DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_authentication
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_average_start
-- ----------------------------
DROP TABLE IF EXISTS `t_average_start`;
CREATE TABLE `t_average_start` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `number` varchar(255) NOT NULL DEFAULT '',
  `average_user_star_value` varchar(255) NOT NULL DEFAULT '',
  `user_display_star` varchar(255) NOT NULL DEFAULT '',
  `remarks` varchar(255) NOT NULL DEFAULT '',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `number` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_average_start
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_category
-- ----------------------------
DROP TABLE IF EXISTS `t_category`;
CREATE TABLE `t_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(11) NOT NULL DEFAULT '',
  `value` varchar(128) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL DEFAULT '',
  `image_welcome` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `sort` bigint NOT NULL DEFAULT '0',
  `category_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `value` (`value`),
  UNIQUE KEY `image` (`image`),
  UNIQUE KEY `image_welcome` (`image_welcome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_category
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_check_integral
-- ----------------------------
DROP TABLE IF EXISTS `t_check_integral`;
CREATE TABLE `t_check_integral` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `day` int NOT NULL DEFAULT '0',
  `grant_type` bigint NOT NULL DEFAULT '0',
  `integral` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_check_integral
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_circle
-- ----------------------------
DROP TABLE IF EXISTS `t_circle`;
CREATE TABLE `t_circle` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app_user_profile_id` bigint NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `describe` varchar(255) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL DEFAULT '',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `circle_number` bigint NOT NULL DEFAULT '0',
  `share_number` bigint NOT NULL DEFAULT '0',
  `request_number` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_circle
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_circle_admin
-- ----------------------------
DROP TABLE IF EXISTS `t_circle_admin`;
CREATE TABLE `t_circle_admin` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `circle_id` bigint NOT NULL,
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_circle_admin
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_circle_apply
-- ----------------------------
DROP TABLE IF EXISTS `t_circle_apply`;
CREATE TABLE `t_circle_apply` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `circle_id` bigint NOT NULL,
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `apply_first_name` varchar(255) NOT NULL DEFAULT '',
  `ally_image_url` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_circle_apply
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_city
-- ----------------------------
DROP TABLE IF EXISTS `t_city`;
CREATE TABLE `t_city` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `p_id` bigint NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_city
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_collection
-- ----------------------------
DROP TABLE IF EXISTS `t_collection`;
CREATE TABLE `t_collection` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `statistics_id` bigint NOT NULL,
  `user_id` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`statistics_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_collection
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `statistics_id` bigint NOT NULL,
  `user_image` varchar(255) NOT NULL DEFAULT '',
  `user_name` varchar(255) NOT NULL DEFAULT '',
  `user_id` bigint NOT NULL DEFAULT '0',
  `app_user_id` bigint NOT NULL DEFAULT '0',
  `content_info` varchar(255) NOT NULL DEFAULT '',
  `comment_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_comment_subset
-- ----------------------------
DROP TABLE IF EXISTS `t_comment_subset`;
CREATE TABLE `t_comment_subset` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `state` bigint NOT NULL DEFAULT '0',
  `p_id` bigint NOT NULL DEFAULT '0',
  `comment_id` bigint NOT NULL,
  `user_id` bigint NOT NULL DEFAULT '0',
  `app_user_id` bigint NOT NULL DEFAULT '0',
  `user_name` varchar(255) NOT NULL DEFAULT '',
  `user_image` varchar(255) NOT NULL DEFAULT '',
  `content_info` varchar(255) NOT NULL DEFAULT '',
  `comment_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_comment_subset
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_complaint
-- ----------------------------
DROP TABLE IF EXISTS `t_complaint`;
CREATE TABLE `t_complaint` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `info_order_id` bigint NOT NULL DEFAULT '0',
  `reason` varchar(255) NOT NULL DEFAULT '',
  `types` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_complaint
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_coupon_manage
-- ----------------------------
DROP TABLE IF EXISTS `t_coupon_manage`;
CREATE TABLE `t_coupon_manage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `coupon_image_url` varchar(255) NOT NULL DEFAULT '',
  `number` varchar(255) NOT NULL DEFAULT '',
  `coupon_title` varchar(255) NOT NULL DEFAULT '',
  `coupon_content` varchar(500) NOT NULL DEFAULT '',
  `coupon_type` varchar(255) NOT NULL DEFAULT '',
  `business_name` varchar(255) NOT NULL DEFAULT '',
  `business_address` varchar(255) NOT NULL DEFAULT '',
  `business_website` varchar(255) NOT NULL DEFAULT '',
  `coupon_start_time` varchar(255) NOT NULL DEFAULT '',
  `coupon_end_time` varchar(255) NOT NULL DEFAULT '',
  `upper_shelf_number` bigint NOT NULL DEFAULT '0',
  `convertible_number` bigint NOT NULL DEFAULT '0',
  `surplus_number` bigint NOT NULL DEFAULT '0',
  `used_number` bigint NOT NULL DEFAULT '0',
  `limit_exchange_integral` bigint NOT NULL DEFAULT '0',
  `commodity_code_url` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `release_time` varchar(255) NOT NULL DEFAULT '',
  `convertible` bigint NOT NULL DEFAULT '0',
  `used` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_coupon_manage
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_dict
-- ----------------------------
DROP TABLE IF EXISTS `t_dict`;
CREATE TABLE `t_dict` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `type` varchar(128) NOT NULL DEFAULT '',
  `code` bigint NOT NULL DEFAULT '0',
  `p_type` varchar(255) NOT NULL DEFAULT '',
  `value` varchar(128) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_dict
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_evaluate
-- ----------------------------
DROP TABLE IF EXISTS `t_evaluate`;
CREATE TABLE `t_evaluate` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `statistics_id` bigint NOT NULL,
  `info_order_id` bigint NOT NULL DEFAULT '0',
  `be_evaluated` bigint NOT NULL DEFAULT '0',
  `app_user_profile` bigint NOT NULL DEFAULT '0',
  `star` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL DEFAULT '',
  `add_time` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_evaluate
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_face_book
-- ----------------------------
DROP TABLE IF EXISTS `t_face_book`;
CREATE TABLE `t_face_book` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `face_book_id` varchar(32) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  `first_name` varchar(255) NOT NULL DEFAULT '',
  `last_name` varchar(255) NOT NULL DEFAULT '',
  `user_id` bigint NOT NULL DEFAULT '0',
  `profile_id` bigint NOT NULL DEFAULT '0',
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `face_book_id` (`face_book_id`,`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_face_book
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_follow
-- ----------------------------
DROP TABLE IF EXISTS `t_follow`;
CREATE TABLE `t_follow` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL DEFAULT '0',
  `app_user_id` bigint NOT NULL DEFAULT '0',
  `app_user_profile_id` bigint NOT NULL,
  `state` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_follow
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_friends
-- ----------------------------
DROP TABLE IF EXISTS `t_friends`;
CREATE TABLE `t_friends` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL DEFAULT '0',
  `app_user_id` bigint NOT NULL DEFAULT '0',
  `app_user_profile_id` bigint NOT NULL,
  `state` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_friends
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_friends_apply
-- ----------------------------
DROP TABLE IF EXISTS `t_friends_apply`;
CREATE TABLE `t_friends_apply` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `apply_friend_app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `apply_app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_friends_apply
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_info_order
-- ----------------------------
DROP TABLE IF EXISTS `t_info_order`;
CREATE TABLE `t_info_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `good_order` varchar(255) NOT NULL DEFAULT '',
  `statistics_id` bigint NOT NULL,
  `transaction_id` bigint NOT NULL,
  `transaction_app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `transaction_delete` bigint NOT NULL DEFAULT '0',
  `publisher_id` bigint NOT NULL DEFAULT '0',
  `publisher_delete` bigint NOT NULL DEFAULT '0',
  `request_state` bigint NOT NULL DEFAULT '0',
  `order_state` varchar(255) NOT NULL DEFAULT '',
  `order_status_details` varchar(255) NOT NULL DEFAULT '',
  `order_status_details_upper` varchar(255) NOT NULL DEFAULT '',
  `transaction_integral` bigint NOT NULL DEFAULT '0',
  `set_number` bigint NOT NULL DEFAULT '0',
  `detailed_order_procedure` bigint NOT NULL DEFAULT '0',
  `error_info` varchar(255) NOT NULL DEFAULT '',
  `start_time` varchar(255) NOT NULL DEFAULT '',
  `end_time` varchar(255) NOT NULL DEFAULT '',
  `cancel_order` bigint NOT NULL DEFAULT '0',
  `acceptance_time` bigint NOT NULL DEFAULT '0',
  `evaluate` tinyint(1) NOT NULL DEFAULT '0',
  `cancel_reason` varchar(255) NOT NULL DEFAULT '',
  `give_time` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `transaction_id` (`transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_info_order
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_info_preview
-- ----------------------------
DROP TABLE IF EXISTS `t_info_preview`;
CREATE TABLE `t_info_preview` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL DEFAULT '0',
  `statistics_id` bigint NOT NULL,
  `state` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_info_preview
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_integral_acquisition
-- ----------------------------
DROP TABLE IF EXISTS `t_integral_acquisition`;
CREATE TABLE `t_integral_acquisition` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL DEFAULT '',
  `company` varchar(255) NOT NULL DEFAULT '',
  `bonus_points` bigint NOT NULL DEFAULT '0',
  `remarks` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_integral_acquisition
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_integral_grant
-- ----------------------------
DROP TABLE IF EXISTS `t_integral_grant`;
CREATE TABLE `t_integral_grant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app_user_profile_id` bigint NOT NULL,
  `store_name` varchar(255) NOT NULL DEFAULT '',
  `grant_target` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `integral_rule` varchar(255) NOT NULL DEFAULT '',
  `grant_category` varchar(255) NOT NULL DEFAULT '',
  `grant_type` varchar(255) NOT NULL DEFAULT '',
  `grant_integral` varchar(255) NOT NULL DEFAULT '',
  `grant_reason` varchar(255) NOT NULL DEFAULT '',
  `integral_sum` varchar(255) NOT NULL DEFAULT '',
  `release_time` varchar(50) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_integral_grant
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_integral_info
-- ----------------------------
DROP TABLE IF EXISTS `t_integral_info`;
CREATE TABLE `t_integral_info` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app_user_profile_id` bigint NOT NULL,
  `integral_sum` bigint NOT NULL DEFAULT '0',
  `integral_number` bigint NOT NULL DEFAULT '0',
  `integral_surplus` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_integral_info
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_integral_use
-- ----------------------------
DROP TABLE IF EXISTS `t_integral_use`;
CREATE TABLE `t_integral_use` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `transaction_time` varchar(255) NOT NULL DEFAULT '',
  `transaction_number` bigint NOT NULL DEFAULT '0',
  `transaction_integral` bigint NOT NULL DEFAULT '0',
  `transaction_type` varchar(255) NOT NULL DEFAULT '',
  `transaction_channel` varchar(255) NOT NULL DEFAULT '',
  `transaction_state` varchar(255) NOT NULL DEFAULT '',
  `transaction_explain` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_integral_use
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_label
-- ----------------------------
DROP TABLE IF EXISTS `t_label`;
CREATE TABLE `t_label` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `value` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_label
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_like
-- ----------------------------
DROP TABLE IF EXISTS `t_like`;
CREATE TABLE `t_like` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `statistics_id` bigint NOT NULL,
  `user_id` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`statistics_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_like
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_my_address
-- ----------------------------
DROP TABLE IF EXISTS `t_my_address`;
CREATE TABLE `t_my_address` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `addressee` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(255) NOT NULL DEFAULT '',
  `gender` varchar(255) NOT NULL DEFAULT '',
  `address_category_id` bigint NOT NULL DEFAULT '0',
  `address_category_image` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `address` varchar(255) NOT NULL DEFAULT '',
  `city_address` varchar(255) NOT NULL DEFAULT '',
  `default` bigint NOT NULL DEFAULT '0',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_my_address
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_notice
-- ----------------------------
DROP TABLE IF EXISTS `t_notice`;
CREATE TABLE `t_notice` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `circle_id` bigint NOT NULL,
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_notice
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_operational_log
-- ----------------------------
DROP TABLE IF EXISTS `t_operational_log`;
CREATE TABLE `t_operational_log` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `operator` varchar(50) NOT NULL DEFAULT '',
  `operator_type` bigint NOT NULL DEFAULT '0',
  `operational_type` varchar(500) NOT NULL DEFAULT '',
  `operational_details` varchar(500) NOT NULL DEFAULT '',
  `login_ip` varchar(100) NOT NULL DEFAULT '',
  `operational_time` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=465 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_operational_log
-- ----------------------------
BEGIN;

COMMIT;

-- ----------------------------
-- Table structure for t_platform_integral
-- ----------------------------
DROP TABLE IF EXISTS `t_platform_integral`;
CREATE TABLE `t_platform_integral` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `today_grant` bigint NOT NULL DEFAULT '0',
  `today_recovery` bigint NOT NULL DEFAULT '0',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_platform_integral
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_power
-- ----------------------------
DROP TABLE IF EXISTS `t_power`;
CREATE TABLE `t_power` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `role_id` bigint DEFAULT NULL,
  `is_use` tinyint(1) NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=285 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_power
-- ----------------------------
BEGIN;

COMMIT;

-- ----------------------------
-- Table structure for t_preview
-- ----------------------------
DROP TABLE IF EXISTS `t_preview`;
CREATE TABLE `t_preview` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `browse_total` bigint NOT NULL DEFAULT '0',
  `advert_manage_id` bigint DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `advert_manage_id` (`advert_manage_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_preview
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_privacy_protection
-- ----------------------------
DROP TABLE IF EXISTS `t_privacy_protection`;
CREATE TABLE `t_privacy_protection` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `number` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `zh_content` longtext,
  `us_content` longtext,
  `no_content` longtext,
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_privacy_protection
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_profile
-- ----------------------------
DROP TABLE IF EXISTS `t_profile`;
CREATE TABLE `t_profile` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(255) NOT NULL DEFAULT '',
  `image_url` varchar(255) NOT NULL DEFAULT '',
  `last_name` varchar(255) NOT NULL DEFAULT '',
  `first_name` varchar(255) NOT NULL DEFAULT '',
  `face_book_i_d` varchar(255) NOT NULL DEFAULT '',
  `we_chat_i_d` bigint NOT NULL DEFAULT '0',
  `remarks` varchar(255) NOT NULL DEFAULT '',
  `real_name` varchar(128) NOT NULL DEFAULT '',
  `gender` bigint NOT NULL DEFAULT '0',
  `phone` varchar(128) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `birthday` varchar(255) NOT NULL DEFAULT '',
  `personal_profile` varchar(300) NOT NULL DEFAULT '',
  `user_id` bigint DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_profile
-- ----------------------------
BEGIN;
INSERT INTO `t_profile` (`id`, `nick_name`, `image_url`, `last_name`, `first_name`, `face_book_i_d`, `we_chat_i_d`, `remarks`, `real_name`, `gender`, `phone`, `city`, `birthday`, `personal_profile`, `user_id`, `create_time`, `update_time`) VALUES (1, '', 'https://img0.baidu.com/it/u=325674188,3280397254&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500', '', '', '', 0, '', '李超成', 1, '18270681615', '', '1997-06-11T16:00:00.000Z', '', 3, '2022-04-19 06:42:23', '2022-04-19 07:38:22');
COMMIT;

-- ----------------------------
-- Table structure for t_public_welfare_organizations
-- ----------------------------
DROP TABLE IF EXISTS `t_public_welfare_organizations`;
CREATE TABLE `t_public_welfare_organizations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL DEFAULT '',
  `number` varchar(255) NOT NULL DEFAULT '',
  `business_name` varchar(255) NOT NULL DEFAULT '',
  `business_introduce` varchar(255) NOT NULL DEFAULT '',
  `business_address` varchar(255) NOT NULL DEFAULT '',
  `business_phone` varchar(255) NOT NULL DEFAULT '',
  `start_time` varchar(255) NOT NULL DEFAULT '',
  `end_time` varchar(255) NOT NULL DEFAULT '',
  `upload_time` varchar(255) NOT NULL DEFAULT '',
  `website` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `state` varchar(255) NOT NULL DEFAULT '',
  `business_bar_code` varchar(255) NOT NULL DEFAULT '',
  `organization_type` varchar(255) NOT NULL DEFAULT '',
  `volunteers` bigint NOT NULL DEFAULT '0',
  `event` bigint NOT NULL DEFAULT '0',
  `contact_person` varchar(255) NOT NULL DEFAULT '',
  `organizer` varchar(255) NOT NULL DEFAULT '',
  `score` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `number` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_public_welfare_organizations
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_push_message
-- ----------------------------
DROP TABLE IF EXISTS `t_push_message`;
CREATE TABLE `t_push_message` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `number` varchar(255) NOT NULL DEFAULT '',
  `message_classification` varchar(255) NOT NULL DEFAULT '',
  `message_subject` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) NOT NULL DEFAULT '',
  `target_users` varchar(255) NOT NULL DEFAULT '',
  `push_type` varchar(255) NOT NULL DEFAULT '',
  `push_time` varchar(255) NOT NULL DEFAULT '',
  `loop_type` varchar(255) NOT NULL DEFAULT '',
  `hour` bigint NOT NULL DEFAULT '0',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_push_message
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_reply
-- ----------------------------
DROP TABLE IF EXISTS `t_reply`;
CREATE TABLE `t_reply` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `my_feedback` varchar(255) NOT NULL DEFAULT '',
  `reply_feedback_id` bigint NOT NULL DEFAULT '0',
  `reply_content` varchar(255) NOT NULL DEFAULT '',
  `title` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_reply
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_resource
-- ----------------------------
DROP TABLE IF EXISTS `t_resource`;
CREATE TABLE `t_resource` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `url` varchar(255) NOT NULL DEFAULT '',
  `power_id` bigint NOT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `t_resource_url_power_id` (`url`,`power_id`)
) ENGINE=InnoDB AUTO_INCREMENT=325 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_resource
-- ----------------------------
BEGIN;
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (1, 'App管理获取所有', '/manage/get/all/app/user', 1, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (2, 'App管理积分交易', '/manage/time/transaction/integral', 2, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (3, '个人中心消息罐校验', '/app/check/message/irrigation', 3, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (4, '个人中心消息罐', '/app/message/irrigation', 4, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (5, 'App共享圈圈申请校验', '/manage/add/circle/admin', 5, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (6, 'App管理积分使用导出', '/manage/integral/use/excel', 6, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (7, 'App管理等级权限列表', '/manage/rights/app/grade/role/rights/list', 7, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (8, '地址联动父级ID查询', '/city/query/name', 8, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (9, '首页用户注册时间段', '/home/user/reg/period', 9, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (10, 'App管理积分发放详情', '/manage/integral/grant/get/id', 10, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (11, 'App信息好友发布', '/info/app/user/my/friends/info', 11, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (12, 'App信息订单操作', '/info/order/operation', 12, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (13, 'App信息取消关注', '/manage/follow/cancel', 13, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (14, 'App管理积分明细添加', '/manage/integral/detailed/grant/create', 14, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (15, '系统管理角色状态修改', '/system/role/update/state', 15, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (16, '个人中心消息罐已读', '/app/reply/update/state', 16, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (17, '个人中心通过订单id查询信息', '/info/by/order/id', 17, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (18, '信息管理修改', '/info/update/id', 18, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (19, '个人中心订单推送提醒', '/info/order/reminder', 17, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (20, 'App管理隐私保护声明状态', '/manage/privacy/protection/state', 19, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (21, '广告分页', '/app/advert/manage/get/all', 20, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (22, 'App信息获取详情', '/info/app/user/info/get/all', 21, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (23, 'App信息评论评论', '/info/comment/subset/create', 22, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (24, 'App管理星值计算编辑', '/manage/rules/integral/acquisition/update', 23, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (25, 'App管理星级查询', '/manage/star/query', 24, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (26, '邮箱登录', '/user/email/login', 25, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (27, '积分明细删除', '/manage/integral/detailed/DeleteS', 26, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (28, '个人中心我的地址添加', '/manage/my/address/create', 27, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (29, 'App管理星值计算编辑', '/manage/rules/average/start/update', 28, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (30, '广告预览详情', '/app/preview/get/id', 29, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (31, 'App信息收藏校验', '/info/collection/check', 30, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (32, 'App管理文件删除', '/profile/delete/file', 31, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (33, 'App信息管理喜欢取消', '/info/like/cancel', 32, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (34, 'App信息发布消息所有评价', '/info/order/evaluation', 33, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (35, 'App管理分类获取单条', '/manage/category/one', 34, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (36, 'App管理推送消息列表（admin）', '/manage/push/message/admin', 35, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (37, 'App管理积分获取删除', '/manage/rules/integral/acquisition/delete', 36, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (38, 'App信息订单投诉', '/info/app/info/order/complaint', 37, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (39, 'App信息评论', '/info/create/app/comment', 38, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (40, '信息管理删除', '/info/delete/ids', 39, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (41, '个人中心签到七天', '/sign/date/stamp', 40, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (42, 'App管理用户详情', '/profile/get/name/or/email', 41, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (43, 'App管理用户详情获取', '/profile/get/profile', 42, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (44, 'App管理反馈修改', '/app/user/feedback/update', 43, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (45, 'App管理星级列表', '/manage/star', 44, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (46, 'App管理用户协议列表', '/manage/user/protocol/query/limit', 45, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (47, '广告添加', '/app/advert/manage/create', 46, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (48, '系统管理角色管理添加', '/system/role/create', 47, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (49, '个人中心身份验证', '/user/authentication', 48, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (50, '个人中心好友同意和忽略', '/manage/friend/apply/agree/and/ignore', 49, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (51, 'App管理星值计算编辑', '/manage/rules/star/calculation/update', 50, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (52, 'App管理用户修改', '/profile/update/app', 51, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (53, '系统管理角色修改', '/system/role/update', 52, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (54, 'App管理用户删除', '/user/delete/id', 53, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (55, 'App管理券修改', '/app/coupon/manage/update', 43, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (56, 'App管理详情', '/app/user/feedback/get/id', 54, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (57, '信息管理查看', '/info/get/id', 55, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (58, 'App信息收藏取消', '/info/collection/query/limit', 56, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (59, 'App管理积分详情', '/manage/integral/details', 57, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (60, 'App管理星值计算列表', '/manage/rules/integral/acquisition/query/limit', 58, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (61, '系统管理获取角色', '/system/role/get/all', 47, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (62, '系统管理角色校验', '/system/role/query/name', 15, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (63, '个人中心券列表', '/app/coupon/get/all/app', 59, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (64, '广告预览删除', '/app/preview/delete', 60, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (65, '首页注册城市', '/home/reg/city', 61, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (66, 'App管理星值计算删除', '/manage/rules/star/calculation/delete', 62, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (67, 'App管理用户列表', '/user/', 63, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (68, '优惠券/礼品券获状态', '/app/coupon/manage/update/state', 64, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (69, '信息管理看板最新分享消息', '/info/newest/info/share', 65, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (70, 'App管理星级权限添加', '/manage/rights/ids/create', 66, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (71, '个人中心消息罐详情', '/app/reply/my/get/one', 67, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (72, '个人中心地址分类列表', '/manage/address/category/limit/query', 68, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (73, 'App共享圈添加', '/manage/circle/create', 69, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (74, 'App管理隐私保护声明编辑', '/manage/privacy/protection/update', 70, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (75, 'App管理星级权限管理', '/manage/rights/app/star/role/rights/update', 71, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (76, '系统管理角色删除', '/system/role/delete', 72, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (77, 'App管理公益组织列表', '/app/public/organization/query/limit', 73, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (78, '数据字典添加', '/dict/create', 74, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (79, 'App信息订单交易请求', '/info/order/state', 75, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (80, 'App共享圈同意加入', '/manage/circle/and/app/user/add', 76, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (81, 'App管理星级与权限', '/manage/rights/app/star/role/rights/list', 77, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (82, 'App管理用户列表', '/profile/', 78, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (83, '后台用户详情修改头像', '/profile/update/image', 79, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (84, '系统管理角色管理属性获取', '/system/role/name/all', 80, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (85, 'App信息点击', '/app/advert/click', 81, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (86, '系统设置字典列表', '/dict/query/limit', 82, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (87, '信息管理看板按照周', '/info/advert/click/statistics', 83, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (88, '系统管理管理操添加', '/user/operator/create', 84, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (89, 'App信息推送消息', '/info/app/user/info/push', 85, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (90, 'App信息喜欢点赞', '/info/like/add', 86, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (91, 'App管理特殊用户列表', '/manage/rights/app/role/special/users/all', 87, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (92, 'App管理特殊用户权限列表', '/manage/rights/app/special/users/role/list', 88, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (93, '系统管理角色管理详情', '/system/role/get/one', 89, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (94, '系统设置字典修改状态', '/dict/update/state', 64, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (95, '首页需求发布类型', '/home/demand/total', 90, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (96, 'App信息获取详情', '/info/app/one/info', 21, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (97, 'App信息我的参与', '/app/activity/user/all', 91, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (98, '积分明细列表', '/manage/integral/detailed/query', 92, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (99, 'App管理星级删除', '/manage/star/delete/ids', 93, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (100, '用户名登录', '/user/name/login', 94, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (101, 'App管理券添加', '/app/coupon/manage/create', 95, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (102, '个人中心地址分类详情', '/manage/address/category/one', 34, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (103, 'App管理星级修改', '/manage/star/update', 96, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (104, '信息看板需求', '/info/demand/publication', 97, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (105, 'App管理星值计算列表', '/manage/rules/average/start/query/limit', 58, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (106, 'App管理星值计算添加', '/manage/rules/star/calculation/create', 98, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (107, '个人中心微信登录', '/manage/we/chat/login', 99, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (108, '系统管理角色列表', '/system/role/query/limit', 100, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (109, '用户手机号注册验证', '/user/mobile/code', 101, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (110, '个人中心订单确认归还', '/info/order/confirm/return', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (111, '信息管理列表', '/info/server/query/limit', 103, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (112, 'App管理推送列表', '/manage/push/message/query/limit', 104, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (113, 'App信息订单确认支付', '/info/order/payment', 105, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (114, 'App管理用户协议详情', '/manage/user/protocol/get/one', 106, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (115, 'App管理用户协议状态', '/manage/user/protocol/state', 107, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (116, 'App管理活动删除', '/app/activity/delete', 108, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (117, 'App管理券删除', '/app/coupon/manage/delete', 109, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (118, 'App信息管理喜欢校验', '/info/like/check', 110, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (119, '个人中心修改信息', '/info/my/release/update', 111, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (120, '个人中心地址分类修改', '/manage/address/category/update', 112, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (121, 'App管理星值计算添加', '/manage/rules/average/start/create', 113, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (122, 'App管理文件下载', '/profile/download/file', 114, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (123, '广告修改', '/app/advert/manage/update', 115, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (124, '系统设置字典详情', '/dict/all', 116, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (125, 'App信息订单投诉校验', '/info/app/info/order/complaint/check', 117, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (126, '信息管理添加', '/info/create/server', 118, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (127, '信息管理看板发布总额', '/info/get/release/total', 119, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (128, '个人中心用户协议', '/manage/user/protocol/app', 120, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (129, 'App信息预览消息列表', '/info/app/user/preview/query/limit', 85, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (130, 'App共享圈退出', '/manage/circle/quit', 121, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (131, 'App管理推送详情', '/manage/push/message/get/one', 122, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (132, 'App共享圈申请', '/manage/circle/apply/create', 123, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (133, 'App共享圈查询圈', '/manage/circle/query/limit', 124, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (134, 'App共享圈修改', '/manage/circle/update', 125, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (135, '个人中心我的地址列表', '/manage/my/address/limit', 126, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (136, 'App共享圈我的加入', '/manage/my/circle/add/limit', 127, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (137, 'App管理活动列表', '/app/activity/query/limit', 128, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (138, 'App管理公益组织修改', '/app/public/organization/update', 129, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (139, '个人中心订单确申请退还积分', '/info/order/return/integral', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (140, '个人中心我的地址删除', '/manage/my/address/get/one', 130, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (141, 'App管理隐私保护声明添加', '/manage/privacy/protection/create', 131, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (142, '个人中心签到检测', '/sign/reward', 132, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (143, '广告预览修改', '/app/preview/update', 133, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (144, 'App共享圈添加校验名字唯一', '/manage/circle/see/name', 134, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (145, 'App管理积分使用修改', '/manage/integral/use/update', 135, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (146, '个人中心我的发布', '/info/my/release/query/limit', 136, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (147, '个人中心订单归还', '/info/order/return', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (148, '信息管理列表', '/info/query/limit', 137, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (149, '个人中心我的地址修改', '/manage/my/address/update', 138, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (150, '个人中心我的好友查询', '/manage/my/friend/query/limit', 139, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (151, '个人中心获取券校验', '/app/coupon/app/user/get/check', 140, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (152, 'App管理公益组织添加', '/app/public/organization/create', 129, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (153, '个人中心首页条件查询', '/info/category/latitude/limit', 111, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (154, 'App管理积分获取添加', '/manage/rules/integral/acquisition/create', 141, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (155, 'App管理用户交易笔数', '/manage/time/transaction', 142, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (156, '系统管理操作日志', '/system/log/query/limit', 143, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (157, 'App管理分类删除', '/manage/category/delete', 144, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (158, '系统设置字典修改', '/dict/update/dict', 145, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (159, '个人中心我的订单', '/info/my/order/query/limit', 146, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (160, '个人中心订单拒绝退分', '/info/order/refuse/out/integral', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (161, 'App信息关注校验', '/manage/follow/check', 147, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (162, 'App管理用户删除', '/profile/delete/id', 148, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (163, '用户邮箱注册', '/user/email/reg', 149, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (164, 'App管理反馈回复', '/app/reply/add', 150, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (165, '个人中心取消订单', '/info/info/error/info', 151, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (166, 'App共享圈公告修改', '/manage/circle/notice/update', 152, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (167, 'App信息管理我的关注列表', '/manage/my/follow/list', 153, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (168, 'App管理星级权限列表', '/manage/rights/app/resources/all', 154, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (169, '个人中心聊天时的头像', '/profile/ws/my/and/friend/image', 155, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (170, '个人中心签到', '/sign/ln', 156, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (171, '系统管理操作员删除', '/system/operator/delete', 157, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (172, 'App管理公益组织获取单条', '/app/public/organization/get/one', 129, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (173, '信息管理导出', '/info/excel', 158, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (174, 'App共享圈申请成员列表', '/manage/circle/apply/get/all', 159, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (175, '个人中心用户详情', '/user/get/id', 160, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (176, '个人中心下架信息', '/info/my/release/lower', 161, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (177, 'App管理修改', '/manage/update/app/user', 162, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (178, 'App管理通过name获取信息', '/manage/ws/app/user/info', 163, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (179, '个人中心订单校验', '/info/order/apply/check', 164, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (180, 'App管理分类列表', '/manage/category/limit/query', 165, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (181, 'App管理公益组织导出', '/app/public/organization/excel', 166, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (182, 'App管理地址联动', '/city/all', 8, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (183, '首页在线用户', '/home/online/users', 167, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (184, '广告详情', '/app/advert/manage/get/id', 168, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (185, '个人中心facebook登录', '/manage/face/book/login', 169, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (186, 'App管理隐私保护声明详情', '/manage/privacy/protection/get/one', 170, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (187, 'App管理隐私保护声明删除', '/manage/privacy/protection/delete', 171, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (188, 'App管理星级详情', '/manage/star/get/id', 172, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (189, 'App管理用户协议添加', '/manage/user/protocol/create', 173, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (190, '系统管理操作员修改', '/system/operator/update', 174, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (191, 'App管理条件name获取', '/user/get/all/name', 63, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (192, 'App信息信息发布', '/info/create', 95, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (193, '个人中心地址分类删除', '/manage/address/category/delete', 175, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (194, 'App管理删除', '/manage/delete/ids', 176, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (195, 'App管理星值计算删除', '/manage/rules/average/start/delete', 177, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (196, 'App管理个人积分', '/manage/server/app/user/id/get/all', 178, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (197, 'App管理星值计算详情', '/manage/rules/star/calculation/get/one', 179, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (198, 'App消息链接', '/ws/push', 180, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (199, 'App管理券详情', '/app/coupon/manage/get/id', 54, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (200, '个人中心订单同意退分', '/info/order/adopt/out/integral', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (201, 'App共享圈校验', '/manage/check/circle', 181, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (202, '个人中心删除订单', '/info/order/delete', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (203, 'App管理积分明细修改', '/manage/integral/detailed/update', 182, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (204, 'App管理推送添加', '/manage/push/message/create', 183, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (205, 'App管理反馈添加', '/app/user/feedback/create', 95, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (206, '个人中心删除信息', '/info/my/release/delete', 184, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (207, '个人中心订单取消退分', '/info/order/cancel/out/integral', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (208, '系统管理用户与角色', '/system/role/and/user', 185, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (209, 'App共享圈圈申请校验', '/manage/circle/apply/check', 5, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (210, '个人中心好友搜索', '/manage/friend/query/limit/search', 186, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (211, 'App管理推送消息（app）', '/manage/push/message/app', 187, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (212, 'App管理星级添加', '/manage/star/create', 188, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (213, 'App信息获取广告', '/app/advert/app/all', 189, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (214, 'App信息订单交易申请', '/info/order/create', 190, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (215, 'App管理分类修改排序', '/manage/category/sort', 191, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (216, 'App管理积分发放添加', '/manage/integral/grant/create', 192, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (217, 'App管理用户增长图', '/manage/sum/reg', 193, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (218, '系统管理操作员列表', '/system/operator/query/limit', 194, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (219, '系统管理角色状态筛选', '/system/role/state', 195, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (220, '用户邮箱验证码', '/user/email/code', 196, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (221, 'App信息活动参与', '/app/activity/participants/create', 91, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (222, '个人中心地址分类添加', '/manage/address/category/create', 197, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (223, 'App管理分类添加', '/manage/category/create', 198, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (224, 'App管理推送删除', '/manage/push/message/delete', 199, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (225, 'App管理文件上传', '/profile/upload/file', 200, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (226, '首页动态更新', '/home/dynamic/update', 201, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (227, 'App管理分类修改', '/manage/category/update', 202, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (228, '个人中心好友申请校验', '/manage/friend/apply/check', 203, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (229, 'App管理用户协议编辑', '/manage/user/protocol/update', 70, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (230, '个人中心用户退出', '/user/logout', 204, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (231, 'App管理反馈列表', '/app/user/feedback/get/all', 205, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (232, '首页分享发布类型', '/home/share/total', 206, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (233, 'App管理积分使用详情', '/manage/integral/use/get/id', 207, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (234, 'App管理权限删除', '/manage/rights/ids/delete', 208, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (235, 'App管理星值计算详情', '/manage/rules/average/start/get/one', 209, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (236, 'App信息获取所有', '/info/app/all', 210, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (237, '个人中心评价', '/info/order/evaluate', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (238, '个人中心地址分类排序', '/manage/address/category/sort', 211, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (239, 'App管理用户协议删除', '/manage/user/protocol/delete', 212, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (240, '广告删除', '/app/advert/manage/delete', 213, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (241, 'App共享圈圈主踢人', '/manage/circle/kick', 214, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (242, 'App信息标签添加', '/manage/label/create', 215, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (243, 'App管理积分发放修改', '/manage/integral/grant/update', 216, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (244, 'App管理查看个人信息', '/manage/see/one/info', 217, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (245, '个人中心我的获取', '/app/coupon/get/all/app/user', 1, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (246, '优惠券/礼品券使用', '/app/user/coupon/state', 64, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (247, '个人中心好友删除', '/manage/friend/delete', 139, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (248, '个人中心隐私保护声明', '/manage/privacy/protection/app', 218, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (249, 'App管理今日积分', '/manage/time/integral', 219, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (250, 'App信息获取订单Id', '/info/order/get/one/by/id', 220, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (251, 'App管理积分明细详情', '/manage/integral/detailed/get/id', 221, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (252, 'App管理积分使用列表', '/manage/integral/use/query', 222, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (253, 'App共享圈详情公告校验', '/manage/circle/notice/check/get/one', 223, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (254, 'App管理推送消息修改查看状态（admin）', '/manage/push/message/see/state/admin', 224, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (255, '个人中心邮箱修改密码', '/user/update/email/password', 225, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (256, 'App管理用户修改', '/user/update/id', 226, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (257, 'App管理活动详情', '/app/activity/get/one', 227, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (258, '广告预览添加', '/app/preview/create', 228, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (259, '信息发布类型查询', '/info/release/type', 229, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (260, '个人中心订单申请投诉', '/info/order/apply/complaint', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (261, 'App管理积分获取详情', '/manage/rules/integral/acquisition/get/one', 230, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (262, '首页信息发布类别', '/home/week/total', 231, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (263, '个人中心取消订单原因', '/info/cancel/order', 232, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (264, 'App信息收藏取消', '/info/collection/cancel', 56, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (265, 'App共享圈里面发布的信息', '/manage/circle/info/get/all', 233, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (266, 'App管理积分使用添加', '/manage/detailed/use/create', 234, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (267, 'App信息标签删除', '/manage/label/delete', 235, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (268, 'App管理私保护声明列表', '/manage/privacy/protection/query/limit', 236, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (269, 'App管理活动添加', '/app/activity/create', 237, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (270, '信息管理看板完成总额', '/info/get/info/release/total', 238, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (271, 'App管理圈公共信息', '/manage/my/follow/circle/friends/info', 239, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (272, 'App共享圈信息发布', '/manage/create/info/circle/name', 240, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (273, '个人中心好友申请', '/manage/friend/apply', 241, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (274, '信息管理看板最新需求', '/info/newest/info/demand', 242, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (275, 'App管理通过name获取信息', '/manage/app/user/get/all/name', 163, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (276, 'App管理用户添加', '/manage/create', 243, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (277, '个人中心信息订单申请列表', '/info/order/apply/list', 244, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (278, '信息管理看板分享发布量', '/info/shared/publication', 245, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (279, 'App管理用户状态', '/manage/app/user/state', 246, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (280, 'App信息关注添加', '/manage/follow/create', 247, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (281, 'App管理推送修改', '/manage/push/message/update', 248, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (282, 'App管理反馈删除', '/app/user/feedback/delete', 249, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (283, '首页用户注册数量', '/home/reg/user/total', 250, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (284, 'App信息查询发布所有', '/info/app/user/get/all/info', 251, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (285, '用户详情修改', '/profile/update/profile', 252, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (286, 'App管理活动修改', '/app/activity/update', 253, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (287, '个人中心确认收件', '/info/order/sure/receipt', 232, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (288, 'App管理星值计算列表', '/manage/rules/star/calculation/query/limit', 254, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (289, '系统管理获取单条数据', '/system/get/id', 255, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (290, '系统管理操作员状态', '/system/operator/state', 256, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (291, 'App信息个人信息及发布', '/info/app/get/info/profile/one', 257, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (292, '个人中心订单48小时校验', '/info/order/forty/eight/hour/check', 258, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (293, 'App信息我关注消息', '/manage/my/follow/info', 259, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (294, '个人中心我发起的订单', '/info/my/info/initiated/order/query/limit', 260, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (295, '信息管理看板最新消息', '/info/newest/info', 261, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (296, '个人中心订单确认给出', '/info/order/sure/give', 102, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (297, 'App共享圈我的列表', '/manage/circle/all', 262, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (298, '个人中心修改密码', '/user/update/name/password', 263, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (299, 'App管理券列表', '/app/coupon/manage/get/all', 264, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (300, 'App管理公益组织删除', '/app/public/organization/delete', 265, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (301, 'App信息我的圈发布消息', '/info/app/user/my/create/circle/get/all', 266, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (302, '个人中心我接收订单', '/info/my/info/receive/order/query/limit', 267, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (303, '个人中心我的好友', '/manage/my/friend/and/apply', 139, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (304, 'App信息查询预览', '/info/app/user/preview', 268, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (305, 'App管理获取单条数据', '/manage/app/user/get/id', 269, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (306, 'App管理推送消息获取详情（admin）', '/manage/push/message/get/one/admin', 270, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (307, 'App管理星级星级列表', '/manage/rights/app/role/all', 271, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (308, '用户发送邮箱验证码', '/user/get/code', 272, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (309, '广告数据导出', '/app/advert/app/server/excel', 273, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (310, '个人中心获取券', '/app/coupon/app/user/get', 140, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (311, 'App信息首页地址查询', '/info/app/address', 274, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (312, 'App管理积分发放删除', '/manage/integral/grant/DeleteS', 275, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (313, 'App管理等级权限', '/manage/rights/app/role/grade/all', 87, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (314, '系统管理操作员详情', '/system/operator/get/one', 276, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (315, 'App消息链接', '/ws/like', 180, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (316, '首页类别与属性', '/home/category/and/type', 277, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (317, 'App管理name获取值', '/manage/app/user/get/name', 278, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (318, 'app信息圈公告', '/manage/circle/and/notice', 279, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (319, 'App管理积分使用删除', '/manage/integral/use/DeleteS', 280, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (320, '个人中心通过token获去名字和头像', '/profile/adopt/token/get/name/an/images', 155, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (321, '用户验证邮箱验证码', '/user/check/code', 281, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (322, 'App信息收藏', '/info/collection/add', 282, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (323, 'App共享圈忽视', '/manage/circle/apply/ignore', 283, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
INSERT INTO `t_resource` (`id`, `name`, `url`, `power_id`, `create_time`, `update_time`) VALUES (324, 'App管理积分发放列表', '/manage/integral/grant/query', 284, '2022-04-19 11:33:46', '2022-04-19 11:33:46');
COMMIT;

-- ----------------------------
-- Table structure for t_role
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `state` tinyint(1) NOT NULL DEFAULT '0',
  `total` bigint NOT NULL DEFAULT '0',
  `role_type` bigint NOT NULL DEFAULT '0',
  `remarks` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_role
-- ----------------------------
BEGIN;
INSERT INTO `t_role` (`id`, `name`, `state`, `total`, `role_type`, `remarks`, `create_time`, `update_time`) VALUES (1, 'admin', 1, 1, 0, 'Admin', '2022-04-19 06:41:47', '2022-04-19 06:42:37');
COMMIT;

-- ----------------------------
-- Table structure for t_role_t_resources
-- ----------------------------
DROP TABLE IF EXISTS `t_role_t_resources`;
CREATE TABLE `t_role_t_resources` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `t_role_id` bigint NOT NULL,
  `t_resource_id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_role_t_resources
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_role_t_users
-- ----------------------------
DROP TABLE IF EXISTS `t_role_t_users`;
CREATE TABLE `t_role_t_users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `t_role_id` bigint NOT NULL,
  `t_user_id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_role_t_users
-- ----------------------------
BEGIN;
INSERT INTO `t_role_t_users` (`id`, `t_role_id`, `t_user_id`) VALUES (1, 1, 3);
COMMIT;

-- ----------------------------
-- Table structure for t_sign_in
-- ----------------------------
DROP TABLE IF EXISTS `t_sign_in`;
CREATE TABLE `t_sign_in` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `date_day_format` bigint NOT NULL DEFAULT '0',
  `sign_ln_day` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_sign_in
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_star
-- ----------------------------
DROP TABLE IF EXISTS `t_star`;
CREATE TABLE `t_star` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app_user_profile_id` bigint NOT NULL,
  `project_name` varchar(255) NOT NULL DEFAULT '',
  `access_path` varchar(255) NOT NULL DEFAULT '',
  `evaluation` varchar(255) NOT NULL DEFAULT '',
  `avg_star` bigint NOT NULL DEFAULT '0',
  `grant_reason` varchar(255) NOT NULL DEFAULT '',
  `grant_star` varchar(255) NOT NULL DEFAULT '',
  `cumulative_star` varchar(255) NOT NULL DEFAULT '',
  `release_time` varchar(50) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_user_profile_id` (`app_user_profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_star
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_star_calculation
-- ----------------------------
DROP TABLE IF EXISTS `t_star_calculation`;
CREATE TABLE `t_star_calculation` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `number` varchar(255) NOT NULL DEFAULT '',
  `evaluation_star_number` bigint NOT NULL DEFAULT '0',
  `systematic_star_calculations` bigint NOT NULL DEFAULT '0',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `number` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_star_calculation
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_star_rights_ids
-- ----------------------------
DROP TABLE IF EXISTS `t_star_rights_ids`;
CREATE TABLE `t_star_rights_ids` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `rights_type` varchar(255) NOT NULL DEFAULT '',
  `resource_s` bigint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_star_rights_ids
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_statistics
-- ----------------------------
DROP TABLE IF EXISTS `t_statistics`;
CREATE TABLE `t_statistics` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `release_time` varchar(255) NOT NULL DEFAULT '',
  `completion_time` varchar(255) NOT NULL DEFAULT '',
  `info_state` varchar(50) NOT NULL DEFAULT '',
  `nick_name` varchar(255) NOT NULL DEFAULT '',
  `user_id` bigint NOT NULL DEFAULT '0',
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `is_delete` bigint NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL DEFAULT '',
  `title` varchar(128) NOT NULL DEFAULT '',
  `content` varchar(2000) NOT NULL DEFAULT '',
  `content_image` varchar(600) NOT NULL DEFAULT '',
  `integral` varchar(500) NOT NULL DEFAULT '',
  `share_address` varchar(500) NOT NULL DEFAULT '',
  `longitude` varchar(255) NOT NULL DEFAULT '',
  `latitude` varchar(255) NOT NULL DEFAULT '',
  `grade` varchar(50) NOT NULL DEFAULT '',
  `circle_id` bigint NOT NULL,
  `address` varchar(255) NOT NULL DEFAULT '',
  `number` bigint NOT NULL DEFAULT '0',
  `return_date` bigint NOT NULL DEFAULT '0',
  `release_type` varchar(50) NOT NULL DEFAULT '',
  `category` varchar(255) NOT NULL DEFAULT '',
  `transaction_type` varchar(50) NOT NULL DEFAULT '',
  `share_type` varchar(255) NOT NULL DEFAULT '',
  `transaction_result` varchar(255) NOT NULL DEFAULT '',
  `product_name` varchar(255) NOT NULL DEFAULT '',
  `source` varchar(255) NOT NULL DEFAULT '',
  `chat_content` varchar(255) NOT NULL DEFAULT '',
  `week` bigint NOT NULL DEFAULT '0',
  `like_number` bigint NOT NULL DEFAULT '0',
  `collection_number` bigint NOT NULL DEFAULT '0',
  `info_number` bigint NOT NULL DEFAULT '0',
  `check` tinyint(1) NOT NULL DEFAULT '0',
  `comment_number` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_statistics
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_transaction
-- ----------------------------
DROP TABLE IF EXISTS `t_transaction`;
CREATE TABLE `t_transaction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `expenditure_id` bigint NOT NULL DEFAULT '0',
  `income_id` bigint NOT NULL DEFAULT '0',
  `integral` bigint NOT NULL DEFAULT '0',
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_transaction
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_unique_login
-- ----------------------------
DROP TABLE IF EXISTS `t_unique_login`;
CREATE TABLE `t_unique_login` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL DEFAULT '0',
  `user_name` varchar(255) NOT NULL DEFAULT '',
  `latest_login_time` bigint NOT NULL DEFAULT '0',
  `login_number` bigint NOT NULL DEFAULT '0',
  `login_ip` varchar(255) NOT NULL DEFAULT '',
  `token` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_unique_login
-- ----------------------------
BEGIN;
INSERT INTO `t_unique_login` (`id`, `user_id`, `user_name`, `latest_login_time`, `login_number`, `login_ip`, `token`) VALUES (1, 1, 'admin', 1650339248775, 3, '172.22.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTIwNzg0OTMsImlzcyI6Ikh5cGVyIiwibmJmIjoxNjUwMzUwNDkzfQ.WDm0KGlb57miKEs-aEO6xmlsqAt9RiKEgbfjaz49ruA');
INSERT INTO `t_unique_login` (`id`, `user_id`, `user_name`, `latest_login_time`, `login_number`, `login_ip`, `token`) VALUES (2, 2, 'Cc', 1650339274890, 1, '127.0.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTIwNjcyNzQsImlzcyI6Ikh5cGVyIiwibmJmIjoxNjUwMzM5Mjc0fQ.XwwVIpevwsKNgavH30p6hCmv6aZakJMs6G4BCp-ve_U');
INSERT INTO `t_unique_login` (`id`, `user_id`, `user_name`, `latest_login_time`, `login_number`, `login_ip`, `token`) VALUES (3, 3, 'LCC', 1650350562837, 5, '172.18.0.1', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTIwODU0ODQsImlzcyI6Ikh5cGVyIiwibmJmIjoxNjUwMzU3NDg0fQ.g7MYls56CRSiBZE5s0I279Zv6URfqWetHu98Poo63pk');
COMMIT;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_delete` bigint NOT NULL DEFAULT '0',
  `name` varchar(128) NOT NULL DEFAULT '',
  `last_logon_time` varchar(255) NOT NULL DEFAULT '',
  `user_type` bigint NOT NULL DEFAULT '0',
  `email` varchar(128) NOT NULL DEFAULT '',
  `password` varchar(128) NOT NULL DEFAULT '',
  `salt` varchar(32) NOT NULL DEFAULT '',
  `add_time` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_user
-- ----------------------------
BEGIN;
INSERT INTO `t_user` (`id`, `user_delete`, `name`, `last_logon_time`, `user_type`, `email`, `password`, `salt`, `add_time`, `create_time`, `update_time`) VALUES (1, 1, 'admin', '1650350493219', 0, 'hyperli0612@gmail.com', '1989d211c25af51b94cf54e82e238c51', 'dfc826702e7b9c72b8ec7c7b1efca429', '1650277535491', '2022-04-18 18:25:35', '2022-04-19 06:41:33');
INSERT INTO `t_user` (`id`, `user_delete`, `name`, `last_logon_time`, `user_type`, `email`, `password`, `salt`, `add_time`, `create_time`, `update_time`) VALUES (3, 1, 'Cc360428', '1650357484558', 0, 'li_chao_cheng@163.com', 'ff8b5f688faa1c376f52bb004c83d278', '99891ec237194d87e5a79c3108889760', '1650350543168', '2022-04-19 06:42:23', '2022-04-19 08:38:05');
COMMIT;

-- ----------------------------
-- Table structure for t_user_feedback
-- ----------------------------
DROP TABLE IF EXISTS `t_user_feedback`;
CREATE TABLE `t_user_feedback` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `number` varchar(255) NOT NULL DEFAULT '',
  `user_id` bigint NOT NULL DEFAULT '0',
  `app_user_profile_id` bigint NOT NULL DEFAULT '0',
  `user_feedback_title` varchar(255) NOT NULL DEFAULT '',
  `feedback_content` varchar(500) NOT NULL DEFAULT '',
  `feedback_time` varchar(255) NOT NULL DEFAULT '',
  `return_content` varchar(255) NOT NULL DEFAULT '',
  `return_user` varchar(255) NOT NULL DEFAULT '',
  `state` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_user_feedback
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_user_protocol
-- ----------------------------
DROP TABLE IF EXISTS `t_user_protocol`;
CREATE TABLE `t_user_protocol` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `number` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `zh_content` longtext,
  `us_content` longtext,
  `no_content` longtext,
  `state` bigint NOT NULL DEFAULT '0',
  `add_time` bigint NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_user_protocol
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for t_we_chat
-- ----------------------------
DROP TABLE IF EXISTS `t_we_chat`;
CREATE TABLE `t_we_chat` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `open_id` varchar(255) NOT NULL DEFAULT '',
  `nickname` varchar(255) NOT NULL DEFAULT '',
  `sex` bigint NOT NULL DEFAULT '0',
  `province` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `country` varchar(255) NOT NULL DEFAULT '',
  `head_img_url` varchar(255) NOT NULL DEFAULT '',
  `privilege` varchar(255) NOT NULL DEFAULT '',
  `union_id` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of t_we_chat
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

```