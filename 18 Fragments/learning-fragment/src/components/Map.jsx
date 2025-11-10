import "bootstrap/dist/css/bootstrap.min.css";

function FoodList() {
  let foodItems = ["Dal", "Ghee", "Green Vegetables", "Roti", "Salad", "Milk"];

  return (
    <>
      <h1>Food Items List</h1>
      <ul className="list-group">
        {foodItems.map(function (item) {
          return <li className="list-group-item">{item}</li>;
        })}
      </ul>
    </>
  );
}

export default FoodList;
