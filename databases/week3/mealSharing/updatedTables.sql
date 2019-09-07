-- fixed issue about default vaule of number_of_guests and max_reservation
ALTER TABLE `meal_sharing_website`.`Reservation` 
CHANGE COLUMN `number_of_guests` `number_of_guests` INT(10) UNSIGNED NOT NULL DEFAULT 1 ;

ALTER TABLE `meal_sharing_website`.`Meal` 
CHANGE COLUMN `max_reservation` `max_reservation` INT(10) UNSIGNED NULL DEFAULT 1 ;

-- fixed issue about data type of money 
ALTER TABLE `meal_sharing_website`.`Meal` 
CHANGE COLUMN `price` `price` DECIMAL(13,2) NOT NULL ;
