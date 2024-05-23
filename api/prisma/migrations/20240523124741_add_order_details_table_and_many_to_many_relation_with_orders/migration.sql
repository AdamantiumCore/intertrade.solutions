-- CreateTable
CREATE TABLE `Order_Details` (
    `id` VARCHAR(191) NOT NULL,
    `detailKey` VARCHAR(255) NOT NULL,
    `detailValue` VARCHAR(8000) NOT NULL,
    `version` INTEGER NOT NULL DEFAULT 0,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Order_Details_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders_Order_Details` (
    `orders_id` VARCHAR(191) NOT NULL,
    `order_details_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`orders_id`, `order_details_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Orders_Order_Details` ADD CONSTRAINT `Orders_Order_Details_orders_id_fkey` FOREIGN KEY (`orders_id`) REFERENCES `Orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders_Order_Details` ADD CONSTRAINT `Orders_Order_Details_order_details_id_fkey` FOREIGN KEY (`order_details_id`) REFERENCES `Order_Details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
