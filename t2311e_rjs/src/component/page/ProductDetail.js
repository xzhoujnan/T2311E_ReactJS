import { useParams } from "react-router-dom";
import Product from "../common/Product";
import { useState , useEffect } from "react";

function ProductDetail(props){
    const [item,setItem] = useState({}); // khởi tạo 1 state
    const {id} = useParams();
    function callData(){
        const url = `https://dummyjson.com/products/${id}`;
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            setItem(data);
        })
    }
    useEffect(function(){ // setTimeOut
        callData();
    },[]);
    return  (
       <div>
            <h1>Product Detail</h1>
        
            <Product item={item}/>
       </div>     
    );
}
export default ProductDetail;
