import React, { Component } from "react";

import GearCreateComponent from "../components/gearCreateComponent";
import GearDAO from "../models/gearDAO";


export default class GearCreateContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: "",
            amount: "",
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value,
        })
    }

    onPriceChange(event) {
        this.setState({
            price: event.target.value,
        })
    }

    onAmountChange(event) {
        this.setState({
            amount: event.target.value,
        })
    }

    onClick(event) {
        event.preventDefault();

        const { name, price, amount } = this.state;

        const treeDAO = new GearDAO();
        treeDAO.addObject(name, price, amount);

        alert("Saved!")
        this.props.history.push("/gear-list");
    }

    render() {
        const { name, price, amount } = this.state;
        const { onNameChange, onPriceChange, onAmountChange, onClick } = this;
        return (
            <TreeCreateComponent
                name={name}
                price={price}
                amount={amount}
                onNameChange={onNameChange}
                onPriceChange={onPriceChange}
                onAmountChange={onAmountChange}
                onClick={onClick}
            />
        );
    }
}
