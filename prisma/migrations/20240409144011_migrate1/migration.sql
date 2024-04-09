-- CreateTable
CREATE TABLE `mission_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `budget` INTEGER NULL,
    `status` ENUM('planned', 'in_progress', 'completed', 'on_hold', 'failed', 'cancelled') NOT NULL DEFAULT 'planned',
    `priority` ENUM('high', 'normal', 'low') NOT NULL DEFAULT 'normal',
    `typeId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Objective` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `missionId` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `type` ENUM('Altitude', 'Flyby', 'OrbitDuration', 'PowerGeneration', 'Speed', 'CrewRequirement', 'Other') NOT NULL,
    `data` VARCHAR(191) NULL,
    `status` ENUM('Planned', 'InProgress', 'Completed', 'Failed') NOT NULL DEFAULT 'Planned',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `missionId` INTEGER NOT NULL,
    `orderIndex` INTEGER NOT NULL,
    `type` ENUM('Maneuver', 'Deployment', 'Launch', 'CorrectionBurn', 'Burn', 'Aerobrake', 'Spacewalk', 'Other') NOT NULL,
    `status` ENUM('Planned', 'InProgress', 'Completed', 'Failed') NOT NULL DEFAULT 'Planned',
    `description` VARCHAR(191) NULL,
    `data` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mission` ADD CONSTRAINT `Mission_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `mission_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Objective` ADD CONSTRAINT `Objective_missionId_fkey` FOREIGN KEY (`missionId`) REFERENCES `Mission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stage` ADD CONSTRAINT `Stage_missionId_fkey` FOREIGN KEY (`missionId`) REFERENCES `Mission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
