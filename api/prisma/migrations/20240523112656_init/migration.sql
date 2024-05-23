-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `middle` VARCHAR(50) NULL,
    `avatar` VARCHAR(500) NULL,
    `addressID` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(20) NULL,
    `email` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `version` INTEGER NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_id_key`(`id`),
    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
