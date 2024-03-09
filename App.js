import logo from './logo.svg';
import './App.css';
import Product from '../src/component/common/Product';

function App() {
  const ps = [
  {
    name : "Iphone 15 Promax 128GB",
    price : 1499,
    qty : 0,
  },
  {
    name : "Iphone 15 Pro 128GB",
    price : 1300,
    qty : 1,
  },
  {
    name : "Iphone 15 Plus 128Gb",
    price : 1099,
    qty : 0,
  },
  {
    name : "Iphone 15 12GB",
    price : 899,
    qty : 1,
  },
  ];

  return (
    <div className="App">
      {//code logic in reactjs
        ps.map(
          (e,i)=>{
            return <Product key={i} item={e} />
          }
        )
      }
    </div>
  );
}

export default App;
