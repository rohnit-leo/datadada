-- Complete SQL script to insert ALL missing products across all 8 categories
-- Run this in your Supabase SQL Editor at: https://jmburmvcovocoabaohgs.supabase.co

-- First, let's check what we currently have
SELECT category, COUNT(*) as count FROM products GROUP BY category ORDER BY category;

-- Insert all missing products for each category
INSERT INTO products (title, description, format, record_count, price, category, region) VALUES

-- 1. MBA, BBA, BBM Entrance Exams (adding more products)
('BBM 2nd Year Students 2024', 'Database of BBM 2nd year students in Maharashtra for 2024', 'Excel', 12000, 899, 'mba-bba-bbm-entrance-exams', 'Maharashtra'),
('BBA Entrance Aspirants 2025', 'Database of BBA entrance exam aspirants in Karnataka for 2025', 'Excel', 21000, 1499, 'mba-bba-bbm-entrance-exams', 'Karnataka'),
('MBA CET Registered Students', 'Students registered for MBA CET entrance exam in Telangana', 'Excel', 9800, 749, 'mba-bba-bbm-entrance-exams', 'Telangana'),
('BBM Colleges Final Year List', 'Final year BBM students from colleges in Tamil Nadu', 'Excel', 5200, 599, 'mba-bba-bbm-entrance-exams', 'Tamil Nadu'),
('MBA Final Year Students - Delhi', 'Final year MBA students from Delhi universities', 'Excel', 8500, 1299, 'mba-bba-bbm-entrance-exams', 'Delhi'),
('BBA 1st Year Students - Mumbai', 'First year BBA students from Mumbai colleges', 'Excel', 6800, 799, 'mba-bba-bbm-entrance-exams', 'Mumbai'),
('MBA Entrance Coaching Students', 'Students enrolled in MBA entrance coaching centers', 'Excel', 15000, 1899, 'mba-bba-bbm-entrance-exams', 'PAN India'),

-- 2. Upto 12th Standard
('10th Grade Students – CBSE', 'CBSE 10th grade students database across PAN India', 'Excel', 75000, 2999, 'upto-12th-standard', 'PAN India'),
('12th Science Students – Gujarat Board', 'Gujarat Board 12th Science stream students database', 'Excel', 32000, 1399, 'upto-12th-standard', 'Gujarat Board'),
('11th Class Commerce – Delhi', '11th class Commerce students database in Delhi', 'Excel', 14200, 799, 'upto-12th-standard', 'Delhi'),
('State Board 12th Arts Students – Rajasthan', 'Rajasthan State Board 12th Arts stream students database', 'Excel', 19800, 999, 'upto-12th-standard', 'Rajasthan'),
('Pre-Board Appeared Students – Maharashtra', 'Students who appeared for pre-board examinations in Maharashtra', 'Excel', 10000, 699, 'upto-12th-standard', 'Maharashtra'),
('12th Commerce Students - Tamil Nadu', 'Tamil Nadu State Board 12th Commerce students', 'Excel', 18500, 1199, 'upto-12th-standard', 'Tamil Nadu'),
('11th Science Students - Karnataka', 'Karnataka State Board 11th Science students', 'Excel', 22000, 1099, 'upto-12th-standard', 'Karnataka'),
('10th ICSE Students - West Bengal', 'ICSE 10th grade students in West Bengal', 'Excel', 12500, 899, 'upto-12th-standard', 'West Bengal'),

-- 3. Engineering, Diploma Aspirants
('Diploma Final Year Students – Telangana', 'Final year diploma students database in Telangana', 'Excel', 22000, 1499, 'engineering-diploma-aspirants', 'Telangana'),
('Engineering Entrance Aspirants – 2025 – India', 'Engineering entrance exam aspirants database across India for 2025', 'Excel', 110000, 3999, 'engineering-diploma-aspirants', 'India'),
('Polytechnic Students – AP & TS', 'Polytechnic students database in Andhra Pradesh and Telangana', 'Excel', 18500, 1299, 'engineering-diploma-aspirants', 'AP & TS'),
('B.Tech 1st Year Students – Tamil Nadu', 'First year B.Tech students database in Tamil Nadu', 'Excel', 16000, 999, 'engineering-diploma-aspirants', 'Tamil Nadu'),
('Engineering 4th Year Students – Maharashtra', 'Fourth year engineering students database in Maharashtra', 'Excel', 20000, 1799, 'engineering-diploma-aspirants', 'Maharashtra'),
('JEE Main Aspirants 2025', 'JEE Main entrance exam aspirants across India', 'Excel', 95000, 3499, 'engineering-diploma-aspirants', 'PAN India'),
('Diploma 2nd Year Students - Gujarat', 'Second year diploma students in Gujarat', 'Excel', 14000, 1199, 'engineering-diploma-aspirants', 'Gujarat'),
('B.Tech Final Year - Karnataka', 'Final year B.Tech students in Karnataka', 'Excel', 25000, 2199, 'engineering-diploma-aspirants', 'Karnataka'),

-- 4. Medical Aspirants
('NEET Aspirants 2025 – PAN India', 'NEET entrance exam aspirants database across PAN India for 2025', 'Excel', 125000, 4499, 'medical-aspirants', 'PAN India'),
('Medical Entrance Coaching Students – Telangana', 'Students enrolled in medical entrance coaching institutes in Telangana', 'Excel', 18000, 1199, 'medical-aspirants', 'Telangana'),
('MBBS Final Year Students – Karnataka', 'Final year MBBS students database in Karnataka', 'Excel', 8000, 999, 'medical-aspirants', 'Karnataka'),
('BDS 1st Year – Tamil Nadu', 'First year BDS students database in Tamil Nadu', 'Excel', 5500, 599, 'medical-aspirants', 'Tamil Nadu'),
('Medical Counselling Registrants – North India', 'Students registered for medical counselling in North India', 'Excel', 10000, 899, 'medical-aspirants', 'North India'),
('AIIMS Aspirants 2025', 'AIIMS entrance exam aspirants database', 'Excel', 35000, 2999, 'medical-aspirants', 'PAN India'),
('MBBS 2nd Year Students - Maharashtra', 'Second year MBBS students in Maharashtra', 'Excel', 6500, 1299, 'medical-aspirants', 'Maharashtra'),
('Nursing Students - Delhi NCR', 'Nursing course students in Delhi NCR region', 'Excel', 8500, 799, 'medical-aspirants', 'Delhi NCR'),

-- 5. Final Year, Graduates
('Final Year Commerce Students – AP', 'Final year Commerce students database in Andhra Pradesh', 'Excel', 12000, 899, 'final-year-graduates', 'AP'),
('Graduate Passed-Out 2023 – PAN India', 'Graduates who passed out in 2023 across PAN India', 'Excel', 55000, 2499, 'final-year-graduates', 'PAN India'),
('Final Year Science Students – Telangana', 'Final year Science students database in Telangana', 'Excel', 8500, 749, 'final-year-graduates', 'Telangana'),
('BA Final Year – Tamil Nadu', 'Final year BA students database in Tamil Nadu', 'Excel', 10000, 799, 'final-year-graduates', 'Tamil Nadu'),
('Job Seeking Graduates – India', 'Graduates actively seeking jobs across India', 'Excel', 100000, 3299, 'final-year-graduates', 'India'),
('B.Com Final Year - Maharashtra', 'Final year B.Com students in Maharashtra', 'Excel', 15000, 1199, 'final-year-graduates', 'Maharashtra'),
('BSc Final Year - Karnataka', 'Final year BSc students in Karnataka', 'Excel', 12500, 999, 'final-year-graduates', 'Karnataka'),
('Fresh Graduates 2024 - North India', 'Fresh graduates from 2024 batch in North India', 'Excel', 45000, 2199, 'final-year-graduates', 'North India'),

-- 6. Under Graduate Entrance Exams
('UG Entrance Aspirants 2025 – India', 'Undergraduate entrance exam aspirants database across India for 2025', 'Excel', 110000, 3499, 'ug-entrance-exams', 'India'),
('CLAT Aspirants – North India', 'CLAT entrance exam aspirants database in North India', 'Excel', 8000, 999, 'ug-entrance-exams', 'North India'),
('B.Sc Entrance Students – Maharashtra', 'B.Sc entrance exam students database in Maharashtra', 'Excel', 13000, 899, 'ug-entrance-exams', 'Maharashtra'),
('Hotel Management Entrance Candidates – South India', 'Hotel Management entrance exam candidates database in South India', 'Excel', 9200, 749, 'ug-entrance-exams', 'South India'),
('General UG College Applications – India', 'Students who applied for general undergraduate colleges across India', 'Excel', 120000, 3999, 'ug-entrance-exams', 'India'),
('CUET Aspirants 2025', 'Common University Entrance Test aspirants', 'Excel', 85000, 2999, 'ug-entrance-exams', 'PAN India'),
('BBA Entrance - Delhi Universities', 'BBA entrance exam candidates for Delhi universities', 'Excel', 12000, 1299, 'ug-entrance-exams', 'Delhi'),
('Design Entrance Aspirants', 'Students aspiring for design courses entrance exams', 'Excel', 15000, 1599, 'ug-entrance-exams', 'PAN India'),

-- 7. CA, Law, Journalism, Mass Comm Entrance Exams
('CA Foundation Students – India', 'CA Foundation course students database across India', 'Excel', 45000, 2199, 'ca-law-journalism-mass-comm-entrance-exams', 'India'),
('Law Entrance Aspirants – Maharashtra', 'Law entrance exam aspirants database in Maharashtra', 'Excel', 20000, 1299, 'ca-law-journalism-mass-comm-entrance-exams', 'Maharashtra'),
('Mass Comm Entrance Students – Delhi & NCR', 'Mass Communication entrance students database in Delhi & NCR', 'Excel', 7500, 849, 'ca-law-journalism-mass-comm-entrance-exams', 'Delhi & NCR'),
('CS Executive Students – South India', 'Company Secretary Executive course students database in South India', 'Excel', 8000, 999, 'ca-law-journalism-mass-comm-entrance-exams', 'South India'),
('IPCC Cleared – All India', 'Students who cleared IPCC (Integrated Professional Competence Course) across India', 'Excel', 5500, 899, 'ca-law-journalism-mass-comm-entrance-exams', 'All India'),
('Journalism Students - Mumbai', 'Journalism course students in Mumbai colleges', 'Excel', 6500, 1199, 'ca-law-journalism-mass-comm-entrance-exams', 'Mumbai'),
('LLB Final Year - Tamil Nadu', 'Final year LLB students in Tamil Nadu', 'Excel', 9500, 1399, 'ca-law-journalism-mass-comm-entrance-exams', 'Tamil Nadu'),
('CA Intermediate Students', 'CA Intermediate course students across India', 'Excel', 25000, 1899, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),

-- 8. MCA, M.E, M.Tech, M.Arch Entrance Exams
('MCA Entrance Aspirants – 2025', 'MCA entrance exam aspirants database for 2025', 'Excel', 25000, 1799, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('M.Tech 1st Year Students – Karnataka', 'First year M.Tech students database in Karnataka', 'Excel', 10000, 899, 'mca-me-mtech-march-entrance-exams', 'Karnataka'),
('M.E Final Year Students – Tamil Nadu', 'Final year M.E students database in Tamil Nadu', 'Excel', 6200, 799, 'mca-me-mtech-march-entrance-exams', 'Tamil Nadu'),
('M.Arch Entrance List – Maharashtra', 'M.Arch entrance exam candidates database in Maharashtra', 'Excel', 3000, 599, 'mca-me-mtech-march-entrance-exams', 'Maharashtra'),
('Postgrad Engineering Students – India', 'Postgraduate engineering students database across India', 'Excel', 50000, 2299, 'mca-me-mtech-march-entrance-exams', 'India'),
('MCA Final Year - Delhi', 'Final year MCA students in Delhi universities', 'Excel', 8500, 1299, 'mca-me-mtech-march-entrance-exams', 'Delhi'),
('M.Tech CSE Students - Hyderabad', 'M.Tech Computer Science students in Hyderabad', 'Excel', 7500, 1599, 'mca-me-mtech-march-entrance-exams', 'Hyderabad'),
('GATE Qualified Students 2024', 'Students who qualified GATE 2024 exam', 'Excel', 35000, 2499, 'mca-me-mtech-march-entrance-exams', 'PAN India');
