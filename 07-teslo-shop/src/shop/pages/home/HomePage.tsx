import { products } from '@/mocks/products.mock';

import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';

export const HomePage = () => {
  return (
    <div>
      <CustomJumbotron title="Tesla Shop" />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={6} />
    </div>
  );
};
