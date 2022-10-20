/*
  Warnings:

  - Added the required column `url_imagem_plano` to the `plano` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plano" ADD COLUMN     "url_imagem_plano" TEXT NOT NULL;
