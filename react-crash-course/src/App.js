//import logo from './logo.svg';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  const product = [{
    imageSrc:"images/apple.png",
    title:"iPhone 13 Pro",
    specification:[
        "A13 Pro chip with 6-core GPU",
        "3x or 5x telephoto camera",
        "Up to 29 hours video playback"
    ],
    price:999,
},{
  imageSrc:"images/apple.png",
  title:"iPhone 16 Pro",
  specification:[
      "A17 Pro chip with 6-core GPU",
      "3x or 5x telephoto camera",
      "Up to 29 hours video playback"
  ],
  price:1999,
},{
  imageSrc:"images/apple.png",
  title:"iPhone 17 Pro",
  specification:[
      "A19 Pro chip with 6-core GPU",
      "3x or 5x telephoto camera",
      "Up to 29 hours video playback"
  ],
  price:3999,
}];
  return (
    <div className="App">
      React Crash Course
      <ProductList>
        {product.map((product) => <ProductCard width='96px' height = '96px' background='peru' key={product.title} product={product}/> )}
       </ProductList>
      
      <h2>
        Product which cost more than $1500
      </h2>
      <ul>
        {product.filter(({price})=> price<1500).map(({title,price}) => (
        <li>
          {title} cost ${price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
