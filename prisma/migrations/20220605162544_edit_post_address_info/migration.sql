/*
  Warnings:

  - The primary key for the `PostAddressInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "PostAddressInfo" DROP CONSTRAINT "PostAddressInfo_pkey",
ADD CONSTRAINT "PostAddressInfo_pkey" PRIMARY KEY ("userCode");
