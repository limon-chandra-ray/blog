import React,{Component} from 'react'
import ContextType from './ContextType';
class NewContext extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <ContextType.Consumer >
                {
                    (value)=>{
                    return(
                        <>
                            <h1>this is  my name {value}</h1>
                            <p>what is your age</p>
                        </>
                        )
                    }
                   
                }
                
            </ContextType.Consumer >
          );
    }
}
 
export default NewContext;