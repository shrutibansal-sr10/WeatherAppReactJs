import React from "react";

class Data extends React.Component{
    render(){
        return(
        <div>
            {this.props.location&&this.props.country&&<p>Location:{this.props.location},{this.props.country} </p>}
            {this.props.temperature&&<p>Temperature:{this.props.temperature}</p>}
            {this.props.humidity&&<p>Humidity:{this.props.humidity}</p>}
            {this.props.description&&<p>Conditions:{this.props.description}</p>}
            {this.props.error&&<p>{this.props.error}</p>}
        </div>
        )
    }
}

export default Data;