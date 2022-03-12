import React from 'react'
import Kartya from './Kartya'

import './Kartya.css'
import kepeim from './adatopk'

class Galeria extends React.Component {
  constructor() {
    super()
    this.state = {
      aktKep: {
        cim: 'Első kép',
        leiras: 'leírás 1',
        eleresiut: './kepek/kep1.jpg',
      },
    }
  }

  kivalasztottKep = (elem) => {
    console.log(elem)

    this.setState(
      {
      aktKep: elem,
    }
    )
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <h1>{this.state.aktKep.cim}</h1>
          <img src={this.state.aktKep.eleresiut} />
          <p>Cím:{this.state.aktKep.leiras}</p>
        </section>
        <div className="galeria">
          {kepeim.map((elem, index) => {
            return (
              <Kartya
                kep={elem}
                kivalasztottKep={this.kivalasztottKep}
                key={index}
              />
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default Galeria
/* function App() {
  return (
    <div className="App">
      <h1>Helló világ</h1>
    </div>
  )
} */
