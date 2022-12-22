import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  render() {
    return (
      <div className="wrapper"> 
        <Header/>
        <Items items={this.state.items}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
