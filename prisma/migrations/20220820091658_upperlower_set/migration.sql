/*
  Warnings:

  - You are about to drop the `CategoryCodeDefineInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PositionAddressInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostAddressCodeDefineInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostAddressInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SellInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserBasicInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HashtagToSellInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoomToUserBasicInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_unique_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userdCode_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userCode_fkey";

-- DropForeignKey
ALTER TABLE "PositionAddressInfo" DROP CONSTRAINT "PositionAddressInfo_userCode_fkey";

-- DropForeignKey
ALTER TABLE "PostAddressInfo" DROP CONSTRAINT "PostAddressInfo_addressCode_fkey";

-- DropForeignKey
ALTER TABLE "PostAddressInfo" DROP CONSTRAINT "PostAddressInfo_userCode_fkey";

-- DropForeignKey
ALTER TABLE "SellInfo" DROP CONSTRAINT "SellInfo_categoryCode_fkey";

-- DropForeignKey
ALTER TABLE "SellInfo" DROP CONSTRAINT "SellInfo_userCode_fkey";

-- DropForeignKey
ALTER TABLE "UserBasicInfo" DROP CONSTRAINT "UserBasicInfo_userCode_fkey";

-- DropForeignKey
ALTER TABLE "_FollowRelation" DROP CONSTRAINT "_FollowRelation_A_fkey";

-- DropForeignKey
ALTER TABLE "_FollowRelation" DROP CONSTRAINT "_FollowRelation_B_fkey";

-- DropForeignKey
ALTER TABLE "_HashtagToSellInfo" DROP CONSTRAINT "_HashtagToSellInfo_A_fkey";

-- DropForeignKey
ALTER TABLE "_HashtagToSellInfo" DROP CONSTRAINT "_HashtagToSellInfo_B_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToUserBasicInfo" DROP CONSTRAINT "_RoomToUserBasicInfo_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToUserBasicInfo" DROP CONSTRAINT "_RoomToUserBasicInfo_B_fkey";

-- DropTable
DROP TABLE "CategoryCodeDefineInfo";

-- DropTable
DROP TABLE "Hashtag";

-- DropTable
DROP TABLE "Like";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "PositionAddressInfo";

-- DropTable
DROP TABLE "PostAddressCodeDefineInfo";

-- DropTable
DROP TABLE "PostAddressInfo";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "SellInfo";

-- DropTable
DROP TABLE "UserBasicInfo";

-- DropTable
DROP TABLE "UserInfo";

-- DropTable
DROP TABLE "UserLocation";

-- DropTable
DROP TABLE "_HashtagToSellInfo";

-- DropTable
DROP TABLE "_RoomToUserBasicInfo";

-- CreateTable
CREATE TABLE "userlocation" (
    "usercode" TEXT NOT NULL,
    "userstate" INTEGER NOT NULL,

    CONSTRAINT "userlocation_pkey" PRIMARY KEY ("usercode")
);

-- CreateTable
CREATE TABLE "positionaddressinfo" (
    "usercode" TEXT NOT NULL,
    "loclatitude" INTEGER NOT NULL,
    "loclongtitude" INTEGER NOT NULL,

    CONSTRAINT "positionaddressinfo_pkey" PRIMARY KEY ("usercode")
);

-- CreateTable
CREATE TABLE "postaddressinfo" (
    "usercode" TEXT NOT NULL,
    "addresscode" TEXT NOT NULL,

    CONSTRAINT "postaddressinfo_pkey" PRIMARY KEY ("usercode")
);

-- CreateTable
CREATE TABLE "postaddresscodedefineinfo" (
    "countrycode" INTEGER NOT NULL,
    "countryname" TEXT NOT NULL,
    "address1code" INTEGER NOT NULL,
    "address1name" TEXT NOT NULL,
    "address2code" INTEGER NOT NULL,
    "address2name" TEXT NOT NULL,
    "address3code" INTEGER NOT NULL,
    "address3name" TEXT NOT NULL,
    "addresscode" TEXT NOT NULL,

    CONSTRAINT "postaddresscodedefineinfo_pkey" PRIMARY KEY ("addresscode")
);

-- CreateTable
CREATE TABLE "userinfo" (
    "usercode" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userinfo_pkey" PRIMARY KEY ("usercode")
);

-- CreateTable
CREATE TABLE "userbasicinfo" (
    "usercode" TEXT NOT NULL,
    "avatar" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "checkphone" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userbasicinfo_pkey" PRIMARY KEY ("usercode")
);

-- CreateTable
CREATE TABLE "sellinfo" (
    "unique" TEXT NOT NULL,
    "usercode" TEXT NOT NULL,
    "maincomment" TEXT NOT NULL,
    "subcomment" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "transaction" BOOLEAN NOT NULL,
    "categorycode" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sellinfo_pkey" PRIMARY KEY ("unique")
);

-- CreateTable
CREATE TABLE "like" (
    "id" SERIAL NOT NULL,
    "unique" TEXT NOT NULL,
    "usercode" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hashtag" (
    "id" SERIAL NOT NULL,
    "hashtag" TEXT NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hashtag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorycodedefineinfo" (
    "category1code" INTEGER NOT NULL,
    "category1name" TEXT NOT NULL,
    "category2code" INTEGER NOT NULL,
    "category2name" TEXT NOT NULL,
    "category3code" INTEGER NOT NULL,
    "category3name" TEXT NOT NULL,
    "category4code" INTEGER NOT NULL,
    "category4name" TEXT NOT NULL,
    "categorycode" TEXT NOT NULL,

    CONSTRAINT "categorycodedefineinfo_pkey" PRIMARY KEY ("categorycode")
);

-- CreateTable
CREATE TABLE "room" (
    "id" SERIAL NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "payload" TEXT NOT NULL,
    "usercode" TEXT NOT NULL,
    "roomid" INTEGER NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_hashtagTosellinfo" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_roomTouserbasicinfo" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userlocation_usercode_key" ON "userlocation"("usercode");

-- CreateIndex
CREATE UNIQUE INDEX "positionaddressinfo_usercode_key" ON "positionaddressinfo"("usercode");

-- CreateIndex
CREATE UNIQUE INDEX "postaddressinfo_usercode_key" ON "postaddressinfo"("usercode");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_countrycode_key" ON "postaddresscodedefineinfo"("countrycode");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_countryname_key" ON "postaddresscodedefineinfo"("countryname");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_address1code_key" ON "postaddresscodedefineinfo"("address1code");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_address1name_key" ON "postaddresscodedefineinfo"("address1name");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_address2code_key" ON "postaddresscodedefineinfo"("address2code");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_address2name_key" ON "postaddresscodedefineinfo"("address2name");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_address3code_key" ON "postaddresscodedefineinfo"("address3code");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_address3name_key" ON "postaddresscodedefineinfo"("address3name");

-- CreateIndex
CREATE UNIQUE INDEX "postaddresscodedefineinfo_addresscode_key" ON "postaddresscodedefineinfo"("addresscode");

-- CreateIndex
CREATE UNIQUE INDEX "userinfo_usercode_key" ON "userinfo"("usercode");

-- CreateIndex
CREATE UNIQUE INDEX "userbasicinfo_usercode_key" ON "userbasicinfo"("usercode");

-- CreateIndex
CREATE UNIQUE INDEX "userbasicinfo_email_key" ON "userbasicinfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sellinfo_unique_key" ON "sellinfo"("unique");

-- CreateIndex
CREATE UNIQUE INDEX "like_unique_usercode_key" ON "like"("unique", "usercode");

-- CreateIndex
CREATE UNIQUE INDEX "hashtag_hashtag_key" ON "hashtag"("hashtag");

-- CreateIndex
CREATE UNIQUE INDEX "categorycodedefineinfo_categorycode_key" ON "categorycodedefineinfo"("categorycode");

-- CreateIndex
CREATE UNIQUE INDEX "_hashtagTosellinfo_AB_unique" ON "_hashtagTosellinfo"("A", "B");

-- CreateIndex
CREATE INDEX "_hashtagTosellinfo_B_index" ON "_hashtagTosellinfo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_roomTouserbasicinfo_AB_unique" ON "_roomTouserbasicinfo"("A", "B");

-- CreateIndex
CREATE INDEX "_roomTouserbasicinfo_B_index" ON "_roomTouserbasicinfo"("B");

-- AddForeignKey
ALTER TABLE "positionaddressinfo" ADD CONSTRAINT "positionaddressinfo_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userlocation"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postaddressinfo" ADD CONSTRAINT "postaddressinfo_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userlocation"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "postaddressinfo" ADD CONSTRAINT "postaddressinfo_addresscode_fkey" FOREIGN KEY ("addresscode") REFERENCES "postaddresscodedefineinfo"("addresscode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userbasicinfo" ADD CONSTRAINT "userbasicinfo_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userinfo"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellinfo" ADD CONSTRAINT "sellinfo_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userbasicinfo"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sellinfo" ADD CONSTRAINT "sellinfo_categorycode_fkey" FOREIGN KEY ("categorycode") REFERENCES "categorycodedefineinfo"("categorycode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userbasicinfo"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_unique_fkey" FOREIGN KEY ("unique") REFERENCES "sellinfo"("unique") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_usercode_fkey" FOREIGN KEY ("usercode") REFERENCES "userbasicinfo"("usercode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_roomid_fkey" FOREIGN KEY ("roomid") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD CONSTRAINT "_FollowRelation_A_fkey" FOREIGN KEY ("A") REFERENCES "userbasicinfo"("usercode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD CONSTRAINT "_FollowRelation_B_fkey" FOREIGN KEY ("B") REFERENCES "userbasicinfo"("usercode") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_hashtagTosellinfo" ADD CONSTRAINT "_hashtagTosellinfo_A_fkey" FOREIGN KEY ("A") REFERENCES "hashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_hashtagTosellinfo" ADD CONSTRAINT "_hashtagTosellinfo_B_fkey" FOREIGN KEY ("B") REFERENCES "sellinfo"("unique") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_roomTouserbasicinfo" ADD CONSTRAINT "_roomTouserbasicinfo_A_fkey" FOREIGN KEY ("A") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_roomTouserbasicinfo" ADD CONSTRAINT "_roomTouserbasicinfo_B_fkey" FOREIGN KEY ("B") REFERENCES "userbasicinfo"("usercode") ON DELETE CASCADE ON UPDATE CASCADE;
