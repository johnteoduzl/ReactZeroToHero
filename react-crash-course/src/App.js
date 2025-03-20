//import logo from './logo.svg';
import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  const product = {
    imageSrc:"images/apple.png",
    title:"iPhone 15 Pro",
    specification:[
        "A17 Pro chip with 6-core GPU",
        "3x or 5x telephoto camera",
        "Up to 29 hours video playback"
    ],
    price:999,
};
  return (
    <div className="App">
      React Crash Course
      <ProductList>
      <ProductCard width='96px' height = '96px' background='peru' product={product}/>
      <ProductCard width='64px' height = '64px' product={product}/>
      <ProductCard width='128px' height = '128px' background='darkolivegree' product={product}/>
      </ProductList>
      
    </div>
  );
}

export default App;
