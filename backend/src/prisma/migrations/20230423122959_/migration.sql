/*
  Warnings:

  - You are about to drop the `job_post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recruiter` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[candidateId]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Candidate` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `verified` BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE `job_post`;

-- DropTable
DROP TABLE `recruiter`;

-- CreateTable
CREATE TABLE `JobPost` (
    `jobId` INTEGER NOT NULL AUTO_INCREMENT,
    `job_title` VARCHAR(191) NOT NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `company_location` VARCHAR(191) NOT NULL,
    `technologies_required` VARCHAR(191) NOT NULL,
    `job_description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`jobId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recruiter` (
    `recruiterId` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Recruiter_email_key`(`email`),
    PRIMARY KEY (`recruiterId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Candidate_candidateId_key` ON `Candidate`(`candidateId`);
