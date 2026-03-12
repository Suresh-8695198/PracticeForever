-- Add optional new columns to current_affairs table if they don't exist
-- Run this after the initial schema has been created

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'current_affairs' AND column_name = 'source'
    ) THEN
        ALTER TABLE current_affairs ADD COLUMN source VARCHAR(255) DEFAULT '';
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'current_affairs' AND column_name = 'importance'
    ) THEN
        ALTER TABLE current_affairs ADD COLUMN importance VARCHAR(20) DEFAULT 'normal';
    END IF;
END $$;
