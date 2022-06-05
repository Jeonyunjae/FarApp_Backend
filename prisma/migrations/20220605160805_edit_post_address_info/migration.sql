-- DropForeignKey
ALTER TABLE "PostAddressCodeDefineInfo" DROP CONSTRAINT "PostAddressCodeDefineInfo_addressCode_fkey";

-- AddForeignKey
ALTER TABLE "PostAddressInfo" ADD CONSTRAINT "PostAddressInfo_addressCode_fkey" FOREIGN KEY ("addressCode") REFERENCES "PostAddressCodeDefineInfo"("addressCode") ON DELETE RESTRICT ON UPDATE CASCADE;
