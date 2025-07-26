-- Comprehensive summary of all database products for website readiness
-- Run this to get complete overview of your database

-- 1. Overall Database Statistics
SELECT 
    'OVERALL STATISTICS' as section,
    COUNT(*) as total_products,
    COUNT(DISTINCT category) as categories_covered,
    SUM(record_count) as total_student_records,
    MIN(price) as lowest_price,
    MAX(price) as highest_price,
    ROUND(AVG(price)) as average_price,
    ROUND(AVG(record_count)) as avg_records_per_database;

-- 2. Category-wise detailed breakdown
SELECT 
    category,
    COUNT(*) as products_available,
    MIN(price) as cheapest_option,
    MAX(price) as most_expensive,
    SUM(record_count) as total_student_records,
    ROUND(AVG(price)) as average_price,
    ROUND(AVG(record_count)) as avg_records_per_product
FROM products 
GROUP BY category
ORDER BY products_available DESC;

-- 3. Top 10 most valuable databases (by record count)
SELECT 
    'TOP DATABASES BY RECORDS' as type,
    title,
    record_count,
    price,
    category,
    region,
    ROUND(price::decimal / record_count * 1000, 2) as price_per_1000_records
FROM products 
ORDER BY record_count DESC 
LIMIT 10;

-- 4. Regional distribution of databases
SELECT 
    COALESCE(region, 'Not Specified') as region,
    COUNT(*) as database_count,
    SUM(record_count) as total_records,
    ROUND(AVG(price)) as avg_price
FROM products
GROUP BY region
ORDER BY database_count DESC;

-- 5. Verify all category pages will work
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
    ]) as expected_category
)
SELECT 
    e.expected_category as category_slug,
    COALESCE(p.product_count, 0) as products_available,
    CASE 
        WHEN COALESCE(p.product_count, 0) >= 20 THEN '🚀 Excellent variety'
        WHEN COALESCE(p.product_count, 0) >= 15 THEN '✅ Great selection'
        WHEN COALESCE(p.product_count, 0) >= 10 THEN '👍 Good options'
        WHEN COALESCE(p.product_count, 0) > 0 THEN '⚠️ Limited options'
        ELSE '❌ No products'
    END as website_readiness
FROM expected_categories e
LEFT JOIN (
    SELECT category, COUNT(*) as product_count
    FROM products 
    GROUP BY category
) p ON e.expected_category = p.category
ORDER BY COALESCE(p.product_count, 0) DESC;

-- 6. Sample products from each category for website preview
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
        ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as rn
    FROM products
) ranked
WHERE rn <= 3
ORDER BY category, price DESC;
