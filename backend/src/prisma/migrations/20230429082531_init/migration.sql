/*
  Warnings:

  - The primary key for the `Candidate` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Candidate` DROP PRIMARY KEY,
    MODIFY `candidateId` VARCHAR(191) NOT NULL;
