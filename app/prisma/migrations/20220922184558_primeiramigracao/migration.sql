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
    "nome_arquivo" TEXT NOT NULL,

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


INSERT INTO 
    cidade (idkey, nome, urlbrasao)
VALUES 
(1,'Astorga','https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/xz8Wa-0ID7Aq2KWurOd5SntySWDGz-sWeGkuh_Z62WaYi651U6hRQ3B2nkJhd9Wm/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Imagens/astImagemAstorga.jpg'),
(2, 'Loanda', 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/jbhEuzQAt18z8NMfoTmL3y2Lzc49UVIdtj-iZYYiHc7Hj-ouQCAsR5JENoobJ2MN/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Loanda/Imagens/loaImagemLoanda.jpg');



INSERT INTO
    plano (idkey, descricao, idkey_cidade)
VALUES
    (1, 'Plano de Mobilidade', 1),
    (2, 'Plano de Mobilidade', 2);


INSERT INTO
    grupo (idkey, idkey_plano, descricao)
VALUES
    (1, 1, 'Conferência pública e reuniões técnicas'),
    (2, 1, 'Plano de trabalho'),
    (3, 1, 'Diagnóstico e prognóstico'),
    (4, 1, 'Diretrizes e propostas de intervenção'),
    (5, 1, 'Informações técnicas'),
    (6, 2, 'Plano de trabalho'),
    (7, 2, 'Informações técnicas'),
    (8, 2, 'Diretrizes e propostas de intervenção'),
    (9, 2, 'Diagnóstico e prognóstico'),
    (10, 2, 'Conferência pública e reuniões técnicas');

INSERT INTO
    link (idkey, idkey_grupo, link, descricao, mime, nome_arquivo)
VALUES
    (1, 1, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/QQBUZE_Y7-HwIdwNReDczNJ5k4kAZotnASg8VDjCvUaolE2-ksdef58QIPwTdimU/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Plano%20de%20Mobilidade/Astorga%20-%20Audi%C3%AAncia%20P%C3%BAblicaAstorga_I%20AUDI%C3%8ANCIA%20P%C3%9ABLICA%20Astorga-%20PDMU.pptx.pdf',
        'Pauta - Reunião técnica ', 'pdf', 'Pauta - Reunião técnica '),
    (2, 1, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/u8MtWySwknlTA9wALILtHTPKSWoeH1M2izLuQWDxnUn9MvwJBUzfxrPRuCkrANoM/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Plano%20de%20Mobilidade/Astorga%20-%20Informe%20IAstorga_Informe%20I%20-%20Astorga.pdf',
         'Informe de Astorga', 'pdf', 'Informe de Astorga'),
    (3, 1, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/IV7cNqpsbp_Su9XPGTLx2EhWTBLi52Hai988_bYPCMUbucdyhi28uWDgrspDsNiv/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Astorga/Plano%20de%20Mobilidade/Astorga%20-%20Pauta%20da%20Reuni%C3%A3o%20T%C3%A9cnicaAstorga_Pauta%20-%20Reuni%C3%A3o%20t%C3%A9cnica%20-%20Astorga.pdf',
         'Pauta da Reunião Técnica', 'pdf', 'Pauta da Reunião Técnica'),
    (4, 10, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/3ignv-3m2funh2aAiD50-TatA3hBwM4DF2R6VtHov2hj8aKxgjq_fM_qNPr7kwuq/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Loanda/Plano%20de%20Mobilidade/1%20-%20Pauta%20-%20Reuni%C3%A3o%20t%C3%A9cnica%20-%20Loanda.pdf',
         'Pauta - Reunião Técnica', 'pdf', 'Pauta - Reunião Técnica'),
    (5, 10, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/XTXXWYpPsycpKkaqHXHUW4w0R-vdhqHrLqWCYH0GiJUgz3MToR-S6qZBP8vrhy2y/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Loanda/Plano%20de%20Mobilidade/2%20-%20Informe%20I%20-%20Loanda.pdf',
         'Informe de Loanda', 'pdf', 'Informe de Loanda'),
    (6, 10, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/Mzw5ZOCyN9D8m4_5VQOYgCBOmWUS_xdoFGLA1-MzhLI7XW-NstQwvvhWiL-P4rxj/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Loanda/Plano%20de%20Mobilidade/3%20-%20Ata_Reuni%C3%A3o%20t%C3%A9cnica%20-%20Loanda.pdf',
         'Pauta de Reunião Técnica', 'pdf', 'Pauta de Reunião Técnica'),
    (7, 10, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/lXiPvNAmBse1xKqULvgAJ7SWfcL29zUAO8eSAznksgL2UhLoiKztDd3F9pAG3jll/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Loanda/Plano%20de%20Mobilidade/4%20-%20I%20audiencia%20publica%20-%20PDMU%20Loanda.pptx.pdf',
         'Audiência Pública - PMDU', 'pdf', 'Audiência Pública - PMDU'),
    (8, 10, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/XDaQ5aD0eU0iRtzA7ye5XIExOUca3w_8ZO-DhFt_xyk6J5UHU8wgRxb1mTBKO-O4/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Loanda/Plano%20de%20Mobilidade/5%20-%20Folder%20Audi%C3%AAncia%20P%C3%BAblica.pdf',
         'Folder Audiência Pública', 'pdf', 'Folder Audiência Pública'),
    (9, 10, 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/p/Cl3I61sGekozMgD2VMPnx2qB2qH_lLOHezlh6o-TZh-H82IdB9hGABIGZsv9U7Hj/n/grwlamh7nppl/b/PlanosDeGestaoTributech/o/Loanda/Plano%20de%20Mobilidade/6%20-%20Ata_Audi%C3%AAncia%20p%C3%BAblica_Loanda.pdf',
         'Ata Audiência Pública', 'pdf', 'Ata Audiência Pública');
