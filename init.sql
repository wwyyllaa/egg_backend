
CREATE TABLE `egg-sequelize-example-dev`.`goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(30) DEFAULT NULL COMMENT 'goods name',
  `price` int(11) DEFAULT NULL COMMENT 'goods price',
  `image` text DEFAULT NULL COMMENT 'goods image',
  `image1` text DEFAULT NULL COMMENT 'goods image',
  `image2` text DEFAULT NULL COMMENT 'goods image',
  `image3` text DEFAULT NULL COMMENT 'goods image',
  `description` text DEFAULT NULL COMMENT 'goods description',
  `remaining_stock` int(11) DEFAULT NULL COMMENT 'goods remaining_stock',
  `discount` float DEFAULT NULL COMMENT 'goods discount',
  `produce_time` datetime DEFAULT NULL COMMENT 'produce time',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='goods';