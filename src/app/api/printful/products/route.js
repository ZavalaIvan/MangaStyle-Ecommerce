import { NextResponse } from "next/server";

const PRINTFUL_PRODUCTS_ENDPOINT = "https://api.printful.com/store/products";

export async function GET(request) {
  const apiKey = process.env.PRINTFUL_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "PRINTFUL_API_KEY is not configured." },
      { status: 500 },
    );
  }

  const upstreamUrl = new URL(PRINTFUL_PRODUCTS_ENDPOINT);
  const { searchParams } = new URL(request.url);

  for (const key of ["status", "category_id"]) {
    const value = searchParams.get(key);

    if (value) {
      upstreamUrl.searchParams.set(key, value);
    }
  }

  try {
    const response = await fetch(upstreamUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Printful request failed.",
          details: data,
        },
        { status: response.status },
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach Printful API." },
      { status: 502 },
    );
  }
}
