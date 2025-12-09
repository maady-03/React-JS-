import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";

const FoodItems = () => {
  const foodItems = ["roti", "sabji"];

  return (
    <ul className="list-group">
      {foodItems.map((item, index) => (
        <Item foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
