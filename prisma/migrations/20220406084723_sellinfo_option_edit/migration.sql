/*
  Warnings:

  - A unique constraint covering the columns `[unique]` on the table `SellInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Hashtag" (
    "id" SERIAL NOT NULL,
    "hashtag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HashtagToSellInfo" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HashtagToSellInfo_AB_unique" ON "_HashtagToSellInfo"("A", "B");

-- CreateIndex
CREATE INDEX "_HashtagToSellInfo_B_index" ON "_HashtagToSellInfo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "SellInfo_unique_key" ON "SellInfo"("unique");

-- AddForeignKey
ALTER TABLE "_HashtagToSellInfo" ADD FOREIGN KEY ("A") REFERENCES "Hashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HashtagToSellInfo" ADD FOREIGN KEY ("B") REFERENCES "SellInfo"("unique") ON DELETE CASCADE ON UPDATE CASCADE;
