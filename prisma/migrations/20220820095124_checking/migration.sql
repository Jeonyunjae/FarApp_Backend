/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `userbasicinfos` table. All the data in the column will be lost.
  - Added the required column `phonenumber` to the `userbasicinfos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userbasicinfos" DROP COLUMN "phoneNumber",
ADD COLUMN     "phonenumber" TEXT NOT NULL;
