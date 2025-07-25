-- Verification script to confirm all 80 new products were added successfully
-- Run this after the insert script

-- 1. Check total count before and after
SELECT 'Total Products After Addition' as metric, COUNT(*) as count FROM products;

-- 2. Check count by category (should show increased numbers)
SELECT 
    category,
    COUNT(*) as product_count,
    MIN(price) as min_price,
    MAX(price) as max_price,
    SUM(record_count) as total_records
FROM products 
GROUP BY category 
ORDER BY category;

-- 3. Show the newly added products (latest 80 by creation time)
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

-- 4. Verify each category has the expected additional products
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
        WHEN total_products >= 10 THEN '✅ Has sufficient products'
        ELSE '⚠️ May need more products'
    END as status
FROM category_counts
ORDER BY category;

-- 5. Check for any data quality issues in new products
SELECT 
    'Products with empty titles' as issue,
    COUNT(*) as count
FROM products 
WHERE title IS NULL OR title = ''
UNION ALL
SELECT 
    'Products with zero/negative price' as issue,
    COUNT(*) as count
FROM products 
WHERE price <= 0
UNION ALL
SELECT 
    'Products with zero/negative records' as issue,
    COUNT(*) as count
FROM products 
WHERE record_count <= 0;

-- 6. Show sample of highest and lowest priced products
(SELECT 'HIGHEST PRICED' as type, title, price, record_count, category 
 FROM products 
 ORDER BY price DESC 
 LIMIT 5)
UNION ALL
(SELECT 'LOWEST PRICED' as type, title, price, record_count, category 
 FROM products 
 ORDER BY price ASC 
 LIMIT 5);
