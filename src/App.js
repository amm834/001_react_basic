import React from "react";

class Item extends React.Component {
    render() {
        return <li> {this.props.name} ,{this.props.price}</li>
    }
}

class App extends React.Component {
    state = {
        items: [
            {id: 1, name: "Apple", price: 3000},
            {id: 2, name: "Orange", price: 4000}
        ]
    }

    nameRef = React.createRef()
    priceRef = React.createRef()

    add = () => {
        let id = this.state.items.length + 1;
        let name = this.nameRef.current.value
        let price = this.priceRef.current.value

        this.setState({
            items: [
                ...this.state.items,
                {id,name,price}
            ]
        });

    }

    render() {
        return (
            <div>
                <h1>Hello Reaact</h1>
                <ul>
                    {this.state.items.map(i => {
                        return (
                            <Item key={i.id} name={i.name} price={i.price}/>
                        )
                    })}
                </ul>
                <input type="text" ref={this.nameRef} placeholder={"Name"}/><br/>
                <input type="text" ref={this.priceRef} placeholder={"Price "}/><br/>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }


}

export default App;