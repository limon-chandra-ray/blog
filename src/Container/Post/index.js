import React,{Component} from 'react'
import './style.css'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
    }
    update(){

        this.setState((prevSat)=>{
            return{
                count:prevSat.count + 1
            }
        })
    }
    downdata(){

        this.setState((prevSat)=>{
            return{
                count:prevSat.count - 1
            }
        })
    }

    render() { 
        return ( 
            <div className="container">

                <div class="row mx-auto">
                    <div className="col-md d-flex">
                        <button onClick={()=>this.update()} >Increment  </button>
                        <p className="countp">{this.state.count}</p>
                        <button onClick={()=>this.downdata()} >Decrement  </button>
                        
                    </div>
                </div>

            </div>
         );
    }
}
 
export default Post;