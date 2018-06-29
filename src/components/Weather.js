import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && this.props.country}
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Conditions: {this.props.description}</p>
            </div>
        );
    }
}

export default Weather;