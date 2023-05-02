/* eslint-disable react/prop-types */
const RecipesCard = ({ recipe }) => {
  const {
    recipe_name,
    recipe_img,
    ingredients,
    cooking_method,
    rating,
    bangladeshi_food,
  } = recipe;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full"
            src={recipe_img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>ingredients</p>
          {
            ingredients.map(item => <li key={item.id} className="-mt-1">{item}</li>)
          }
          <p>cooking_method</p>
          {
            cooking_method?.map((item, i) =><p key={i}>{item}</p>)
          }
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
