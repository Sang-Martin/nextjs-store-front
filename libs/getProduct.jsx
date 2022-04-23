
const getProduct = async (uid) => {
    const res = await fetch(
        `https://realtime-database-345f2-default-rtdb.firebaseio.com/products/${uid}.json`
      )
      const product = await res.json()
      return product
}

export default getProduct