-- CreateTable
CREATE TABLE `User_Roles` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(125) NOT NULL,
    `description` VARCHAR(8000) NULL,
    `version` INTEGER NOT NULL DEFAULT 0,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_Roles_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
