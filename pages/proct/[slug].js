import React, { useState } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import data from '@/utils/data'
import Image from 'next/image'
export default function ProductScreen(){

    const {query} = useRouter();
    const {slug} = query;
    const product =  data.products.find((X) => X.slug === slug );
    if (!product) {
        return ( <div>Não Existe o producto</div>)
    }
  return (
    <Layout title={product.name}>
     <h1> {product.name} </h1>
     <Image src={product.image} width={400} height={400} alt={product.name} ></Image>
     
    </Layout>
  )
}
