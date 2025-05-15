CREATE TABLE `component` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`serialNumber` text NOT NULL,
	`macAddress` text NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `component_serialNumber_unique` ON `component` (`serialNumber`);--> statement-breakpoint
CREATE UNIQUE INDEX `component_macAddress_unique` ON `component` (`macAddress`);--> statement-breakpoint
CREATE TABLE `componentImage` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`key` text NOT NULL,
	`testResultId` integer NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL,
	FOREIGN KEY (`testResultId`) REFERENCES `testResult`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `testResult` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`componentId` integer NOT NULL,
	`dateTested` integer NOT NULL,
	`result` text DEFAULT 'pending' NOT NULL,
	`comment` text NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL,
	FOREIGN KEY (`componentId`) REFERENCES `component`(`id`) ON UPDATE no action ON DELETE no action
);
