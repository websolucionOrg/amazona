import Layout from "@/components/Layout"

import data from "@/utils/data"

import ProductoItem from "@/components/ProductItem"

export default function Home() {
  return (
      <>
        <Layout title={"Home"}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"> 
                {data.products.map((product)=>(
                    <ProductoItem product={product} key={product.slug} />
                ))}
            </div>
        </Layout>
</>
  )
}
