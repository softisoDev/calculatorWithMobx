import React, {FC} from "react";
import CalcInput from "./input";
import CalcButton from "./button";
import Store from "../../stores/Store";
import {operators, numbers} from "../../config";
import {observer} from "mobx-react-lite";

interface IProps {
    title: string,
}

const CalcPad: FC<IProps> = observer((props) => {

    return (
        <div className="calculator card">
            <h2 className="text-center">{props.title}</h2>

            <CalcInput type="text" name="display" className="calculator-screen z-depth-1" value={Store.displayValue}/>

            <div className="calculator-keys">
                {operators.map( (operator) => {
                    return <CalcButton key={operator} type="button" text={operator} color="info" value={operator} onClick={Store.onOperatorClick}/>
                })}

                {numbers.map(function (number) {
                    return <CalcButton type="button" text={number} color="light" value={number} onClick={Store.onNumberClick}/>
                })}

                <CalcButton type="button" text="." value="." onClick={Store.onDotClick}/>

                <CalcButton type="button" text="AC" value="all-clear" color="danger" onClick={Store.reset}/>

                <CalcButton type="button" text="=" value="all-clear" color="success" className="equal-sign" onClick={Store.onEqualClick}/>

            </div>
        </div>
    )
});

export default CalcPad;
