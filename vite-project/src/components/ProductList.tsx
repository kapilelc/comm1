import React from 'react';
 
type Product = {

  id: number;

  name: string;

  price: number;

};
 
export const ProductList = ({ products }: { products: Product[] }) => {

  return (
<div>
<h2>Product List</h2>
<ul>

        {products.map((p) => (
<li key={p.id}>{p.name} - ${p.price}</li>

        ))}
</ul>
</div>

  );

};

 