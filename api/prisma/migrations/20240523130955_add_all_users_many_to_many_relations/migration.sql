-- CreateTable
CREATE TABLE `Users_User_Roles` (
    `users_id` VARCHAR(191) NOT NULL,
    `user_roles_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`users_id`, `user_roles_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stores_Users` (
    `stores_id` VARCHAR(191) NOT NULL,
    `users_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`stores_id`, `users_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users_Ratings` (
    `users_id` VARCHAR(191) NOT NULL,
    `ratings_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`users_id`, `ratings_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users_User_Roles` ADD CONSTRAINT `Users_User_Roles_users_id_fkey` FOREIGN KEY (`users_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users_User_Roles` ADD CONSTRAINT `Users_User_Roles_user_roles_id_fkey` FOREIGN KEY (`user_roles_id`) REFERENCES `User_Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stores_Users` ADD CONSTRAINT `Stores_Users_stores_id_fkey` FOREIGN KEY (`stores_id`) REFERENCES `Stores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stores_Users` ADD CONSTRAINT `Stores_Users_users_id_fkey` FOREIGN KEY (`users_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users_Ratings` ADD CONSTRAINT `Users_Ratings_users_id_fkey` FOREIGN KEY (`users_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users_Ratings` ADD CONSTRAINT `Users_Ratings_ratings_id_fkey` FOREIGN KEY (`ratings_id`) REFERENCES `Ratings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
