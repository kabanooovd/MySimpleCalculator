import React, {useState} from 'react';
import './App.css';
import {Calculator} from "./Components/Calculator/Calculator";
import {ButtonForCalcRemote} from "./Components/Calculator/ButtoForCalcRemote/ButtonForCalcRemote";
import {UniversalInput} from "./Components/Calculator/UniversalInput/UniversalInput";

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








