import { Component } from "react";


const titleText = "My name is Nasir chowdhury";
const titleText2 = "How old are you ";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();

const currrentYear = date.getFullYear();



class Card extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: 'this is a Typing text',
      isInput: false
    }
     
  }

  editHandler() {
    this.setState({
      ...this.state,
      isInput: true
    })

  }

  inputChange(event) {
    this.setState({
      ...this.state,
      title: event.target.value

    })

  }

  keyPressHandler(event) {
    if(event. key === "Enter"){
      this.setState({
        ...this.state,
        isInput: false
      })

    }
  }

  biuarHandler(event) {
    this.setState({
      ...this.state,
      isInput:false
    })
  }


  render(){

    let output = null

    if(this.state.isInput) {
     output =  (
       <div className= "title py-3">
         <input className= "form-control py-5" onChange= { (event)=> this.inputChange(event)} onKeyPress={ event => this.keyPressHandler(event) } onBlur= { event => this.biuarHandler(event) } type = "text" value={this.state.title }/>
         

       </div>
     
     )}else {
      output = (
        
       <div className= "d-flex title">
           <h1 className= "display-4"> {this.state.title} </h1>
          <span onClick={ () => this.editHandler() } className= "edit-icon">
          <i className="fas fa-edit"></i>
          </span>
       </div>
      )

        
      
    }

    return <div>
      {output}
    </div>
      
      

    
      
    
  }
}








export default Card