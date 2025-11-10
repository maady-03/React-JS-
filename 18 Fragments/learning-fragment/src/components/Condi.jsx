import "bootstrap/dist/css/bootstrap.min.css";

function Condi(){

    let foodItems = ["roti","sabji"];
    //let foodItems=[];
    if(foodItems.length===0){
        return <h3>i am still hungry.</h3>
    }

    return(
        <>
        <h1>Healthy food Items</h1>
        <ul className="list-group">
            {foodItems.map(function(items){
            <li key={items} className="list-group-item">
                {items}
            </li>
        })}
        </ul>
        </>
    )
}

export default Condi;