-- CreateTable
CREATE TABLE "Connection" (
    "id" SERIAL NOT NULL,
    "repoId" INTEGER NOT NULL,
    "slicerId" INTEGER NOT NULL,
    "safeAddress" TEXT NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Connection_repoId_key" ON "Connection"("repoId");

-- CreateIndex
CREATE INDEX "repoId" ON "Connection"("repoId");
