import FoodItems from "./FoodItems";
let Food = ({ foodItems }) => {
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => (
          <FoodItems item={item} ></FoodItems>
        ))}
      </ul>
    </>
  );
};

export default Food;
