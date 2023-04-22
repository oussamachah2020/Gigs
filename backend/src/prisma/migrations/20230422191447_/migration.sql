/*
  Warnings:

  - You are about to drop the `candidate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `candidate`;

-- CreateTable
CREATE TABLE `Candidate` (
    `candidateId` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Candidate_email_key`(`email`),
    PRIMARY KEY (`candidateId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
