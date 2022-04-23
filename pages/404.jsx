import Link from 'next/link'

const PageNotFound = () => {
  return (
    <div className="mx-auto max-w-lg   ">
      <div className=" flex min-h-screen flex-col items-center justify-center gap-8">
        <h1 className="mb-4 text-8xl font-bold text-red-500">404</h1>
        <h3 className="text-3xl">Page Not Found!</h3>
        <Link href="/">
          <button className="btn btn-primary">Back to Home page</button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
