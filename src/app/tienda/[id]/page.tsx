import ProductDetailClient from "./product-detail-client";

import {
  normalizePrintfulProduct,
  printfulFetch,
} from "../../../lib/printful";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const data = await printfulFetch(`/store/products/${id}`);
  const product = normalizePrintfulProduct(data);

  return <ProductDetailClient product={product} />;
}
