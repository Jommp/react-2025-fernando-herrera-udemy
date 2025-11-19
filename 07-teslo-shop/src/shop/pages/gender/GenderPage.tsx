import { useParams } from 'react-router';

import { products } from '@/mocks/products.mock';

import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';

const genders = {
  'men': 'Hombre',
  'women': 'Mujer',
  'kids': 'Niños'
};

type GenderKey = keyof typeof genders;

export const GenderPage = () => {
  const { gender } = useParams();

  const defaultGender: GenderKey = 'men';

  const genderIndex = (gender && gender in genders)
    ? (gender as GenderKey)
    : defaultGender;

  const genderLabel = genders[genderIndex];

  const pageTitle = `Productos para ${genderLabel}`

  return (
    <>
      <CustomJumbotron title={pageTitle} />
      
      <ProductsGrid products={products} />

      <CustomPagination totalPages={6} />
    </>
  );
};
