import Product from "../common/Product";
import { useState , useEffect } from "react";
function ProductDetail(props){
    const [item,setItem] = useState({});
    function callData(){
        const url = `https://dummyjson.com/products/2`;
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            setItem(data);
        })
    }
    useEffect(function(){
        callData();
    },[]);
    return(
        <div>
            <h1>Product Detail</h1>


            <button onClick={callData} className="btn btn-primary" type="button">Pick</button>
            <Product item={item} />
        </div>
    );
}
export default ProductDetail;