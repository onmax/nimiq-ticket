CREATE TABLE `tickets` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`username` text NOT NULL,
	`avatar` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tickets_username_unique` ON `tickets` (`username`);