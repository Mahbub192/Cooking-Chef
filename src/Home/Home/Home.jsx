import { FaHandPointRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div className="my-20">
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
        <h3 className="mb-2 md:mb-5 text-2xl md:text-5xl font-bold">Our <span className="text-yellow-600">Chef</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {chefData.chefs.map((singleChef) => (
            <div
              key={singleChef.id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img className="w-full h-64" src={singleChef.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleChef.name}</h2>
                <p>Experience: {singleChef.experience} years</p>
                <div className="flex items-center justify-between">
                    <p>Recipes: {singleChef.recipes}</p>
                    <p className="flex items-center gap-2">Likes: {singleChef.likes}<span className="text-yellow-600 text-lg"><FaHandPointRight></FaHandPointRight></span></p>
                </div>
                <div className="card-actions ">
                  <button className="btn btn-primary">View Recipes </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
