import FoodItems from "./FoodItems";
let Food = ({ foodItems }) => {
  return (
    <>
      <ul className="list-group list-group-item ">
        {foodItems.map((item) => (
          <FoodItems item={item}></FoodItems>
        ))}
      </ul>
    </>
  );
};

export default Food;
