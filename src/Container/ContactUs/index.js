import React from 'react'
import Calculator from './Temparcher';
import ContextType from './ContextType';
import NewContext from './NewContext';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Please write an essay about your favorite DOM element.'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);

    event.preventDefault();
  }

  render() {
    return (
      <ContextType.Provider value="limon" >

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name={this.state.value} onChange={this.handleChange} />
          </label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Limon">Limon</option>
            <option value="Himon">Himon</option>
            <option value="Uzzal">Uzzal</option>
            <option value="Masud">Masud</option>
            <option value="Sumon">Sumon</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <Calculator/>
        <NewContext/>
      </ContextType.Provider >
    );
  }
}
export default Contact;

