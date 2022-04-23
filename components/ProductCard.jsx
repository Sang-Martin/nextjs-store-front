import Image from 'next/image'

const ProductCard = ({children, product, ...props}) => {
    const {productName, productPrice, productDescription, imageUrl, uid} = {...product}
  return (
    <div>
      <div className="card card-compact  w-fit bg-base-100 shadow-xl">
        <figure>
          <Image src={imageUrl} alt={productName} width={300} height={200} />
        </figure>
        <div class="card-body ">
          <h2 className="card-title">{productName}</h2>
          <h3 className=" text-2xl font-bold text-accent text-left">{productPrice}</h3>
          <p className=" text-left">{productDescription}</p>
          <div className="card-actions">
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="uid" value={uid} />
              <button class="btn btn-primary w-full">Buy Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
