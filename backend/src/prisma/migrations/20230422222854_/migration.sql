/*
  Warnings:

  - Added the required column `verified` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verified` to the `recruiter` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `recruiter_password_key` ON `recruiter`;

-- AlterTable
ALTER TABLE `Candidate` ADD COLUMN `verified` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `recruiter` ADD COLUMN `verified` BOOLEAN NOT NULL;
