-- CreateTable
CREATE TABLE "cidade" (
    "idkey" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "urlbrasao" TEXT NOT NULL,

    CONSTRAINT "cidade_pkey" PRIMARY KEY ("idkey")
);

-- CreateTable
CREATE TABLE "plano" (
    "idkey" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "idkey_cidade" INTEGER,

    CONSTRAINT "plano_pkey" PRIMARY KEY ("idkey")
);

-- CreateTable
CREATE TABLE "grupo" (
    "idkey" SERIAL NOT NULL,
    "idkey_plano" INTEGER,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "grupo_pkey" PRIMARY KEY ("idkey")
);

-- CreateTable
CREATE TABLE "link" (
    "idkey" SERIAL NOT NULL,
    "idkey_grupo" INTEGER,
    "link" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "nomeArquivo" TEXT NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("idkey")
);

-- CreateIndex
CREATE UNIQUE INDEX "cidade_idkey_key" ON "cidade"("idkey");

-- CreateIndex
CREATE UNIQUE INDEX "plano_idkey_key" ON "plano"("idkey");

-- CreateIndex
CREATE UNIQUE INDEX "grupo_idkey_key" ON "grupo"("idkey");

-- CreateIndex
CREATE UNIQUE INDEX "link_idkey_key" ON "link"("idkey");

-- AddForeignKey
ALTER TABLE "plano" ADD CONSTRAINT "plano_idkey_cidade_fkey" FOREIGN KEY ("idkey_cidade") REFERENCES "cidade"("idkey") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grupo" ADD CONSTRAINT "grupo_idkey_plano_fkey" FOREIGN KEY ("idkey_plano") REFERENCES "plano"("idkey") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_idkey_grupo_fkey" FOREIGN KEY ("idkey_grupo") REFERENCES "grupo"("idkey") ON DELETE SET NULL ON UPDATE CASCADE;
