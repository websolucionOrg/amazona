import React, { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Store } from '@/utils/Store';

const Layout = ({ title ,children}) => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
     <Head>
          <title> {title ? title + " - Amazonas":"Amazona" } </title>
          <meta name="description" content="Ecommerce Website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>    
    <div className='flex min-h-screen flex-col justify-between'>

      <header>
             <nav className='flex h-12 items-center justify-between p-4 shadow-md'>
                   <Link href="/" className='text-lg font-bold'>Amazonas </Link>
                   <div>
                   <Link href="/" className="">  
                   {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                   </Link>
                   <Link href="/" className="">Login</Link>
                   </div>
             </nav>
      </header>

      <main className='container m-auto mt-4 px-4'> {children} </main>

      <footer className='flex justify-center h-10 items-center shadow-inner'>
            <p> 2023 &copy; Tutorial </p>
      </footer>
    </div>
    </>
  )
}

export default Layout
