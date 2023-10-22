export default function Home() {
  return (
    <>
      <div className="bg-interior relative flex h-[716px] w-full items-center justify-end bg-cover bg-center">
        <div className="container flex md:justify-center lg:justify-end xl:static md:absolute xl:right-6">
          <div className="bg-secondary px-10 pb-9 pt-16">
            <div className="flex max-w-[674px] flex-col items-start">
              <span className="text-base font-medium">New Arrival</span>
              <h1 className="my-4 text-6xl font-medium text-primary">
                Discover Our <br />
                New Collection
              </h1>
              <p className="mb-8 text-lg">
                Home is an epitome of comfort that you can turn it into multiple
                functional spaces. Let a piece of furniture you select express
                your identity and reflect your modern lifestyle.
              </p>
              <button className="inline-block border border-transparent bg-primary px-20 py-6 text-base font-medium text-white hover:bg-primary/75 hover:text-[#333333]">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
