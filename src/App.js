import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className="wrapper"> 
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd = {this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem}  onAdd = {this.addToOrder}  onShowItem={this.onShowItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState ({
      currentItems: this.state.items.filter(el => el.category === category)
    })
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
