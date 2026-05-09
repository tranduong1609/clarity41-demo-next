import Head from 'next/head'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-bg">
        <h3 className="text-lg font-semibold text-neutral-body tracking-wider uppercase">
          OOPS! PAGE NOT FOUND
        </h3>
        <h1 className="text-[200px] font-black text-primary-dark leading-none -tracking-[20px] my-0">
          404
        </h1>
        <p className="max-w-md text-center text-neutral-body text-lg">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </p>
      </div>
    </>
  )
}
