/*
  Warnings:

  - Added the required column `useState` to the `UserLocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserLocation" ADD COLUMN     "useState" INTEGER NOT NULL;
