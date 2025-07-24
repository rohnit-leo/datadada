-- Create storage buckets for future enhancements (optional)
-- Run this in Supabase SQL Editor

-- Create a bucket for product images (if you want to add images later)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create a bucket for admin uploads (if needed later)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('admin-uploads', 'admin-uploads', false)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for product images (public read access)
CREATE POLICY "Public can view product images" ON storage.objects
FOR SELECT USING (bucket_id = 'product-images');

-- Set up storage policies for admin uploads (admin only)
CREATE POLICY "Admin can upload files" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'admin-uploads');

CREATE POLICY "Admin can view uploads" ON storage.objects
FOR SELECT USING (bucket_id = 'admin-uploads');

CREATE POLICY "Admin can update uploads" ON storage.objects
FOR UPDATE USING (bucket_id = 'admin-uploads');

CREATE POLICY "Admin can delete uploads" ON storage.objects
FOR DELETE USING (bucket_id = 'admin-uploads');
