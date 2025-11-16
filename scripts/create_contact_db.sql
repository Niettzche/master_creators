
CREATE DATABASE IF NOT EXISTS mastercreators_contacts
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE mastercreators_contacts;

CREATE TABLE IF NOT EXISTS diagnostic_requests (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(150) NOT NULL,
  company VARCHAR(150) NOT NULL,
  role_title VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL,
  phone VARCHAR(50) NULL,
  context_summary TEXT NOT NULL,
  main_pain TEXT NOT NULL,
  motivation TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_email_created_at (email, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
