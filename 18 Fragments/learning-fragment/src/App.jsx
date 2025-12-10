import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage'; 
import './App.css';

function App() {

  let foodItems = ["Dal", "Green Vegetables", "roti", "salad", "Milk", "Ghee"];

  return (
    <div>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </div>
  ); 
}

export default App;
