/*
  Warnings:

  - A unique constraint covering the columns `[addressId]` on the table `Stores` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressID]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Product_Images` (
    `id` VARCHAR(191) NOT NULL,
    `folderName` VARCHAR(1000) NOT NULL,
    `fileName` VARCHAR(500) NOT NULL,
    `version` INTEGER NOT NULL DEFAULT 0,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Product_Images_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Stores_addressId_key` ON `Stores`(`addressId`);

-- CreateIndex
CREATE UNIQUE INDEX `Users_addressID_key` ON `Users`(`addressID`);

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_addressID_fkey` FOREIGN KEY (`addressID`) REFERENCES `Addresses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product_Images` ADD CONSTRAINT `Product_Images_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
