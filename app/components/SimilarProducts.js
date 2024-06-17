/*'use client'

import { useEffect, useState } from "react"
import ProductComp from "./Product"
import { BiLoader } from 'react-icons/bi'

export default function SimilarProducts () {

  const [products, setProducts] = useState([])

  const getRandomProducts = async () => {
    try {
      const response = await fetch('/api/products/get-random')
      const result = await response.json()

      if (result) {
        setProducts(result)
        return
      }

      setProducts([])
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  useEffect(() => { getRandomProducts() }, [])

  return ( 
    <>
        <div>
            <div className="border-b py-1 max-w-[1200px] mx-auto" />

            <div className="max-w-[1200px] mx-auto">
                <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>

                {products.length > 0 ?
                  <div className="grid grid-cols-5 gap-4">
                    {products.map(product => (
                        <ProductComp key={product.id} product={product} />
                    ))}
                  </div>
                : <div className="flex items-center justify-center">
                      <div className="flex items-center justify-center gap-4 font-semibold">
                          <BiLoader size={30} className="text-blue-400 animate-spin"/>
                          Loading Products...
                      </div>
                  </div>}
            </div>
        </div>
    </>
  );
};*/

'use client'

import { useEffect, useState } from "react"
import ProductComp from "./Product"
import { BiLoader } from 'react-icons/bi'

export default function SimilarProducts () {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRandomProducts = async () => {
    try {
      const response = await fetch('/api/products/get-random');
      const result = await response.json();

      if (result) {
        setProducts(result);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to load products.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRandomProducts();
  }, []);

  return (
    <div>
      <div className="border-b py-1 max-w-[1200px] mx-auto" />

      <div className="max-w-[1200px] mx-auto">
        <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>

        {loading ? (
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-4 font-semibold">
              <BiLoader size={30} className="text-blue-400 animate-spin"/>
              Loading Products...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4">
            {products.length > 0 ? (
              products.map(product => (
                <ProductComp key={product.id} product={product} />
              ))
            ) : (
              <div className="text-center">No products found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
