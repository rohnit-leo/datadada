CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  format TEXT NOT NULL,
  record_count INT NOT NULL,
  price INT NOT NULL,
  category TEXT NOT NULL,
  region TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
