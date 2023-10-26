import "./App.css";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import car1 from './assets/imgs/car1.jpg'
import car2 from './assets/imgs/car2.jpg'
import car3 from './assets/imgs/car3.jpg'

let imageIndex = [car1, car2, car3]

function App() {
  return (
    <div className="App">
      <ImageSlider images={imageIndex}/>
    </div>
  );
}

export default App;
