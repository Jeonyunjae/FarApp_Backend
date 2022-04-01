/*
  Warnings:

  - You are about to drop the `BuyInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BuyInfo";

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "unique" TEXT NOT NULL,
    "userdCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Like_unique_userdCode_key" ON "Like"("unique", "userdCode");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userdCode_fkey" FOREIGN KEY ("userdCode") REFERENCES "UserBasicInfo"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_unique_fkey" FOREIGN KEY ("unique") REFERENCES "SellInfo"("unique") ON DELETE RESTRICT ON UPDATE CASCADE;
