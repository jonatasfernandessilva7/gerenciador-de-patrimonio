-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Heritage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Heritage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Assets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "heritageId" INTEGER NOT NULL,
    CONSTRAINT "Assets_heritageId_fkey" FOREIGN KEY ("heritageId") REFERENCES "Heritage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Claims" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value_of_claim" REAL NOT NULL,
    "year_of_entry" DATETIME NOT NULL,
    "heritageId" INTEGER NOT NULL,
    CONSTRAINT "Claims_heritageId_fkey" FOREIGN KEY ("heritageId") REFERENCES "Heritage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Obligations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value_of_obligation" REAL NOT NULL,
    "year_of_entry" DATETIME NOT NULL,
    "heritageId" INTEGER NOT NULL,
    CONSTRAINT "Obligations_heritageId_fkey" FOREIGN KEY ("heritageId") REFERENCES "Heritage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Real_State" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "value_of_real_state" DECIMAL NOT NULL,
    "year_of_purchase" DATETIME NOT NULL,
    "deprecation" DECIMAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    CONSTRAINT "Real_State_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Assets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lands" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "value_of_land" DECIMAL NOT NULL,
    "year_of_purchase" DATETIME NOT NULL,
    "deprecation" DECIMAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    CONSTRAINT "Lands_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Assets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vehicles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "value_of_vehicle" DECIMAL NOT NULL,
    "year_of_purchase" DATETIME NOT NULL,
    "deprecation" DECIMAL NOT NULL,
    "assetId" INTEGER NOT NULL,
    CONSTRAINT "Vehicles_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Assets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Equity_Interests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "value_of_equity_interests" DECIMAL NOT NULL,
    "year_of_purchase" DATETIME NOT NULL,
    "assetId" INTEGER NOT NULL,
    CONSTRAINT "Equity_Interests_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Assets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Other_Investments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "types" TEXT NOT NULL,
    "description" TEXT,
    "value_of_other_investments" DECIMAL NOT NULL,
    "year_of_purchase" DATETIME NOT NULL,
    "assetId" INTEGER NOT NULL,
    CONSTRAINT "Other_Investments_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Assets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
