import React from 'react';

import './styles/App.css';
import { LogIn } from "./pages/LogIn";
import { Routingim } from "./helpers/Routingim";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [flag, setFlag] = React.useState(true);
  const updateFlag = (newValue) => {
    setFlag(newValue);
  };

  return (
 
      <div className="App">
        <Header />
        {flag ? <Routingim /> : 
        <LogIn updateFlag={updateFlag} />
        }  
       <Footer />
      </div>
    ) 
}
export default App;
