import { NextResponse } from "next/server";

import {
  normalizePrintfulProduct,
  printfulFetch,
} from "../../../../../lib/printful";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_: Request, context: RouteContext) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { ok: false, error: "Falta el id del producto" },
        { status: 400 }
      );
    }

    const data = await printfulFetch(`/store/products/${id}`);
    const product = normalizePrintfulProduct(data);

    return NextResponse.json({
      ok: true,
      product,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Error al leer el producto en Printful",
      },
      { status: 500 }
    );
  }
}
