import React from 'react'
import { render } from 'react-dom'
import './Kartya.css'

class Kartya extends React.Component {
 
  kattintasKezelo = () => {
    console.log(this.props.kep)
    this.props.kivalasztottKep(this.props.kep)
  }
  render() {
    return (
      <div className="kartya" onClick={this.kattintasKezelo}>
        <h1>{this.props.kep.cim}</h1>
        <img src={this.props.kep.eleresiut} />
        <p>Cím:{this.props.kep.leiras}</p>
      </div>
    )
  }
}

export default Kartya
/* function App() {
  return (
    <div className="App">
      <h1>Helló világ</h1>
    </div>
  )
} */
