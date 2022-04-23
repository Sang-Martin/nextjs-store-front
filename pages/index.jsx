import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import {loadStripe} from '@stripe/stripe-js'

// url: https://realtime-database-345f2-default-rtdb.firebaseio.com/products.json

const Home = (props) => {
  const products = props.products

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Shoes Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center my-12">

        <h1 className="text-6xl font-bold mb-36">Shoes Store</h1>
        <div className="grid grid-cols-3 gap-2">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetch(
    'https://realtime-database-345f2-default-rtdb.firebaseio.com/products.json'
  )
  const productData = await res.json()
  const products = Object.values(productData)

  return {
    props: {
      products,
    },
    // ,
    // revalidate:60
  }
}
