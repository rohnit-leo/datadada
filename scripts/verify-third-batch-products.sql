-- Verification script to confirm the third batch of 80 products was added successfully
-- Run this after the insert script

-- 1. Check total count after third batch addition
SELECT 'Total Products After Third Batch' as metric, COUNT(*) as count FROM products;

-- 2. Check count by category (should show further increased numbers)
SELECT 
    category,
    COUNT(*) as product_count,
    MIN(price) as min_price,
    MAX(price) as max_price,
    SUM(record_count) as total_records,
    ROUND(AVG(price)) as avg_price
FROM products 
GROUP BY category 
ORDER BY category;

-- 3. Show the most recently added products (latest 80 by creation time)
SELECT 
    category,
    title,
    price,
    record_count,
    region,
    created_at
FROM products 
ORDER BY created_at DESC 
LIMIT 80;

-- 4. Verify each category now has substantial product count
WITH category_counts AS (
    SELECT 
        category,
        COUNT(*) as total_products
    FROM products 
    GROUP BY category
)
SELECT 
    category,
    total_products,
    CASE 
        WHEN total_products >= 25 THEN '🚀 Excellent product variety'
        WHEN total_products >= 15 THEN '✅ Good product selection'
        WHEN total_products >= 10 THEN '👍 Adequate products'
        ELSE '⚠️ May need more products'
    END as status
FROM category_counts
ORDER BY total_products DESC;

-- 5. Check for premium databases (high record count and price)
SELECT 
    'Premium Databases (>50K records)' as type,
    title,
    record_count,
    price,
    category,
    region
FROM products 
WHERE record_count > 50000
ORDER BY record_count DESC
LIMIT 10;

-- 6. Show price distribution across all products
SELECT 
    CASE 
        WHEN price < 1000 THEN 'Budget (Under ₹1,000)'
        WHEN price < 2000 THEN 'Standard (₹1,000-₹1,999)'
        WHEN price < 3000 THEN 'Premium (₹2,000-₹2,999)'
        ELSE 'Enterprise (₹3,000+)'
    END as price_category,
    COUNT(*) as product_count,
    MIN(price) as min_price,
    MAX(price) as max_price
FROM products
GROUP BY 
    CASE 
        WHEN price < 1000 THEN 'Budget (Under ₹1,000)'
        WHEN price < 2000 THEN 'Standard (₹1,000-₹1,999)'
        WHEN price < 3000 THEN 'Premium (₹2,000-₹2,999)'
        ELSE 'Enterprise (₹3,000+)'
    END
ORDER BY min_price;
