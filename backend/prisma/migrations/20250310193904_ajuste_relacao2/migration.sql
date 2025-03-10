-- CreateTable
CREATE TABLE "TabelaDeletarTodosOsBensDeUmaVezPorId" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bemId" INTEGER NOT NULL,
    CONSTRAINT "TabelaDeletarTodosOsBensDeUmaVezPorId_bemId_fkey" FOREIGN KEY ("bemId") REFERENCES "Bens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TabelaDeletarTodosOsBensDeUmaVezPorId_bemId_key" ON "TabelaDeletarTodosOsBensDeUmaVezPorId"("bemId");
