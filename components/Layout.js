import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ title ,children}) => {
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
                   <Link href="/" className=""> Cart </Link>
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
