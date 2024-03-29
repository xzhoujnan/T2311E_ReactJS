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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
      <section>
        <div className='container'>
          <div className='row'>
          { // code logic here
            ps.map(
              (e,i)=>{
                return <Product key={i} item={e}/>
              }
            )
          }
        </div>
       </div>
       </section>
    </div>
  );
}

export default App;
