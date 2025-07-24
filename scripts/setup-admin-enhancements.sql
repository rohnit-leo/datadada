-- Optional: Create a simple admin sessions table for better security (future enhancement)
CREATE TABLE IF NOT EXISTS admin_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_token TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '24 hours')
);

-- Optional: Create an admin_logs table to track admin activities
CREATE TABLE IF NOT EXISTS admin_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  action TEXT NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add an index on category for faster queries
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- Add an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at);
