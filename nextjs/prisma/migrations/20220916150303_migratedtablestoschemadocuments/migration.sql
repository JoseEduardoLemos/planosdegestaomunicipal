-- CreateTable
CREATE TABLE "cidade" (
    "idkey" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "cidade_pkey" PRIMARY KEY ("idkey")
);

-- CreateTable
CREATE TABLE "grupo" (
    "idkey" SERIAL NOT NULL,
    "idkey_municipio" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "grupo_pkey" PRIMARY KEY ("idkey")
);

-- CreateTable
CREATE TABLE "link" (
    "idkey" SERIAL NOT NULL,
    "idkey_grupos" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "nomeArquivo" TEXT NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("idkey")
);
