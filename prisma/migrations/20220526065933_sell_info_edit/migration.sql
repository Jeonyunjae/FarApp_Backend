-- AddForeignKey
ALTER TABLE "SellInfo" ADD CONSTRAINT "SellInfo_userCode_fkey" FOREIGN KEY ("userCode") REFERENCES "UserBasicInfo"("userCode") ON DELETE RESTRICT ON UPDATE CASCADE;
