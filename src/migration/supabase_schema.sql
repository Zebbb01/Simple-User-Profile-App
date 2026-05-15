-- Create the profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  "fullName" TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  "phoneNumber" TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('Rider', 'Merchant', 'Local Seller')),
  address TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies (Allowing public access for this simple app demo)
-- NOTE: In a production app, you should restrict this to authenticated users.

-- Allow anyone to read profiles
CREATE POLICY "Allow public read access"
ON public.profiles
FOR SELECT
TO public
USING (true);

-- Allow anyone to insert profiles
CREATE POLICY "Allow public insert access"
ON public.profiles
FOR INSERT
TO public
WITH CHECK (true);

-- Allow anyone to update profiles
CREATE POLICY "Allow public update access"
ON public.profiles
FOR UPDATE
TO public
USING (true);
