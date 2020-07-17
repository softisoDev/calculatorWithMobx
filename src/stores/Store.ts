import { observable, action } from "mobx";
import { createContext } from "react";



class Store {
    @observable displayValue: any = 0;

    @action updateDisplayValue = (value: any) => {
        this.displayValue = value;
    }
}

export default createContext(new Store());
