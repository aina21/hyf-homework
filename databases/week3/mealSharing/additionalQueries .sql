-- Get meals that has a price smaller than a specific price fx 90
-- SELECT * FROM Meal 
-- WHERE price < 90;

-- Get meals that still has available reservations
-- SELECT * FROM Meal
-- JOIN Reservation
-- ON Meal.id = Reservation.meal_id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
-- SELECT * FROM Meal 
-- WHERE title like '%Rød grød med%';

-- Get meals that has been created between two dates

-- Get only specific number of meals fx return only 5 meals
-- SELECT * FROM Meal
-- LIMIT 5;

-- Get the meals that have good reviews
-- SELECT Meal.*, Review.star FROM Meal
-- JOIN Review
-- ON Meal.id = Review.meal_id
-- WHERE Review.star > 3;

-- Get reservations for a specific meal sorted by created_date
-- SELECT Meal.title, Reservation.number_of_guests, Reservation.created_date
-- FROM Meal 
-- JOIN Reservation
-- ON Meal.id = Reservation.meal_id
-- ORDER BY Reservation.created_date 

-- Sort all meals by average number of stars in the reviews
SELECT Meal.title, AVG(Review.star) AS star
FROM Meal
LEFT JOIN Review
ON Meal.id = Review.meal_id
GROUP BY Meal.title
ORDER BY star DESC


