/*
  Warnings:

  - You are about to drop the `_roomTouserbasicinfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userbasicinfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FollowRelation" DROP CONSTRAINT "_FollowRelation_A_fkey";

-- DropForeignKey
ALTER TABLE "_FollowRelation" DROP CONSTRAINT "_FollowRelation_B_fkey";

-- DropForeignKey
ALTER TABLE "_roomTouserbasicinfo" DROP CONSTRAINT "_roomTouserbasicinfo_A_fkey";

-- DropForeignKey
ALTER TABLE "_roomTouserbasicinfo" DROP CONSTRAINT "_roomTouserbasicinfo_B_fkey";

-- DropForeignKey
ALTER TABLE "like" DROP CONSTRAINT "like_usercode_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_usercode_fkey";

-- DropForeignKey
ALTER TABLE "sellinfo" DROP CONSTRAINT "sellinfo_usercode_fkey";

-- DropForeignKey
ALTER TABLE "userbasicinfo" DROP CONSTRAINT "userbasicinfo_usercode_fkey";

-- DropTable
DROP TABLE "_roomTouserbasicinfo";

-- DropTable
DROP TABLE "userbasicinfo";

-- CreateTable
CREATE TABLE "userbasicinfos" (
    "usercode" TEXT NOT NULL,
    "avatar" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "checkphone" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userbasicinfos_pkey" PRIMARY KEY ("usercode")
);

-- CreateTable
CREATE TABLE "_roomTouserbasicinfos" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userbasicinfos_usercode_key" ON "userbasicinfos"("usercode");

-- CreateIndex
CREATE UNIQUE INDEX "userbasicinfos_email_key" ON "userbasicinfos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_roomTouserbasicinfos_AB_unique" ON "_roomTouserbasicinfos"("A", "B");

-- CreateIndex
CREATE INDEX "_roomTouserbasicinfos_B_index" ON "_roomTouserbasicinfos"("B");

-- AddForeignKey
ALTER TABLE "userbasicinfos" ADD CONSTRAINT "userbasicinfos_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userinfo"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellinfo" ADD CONSTRAINT "sellinfo_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userbasicinfos"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userbasicinfos"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userbasicinfos"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD CONSTRAINT "_FollowRelation_A_fkey" FOREIGN KEY ("A") REFERENCES "userbasicinfos"("usercode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD CONSTRAINT "_FollowRelation_B_fkey" FOREIGN KEY ("B") REFERENCES "userbasicinfos"("usercode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_roomTouserbasicinfos" ADD CONSTRAINT "_roomTouserbasicinfos_A_fkey" FOREIGN KEY ("A") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_roomTouserbasicinfos" ADD CONSTRAINT "_roomTouserbasicinfos_B_fkey" FOREIGN KEY ("B") REFERENCES "userbasicinfos"("usercode") ON DELETE CASCADE ON UPDATE CASCADE;
