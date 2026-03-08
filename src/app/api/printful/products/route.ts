import { NextResponse } from "next/server";

import {
  normalizePrintfulProduct,
  printfulFetch,
} from "../../../../lib/printful";

type PrintfulStoreProductsResponse = {
  result?: Array<{ id: number }>;
  paging?: {
    total: number;
    offset: number;
    limit: number;
  };
};

export async function GET() {
  try {
    const data = await printfulFetch<PrintfulStoreProductsResponse>(
      "/store/products"
    );
    const baseProducts = Array.isArray(data.result) ? data.result : [];

    const products = await Promise.all(
      baseProducts.map(async (product) => {
        try {
          const detail = await printfulFetch(`/store/products/${product.id}`);
          return normalizePrintfulProduct(detail);
        } catch {
          return normalizePrintfulProduct(product);
        }
      })
    );

    return NextResponse.json({
      ok: true,
      products,
      paging: data.paging ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Error desconocido al leer productos",
      },
      { status: 500 }
    );
  }
}
