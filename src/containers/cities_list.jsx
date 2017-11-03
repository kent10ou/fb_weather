import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line } from 'recharts';

class CitiesList extends Component {
  renderCityData (data) {
    const name = data.city.name;
    const temps = data.list.map(weather => {
      let fahrenheit = 9/5 * (weather.main.temp - 273) + 32;
      return (
        {temp: fahrenheit}
      )
    });

    const pressure = data.list.map(weather => { 
      return (
        { pressure: weather.main.pressure }
      )
    });

    const humidity = data.list.map(weather => {
      return (
        { humidity: weather.main.humidity }
      )
    });

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <LineChart
            width={300}
            height={200}
            data={temps}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="temp" stroke="#3B5998" yAxisId={0} />
          </LineChart>
        </td>
        <td>
          <LineChart
            width={300}
            height={200}
            data={pressure}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="pressure" stroke="#3B5998" yAxisId={0} />
          </LineChart>
        </td>
        <td>
          <LineChart
            width={300}
            height={200}
            data={humidity}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="humidity" stroke="#3B5998" yAxisId={0} />
          </LineChart>
        </td>
      </tr>
    )
  }

  render() {
    console.log('props: ', this.props);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderCityData)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(CitiesList);