import { FaHandPointRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import RecipesCard from "../RecipesCard/RecipesCard";

const ChefInfo = () => {
  const singleChefInfo = useLoaderData();
  console.log(singleChefInfo);
  return (
    <div>
      <div className="bg-black relative">
        <img
          className="object-cover w-full h-40 md:h-48 opacity-40"
          src="https://www.chefspencil.com/wp-content/uploads/Panta-Ilish-960x720.jpg.webp"
          alt=""
        />
        <p className="absolute top-14 text-white text-3xl font-bold left-28">
          About <span className="text-yellow-500">Chef</span>
        </p>
      </div>
      <div className="mt-10 bg-white relative">
        <img
        className="object-cover w-full h-96 opacity-10"
          src="https://thumbs.dreamstime.com/b/brick-wall-background-angled-text-room-graphics-142616487.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-between container mx-auto">
            <div className="w-1/2">
                <h2 className="text-2xl font-bold text-yellow-900 mb-2">{singleChefInfo.name}</h2>
                <p className="text-gray-600 leading-relaxed text-justify text-lg">{singleChefInfo.description}</p>
                <p className="my-1 text-gray-600"><span className="font-bold">Experience</span>: {singleChefInfo.experience} years</p>
                <p className="my-1 text-gray-600"><span className="font-bold">Recipes</span> : {singleChefInfo.recipes_count}</p>
                <p className="flex items-center gap-2 text-gray-600">
                <span className="font-bold">Likes</span>: {singleChefInfo.likes}
                    <span className="text-yellow-600 text-lg">
                      <FaHandPointRight></FaHandPointRight>
                    </span>
                  </p>
            </div>
            <div className="w-2/5  overflow-hidden">
                <img className="object-cover w-full" src={singleChefInfo.picture} alt="" />
            </div>
        </div>
      </div>
      <div className="mt-16 container mx-auto">
        <h2 className="text-3xl font-bold ">Recipes</h2>
        <div className="mt-10">
            {
                singleChefInfo?.recipes?.map(recipe => <RecipesCard key={recipe.id} recipe={recipe}></RecipesCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default ChefInfo;