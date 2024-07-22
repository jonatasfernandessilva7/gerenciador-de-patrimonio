-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nome" TEXT,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Patrimonio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Patrimonio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patrimonioId" INTEGER NOT NULL,
    CONSTRAINT "Bens_patrimonioId_fkey" FOREIGN KEY ("patrimonioId") REFERENCES "Patrimonio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Direitos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "anoDeEntrada" DATETIME NOT NULL,
    "patrimonioId" INTEGER NOT NULL,
    CONSTRAINT "Direitos_patrimonioId_fkey" FOREIGN KEY ("patrimonioId") REFERENCES "Patrimonio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Obrigacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "anoDeEntrada" DATETIME NOT NULL,
    "patrimonioId" INTEGER NOT NULL,
    CONSTRAINT "Obrigacoes_patrimonioId_fkey" FOREIGN KEY ("patrimonioId") REFERENCES "Patrimonio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Imovel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" DECIMAL NOT NULL,
    "anoDeCompra" DATETIME NOT NULL,
    "depreciacao" DECIMAL NOT NULL,
    "bemId" INTEGER NOT NULL,
    CONSTRAINT "Imovel_bemId_fkey" FOREIGN KEY ("bemId") REFERENCES "Bens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Terreno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" DECIMAL NOT NULL,
    "anoDeCompra" DATETIME NOT NULL,
    "depreciacao" DECIMAL NOT NULL,
    "bemId" INTEGER NOT NULL,
    CONSTRAINT "Terreno_bemId_fkey" FOREIGN KEY ("bemId") REFERENCES "Bens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" DECIMAL NOT NULL,
    "anoDeCompra" DATETIME NOT NULL,
    "depreciacao" DECIMAL NOT NULL,
    "bemId" INTEGER NOT NULL,
    CONSTRAINT "Veiculo_bemId_fkey" FOREIGN KEY ("bemId") REFERENCES "Bens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ParticipacoesSocietarias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" DECIMAL NOT NULL,
    "anoDeCompra" DATETIME NOT NULL,
    "bemId" INTEGER NOT NULL,
    CONSTRAINT "ParticipacoesSocietarias_bemId_fkey" FOREIGN KEY ("bemId") REFERENCES "Bens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OutrosInvestimentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" DECIMAL NOT NULL,
    "anoDeCompra" DATETIME NOT NULL,
    "bemId" INTEGER NOT NULL,
    CONSTRAINT "OutrosInvestimentos_bemId_fkey" FOREIGN KEY ("bemId") REFERENCES "Bens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patrimonio_usuarioId_key" ON "Patrimonio"("usuarioId");
