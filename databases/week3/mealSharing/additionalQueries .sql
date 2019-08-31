-- Get meals that has a price smaller than a specific price fx 90
-- SELECT * FROM Meal 
-- WHERE price < 90;

-- Get meals that still has available reservations
-- SELECT Meal.title, Meal.max_reservation, Reservation.number_of_guests FROM Meal
-- JOIN Reservation
-- ON Meal.id = Reservation.meal_id
-- WHERE Meal.max_reservation > Reservation.number_of_guests;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- SELECT * FROM Meal 
-- WHERE title like '%Rød grød med%';

-- Get meals that has been created between two dates
SELECT * FROM Meal
WHERE created_date BETWEEN '2019-08-25' AND '2019-08-27'

-- Get only specific number of meals fx return only 5 meals
-- SELECT * FROM Meal
-- LIMIT 5;

-- Get the meals that have good reviews
-- SELECT Meal.title, AVG(Review.star) AS star FROM Meal
-- JOIN Review
-- ON Meal.id = Review.meal_id
-- GROUP BY Meal.title
-- HAVING AVG(Review.star) > 3;

-- Get reservations for a specific meal sorted by created_date
-- SELECT Meal.title, Reservation.number_of_guests, Reservation.created_date
-- FROM Meal 
-- JOIN Reservation
-- ON Meal.id = Reservation.meal_id
-- ORDER BY Reservation.created_date 

-- Sort all meals by average number of stars in the reviews
-- SELECT Meal.title, AVG(Review.star) AS star
-- FROM Meal
-- LEFT JOIN Review
-- ON Meal.id = Review.meal_id
-- GROUP BY Meal.title
-- ORDER BY star DESC


