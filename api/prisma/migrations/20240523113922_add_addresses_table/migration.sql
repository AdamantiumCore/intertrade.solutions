-- AlterTable
ALTER TABLE `users` MODIFY `version` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Addresses` (
    `id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(500) NOT NULL,
    `city` VARCHAR(250) NOT NULL,
    `state_province` VARCHAR(250) NOT NULL,
    `zipcode` VARCHAR(15) NOT NULL,
    `country` VARCHAR(150) NOT NULL,
    `version` INTEGER NOT NULL DEFAULT 0,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Addresses_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
