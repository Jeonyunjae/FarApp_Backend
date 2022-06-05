/*
  Warnings:

  - You are about to drop the column `useState` on the `UserLocation` table. All the data in the column will be lost.
  - Added the required column `userState` to the `UserLocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserLocation" DROP COLUMN "useState",
ADD COLUMN     "userState" INTEGER NOT NULL;
