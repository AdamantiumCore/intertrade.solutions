-- CreateTable
CREATE TABLE `Products_Categories` (
    `products_id` VARCHAR(191) NOT NULL,
    `categories_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`products_id`, `categories_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Wishlists_Products` (
    `wishlists_id` VARCHAR(191) NOT NULL,
    `products_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`wishlists_id`, `products_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders_Products` (
    `orders_id` VARCHAR(191) NOT NULL,
    `products_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`orders_id`, `products_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stores_Ratings` (
    `stores_id` VARCHAR(191) NOT NULL,
    `ratings_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`stores_id`, `ratings_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products_Ratings` (
    `products_id` VARCHAR(191) NOT NULL,
    `ratings_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`products_id`, `ratings_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products_Categories` ADD CONSTRAINT `Products_Categories_products_id_fkey` FOREIGN KEY (`products_id`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products_Categories` ADD CONSTRAINT `Products_Categories_categories_id_fkey` FOREIGN KEY (`categories_id`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Wishlists_Products` ADD CONSTRAINT `Wishlists_Products_wishlists_id_fkey` FOREIGN KEY (`wishlists_id`) REFERENCES `Wishlists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Wishlists_Products` ADD CONSTRAINT `Wishlists_Products_products_id_fkey` FOREIGN KEY (`products_id`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders_Products` ADD CONSTRAINT `Orders_Products_orders_id_fkey` FOREIGN KEY (`orders_id`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders_Products` ADD CONSTRAINT `Orders_Products_products_id_fkey` FOREIGN KEY (`products_id`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stores_Ratings` ADD CONSTRAINT `Stores_Ratings_stores_id_fkey` FOREIGN KEY (`stores_id`) REFERENCES `Stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stores_Ratings` ADD CONSTRAINT `Stores_Ratings_ratings_id_fkey` FOREIGN KEY (`ratings_id`) REFERENCES `Ratings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products_Ratings` ADD CONSTRAINT `Products_Ratings_products_id_fkey` FOREIGN KEY (`products_id`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products_Ratings` ADD CONSTRAINT `Products_Ratings_ratings_id_fkey` FOREIGN KEY (`ratings_id`) REFERENCES `Ratings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
