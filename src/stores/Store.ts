import {observable, action} from "mobx";
import {operators} from "../config";


type Operator = typeof operators[number];

class Store {

    public num1?: number;
    public num2?: number;
    public operator?: Operator;
    public waitForSecondOperand: boolean = false;
    public dotOperand: boolean = false;

    @observable
    displayValue: any = 0;

    @action
    updateDisplayValue = (value: any) => {
        this.displayValue = value;
    }

    onNumberClick = (e) => {

        if (this.operator === undefined) {
            this.operateNum1Value(e.target.value);
        } else {
            this.operateNum2Value(e.target.value);
        }
    }

    operateNum1Value = (value) => {
        if (this.num1 === undefined) {

            this.setNum1(value);

        } else {
            if (this.dotOperand) {
                this.setNum1(this.concatWithCurrentDisplay(value));
                this.dotOperand = false;
            } else {
                this.setNum1(this.num1 + value);
            }
        }
        this.updateDisplayValue(this.num1);
    }

    operateNum2Value = (value) => {
        if (this.num2 === undefined) {
            this.setNum2(value);
        } else {
            if (this.dotOperand) {
                this.setNum2(this.concatWithCurrentDisplay(value));
                this.dotOperand = false;
            } else {
                this.setNum2(this.num2 + value);
            }
        }
        this.updateDisplayValue(this.num2);
    }

    concatWithCurrentDisplay = (glue = ".") => {
        let newValue = this.displayValue + glue;
        this.updateDisplayValue(newValue);
        return newValue;
    }

    onEqualClick = () => {
        let result = this.calculate();
        this.setNum1(result);
        const val = result ? result.toFixed(2).replace(".00", "") : "";
        this.updateDisplayValue(val);
    }

    onOperatorClick = (e) => {

        if (this.operator !== undefined) {
            this.waitForSecondOperand = true;
            this.onEqualClick();
        } else {
            this.updateDisplayValue("");
        }

        this.operator = e.target.value;
        this.num2 = undefined;
    }

    onDotClick = () => {
        this.concatWithCurrentDisplay();
        this.dotOperand = true;
    }

    calculate = (): number | null => {

        switch (this.operator) {
            case "+": {
                return this.add();
            }
            case "-": {
                return this.subtract();
            }
            case "*": {
                return this.multiply();
            }
            case "/": {
                return this.divide();
            }
            default: {
                return null;
            }
        }
    }

    setNum1 = (value) => {
        this.num1 = parseFloat(value);
    }

    setNum2 = (value) => {
        this.num2 = parseFloat(value);
    }

    add = () => {
        return this.num1! + this.num2!;
    }

    subtract = () => {
        return this.num1! - this.num2!;
    }

    multiply = () => {
        return this.num1! * this.num2!;
    }

    divide = () => {
        return this.num1! / this.num2!;
    }

    reset = () => {
        this.num1 = undefined;
        this.num2 = undefined;
        this.operator = undefined;
        this.waitForSecondOperand = false;
        this.dotOperand = false;
        this.updateDisplayValue("");
    }
}


export default new Store();
