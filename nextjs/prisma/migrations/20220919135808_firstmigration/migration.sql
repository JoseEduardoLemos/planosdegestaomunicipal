/*
  Warnings:

  - Added the required column `urlbrasao` to the `cidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cidade" ADD COLUMN     "urlbrasao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "grupo" ALTER COLUMN "idkey_municipio" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_idkey_municipio_fkey" FOREIGN KEY ("idkey_municipio") REFERENCES "cidade"("idkey") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_idkey_grupos_fkey" FOREIGN KEY ("idkey_grupos") REFERENCES "grupo"("idkey") ON DELETE RESTRICT ON UPDATE CASCADE;
