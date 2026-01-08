import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnkeyDown}) =>{

    /*const handleOnChange = (event) =>{
        console.log(event.target.value);
    } */

    return (
        <input type="text"  placeholder="Enter Food Item here"
        className={styles.foodInput}
        /*onChange={handleOnChange}*/
        onKeyDown={handleOnkeyDown}
        ></input>
    )
};

export default FoodInput;