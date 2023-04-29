
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductoItem = ({product}) => {
  return (
    <div className='card'>

       <Link href={`/proct/${product.slug}`}>
            <Image width={400} height={400} src={product.image} alt={product.name} className='rounded shadow' ></Image>
       </Link>
       <diV className="flex flex-col justify-center items-center p-5" >
            <Link href={`/proct/${product.slug}`}>
            <h2 className='text-lg'>{product.name}</h2>
            </Link>
            <p className='mb-2'> {product.brand} </p>
            <p className=''> {product.price} </p>
            <button className='primary-button ' type='button' >Adicionar no carrinho</button>
       </diV>

    </div>
  )
}

export default ProductoItem

