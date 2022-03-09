-- CreateTable
CREATE TABLE "PositionAddressInfo" (
    "userCode" TEXT NOT NULL,
    "locLatitude" INTEGER NOT NULL,
    "locLongtitude" INTEGER NOT NULL,

    CONSTRAINT "PositionAddressInfo_pkey" PRIMARY KEY ("userCode")
);

-- CreateTable
CREATE TABLE "PostAddressInfo" (
    "userCode" TEXT NOT NULL,
    "addressCode" TEXT NOT NULL,

    CONSTRAINT "PostAddressInfo_pkey" PRIMARY KEY ("addressCode")
);

-- CreateTable
CREATE TABLE "PostAddressCodeDefineInfo" (
    "countryCode" INTEGER NOT NULL,
    "countryName" TEXT NOT NULL,
    "address1Code" INTEGER NOT NULL,
    "address1Name" TEXT NOT NULL,
    "address2Code" INTEGER NOT NULL,
    "address2Name" TEXT NOT NULL,
    "address3Code" INTEGER NOT NULL,
    "address3Name" TEXT NOT NULL,
    "addressCode" TEXT NOT NULL,

    CONSTRAINT "PostAddressCodeDefineInfo_pkey" PRIMARY KEY ("addressCode")
);

-- CreateTable
CREATE TABLE "UserInfo" (
    "userCode" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("userCode")
);

-- CreateTable
CREATE TABLE "UserBasicInfo" (
    "userCode" TEXT NOT NULL,
    "avatar" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "checkPhone" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserBasicInfo_pkey" PRIMARY KEY ("userCode")
);

-- CreateTable
CREATE TABLE "BuyInfo" (
    "unique" TEXT NOT NULL,
    "userCode" TEXT NOT NULL,
    "bookMark" BOOLEAN NOT NULL,
    "transaction" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BuyInfo_pkey" PRIMARY KEY ("unique")
);

-- CreateTable
CREATE TABLE "SellInfo" (
    "unique" TEXT NOT NULL,
    "userCode" TEXT NOT NULL,
    "mainComment" TEXT NOT NULL,
    "subComment" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "transaction" BOOLEAN NOT NULL,
    "categoryCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SellInfo_pkey" PRIMARY KEY ("unique")
);

-- CreateTable
CREATE TABLE "CategoryCodeDefineInfo" (
    "category1Code" INTEGER NOT NULL,
    "category1Name" TEXT NOT NULL,
    "category2Code" INTEGER NOT NULL,
    "category2Name" TEXT NOT NULL,
    "category3Code" INTEGER NOT NULL,
    "category3Name" TEXT NOT NULL,
    "category4Code" INTEGER NOT NULL,
    "category4Name" TEXT NOT NULL,
    "categoryCode" TEXT NOT NULL,

    CONSTRAINT "CategoryCodeDefineInfo_pkey" PRIMARY KEY ("categoryCode")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "payload" TEXT NOT NULL,
    "userCode" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RoomToUserBasicInfo" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PositionAddressInfo_userCode_key" ON "PositionAddressInfo"("userCode");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_countryCode_key" ON "PostAddressCodeDefineInfo"("countryCode");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_countryName_key" ON "PostAddressCodeDefineInfo"("countryName");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_address1Code_key" ON "PostAddressCodeDefineInfo"("address1Code");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_address1Name_key" ON "PostAddressCodeDefineInfo"("address1Name");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_address2Code_key" ON "PostAddressCodeDefineInfo"("address2Code");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_address2Name_key" ON "PostAddressCodeDefineInfo"("address2Name");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_address3Code_key" ON "PostAddressCodeDefineInfo"("address3Code");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_address3Name_key" ON "PostAddressCodeDefineInfo"("address3Name");

-- CreateIndex
CREATE UNIQUE INDEX "PostAddressCodeDefineInfo_addressCode_key" ON "PostAddressCodeDefineInfo"("addressCode");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_userCode_key" ON "UserInfo"("userCode");

-- CreateIndex
CREATE UNIQUE INDEX "UserBasicInfo_userCode_key" ON "UserBasicInfo"("userCode");

-- CreateIndex
CREATE UNIQUE INDEX "UserBasicInfo_email_key" ON "UserBasicInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryCodeDefineInfo_categoryCode_key" ON "CategoryCodeDefineInfo"("categoryCode");

-- CreateIndex
CREATE UNIQUE INDEX "_RoomToUserBasicInfo_AB_unique" ON "_RoomToUserBasicInfo"("A", "B");

-- CreateIndex
CREATE INDEX "_RoomToUserBasicInfo_B_index" ON "_RoomToUserBasicInfo"("B");

-- AddForeignKey
ALTER TABLE "PostAddressCodeDefineInfo" ADD CONSTRAINT "PostAddressCodeDefineInfo_addressCode_fkey" FOREIGN KEY ("addressCode") REFERENCES "PostAddressInfo"("addressCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBasicInfo" ADD CONSTRAINT "UserBasicInfo_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "UserInfo"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SellInfo" ADD CONSTRAINT "SellInfo_categoryCode_fkey" FOREIGN KEY ("categoryCode") REFERENCES "CategoryCodeDefineInfo"("categoryCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "UserBasicInfo"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomToUserBasicInfo" ADD FOREIGN KEY ("A") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomToUserBasicInfo" ADD FOREIGN KEY ("B") REFERENCES "UserBasicInfo"("userCode") ON DELETE CASCADE ON UPDATE CASCADE;
