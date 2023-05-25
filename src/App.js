import { useState } from 'react';
import './App.css';
import BIMform from './components/BIMform';
import BimScore from './components/BimScore';

function App() {
  const [bmi,setBmi]=useState(20);
  const [miType,setMitype]=useState("overweight");
  return (
    <div className='App'>
      <h2>Welcome to REACT</h2>
      <h4>BMI: {bmi}</h4>
      <button onClick={()=>setBmi(bmi+5)}>Calculate</button>
      <BIMform/>
      <BimScore Mybmi={bmi} Mytype = {miType}/>
    </div>
  );
}

export default App;
