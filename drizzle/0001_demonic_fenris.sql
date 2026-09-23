CREATE TABLE `team_inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text NOT NULL,
	`name` text NOT NULL,
	`organization` text NOT NULL,
	`role` text NOT NULL,
	`monthly_volume` text NOT NULL,
	`email` text NOT NULL,
	`consent` integer NOT NULL
);
