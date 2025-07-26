-- SQL script to insert the third batch of 80 additional products (10 per category)
-- Run this in your Supabase SQL Editor at: https://jmburmvcovocoabaohgs.supabase.co

INSERT INTO products (title, description, format, record_count, price, category, region) VALUES

-- 1. MBA, BBA, BBM Entrance Exams (10 products)
('TISS MA HR Final Applicants 2024 – Pan India', 'TISS MA Human Resources final applicants across India 2024', 'Excel', 1500, 1099, 'mba-bba-bbm-entrance-exams', 'PAN India'),
('NMIMS MBA Welcome Applicants 2025', 'NMIMS MBA welcome batch applicants for 2025', 'Excel', 3200, 1199, 'mba-bba-bbm-entrance-exams', 'Mumbai'),
('XIME MBA Aspirants 2024', 'Xavier Institute of Management and Entrepreneurship MBA aspirants 2024', 'Excel', 1900, 899, 'mba-bba-bbm-entrance-exams', 'Bangalore'),
('CMAT India Coaching Registrants 2024', 'CMAT coaching institute registered students across India 2024', 'Excel', 4200, 1299, 'mba-bba-bbm-entrance-exams', 'PAN India'),
('MAT Accredited Students 2024', 'Management Aptitude Test accredited students 2024', 'Excel', 2800, 999, 'mba-bba-bbm-entrance-exams', 'PAN India'),
('CAT XL 2025 Applicants – All India', 'CAT XL entrance exam applicants across India 2025', 'Excel', 3400, 1499, 'mba-bba-bbm-entrance-exams', 'All India'),
('XAT XL 2025 Aspirants', 'XAT XL entrance exam aspirants for 2025', 'Excel', 2600, 1299, 'mba-bba-bbm-entrance-exams', 'PAN India'),
('TS ICET MBA Counseling – 2024 Final List', 'Telangana State ICET MBA counseling final list 2024', 'Excel', 7500, 799, 'mba-bba-bbm-entrance-exams', 'Telangana'),
('GRFT MBA Final Enrollees 2024 – All India', 'GRFT MBA final enrolled students across India 2024', 'Excel', 1800, 1199, 'mba-bba-bbm-entrance-exams', 'All India'),
('GHRM Final List 2025 – Pan India', 'Graduate Human Resource Management final list across India 2025', 'Excel', 1350, 899, 'mba-bba-bbm-entrance-exams', 'PAN India'),

-- 2. Upto 12th Standard (10 products)
('CBSE 10th Special Exam Takers 2024', 'CBSE 10th special examination candidates 2024', 'Excel', 18500, 1099, 'upto-12th-standard', 'PAN India'),
('UP Board 12th Science Top Grade 2024', 'UP Board 12th Science top grade students 2024', 'Excel', 27000, 1499, 'upto-12th-standard', 'Uttar Pradesh'),
('Maharashtra State 12th Arts Students 2024', 'Maharashtra State Board 12th Arts students 2024', 'Excel', 20900, 1199, 'upto-12th-standard', 'Maharashtra'),
('Telangana 11th Commerce Students 2025', 'Telangana State Board 11th Commerce students 2025', 'Excel', 12300, 999, 'upto-12th-standard', 'Telangana'),
('Bihar ICSE 10th Students 2024', 'ICSE 10th grade students from Bihar 2024', 'Excel', 14200, 1099, 'upto-12th-standard', 'Bihar'),
('Jharkhand 12th Science Batch 2024', 'Jharkhand State Board 12th Science students 2024', 'Excel', 9800, 899, 'upto-12th-standard', 'Jharkhand'),
('Odisha 11th Science Group 2025', 'Odisha State Board 11th Science group students 2025', 'Excel', 11400, 999, 'upto-12th-standard', 'Odisha'),
('Chhattisgarh 10th Double Appeared 2024', 'Chhattisgarh 10th double appeared students 2024', 'Excel', 13600, 1099, 'upto-12th-standard', 'Chhattisgarh'),
('Kerala 11th Batch Top Grade 2024', 'Kerala State Board 11th top grade students 2024', 'Excel', 16300, 1199, 'upto-12th-standard', 'Kerala'),
('CBSE 12th Commerce Group 2024', 'CBSE 12th Commerce group students across India 2024', 'Excel', 25700, 1399, 'upto-12th-standard', 'PAN India'),

-- 3. Engineering, Diploma Aspirants (10 products)
('TS EAMCET 2025 Combined Applicants', 'Telangana State EAMCET combined applicants 2025', 'Excel', 69000, 3799, 'engineering-diploma-aspirants', 'Telangana'),
('CG Polytechnic Final Year 2024', 'Chhattisgarh Polytechnic final year students 2024', 'Excel', 15900, 1199, 'engineering-diploma-aspirants', 'Chhattisgarh'),
('WBJEE Engineering 2024 List – West Bengal', 'West Bengal Joint Entrance Examination engineering list 2024', 'Excel', 12500, 1499, 'engineering-diploma-aspirants', 'West Bengal'),
('AP Joint Engineering Students 2025', 'Andhra Pradesh Joint Engineering entrance students 2025', 'Excel', 16800, 1699, 'engineering-diploma-aspirants', 'Andhra Pradesh'),
('Rajasthan Engg. Batch 2025', 'Rajasthan Engineering entrance batch 2025', 'Excel', 18200, 1799, 'engineering-diploma-aspirants', 'Rajasthan'),
('Delhi B.Tech Counseling Takers – 2024', 'Delhi B.Tech counseling participants 2024', 'Excel', 21400, 2299, 'engineering-diploma-aspirants', 'Delhi'),
('Punjab Engg Applicants 2024', 'Punjab Engineering entrance applicants 2024', 'Excel', 14800, 1299, 'engineering-diploma-aspirants', 'Punjab'),
('Mumbai Engg Entrance List 2024', 'Mumbai Engineering entrance candidates list 2024', 'Excel', 20300, 2199, 'engineering-diploma-aspirants', 'Mumbai'),
('UP JEE Engineering Combined', 'Uttar Pradesh JEE Engineering combined candidates', 'Excel', 30500, 2499, 'engineering-diploma-aspirants', 'Uttar Pradesh'),
('AP POLYCET Aspirants Final Year 2024', 'Andhra Pradesh POLYCET final year aspirants 2024', 'Excel', 10200, 1099, 'engineering-diploma-aspirants', 'Andhra Pradesh'),

-- 4. Medical Aspirants (10 products)
('Karnataka NEET Counseling Applicants', 'Karnataka NEET counseling applicants database', 'Excel', 17500, 1299, 'medical-aspirants', 'Karnataka'),
('Delhi NEET UG 2024 Batch', 'Delhi NEET UG entrance candidates 2024 batch', 'Excel', 20800, 1199, 'medical-aspirants', 'Delhi'),
('Telangana MBBS 2nd Year Batch', 'Telangana MBBS second year students batch', 'Excel', 8600, 1199, 'medical-aspirants', 'Telangana'),
('South India PG NEET Batch 2025', 'South India NEET PG entrance candidates 2025', 'Excel', 88000, 4099, 'medical-aspirants', 'South India'),
('BDS UG Final Year Karnataka 2024', 'BDS undergraduate final year students Karnataka 2024', 'Excel', 5900, 999, 'medical-aspirants', 'Karnataka'),
('West Bengal MBBS UG Aspirants', 'West Bengal MBBS undergraduate aspirants database', 'Excel', 15600, 1199, 'medical-aspirants', 'West Bengal'),
('AP NEET ALL INDIA Participants 2024', 'Andhra Pradesh NEET All India participants 2024', 'Excel', 16700, 1299, 'medical-aspirants', 'Andhra Pradesh'),
('Maharashtra NEET Counseling Finalists', 'Maharashtra NEET counseling finalists database', 'Excel', 19200, 1299, 'medical-aspirants', 'Maharashtra'),
('Medical Testing UG Students – Pan India', 'Medical entrance testing UG students across India', 'Excel', 110000, 3999, 'medical-aspirants', 'PAN India'),
('UP MBBS Seat Allotment Final 2025', 'Uttar Pradesh MBBS seat allotment final list 2025', 'Excel', 6900, 1299, 'medical-aspirants', 'Uttar Pradesh'),

-- 5. Final Year, Graduates (10 products)
('Final Year Arts 2024 (Mumbai)', 'Final year Arts students from Mumbai universities 2024', 'Excel', 9700, 999, 'final-year-graduates', 'Mumbai'),
('Final Year Commerce 2023 (Delhi)', 'Final year Commerce students from Delhi universities 2023', 'Excel', 9900, 1099, 'final-year-graduates', 'Delhi'),
('BCA Final Batch Karnataka', 'BCA final batch students from Karnataka colleges', 'Excel', 6900, 899, 'final-year-graduates', 'Karnataka'),
('MA Final Year 2024 India', 'MA final year students across India 2024', 'Excel', 14800, 1199, 'final-year-graduates', 'PAN India'),
('Final Year B.Ed 2025 Karnataka', 'Final year B.Ed students from Karnataka 2025', 'Excel', 6400, 949, 'final-year-graduates', 'Karnataka'),
('Hotel Mgmt Final Year Delhi', 'Hotel Management final year students from Delhi', 'Excel', 7600, 999, 'final-year-graduates', 'Delhi'),
('Graduates 2022 All Streams India', 'Graduates from all streams across India 2022', 'Excel', 130000, 3999, 'final-year-graduates', 'PAN India'),
('Final Year Science Karnataka 2023–24', 'Final year Science students from Karnataka 2023-24', 'Excel', 12800, 1199, 'final-year-graduates', 'Karnataka'),
('BA Final Batch 2024 (Tamil Nadu)', 'BA final batch students from Tamil Nadu 2024', 'Excel', 9500, 999, 'final-year-graduates', 'Tamil Nadu'),
('Final Year BBA Maharashtra 2023', 'Final year BBA students from Maharashtra 2023', 'Excel', 8500, 1099, 'final-year-graduates', 'Maharashtra'),

-- 6. Under Graduate Entrance Exams (10 products)
('CUET UG Final Qualified 2025', 'CUET UG final qualified candidates 2025', 'Excel', 135000, 3899, 'ug-entrance-exams', 'PAN India'),
('NDA Final Selectees 2024', 'National Defence Academy final selected candidates 2024', 'Excel', 7200, 1199, 'ug-entrance-exams', 'PAN India'),
('IIT JEE Main Finalists 2024', 'IIT JEE Main final qualified candidates 2024', 'Excel', 90000, 4199, 'ug-entrance-exams', 'PAN India'),
('NID UG Test Qualified 2025', 'National Institute of Design UG test qualified 2025', 'Excel', 4800, 1099, 'ug-entrance-exams', 'PAN India'),
('CLAT General Category Final List – 2025', 'CLAT general category final qualified list 2025', 'Excel', 27000, 1499, 'ug-entrance-exams', 'PAN India'),
('B.Ed Entrance Final Applicants 2024', 'B.Ed entrance final applicants across India 2024', 'Excel', 15400, 1199, 'ug-entrance-exams', 'PAN India'),
('NIFT Fashion UG Entrance Final 2025', 'NIFT Fashion Design UG entrance final candidates 2025', 'Excel', 4600, 1399, 'ug-entrance-exams', 'PAN India'),
('CUET UG Reserved Batch 2024', 'CUET UG reserved category batch 2024', 'Excel', 132000, 3799, 'ug-entrance-exams', 'PAN India'),
('Veterinary UG Final Candidates 2025', 'Veterinary Science UG final candidates 2025', 'Excel', 8900, 1299, 'ug-entrance-exams', 'PAN India'),
('BA Combined Entrance Finalists 2025', 'BA combined entrance final qualified candidates 2025', 'Excel', 14200, 1499, 'ug-entrance-exams', 'PAN India'),

-- 7. CA, Law, Journalism, Mass Comm Entrance Exams (10 products)
('Law UG Final List 2025 – Eastern India', 'Law UG final qualified list from Eastern India 2025', 'Excel', 26500, 1499, 'ca-law-journalism-mass-comm-entrance-exams', 'Eastern India'),
('CA Final Year 2024 (All India)', 'CA final year students across India 2024', 'Excel', 42000, 2199, 'ca-law-journalism-mass-comm-entrance-exams', 'All India'),
('CLAT South India Applicants 2025', 'CLAT entrance applicants from South India 2025', 'Excel', 9200, 1399, 'ca-law-journalism-mass-comm-entrance-exams', 'South India'),
('Mass Comm UG Qualified Batch 2024', 'Mass Communication UG qualified batch 2024', 'Excel', 8900, 1099, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('Journalism Final Batch 2023 (All India)', 'Journalism final batch students across India 2023', 'Excel', 10100, 1199, 'ca-law-journalism-mass-comm-entrance-exams', 'All India'),
('IPCC Pass Students India 2024', 'IPCC passed students across India 2024', 'Excel', 5900, 899, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('CS Executive Finalists 2025', 'Company Secretary Executive final candidates 2025', 'Excel', 6300, 1099, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('PG Law Entrance List 2024', 'Postgraduate Law entrance qualified list 2024', 'Excel', 4200, 1499, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('Mass Comm Batch 2025 Qualified', 'Mass Communication qualified batch 2025', 'Excel', 11600, 1199, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('Journalism UG Finalists (Delhi)', 'Journalism UG final qualified candidates from Delhi', 'Excel', 9800, 1149, 'ca-law-journalism-mass-comm-entrance-exams', 'Delhi'),

-- 8. MCA, M.E, M.Tech, M.Arch Entrance Exams (10 products)
('Gate Electrical Engineering Batch 2024', 'GATE Electrical Engineering qualified batch 2024', 'Excel', 22500, 2299, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('MCA East Batch 2025', 'MCA students from Eastern India batch 2025', 'Excel', 14400, 1299, 'mca-me-mtech-march-entrance-exams', 'East India'),
('M.E Mechanical Final Year 2023', 'M.E Mechanical Engineering final year 2023', 'Excel', 6700, 1199, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('M.Tech Final Passouts India 2024', 'M.Tech final passout students across India 2024', 'Excel', 13900, 1999, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('M.Arch Final Qualified 2025', 'M.Arch final qualified candidates 2025', 'Excel', 4000, 1099, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('Gate Chemical Engineering 2025 Applicants', 'GATE Chemical Engineering applicants 2025', 'Excel', 9200, 2199, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('MCA Qualified Students 2023 (Pan India)', 'MCA qualified students across India 2023', 'Excel', 16500, 1499, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('Architecture UG Final Batch 2025', 'Architecture UG final batch students 2025', 'Excel', 5100, 1299, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('M.Tech AI Specialization Batch 2024', 'M.Tech AI specialization batch students 2024', 'Excel', 23000, 2499, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('Gate Electronics Engineering Final 2024', 'GATE Electronics Engineering final qualified 2024', 'Excel', 21200, 2299, 'mca-me-mtech-march-entrance-exams', 'PAN India');
