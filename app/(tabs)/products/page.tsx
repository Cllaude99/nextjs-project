import ListProducts from '@/components/list-product';
import ProductList from '@/components/product-list';
import db from '@/lib/db';

async function getInitialProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      created_at: true,
      photo: true,
      id: true,
    },
    take: 5,
    orderBy: {
      created_at: 'desc',
    },
  });
  return products;
}
export default async function Product() {
  const initialProducts = await getInitialProducts();
  return (
    <div>
      <ProductList initialProducts={initialProducts} />
    </div>
  );
}
