-- Insert all 40 database products into the products table
-- Run this script in your Supabase SQL Editor

INSERT INTO products (title, description, format, record_count, price, category, region) VALUES

-- 1. Database - MBA, BBA, BBM Entrance Exams (5 products)
('MBA Aspirants Database 2025', 'Comprehensive database of MBA entrance exam aspirants across India for 2025', 'Excel', 85000, 3499, 'mba-bba-bbm-entrance-exams', 'PAN India'),
('BBM 2nd Year Students 2024', 'Database of BBM 2nd year students in Maharashtra for 2024', 'Excel', 12000, 899, 'mba-bba-bbm-entrance-exams', 'Maharashtra'),
('BBA Entrance Aspirants 2025', 'Database of BBA entrance exam aspirants in Karnataka for 2025', 'Excel', 21000, 1499, 'mba-bba-bbm-entrance-exams', 'Karnataka'),
('MBA CET Registered Students', 'Students registered for MBA CET entrance exam in Telangana', 'Excel', 9800, 749, 'mba-bba-bbm-entrance-exams', 'Telangana'),
('BBM Colleges Final Year List', 'Final year BBM students from colleges in Tamil Nadu', 'Excel', 5200, 599, 'mba-bba-bbm-entrance-exams', 'Tamil Nadu'),

-- 2. Database - Upto 12th Standard (5 products)
('10th Grade Students – CBSE', 'CBSE 10th grade students database across PAN India', 'Excel', 75000, 2999, 'upto-12th-standard', 'PAN India'),
('12th Science Students – Gujarat Board', 'Gujarat Board 12th Science stream students database', 'Excel', 32000, 1399, 'upto-12th-standard', 'Gujarat Board'),
('11th Class Commerce – Delhi', '11th class Commerce students database in Delhi', 'Excel', 14200, 799, 'upto-12th-standard', 'Delhi'),
('State Board 12th Arts Students – Rajasthan', 'Rajasthan State Board 12th Arts stream students database', 'Excel', 19800, 999, 'upto-12th-standard', 'Rajasthan'),
('Pre-Board Appeared Students – Maharashtra', 'Students who appeared for pre-board examinations in Maharashtra', 'Excel', 10000, 699, 'upto-12th-standard', 'Maharashtra'),

-- 3. Database - Engineering, Diploma Aspirants (5 products)
('Diploma Final Year Students – Telangana', 'Final year diploma students database in Telangana', 'Excel', 22000, 1499, 'engineering-diploma-aspirants', 'Telangana'),
('Engineering Entrance Aspirants – 2025 – India', 'Engineering entrance exam aspirants database across India for 2025', 'Excel', 110000, 3999, 'engineering-diploma-aspirants', 'India'),
('Polytechnic Students – AP & TS', 'Polytechnic students database in Andhra Pradesh and Telangana', 'Excel', 18500, 1299, 'engineering-diploma-aspirants', 'AP & TS'),
('B.Tech 1st Year Students – Tamil Nadu', 'First year B.Tech students database in Tamil Nadu', 'Excel', 16000, 999, 'engineering-diploma-aspirants', 'Tamil Nadu'),
('Engineering 4th Year Students – Maharashtra', 'Fourth year engineering students database in Maharashtra', 'Excel', 20000, 1799, 'engineering-diploma-aspirants', 'Maharashtra'),

-- 4. Database - Medical Aspirants (5 products)
('NEET Aspirants 2025 – PAN India', 'NEET entrance exam aspirants database across PAN India for 2025', 'Excel', 125000, 4499, 'medical-aspirants', 'PAN India'),
('Medical Entrance Coaching Students – Telangana', 'Students enrolled in medical entrance coaching institutes in Telangana', 'Excel', 18000, 1199, 'medical-aspirants', 'Telangana'),
('MBBS Final Year Students – Karnataka', 'Final year MBBS students database in Karnataka', 'Excel', 8000, 999, 'medical-aspirants', 'Karnataka'),
('BDS 1st Year – Tamil Nadu', 'First year BDS students database in Tamil Nadu', 'Excel', 5500, 599, 'medical-aspirants', 'Tamil Nadu'),
('Medical Counselling Registrants – North India', 'Students registered for medical counselling in North India', 'Excel', 10000, 899, 'medical-aspirants', 'North India'),

-- 5. Database - Final Year, Graduates (5 products)
('Final Year Commerce Students – AP', 'Final year Commerce students database in Andhra Pradesh', 'Excel', 12000, 899, 'final-year-graduates', 'AP'),
('Graduate Passed-Out 2023 – PAN India', 'Graduates who passed out in 2023 across PAN India', 'Excel', 55000, 2499, 'final-year-graduates', 'PAN India'),
('Final Year Science Students – Telangana', 'Final year Science students database in Telangana', 'Excel', 8500, 749, 'final-year-graduates', 'Telangana'),
('BA Final Year – Tamil Nadu', 'Final year BA students database in Tamil Nadu', 'Excel', 10000, 799, 'final-year-graduates', 'Tamil Nadu'),
('Job Seeking Graduates – India', 'Graduates actively seeking jobs across India', 'Excel', 100000, 3299, 'final-year-graduates', 'India'),

-- 6. Database - Under Graduate Entrance Exams (5 products)
('UG Entrance Aspirants 2025 – India', 'Undergraduate entrance exam aspirants database across India for 2025', 'Excel', 110000, 3499, 'ug-entrance-exams', 'India'),
('CLAT Aspirants – North India', 'CLAT entrance exam aspirants database in North India', 'Excel', 8000, 999, 'ug-entrance-exams', 'North India'),
('B.Sc Entrance Students – Maharashtra', 'B.Sc entrance exam students database in Maharashtra', 'Excel', 13000, 899, 'ug-entrance-exams', 'Maharashtra'),
('Hotel Management Entrance Candidates – South India', 'Hotel Management entrance exam candidates database in South India', 'Excel', 9200, 749, 'ug-entrance-exams', 'South India'),
('General UG College Applications – India', 'Students who applied for general undergraduate colleges across India', 'Excel', 120000, 3999, 'ug-entrance-exams', 'India'),

-- 7. Database - CA, Law, Journalism, Mass Comm Entrance Exams (5 products)
('CA Foundation Students – India', 'CA Foundation course students database across India', 'Excel', 45000, 2199, 'ca-law-journalism-mass-comm-entrance-exams', 'India'),
('Law Entrance Aspirants – Maharashtra', 'Law entrance exam aspirants database in Maharashtra', 'Excel', 20000, 1299, 'ca-law-journalism-mass-comm-entrance-exams', 'Maharashtra'),
('Mass Comm Entrance Students – Delhi & NCR', 'Mass Communication entrance students database in Delhi & NCR', 'Excel', 7500, 849, 'ca-law-journalism-mass-comm-entrance-exams', 'Delhi & NCR'),
('CS Executive Students – South India', 'Company Secretary Executive course students database in South India', 'Excel', 8000, 999, 'ca-law-journalism-mass-comm-entrance-exams', 'South India'),
('IPCC Cleared – All India', 'Students who cleared IPCC (Integrated Professional Competence Course) across India', 'Excel', 5500, 899, 'ca-law-journalism-mass-comm-entrance-exams', 'All India'),

-- 8. Database - MCA, M.E, M.Tech, M.Arch Entrance Exams (5 products)
('MCA Entrance Aspirants – 2025', 'MCA entrance exam aspirants database for 2025', 'Excel', 25000, 1799, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('M.Tech 1st Year Students – Karnataka', 'First year M.Tech students database in Karnataka', 'Excel', 10000, 899, 'mca-me-mtech-march-entrance-exams', 'Karnataka'),
('M.E Final Year Students – Tamil Nadu', 'Final year M.E students database in Tamil Nadu', 'Excel', 6200, 799, 'mca-me-mtech-march-entrance-exams', 'Tamil Nadu'),
('M.Arch Entrance List – Maharashtra', 'M.Arch entrance exam candidates database in Maharashtra', 'Excel', 3000, 599, 'mca-me-mtech-march-entrance-exams', 'Maharashtra'),
('Postgrad Engineering Students – India', 'Postgraduate engineering students database across India', 'Excel', 50000, 2299, 'mca-me-mtech-march-entrance-exams', 'India');
