-- CreateTable
CREATE TABLE `Stores` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(500) NOT NULL,
    `addressId` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(500) NULL,
    `tagline` VARCHAR(500) NULL,
    `description` VARCHAR(8000) NULL,
    `version` INTEGER NOT NULL DEFAULT 0,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Stores_id_key`(`id`),
    UNIQUE INDEX `Stores_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Stores` ADD CONSTRAINT `Stores_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Addresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
