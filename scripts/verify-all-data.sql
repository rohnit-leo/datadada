-- Verification script to check all data has been inserted correctly
-- Run this after the insert script to verify everything is working

-- 1. Check total count
SELECT 'Total Products' as metric, COUNT(*) as count FROM products;

-- 2. Check count by category
SELECT 
    category,
    COUNT(*) as product_count,
    MIN(price) as min_price,
    MAX(price) as max_price,
    SUM(record_count) as total_records
FROM products 
GROUP BY category 
ORDER BY category;

-- 3. Check if all expected categories have data
WITH expected_categories AS (
    SELECT unnest(ARRAY[
        'mba-bba-bbm-entrance-exams',
        'upto-12th-standard', 
        'engineering-diploma-aspirants',
        'medical-aspirants',
        'final-year-graduates',
        'ug-entrance-exams',
        'ca-law-journalism-mass-comm-entrance-exams',
        'mca-me-mtech-march-entrance-exams'
    ]) as category
),
actual_categories AS (
    SELECT DISTINCT category FROM products
)
SELECT 
    e.category,
    CASE WHEN a.category IS NOT NULL THEN 'Has Data' ELSE 'Missing Data' END as status
FROM expected_categories e
LEFT JOIN actual_categories a ON e.category = a.category
ORDER BY e.category;

-- 4. Show sample products from each category
SELECT 
    category,
    title,
    price,
    record_count,
    region
FROM (
    SELECT 
        category,
        title,
        price,
        record_count,
        region,
        ROW_NUMBER() OVER (PARTITION BY category ORDER BY title) as rn
    FROM products
) ranked
WHERE rn <= 2
ORDER BY category, title;

-- 5. Check for any potential issues
SELECT 
    'Products with NULL titles' as issue,
    COUNT(*) as count
FROM products 
WHERE title IS NULL OR title = ''
UNION ALL
SELECT 
    'Products with zero price' as issue,
    COUNT(*) as count
FROM products 
WHERE price <= 0
UNION ALL
SELECT 
    'Products with zero records' as issue,
    COUNT(*) as count
FROM products 
WHERE record_count <= 0;
