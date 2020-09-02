import React from 'react'
import ContextType from './ContextType';


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
          <ContextType.Consumer>
              {
                  (value)=>{
                      return(<>
                        <h5 value={value}>{value}</h5>
                        <fieldset>
                            <legend>Enter temperature in {scaleNames[scale]}:</legend>
                            <input value={temperature}
                                    onChange={this.handleChange} />
                        </fieldset>

                      </>)
                  }
              }
          </ContextType.Consumer>
       
       
        

      );
    }
  }
export default TemperatureInput