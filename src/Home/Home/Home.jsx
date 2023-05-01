const Home = () => {
  return (
    <>
      <div
        className="hero h-[calc(100vh-250px)] "
        style={{ backgroundImage: `url("https://i.ibb.co/fF9kSnF/herro.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold ">
              Being <span className="text-yellow-600">Smart</span> Chef{" "}
              <span className="text-yellow-600">Every</span> Day
            </h1>
            <p className="mb-3 md:mb-5 uppercase tracking-widest  md:text-lg">
              Recipes every week updates
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h3 className="text-2xl">Our Chef</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full h-64"
                src={`https://i.ibb.co/LCmkhPJ/chef4.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full h-64"
                src={`https://i.ibb.co/5cYz88Y/chef3.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full h-64"
                src={`https://i.ibb.co/H2cDcMq/chef2.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full h-64"
                src={`https://i.ibb.co/wgFptLk/chef1.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full h-64"
                src={`https://i.ibb.co/7vby6Rr/chef5.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
              className="w-full"
                src={`https://i.ibb.co/vC9NDD6/chef6.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
