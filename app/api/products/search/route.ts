import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query") || '';

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query, // поиск по имени
        mode: 'insensitive' // чувствительность к регистру
      }
    }
  });

  return NextResponse.json(products);
}