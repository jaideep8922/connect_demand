// // // "use client"
// // // import React, { useEffect, useState } from 'react';
// // // import { useAllProductList } from '../api/fetAllProduct';
// // // import ImageCard from '../global/imageCard';

// // // export const Home = () => {

// // //     const { data } = useAllProductList();
// // //     return (
// // //         <div className="grid grid-cols-4 gap-1 p-1">
// // //             {data?.map((item: any) => (
// // //                 <ImageCard key={item.id} data={item} />
// // //             ))}
// // //         </div>
// // //     )
// // // }

// // "use client"
// // import React, { useState, useEffect } from 'react';


// // const Home = () => {
// //   // Initialize quantities state

// //   // Mockup of the product list (simulating API response)
// // const initialProductList = [
// //     { id: '1', title: 'Product 1', baggedProduct: { quantity: 2 } },
// //     { id: '2', title: 'Product 2', baggedProduct: { quantity: 3 } },
// //     { id: '3', title: 'Product 3', baggedProduct: { quantity: 5 } }
// //   ];
  


// //   const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
// //   const [productList, setProductList] = useState(initialProductList);

// //   // Function to load product quantities (for page reload persistence simulation)
// //   const loadQuantities = () => {
// //     const initialQuantities = productList.reduce((acc, product) => {
// //       acc[product.id] = product?.baggedProduct?.quantity || 0;
// //       return acc;
// //     }, {});
// //     setQuantities(initialQuantities);
// //   };

// //   // Load quantities when productList or component mounts
// //   useEffect(() => {
// //     loadQuantities();
// //   }, [productList]);

// //   // Increment quantity for a specific product
// //   const handleIncrement = (productId: string) => {
// //     setQuantities(prev => {
// //       const updatedQuantities = {
// //         ...prev,
// //         [productId]: (prev[productId] || 0) + 1, // Increment by 1
// //       };
// //       return updatedQuantities;
// //     });
// //   };

// //   // Decrement quantity for a specific product
// //   const handleDecrement = (productId: string) => {
// //     setQuantities(prev => {
// //       const updatedQuantities = {
// //         ...prev,
// //         [productId]: Math.max((prev[productId] || 0) - 1, 0), // Decrement by 1, but not below 0
// //       };
// //       return updatedQuantities;
// //     });
// //   };

// //   return (
// //     <div className="product-list">
// //       {productList.map(product => (
// //         <div key={product.id} className="product-item">
// //           <h3>{product.title}</h3>
// //           <div>Quantity: {quantities[product.id] || 0}</div>
// //           <button onClick={() => handleIncrement(product.id)}>Increase</button>
// //           <button onClick={() => handleDecrement(product.id)}>Decrease</button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Home;


// "use client"

// import React, { useState, useEffect } from 'react'
// // import { Button } from "@/components/ui/button"
// import Image from "next/image"

// // Dummy product data
// const productList = [
//   {
//     id: '1',
//     title: 'Organic Apples',
//     mainImageId: '/placeholder.svg?height=200&width=200',
//     moq: { quantity: 2, unit: 'kg', name: 'pack' },
//     mrpForCustomer: 120,
//     spForCustomer: 100,
//     discountForCustomer: { type: 'percentage', value: 10 },
//   },
//   {
//     id: '2',
//     title: 'Fresh Bananas',
//     mainImageId: '/placeholder.svg?height=200&width=200',
//     moq: { quantity: 1, unit: 'dozen', name: 'bunch' },
//     mrpForCustomer: 80,
//     spForCustomer: 70,
//     discountForCustomer: { type: 'fixed', value: 5 },
//   },
//   {
//     id: '3',
//     title: 'Organic Carrots',
//     mainImageId: '/placeholder.svg?height=200&width=200',
//     moq: { quantity: 500, unit: 'g', name: 'pack' },
//     mrpForCustomer: 60,
//     spForCustomer: 50,
//     discountForCustomer: null,
//   },
//   {
//     id: '4',
//     title: 'Fresh Tomatoes',
//     mainImageId: '/placeholder.svg?height=200&width=200',
//     moq: { quantity: 1, unit: 'kg', name: 'pack' },
//     mrpForCustomer: 90,
//     spForCustomer: 80,
//     discountForCustomer: { type: 'percentage', value: 5 },
//   },
// ]

// export const Home= ()=> {
//   const [baggedProducts, setBaggedProducts] = useState<Record<string, number>>({})

//   useEffect(() => {
//     // Load bagged products from local storage on component mount
//     const savedBaggedProducts = localStorage.getItem('baggedProducts')
//     if (savedBaggedProducts) {
//       setBaggedProducts(JSON.parse(savedBaggedProducts))
//     }
//   }, [])

//   useEffect(() => {
//     // Save bagged products to local storage whenever it changes
//     localStorage.setItem('baggedProducts', JSON.stringify(baggedProducts))
//   }, [baggedProducts])

//   const handleQuantityChange = (productId: string, change: number) => {
//     setBaggedProducts((prev) => {
//       const currentQuantity = prev[productId] || 0
//       const newQuantity = Math.max(currentQuantity + change, 0)
//       return { ...prev, [productId]: newQuantity || undefined }
//     })
//   }

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {productList.map((product) => (
//           <div key={product.id} className="bg-white shadow-md rounded-lg relative flex flex-col h-full p-4 border">
//             <div className="bg-white rounded-lg overflow-hidden relative mb-2">
//               <Image
//                 src={product.mainImageId}
//                 alt={product.title}
//                 width={200}
//                 height={200}
//                 className="object-cover w-full h-48"
//               />
//               {product.moq.quantity > 1 && (
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1 text-xs">
//                   MOQ: {product.moq.quantity} {product.moq.unit} / {product.moq.name}
//                 </div>
//               )}
//             </div>
//             <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
//             <div className="text-sm mb-2">
//               <p>MRP: ₹{product.mrpForCustomer}</p>
//               <p className="font-semibold">
//                 SP: ₹
//                 {product.discountForCustomer
//                   ? product.discountForCustomer.type === 'fixed'
//                     ? product.spForCustomer - product.discountForCustomer.value
//                     : (product.spForCustomer * (100 - product.discountForCustomer.value) / 100).toFixed(2)
//                   : product.spForCustomer}
//                 {product.discountForCustomer && (
//                   <span className="text-red-500 ml-2">
//                     ({product.discountForCustomer.type === 'fixed' ? '₹' : ''}
//                     {product.discountForCustomer.value}
//                     {product.discountForCustomer.type === 'percentage' ? '%' : ''} OFF)
//                   </span>
//                 )}
//               </p>
//             </div>
//             <div className="mt-auto">
//               {baggedProducts[product.id] ? (
//                 <button
//                   variant="outline"
//                   size="sm"
//                   className="flex justify-between items-center w-full text-black bg-purple-200 hover:bg-purple-300 border-purple-300"
//                 >
//                   <span
//                     onClick={() => handleQuantityChange(product.id, -1)}
//                     className="cursor-pointer text-lg"
//                   >
//                     -
//                   </span>
//                   <span>{baggedProducts[product.id] * product.moq.quantity} {product.moq.unit}</span>
//                   <span
//                     onClick={() => handleQuantityChange(product.id, 1)}
//                     className="cursor-pointer text-lg"
//                   >
//                     +
//                   </span>
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => handleQuantityChange(product.id, 1)}
//                   className="w-full bg-purple-600 hover:bg-purple-700 text-white"
//                 >
//                   Add to Order
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"
import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
import Image from "next/image"

// Dummy product data with bagged quantity and ID
const initialProductList = [
  {
    id: '1',
    title: 'Organic Apples',
    mainImageId: '/placeholder.svg?height=200&width=200',
    moq: { quantity: 2, unit: 'kg', name: 'pack' },
    mrpForCustomer: 120,
    spForCustomer: 100,
    discountForCustomer: { type: 'percentage', value: 10 },
    baggedQuantity: 0,
    baggedId: null,
  },
  {
    id: '2',
    title: 'Fresh Bananas',
    mainImageId: '/placeholder.svg?height=200&width=200',
    moq: { quantity: 1, unit: 'dozen', name: 'bunch' },
    mrpForCustomer: 80,
    spForCustomer: 70,
    discountForCustomer: { type: 'fixed', value: 5 },
    baggedQuantity: 2,
    baggedId: 'bagged-2',
  },
  {
    id: '3',
    title: 'Organic Carrots',
    mainImageId: '/placeholder.svg?height=200&width=200',
    moq: { quantity: 500, unit: 'g', name: 'pack' },
    mrpForCustomer: 60,
    spForCustomer: 50,
    discountForCustomer: null,
    baggedQuantity: 0,
    baggedId: null,
  },
  {
    id: '4',
    title: 'Fresh Tomatoes',
    mainImageId: '/placeholder.svg?height=200&width=200',
    moq: { quantity: 1, unit: 'kg', name: 'pack' },
    mrpForCustomer: 90,
    spForCustomer: 80,
    discountForCustomer: { type: 'percentage', value: 5 },
    baggedQuantity: 3,
    baggedId: 'bagged-4',
  },
]

export const Home= ()=> {
    const [productList, setProductList] = useState(initialProductList)

  const handleQuantityChange = (productId: string, change: number) => {
    setProductList((prevList) =>
      prevList.map((product) => {
        if (product.id === productId) {
          const newQuantity = Math.max((product.baggedQuantity || 0) + change, 0)
          return {
            ...product,
            baggedQuantity: newQuantity,
            baggedId: newQuantity > 0 ? `bagged-${product.id}` : null,
          }
        }
        return product
      })
    )
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productList.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg relative flex flex-col h-full p-4 border">
            <div className="bg-white rounded-lg overflow-hidden relative mb-2">
              <Image
                src={product.mainImageId}
                alt={product.title}
                width={200}
                height={200}
                className="object-cover w-full h-48"
              />
              {product.moq.quantity > 1 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1 text-xs">
                  MOQ: {product.moq.quantity} {product.moq.unit} / {product.moq.name}
                </div>
              )}
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <div className="text-sm mb-2">
              <p>MRP: ₹{product.mrpForCustomer}</p>
              <p className="font-semibold">
                SP: ₹
                {product.discountForCustomer
                  ? product.discountForCustomer.type === 'fixed'
                    ? product.spForCustomer - product.discountForCustomer.value
                    : (product.spForCustomer * (100 - product.discountForCustomer.value) / 100).toFixed(2)
                  : product.spForCustomer}
                {product.discountForCustomer && (
                  <span className="text-red-500 ml-2">
                    ({product.discountForCustomer.type === 'fixed' ? '₹' : ''}
                    {product.discountForCustomer.value}
                    {product.discountForCustomer.type === 'percentage' ? '%' : ''} OFF)
                  </span>
                )}
              </p>
            </div>
            {product.baggedId && (
              <p className="text-xs text-gray-500 mb-2">Bagged ID: {product.baggedId}</p>
            )}
            <div className="mt-auto">
              {product.baggedQuantity > 0 ? (
                <div className="space-y-2">
                  <button
                    variant="outline"
                    size="sm"
                    className="flex justify-between items-center w-full text-black bg-purple-200 hover:bg-purple-300 border-purple-300"
                  >
                    <span
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="cursor-pointer text-lg"
                    >
                      -
                    </span>
                    <span>{product.baggedQuantity * product.moq.quantity} {product.moq.unit}</span>
                    <span
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="cursor-pointer text-lg"
                    >
                      +
                    </span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleQuantityChange(product.id, 1)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Add to Order
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}