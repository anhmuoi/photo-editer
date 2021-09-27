import { useState } from "react";
import "./App.css";
import SidebarItem from "./SidebarItem.jsx";
import Slider from "./Slider.jsx";


const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function App() {


  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectOptionIndex, setSelectOptionIndex] = useState(0);
  const selectOption = options[selectOptionIndex];



  const handleSliderChange  = (e) =>{
      setOptions(prev =>{
        return prev.map((option, key)=>{
          if(key !== selectOptionIndex) return option;
          return {...option, value: e.target.value}
        })
      })
  };

 const getImageStyle  = () =>{
  const filters = options.map(option => {
    return `${option.property}(${option.value}${option.unit})`
  })

  console.log(filters);
  return { filter: filters.join(' ') }
 };

  return (
    <div className="container">
      <div className="group1">
        <div className="main-image">
          <img className="image" src="https://source.unsplash.com/EwKXn5CapA4" alt="#" style={getImageStyle()}></img>
        </div>
            
        <div className="sidebar">
          {options.map((value, key) =>(
            <SidebarItem 
              key={key}
              name={value.name}
              active={key===selectOptionIndex}
              handleClick={()=>setSelectOptionIndex(key)}
            >
              
            </SidebarItem>
          ))}
        </div>
      </div>
      <div className="slider-app">
        <Slider
          min={selectOption.range.min}
          max={selectOption.range.max}
          value={selectOption.value}
          handleChange={handleSliderChange}
        >

        </Slider>
      </div>
    </div>
  );
}

export default App;
