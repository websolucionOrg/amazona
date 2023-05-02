import React, { useState } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import data from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { Store } from '@/utils/Store'

export default function ProductScreen(){
  const { state, dispatch } = useContext(Store);
  //Esquerar uma querystring e compara-la mcom a os dados existentes
    const {query} = useRouter();
    const {slug} = query;
    const product =  data.products.find((X) => X.slug === slug );
    if (!product) {
        return ( <div>Não Existe o producto</div>)
    }

//fim de 


//add produto no carinho
    const addToCartHandler = () => {
      const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
      const quantity = existItem ? existItem.quantity + 1 : 1;
  
      if (product.countInStock < quantity) {
        alert('Sorry. Product is out of stock');
        return;
      }
  
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    };
  
  return (
    <Layout title={product.name}>
      <diV classNanme="py-2">
     <Link href="/">Voltar aos produtos</Link>
      </diV>
      <div className='grid md:grid-cols-4 md:gap-3'>
        <div className='md:col-span-2'>
    
     <Image src={product.image} width={400} height={400} alt={product.name}  layout='responsive'></Image>
        </div>
        <div>
          <ul>
            <li><h1> {product.name} </h1></li>
            <li> {product.brand} </li>
            <li> {product.rating} de {product.numReviews} visualizações </li>
            <li> Descrição: {product.description} </li>
          </ul>
           
        </div>
          <div>
            <div className='card p-5' >
              <div className='mb-2 p-2 shadow-md flex justify-between' >
                 <div> Preço </div>
                <div> {product.price} Kz </div>   
              </div>

              <div className='mb-2 p-2 shadow-md flex justify-between' >
                 <div> Estatuto </div>
                <div> {product.countInStock >  0 ? "Em stoke": "Não Avaliado" }  </div>   
              </div>
              <button className='primary-button w-full'  onClick={addToCartHandler} > Adicionar no </button>
            </div>
          </div>
      </div>


    </Layout>
  )
}
