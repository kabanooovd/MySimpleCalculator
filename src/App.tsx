import React, {useState} from 'react';
import './App.css';
import {Calculator} from "./Components/Calculator/Calculator";

function App() {

    const [someCalc, setSomeCalc] = useState<string>('');

  return (
    <div className="App">
        <Calculator someCalc={someCalc}
                    setSomeCalc={setSomeCalc}
        />
    </div>
  );
}

export default App;








