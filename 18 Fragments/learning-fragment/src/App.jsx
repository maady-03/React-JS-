import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  /* let foodItems = ["Dal", "Green Vegetables", "roti", "salad", "Milk", "Ghee"]; */

  let [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegetables",
    "roti",
    "salad",
    "Milk",
    "Ghee",
  ]);

  /* let textStateArr = useState("Food Items Entered by the users");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1]; */

  /* this whole usestate ca be written in one line by destructuring the array*/
  let [textToShow, setTextState] = useState("Food Items Entered by the users");

  const onKeyDown = (event) => {
    /* console.log(event); /*passng functions via props */
    /* textToShow = event.target.value; */
    /*setTextState(event.target.value); */

    if(event.key==="Enter"){
      let newFoodItem = event.target.value;
      let newItems=[...foodItems,newFoodItem];
      setFoodItems(newItems);
      setTextState(`Last added food item is ${newFoodItem}`);
      event.target.value="";  
    }

  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnkeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Above is the list of the healthy foods that are good
          for your heakth and well being.
        </p>
      </Container>  */}
    </>
  );
}

export default App;
