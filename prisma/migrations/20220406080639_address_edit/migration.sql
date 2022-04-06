/*
  Warnings:

  - A unique constraint covering the columns `[userCode]` on the table `PostAddressInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "UserLocation" (
    "userCode" TEXT NOT NULL,

    CONSTRAINT "UserLocation_pkey" PRIMARY KEY ("userCode")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserLocation_userCode_key" ON "UserLocation"("userCode");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressInfo_userCode_key" ON "PostAddressInfo"("userCode");

-- AddForeignKey
ALTER TABLE "PositionAddressInfo" ADD CONSTRAINT "PositionAddressInfo_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "UserLocation"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostAddressInfo" ADD CONSTRAINT "PostAddressInfo_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "UserLocation"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;
