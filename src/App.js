import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'стул',
          img: 'stul.jpg',
          desc: 'lorem ipsum dolor',
          category: 'chairs',
          price: '49.99'

        },
        {
          id: 2,
          title: 'стол',
          img: 'stol.jpg',
          desc: 'lorem ipsum dolor',
          category: 'tables',
          price: '490.99'

        },
        {
          id: 3,
          title: 'шкаф',
          img: 'shkaf.jpg',
          desc: 'lorem ipsum dolor',
          category: 'closets',
          price: '799.99'

        },
        {
          id: 4,
          title: 'торшер',
          img: 'torsher.jpg',
          desc: 'lorem ipsum dolor',
          category: 'lamps',
          price: '99.99'

        },
        {
          id: 5,
          title: 'диван',
          img: 'divan.webp',
          desc: 'lorem ipsum dolor',
          category: 'sofas',
          price: '999.99'

        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }

  render() {
    return (
      <div className="wrapper"> 
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd = {this.addToOrder}/>
        <Footer/>
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el =>  el.id !== id)})
  }

}

export default App;
