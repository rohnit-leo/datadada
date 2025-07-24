-- Run this script after inserting data to verify everything was added correctly

-- Check total count of products
SELECT COUNT(*) as total_products FROM products;

-- Check products by category
SELECT 
    category,
    COUNT(*) as product_count,
    MIN(price) as min_price,
    MAX(price) as max_price,
    SUM(record_count) as total_records
FROM products 
GROUP BY category 
ORDER BY category;

-- Show all products with their details
SELECT 
    title,
    category,
    region,
    record_count,
    price,
    format,
    created_at
FROM products 
ORDER BY category, price DESC;
