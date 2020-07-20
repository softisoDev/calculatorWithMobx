import React from 'react';
import CalcPad from "../calc/pad";
import './App.css';


const App = (props) => {

    const appTitle = "Calculator in TS and React";

    return (
        <CalcPad
            title={appTitle}
        />
    );
}


export default App;
