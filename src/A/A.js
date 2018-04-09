import React, { Component } from 'react';
//import {Bootstrap, Grid, Row, Col, Table,Form} from 'react-bootstrap';


//const arr2=[];
class PnrStatus extends Component {
    constructor(props) {
        super();
        this.state = {
            allData : null,
            val:""
        };
    }

onSubmit = (e) => {
   e.preventDefault();
    const val1=e.target[0].value;
    console.log(val1)
    const API=`https://api.railwayapi.com/v2/route/train/12555/apikey/wud6vmmik5/`
    fetch(API)
    .then((Response)=>Response.json())
    .then((findResponse) => {
        console.log(findResponse)
        this.setState({
         allData:findResponse,  
        //  allDataTrain:findResponse.train.days,        
        })
       
         // console.log(this.state.allData)
      
        
    })

}

changeHandler = (e) => {
    let {name,value} = e.target;
    //console.log(name)
    this.setState({
        [name]:value
    })
}





    render() {       
        const val="";
        return (

           
            <div className="homepage">
                <div className="container">
                <h1>Welcome to train PNR status</h1>
                <div className="pnrBox">
                <form onSubmit={this.onSubmit} id="myForm">
                    <input type="text" name="val" onChange={this.changeHandler} placeholder="enter train number" />
                    <button type="submit" value="submit">Get status</button>  
                </form>                 
                </div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>response_code</th>
                            <th>debit</th>
                            <th>number</th>
                            <th>code</th>
                            <th>runs</th>
                        </tr>
                    </thead>
                    <tbody>

                       {this.state.allData!==null&&
                           this.state.allData.route.map((item,index) =>
                            <tr key={index}>
                                <td>{item.day}</td>
                                <td>{item.distance}</td>
                                <td>{item.halt}</td>
                                <td>{item.no}</td>
                                <td>{item.scharr}</td>
                                <td>{item.schdep}</td>
                                <td>{item.station.code}</td>
                                <td>{item.station.lat}</td>
                                <td>{item.station.lng}</td>
                                <td>{item.station.name}</td>
                            </tr>
                        )
                       } 

                    </tbody>
                </table> 
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>response_code</th>
                            <th>debit</th>
                            <th>number</th>
                            <th>code</th>
                            <th>runs</th>
                        </tr>
                    </thead>
                    <tbody>

                       {/* {this.state.allData!==null?
                           this.state.allData.route.map((item,index) =>
                            <tr key={index}>
                                <td>{item.day}</td>
                                <td>{item.distance}</td>
                                <td>{item.halt}</td>
                                <td>{item.no}</td>
                                <td>{item.scharr}</td>
                                <td>{item.scharr}</td>
                                <td>{item.schdep}</td>
                                <td>{item.station.code}</td>
                                <td>{item.station.lat}</td>
                                <td>{item.station.lng}</td>
                                <td>{item.station.name}</td>
                            </tr>
                        ):""
                       }  */}

                    </tbody>
                </table> 

                </div>
                
                    
            </div>
        )
    }
}

export default PnrStatus;
