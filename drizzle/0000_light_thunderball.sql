CREATE TABLE `waitlist_signups` (
	`email` text PRIMARY KEY NOT NULL,
	`created_at` text NOT NULL,
	`consent` integer NOT NULL,
	`consent_version` text NOT NULL,
	`source` text NOT NULL
);
