-- CREATE DATABASE school;
USE school;

-- Status: id, name
-- CREATE TABLE `status`(
-- `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
-- `name` varchar(255) NOT NULL,

-- PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Class: with the columns: id, name, begins (date), ends (date)
-- CREATE TABLE `class` (
-- `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
-- `name` varchar(255) NOT NULL,
-- `begins` date NOT NULL,
-- `ends` date NOT NULL,
-- `status_id` int(10) unsigned NOT NULL,

-- PRIMARY KEY (`id`),
-- CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)
-- CREATE TABLE `student`(
-- `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
-- `name` varchar(255) NOT NULL,
-- `email` varchar(255) NOT NULL,
-- `phone` varchar(50) NOT NULL,
-- `class_id` int(10) unsigned DEFAULT NULL,

-- PRIMARY KEY (`id`),
-- CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table.
-- ALTER TABLE student ADD INDEX index_name (name);
-- SHOW INDEX FROM student

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
-- INSERT INTO status VALUES (NULL,'not-started'), (NULL,'ongoing'), (NULL,'finished');
-- SELECT * FROM status


