use workingWithTask;

-- 1. Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
-- INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
-- VALUES ('do my homework','week2 database',now(),'2019-08-19',now(),2,1);

-- 2. Change the title of a task with these attributes: taskID, newTitle
-- UPDATE task SET title = 'newTitle' WHERE id = 36;

-- 3. Change the task due date with these attributes: taskID, newDueDate
-- UPDATE task SET due_date = '2017-12-19 11:54:08' WHERE id = 36;

-- 4. Change the task status with these attributes: taskID, newStatus
-- UPDATE task SET status_id = 1 WHERE id = 36;

-- 5. Mark a task as complete with this attribute
-- UPDATE task SET status_id = 3 WHERE id = 36;

-- 6. Delete task with this attribute: taskID
-- DELETE FROM task WHERE id = 36;


SELECT * FROM task