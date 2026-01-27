-- SQL Script to create tables manually in Supabase
-- Execute this in Supabase SQL Editor: https://supabase.com/dashboard/project/dfzubkurbzhflfpoytcp/sql

-- Create newsletter table
CREATE TABLE IF NOT EXISTS newsletter (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    locale TEXT DEFAULT 'es' NOT NULL,
    "subscribedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    verified BOOLEAN DEFAULT FALSE NOT NULL,
    "verifyToken" TEXT UNIQUE,
    source TEXT
);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_verified ON newsletter(verified);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    "eventType" TEXT,
    locale TEXT DEFAULT 'es' NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL,
    "adminNotes" TEXT
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_createdAt ON contact_messages("createdAt");

-- Create faqs table
CREATE TABLE IF NOT EXISTS faqs (
    id TEXT PRIMARY KEY,
    question_es TEXT NOT NULL,
    answer_es TEXT NOT NULL,
    question_en TEXT NOT NULL,
    answer_en TEXT NOT NULL,
    question_de TEXT NOT NULL,
    answer_de TEXT NOT NULL,
    category TEXT NOT NULL,
    "order" INTEGER DEFAULT 0 NOT NULL,
    active BOOLEAN DEFAULT TRUE NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_faqs_category ON faqs(category);
CREATE INDEX IF NOT EXISTS idx_faqs_active ON faqs(active);
