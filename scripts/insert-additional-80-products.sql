-- SQL script to insert 80 additional products (10 per category)
-- Run this in your Supabase SQL Editor at: https://jmburmvcovocoabaohgs.supabase.co

INSERT INTO products (title, description, format, record_count, price, category, region) VALUES

-- 1. MBA, BBA, BBM Entrance Exams (10 products)
('XAT Qualified Students 2024 – PAN India', 'Students who qualified XAT entrance exam in 2024', 'Excel', 2250, 799, 'mba-bba-bbm-entrance-exams', 'PAN India'),
('IBSAT 2024 Aspirants Hyderabad', 'IBSAT entrance exam aspirants from Hyderabad region', 'Excel', 3100, 999, 'mba-bba-bbm-entrance-exams', 'Hyderabad'),
('IMT Ghaziabad BBA Final Batch', 'Final year BBA students from IMT Ghaziabad', 'Excel', 2700, 899, 'mba-bba-bbm-entrance-exams', 'Ghaziabad'),
('NMIMS Mumbai MBA 2024 Applicants', 'MBA applicants for NMIMS Mumbai campus 2024', 'Excel', 4000, 1299, 'mba-bba-bbm-entrance-exams', 'Mumbai'),
('IBS Jaipur MBA Applicants 2025', 'MBA applicants for IBS Jaipur campus 2025', 'Excel', 1800, 949, 'mba-bba-bbm-entrance-exams', 'Jaipur'),
('TAPMI MBA Registered Students 2024', 'Registered MBA students at TAPMI for 2024', 'Excel', 2100, 799, 'mba-bba-bbm-entrance-exams', 'Manipal'),
('GHRM Aspirants 2024 (Pan India)', 'Graduate Human Resource Management aspirants across India', 'Excel', 1300, 899, 'mba-bba-bbm-entrance-exams', 'PAN India'),
('Welingkar PGDM Applicants 2024', 'PGDM applicants for Welingkar Institute 2024', 'Excel', 1500, 799, 'mba-bba-bbm-entrance-exams', 'Mumbai'),
('NMIMS BBA Final Year List 2023', 'Final year BBA students from NMIMS 2023 batch', 'Excel', 3000, 899, 'mba-bba-bbm-entrance-exams', 'Mumbai'),
('IIM Shillong MBA Counseling 2024', 'MBA counseling participants at IIM Shillong 2024', 'Excel', 600, 1499, 'mba-bba-bbm-entrance-exams', 'Shillong'),

-- 2. Upto 12th Standard (10 products)
('Gujarat 10th Board Science Batch 2025', 'Gujarat State Board 10th Science students for 2025', 'Excel', 23400, 1199, 'upto-12th-standard', 'Gujarat'),
('CBSE 12th Arts Stream 2024 (India)', 'CBSE 12th Arts stream students across India 2024', 'Excel', 28500, 1399, 'upto-12th-standard', 'PAN India'),
('Tamil Nadu 12th Science Students', 'Tamil Nadu State Board 12th Science students', 'Excel', 7500, 899, 'upto-12th-standard', 'Tamil Nadu'),
('Kerala ICSE 10th Grade Batch 2024', 'ICSE 10th grade students in Kerala for 2024', 'Excel', 19000, 1099, 'upto-12th-standard', 'Kerala'),
('Bihar 11th Science Students 2025', '11th Science students from Bihar State Board 2025', 'Excel', 13200, 1099, 'upto-12th-standard', 'Bihar'),
('Uttar Pradesh 10th Board Toppers', 'Top performing 10th board students from Uttar Pradesh', 'Excel', 11800, 1049, 'upto-12th-standard', 'Uttar Pradesh'),
('CUET UG Registered Students', 'Students registered for CUET UG entrance exam', 'Excel', 130000, 3799, 'upto-12th-standard', 'PAN India'),
('Odisha 12th Science Batch 2025', 'Odisha State Board 12th Science students 2025', 'Excel', 9800, 1199, 'upto-12th-standard', 'Odisha'),
('Maharashtra 11th Commerce Students', 'Maharashtra State Board 11th Commerce students', 'Excel', 8900, 999, 'upto-12th-standard', 'Maharashtra'),
('Chhattisgarh 10th Board 2024', 'Chhattisgarh State Board 10th students 2024', 'Excel', 12300, 1099, 'upto-12th-standard', 'Chhattisgarh'),

-- 3. Engineering, Diploma Aspirants (10 products)
('Odisha Engineering Entrance Batch 2024', 'Engineering entrance exam candidates from Odisha 2024', 'Excel', 20100, 1799, 'engineering-diploma-aspirants', 'Odisha'),
('Karnataka EAMCET Candidates 2025', 'EAMCET entrance exam candidates from Karnataka 2025', 'Excel', 22000, 1699, 'engineering-diploma-aspirants', 'Karnataka'),
('West Bengal Polytechnic Lists 2024', 'Polytechnic students database from West Bengal 2024', 'Excel', 10400, 1299, 'engineering-diploma-aspirants', 'West Bengal'),
('Bihar Engineering Batch 2024', 'Engineering students from Bihar state 2024', 'Excel', 25500, 1799, 'engineering-diploma-aspirants', 'Bihar'),
('Rajasthan JEE State Applicants 2024', 'JEE state level applicants from Rajasthan 2024', 'Excel', 18600, 1499, 'engineering-diploma-aspirants', 'Rajasthan'),
('Delhi Engineering Entrance CSP', 'Engineering entrance candidates from Delhi CSP quota', 'Excel', 16700, 1299, 'engineering-diploma-aspirants', 'Delhi'),
('Haryana Engineering Admissions 2024', 'Engineering admission candidates from Haryana 2024', 'Excel', 22300, 1999, 'engineering-diploma-aspirants', 'Haryana'),
('Maharashtra Polytechnic Final Year 2024', 'Final year polytechnic students from Maharashtra 2024', 'Excel', 13200, 1199, 'engineering-diploma-aspirants', 'Maharashtra'),
('Punjab Engineering Enrollees 2024', 'Engineering enrolled students from Punjab 2024', 'Excel', 14500, 1299, 'engineering-diploma-aspirants', 'Punjab'),
('Andhra Pradesh R3 Students List 2024', 'R3 category engineering students from Andhra Pradesh 2024', 'Excel', 9500, 1099, 'engineering-diploma-aspirants', 'Andhra Pradesh'),

-- 4. Medical Aspirants (10 products)
('OJEE Medical 2025 Aspirants Odisha', 'OJEE medical entrance aspirants from Odisha 2025', 'Excel', 8700, 1099, 'medical-aspirants', 'Odisha'),
('Rajasthan Medical UG Registrants', 'Medical UG entrance registrants from Rajasthan', 'Excel', 17200, 1199, 'medical-aspirants', 'Rajasthan'),
('Bihar NEET Applicants 2025', 'NEET entrance exam applicants from Bihar 2025', 'Excel', 19800, 1299, 'medical-aspirants', 'Bihar'),
('Delhi PG Medical 2024 Batch', 'Medical PG entrance candidates from Delhi 2024', 'Excel', 6400, 999, 'medical-aspirants', 'Delhi'),
('Chandigarh MBBS Entrance 2024', 'MBBS entrance exam candidates from Chandigarh 2024', 'Excel', 5200, 899, 'medical-aspirants', 'Chandigarh'),
('West Bengal BDS UG Students', 'BDS undergraduate students from West Bengal', 'Excel', 4800, 1099, 'medical-aspirants', 'West Bengal'),
('Maharashtra NEET UG Counselling 2024', 'NEET UG counselling participants from Maharashtra 2024', 'Excel', 18500, 1199, 'medical-aspirants', 'Maharashtra'),
('North India Medical Aspirants', 'Medical entrance aspirants from North India region', 'Excel', 10500, 1299, 'medical-aspirants', 'North India'),
('South India Medical PG Candidates', 'Medical PG entrance candidates from South India', 'Excel', 7300, 1049, 'medical-aspirants', 'South India'),
('NEET UG 2023 Final List (India)', 'Final NEET UG qualified candidates list 2023 India', 'Excel', 122000, 3899, 'medical-aspirants', 'PAN India'),

-- 5. Final Year, Graduates (10 products)
('Final Year Science Group (Kerala)', 'Final year Science students from Kerala universities', 'Excel', 11900, 1099, 'final-year-graduates', 'Kerala'),
('Commerce Graduates 2023 (Tamil Nadu)', 'Commerce graduates from Tamil Nadu universities 2023', 'Excel', 10200, 1099, 'final-year-graduates', 'Tamil Nadu'),
('Arts Final Year Batch 2024 (UP)', 'Arts final year students from Uttar Pradesh 2024', 'Excel', 9500, 949, 'final-year-graduates', 'Uttar Pradesh'),
('BCA Final Year List (Karnataka)', 'BCA final year students from Karnataka colleges', 'Excel', 6800, 899, 'final-year-graduates', 'Karnataka'),
('BA Final Year (Delhi)', 'BA final year students from Delhi universities', 'Excel', 7200, 899, 'final-year-graduates', 'Delhi'),
('MBA Aspirants (Graduates) 2024', 'Graduate students aspiring for MBA admission 2024', 'Excel', 45000, 2499, 'final-year-graduates', 'PAN India'),
('B.Ed Final Year Batch 2024', 'B.Ed final year students across India 2024', 'Excel', 6100, 899, 'final-year-graduates', 'PAN India'),
('MA Final Year (West Bengal)', 'MA final year students from West Bengal universities', 'Excel', 12200, 1099, 'final-year-graduates', 'West Bengal'),
('BBA Final Year List 2023 (Maharashtra)', 'BBA final year students from Maharashtra 2023', 'Excel', 8400, 999, 'final-year-graduates', 'Maharashtra'),
('Science & Commerce Graduates (2024 India)', 'Science and Commerce graduates across India 2024', 'Excel', 22000, 1299, 'final-year-graduates', 'PAN India'),

-- 6. Under Graduate Entrance Exams (10 products)
('CUET Reserved Category UG Applicants', 'CUET UG applicants from reserved categories', 'Excel', 135000, 3799, 'ug-entrance-exams', 'PAN India'),
('IIT JEE Main Attempt 2024', 'JEE Main entrance exam attempt candidates 2024', 'Excel', 95000, 4199, 'ug-entrance-exams', 'PAN India'),
('NDA Applicants 2025 (India)', 'National Defence Academy applicants 2025 India', 'Excel', 7700, 1299, 'ug-entrance-exams', 'PAN India'),
('B.A Entrance Test Applicants India', 'BA entrance test applicants across India', 'Excel', 14500, 1499, 'ug-entrance-exams', 'PAN India'),
('B.Ed Entrance Registrants', 'B.Ed entrance exam registered candidates', 'Excel', 16200, 1099, 'ug-entrance-exams', 'PAN India'),
('Hotel Management UG (Central India)', 'Hotel Management UG entrance candidates Central India', 'Excel', 9900, 1199, 'ug-entrance-exams', 'Central India'),
('B.Sc Admission Appeared Students India', 'B.Sc admission appeared students across India', 'Excel', 13500, 1299, 'ug-entrance-exams', 'PAN India'),
('Fashion UG Test Candidates (India)', 'Fashion Design UG entrance test candidates India', 'Excel', 5000, 1099, 'ug-entrance-exams', 'PAN India'),
('Veterinary UG Entrance Aspirants', 'Veterinary Science UG entrance aspirants', 'Excel', 8700, 1199, 'ug-entrance-exams', 'PAN India'),
('Design Entrance UG Candidates 2025', 'Design course UG entrance candidates 2025', 'Excel', 12000, 1399, 'ug-entrance-exams', 'PAN India'),

-- 7. CA, Law, Journalism, Mass Comm Entrance Exams (10 products)
('CLAT 2025 Final Applicants', 'CLAT entrance exam final applicants 2025', 'Excel', 28000, 1599, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('CS Professional Exam 2024', 'Company Secretary Professional exam candidates 2024', 'Excel', 5900, 1099, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('Law Final Year Applicants CLAT UG', 'Law final year students applying for CLAT UG', 'Excel', 24200, 1499, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('Journalism UG Batch 2024 (Delhi)', 'Journalism UG students from Delhi colleges 2024', 'Excel', 9800, 1199, 'ca-law-journalism-mass-comm-entrance-exams', 'Delhi'),
('Mass Comm Post-grad Entrance 2024', 'Mass Communication postgraduate entrance candidates 2024', 'Excel', 7300, 1099, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('CA Intermediate Students India 2023', 'CA Intermediate course students across India 2023', 'Excel', 20500, 2099, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('Law PG (LLM) Entrance Applicants', 'LLM entrance exam applicants across India', 'Excel', 5000, 1399, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('CS Entrance 2025 Batch', 'Company Secretary entrance exam candidates 2025', 'Excel', 4300, 999, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),
('Journalism Final Year (West Bengal)', 'Journalism final year students from West Bengal', 'Excel', 8100, 1149, 'ca-law-journalism-mass-comm-entrance-exams', 'West Bengal'),
('Mass Comm Final UG 2023 (India)', 'Mass Communication final year UG students 2023 India', 'Excel', 12300, 1199, 'ca-law-journalism-mass-comm-entrance-exams', 'PAN India'),

-- 8. MCA, M.E, M.Tech, M.Arch Entrance Exams (10 products)
('GATE Civil Engineering 2025 Registrants', 'GATE Civil Engineering exam registrants 2025', 'Excel', 25800, 2499, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('MCA East India Batch 2024', 'MCA students from East India region 2024', 'Excel', 14200, 1299, 'mca-me-mtech-march-entrance-exams', 'East India'),
('M.Tech CS Students India', 'M.Tech Computer Science students across India', 'Excel', 18500, 2399, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('M.Arch South India Applicants', 'M.Arch entrance applicants from South India', 'Excel', 4100, 999, 'mca-me-mtech-march-entrance-exams', 'South India'),
('M.E Mechanical Engineering Candidates', 'M.E Mechanical Engineering entrance candidates', 'Excel', 6800, 1199, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('MCA Batch 2023 Passouts (India)', 'MCA 2023 batch passout students across India', 'Excel', 16000, 1499, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('GATE Chemical Engg Applicants', 'GATE Chemical Engineering exam applicants', 'Excel', 9100, 2199, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('M.Tech Final Year Outsiders 2024', 'M.Tech final year students from outside state 2024', 'Excel', 13400, 1999, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('Architectural Admissions 2025 (India)', 'Architecture course admissions across India 2025', 'Excel', 5300, 1299, 'mca-me-mtech-march-entrance-exams', 'PAN India'),
('GATE EE Applicants 2023 Batch', 'GATE Electrical Engineering applicants 2023 batch', 'Excel', 22700, 2299, 'mca-me-mtech-march-entrance-exams', 'PAN India');
