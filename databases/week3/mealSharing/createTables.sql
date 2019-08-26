USE meal_sharing_website;
SET NAMES utf8mb4;

-- CREATE TABLE `Meal` (
--   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `title` varchar(255) NOT NULL,
--   `description` text NULL DEFAULT NULL,
--   `location` varchar(255) NOT NULL,
--   `when` DATETIME NOT NULL,
--   `max_reservation` int(10) DEFAULT 0,
--   `price` decimal(5,2) NOT NULL,
--   `created_date` DATE NOT NULL,
--   
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- CREATE TABLE `Reservation` (
--   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `number_of_guests` int(10) unsigned NOT NULL DEFAULT 0,
--   `meal_id` int(10) unsigned NOT NULL,
--   `created_date` DATE NOT NULL,
--   
--   CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `star` int(10) unsigned,
  `created_date` DATE NOT NULL,
  
  CONSTRAINT `fk_meal_2` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;