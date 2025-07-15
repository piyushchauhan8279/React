import FoodItems from "./FoodItems";
let Food = ({ foodItems }) => {
  return (
    <>
      <ul classNameName="list-group">
        {foodItems.map((item) => (
          <FoodItems item={item}></FoodItems>
        ))}
      </ul>
    </>
  );
};

export default Food;
