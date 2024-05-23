-- CreateTable
CREATE TABLE `Comments` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `parentId` VARCHAR(191) NOT NULL,
    `fkId` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(8000) NOT NULL,
    `version` INTEGER NOT NULL DEFAULT 0,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Comments_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users_Comments` (
    `users_id` VARCHAR(191) NOT NULL,
    `comments_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`users_id`, `comments_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stores_Comments` (
    `stores_id` VARCHAR(191) NOT NULL,
    `comments_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`stores_id`, `comments_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products_Comments` (
    `products_id` VARCHAR(191) NOT NULL,
    `comments_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`products_id`, `comments_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users_Comments` ADD CONSTRAINT `Users_Comments_users_id_fkey` FOREIGN KEY (`users_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users_Comments` ADD CONSTRAINT `Users_Comments_comments_id_fkey` FOREIGN KEY (`comments_id`) REFERENCES `Comments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stores_Comments` ADD CONSTRAINT `Stores_Comments_stores_id_fkey` FOREIGN KEY (`stores_id`) REFERENCES `Stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stores_Comments` ADD CONSTRAINT `Stores_Comments_comments_id_fkey` FOREIGN KEY (`comments_id`) REFERENCES `Comments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products_Comments` ADD CONSTRAINT `Products_Comments_products_id_fkey` FOREIGN KEY (`products_id`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products_Comments` ADD CONSTRAINT `Products_Comments_comments_id_fkey` FOREIGN KEY (`comments_id`) REFERENCES `Comments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
