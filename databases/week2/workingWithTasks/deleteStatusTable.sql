use workingWithTask;

-- ALTER TABLE task DROP FOREIGN KEY fk_status;
-- ALTER TABLE task DROP COLUMN status_id
-- DROP TABLE status;

-- use enum instead of extra table
-- ALTER TABLE task
-- ADD status ENUM ('not-started', 'ongoing', 'finished') NOT NULL;

DESCRIBE task
