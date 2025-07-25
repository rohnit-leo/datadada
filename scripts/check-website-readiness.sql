-- Final check to ensure website will display all data correctly
-- This simulates what the website queries will return

-- Check each category page will have data
SELECT 
    'mba-bba-bbm-entrance-exams' as category_slug,
    COUNT(*) as products_count,
    'MBA, BBA, BBM Entrance Exams' as display_name
FROM products 
WHERE category = 'mba-bba-bbm-entrance-exams'

UNION ALL

SELECT 
    'upto-12th-standard' as category_slug,
    COUNT(*) as products_count,
    'Upto 12th Standard' as display_name
FROM products 
WHERE category = 'upto-12th-standard'

UNION ALL

SELECT 
    'engineering-diploma-aspirants' as category_slug,
    COUNT(*) as products_count,
    'Engineering, Diploma Aspirants' as display_name
FROM products 
WHERE category = 'engineering-diploma-aspirants'

UNION ALL

SELECT 
    'medical-aspirants' as category_slug,
    COUNT(*) as products_count,
    'Medical Aspirants' as display_name
FROM products 
WHERE category = 'medical-aspirants'

UNION ALL

SELECT 
    'final-year-graduates' as category_slug,
    COUNT(*) as products_count,
    'Final Year, Graduates' as display_name
FROM products 
WHERE category = 'final-year-graduates'

UNION ALL

SELECT 
    'ug-entrance-exams' as category_slug,
    COUNT(*) as products_count,
    'Under Graduate Entrance Exams' as display_name
FROM products 
WHERE category = 'ug-entrance-exams'

UNION ALL

SELECT 
    'ca-law-journalism-mass-comm-entrance-exams' as category_slug,
    COUNT(*) as products_count,
    'CA, Law, Journalism, Mass Comm Entrance Exams' as display_name
FROM products 
WHERE category = 'ca-law-journalism-mass-comm-entrance-exams'

UNION ALL

SELECT 
    'mca-me-mtech-march-entrance-exams' as category_slug,
    COUNT(*) as products_count,
    'MCA, M.E, M.Tech, M.Arch Entrance Exams' as display_name
FROM products 
WHERE category = 'mca-me-mtech-march-entrance-exams';

-- Show total summary
SELECT 
    COUNT(DISTINCT category) as total_categories,
    COUNT(*) as total_products,
    SUM(record_count) as total_student_records,
    MIN(price) as lowest_price,
    MAX(price) as highest_price,
    ROUND(AVG(price)) as average_price
FROM products;
