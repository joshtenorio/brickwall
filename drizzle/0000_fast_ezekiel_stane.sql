CREATE TABLE `brickwall_chat` (
	`chatid` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text DEFAULT 'Untitled chat',
	`pin` integer DEFAULT false
);
--> statement-breakpoint
CREATE TABLE `brickwall_message` (
	`messageid` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`chatid` integer,
	`timestamp` integer NOT NULL,
	`text` text DEFAULT '',
	`s3key` text DEFAULT '',
	`filename` text DEFAULT ''
);
--> statement-breakpoint
CREATE TABLE `brickwall_post` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256),
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `brickwall_post` (`name`);