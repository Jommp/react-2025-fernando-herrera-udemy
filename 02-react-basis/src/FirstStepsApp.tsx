import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
  productName: string;
  quantity: number;
};

const itemsInCart: ItemInCart[] = [
  {
    productName: 'Procesador Core I5 14400',
    quantity: 2
  },
  {
    productName: 'Tarjeta Gráfica RTX 5070 TI',
    quantity: 1
  },
  {
    productName: 'Fuente de poder Corsair Full Modular 700W Gold',
    quantity: 3
  }
];

export default function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

      {
        itemsInCart.map(({ productName, quantity }) => (
          <ItemCounter
            key={productName}
            article={productName}
            quantity={quantity}
          />
        ))
      }
    </>
  );
};
