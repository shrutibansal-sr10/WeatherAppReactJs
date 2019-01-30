import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="CITY"></input>
                    <input type="text" name="country" placeholder="COUNTRY"></input>
                    <button type="submit">Get Weather</button>
                </form>
            </div>
        )
    }
}

export default Form;