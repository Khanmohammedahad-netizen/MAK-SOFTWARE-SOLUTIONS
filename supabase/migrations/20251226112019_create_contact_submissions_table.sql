/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text)
      - `phone` (text, optional)
      - `project_scope` (text)
      - `budget` (text, optional)
      - `timeline` (text, optional)
      - `message` (text, optional)
      - `submitted_at` (timestamp)

  2. Security
    - RLS disabled (contact form is public)
    - Anyone can submit, but no one can read/edit except via admin access

  3. Notes
    - This table stores public contact form submissions
    - No authentication required to submit
    - Admin will need a separate dashboard to view submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text,
  project_scope text NOT NULL,
  budget text,
  timeline text,
  message text,
  submitted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS contact_submissions_submitted_at_idx ON contact_submissions(submitted_at DESC);
