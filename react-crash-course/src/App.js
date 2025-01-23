//import logo from './logo.svg';
import './App.css';
import { ProductCard } from './components/ProductCard';

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
      <ProductCard product={product}/>
    </div>
  );
}

export default App;
