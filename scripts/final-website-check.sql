-- Final check to ensure all category pages will display products correctly
-- This simulates exactly what your website will query

-- Check each category page will have sufficient data
SELECT 
    category,
    COUNT(*) as products_available,
    MIN(price) as cheapest_option,
    MAX(price) as premium_option,
    SUM(record_count) as total_student_records,
    ROUND(AVG(price)) as average_price
FROM products 
GROUP BY category
ORDER BY category;

-- Show total database statistics
SELECT 
    COUNT(*) as total_products,
    COUNT(DISTINCT category) as categories_covered,
    SUM(record_count) as total_student_records,
    MIN(price) as lowest_price,
    MAX(price) as highest_price,
    ROUND(AVG(price)) as average_price,
    ROUND(AVG(record_count)) as average_records_per_database
FROM products;

-- Verify all expected categories are present
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
    e.expected_category,
    COALESCE(p.product_count, 0) as actual_products,
    CASE 
        WHEN COALESCE(p.product_count, 0) > 0 THEN '✅ Ready for website'
        ELSE '❌ No products found'
    END as website_status
FROM expected_categories e
LEFT JOIN (
    SELECT category, COUNT(*) as product_count
    FROM products 
    GROUP BY category
) p ON e.expected_category = p.category
ORDER BY e.expected_category;
