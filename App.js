
import React, { Component } from 'react';
import Card from './components/Card';
import Cowndown from './components/cowndown/Cowndown';
import Controller from './components/controller/Controller';


class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            time: {
                min:0,
                sec:0
                
            },
            laps: []
        }
    }

    getStart() {
       this.intervalID =  setInterval(()=> {
            let min = this.state.time.min
            let sec = this.state.time.sec

            if(min >= 10) {
                sec = sec + 1
                min = 0
            }

            if(sec >= 60) {
                min = min + 1
                sec = 0

            }

            this.setState({
                ...this.state,
                time: {
                    min,
                    sec: sec + 1

                }
            })


        }, 100)
    }

    getpause(){
        clearInterval(this.intervalID)

    }

    getLap() {
        let time = {
            ...this.start.time

        }
        this.setState({
            ...this.start,
            laps: [time, ...this.state.laps]
        })

        console.log(this.state.laps);

    }

    getreset() {
        this.setState({
            time: {
                min: 0,
                sec: 0
            }
        })
    }

    



    render(){
        return <div className= "App">
        <div className= "container py-5 ">
            <div className= "row">
                <div className= "col-sm-8 offset-sm-2">
                <Card />
                <Cowndown  time={ this.state.time } />
                <Controller 
                 start= { this.getStart.bind(this) } 
                 pause= { this.getpause.bind(this) }
                 reset= { this.getreset.bind(this) }
                 lap= { this. getLap.bind(this) }
                 />
                </div>
            </div>
        
      
        
  
            </div>
             </div>

    }


} 


export default App;

    

    



    


    


    
    
               



