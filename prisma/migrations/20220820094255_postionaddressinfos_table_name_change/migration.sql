/*
  Warnings:

  - You are about to drop the `positionaddressinfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "positionaddressinfo" DROP CONSTRAINT "positionaddressinfo_usercode_fkey";

-- DropTable
DROP TABLE "positionaddressinfo";

-- CreateTable
CREATE TABLE "positionaddressinfos" (
    "usercode" TEXT NOT NULL,
    "loclatitude" INTEGER NOT NULL,
    "loclongtitude" INTEGER NOT NULL,

    CONSTRAINT "positionaddressinfos_pkey" PRIMARY KEY ("usercode")
);

-- CreateIndex
CREATE UNIQUE INDEX "positionaddressinfos_usercode_key" ON "positionaddressinfos"("usercode");

-- AddForeignKey
ALTER TABLE "positionaddressinfos" ADD CONSTRAINT "positionaddressinfos_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userlocation"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;
