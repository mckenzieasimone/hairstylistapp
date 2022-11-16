import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"
import Services from '../../services/Services';

const Cities = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Find Plots By Location' subtitle='' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                  <label>{item.Plots}</label>
                    <label>{item.Services}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Cities;





class Cities extends React.component {

    cconstructor(props) {
        super(props);
        this.state = {city: "Los Angeles"};
    }
    render() {
        return <h1> What city are you looking for service in? </h1>
    }
}

export default Cities;