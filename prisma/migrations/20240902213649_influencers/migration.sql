-- CreateTable
CREATE TABLE "influencers" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "niche" TEXT[],
    "avatar" TEXT,
    "follower_number" INTEGER NOT NULL,
    "following_number" INTEGER NOT NULL,
    "instagram" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "complement" TEXT,

    CONSTRAINT "influencers_pkey" PRIMARY KEY ("id")
);
