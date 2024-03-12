import { useState } from "react";

//create component :

function Product(props)
{
    const item = props.item;
    const [count,setCount] = useState(0);
    function increment()
    {
        setCount(count+1);
    }
    function reduce()
    {
        setCount(count-1);
    }
    return(
        <div className="col-4">
            <img src={item.thumbnail}></img>
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <p>{item.qty > 0 ? "In stock" : " Out of stock "}</p>
            <h2>Count : {count}</h2>
            <button onClick={increment} className="btn btn-primary" type="button">Increment</button>
            <button onClick={reduce} className="btn btn-primary" type="button">Reduce</button>
        </div>
    );
}
export default Product;