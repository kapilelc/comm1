import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductList products={[{ id: 1, name: 'Product A', price: 100 }]} />
    </>
  )
}

export default App
