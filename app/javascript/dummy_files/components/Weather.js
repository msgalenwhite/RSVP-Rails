import React, {Component} from 'react'

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {

    //these are the latitude/longitude for the castle manor inn
    let latitude = 42.614510
    let longitude = -70.687690

    fetch(`/api/v1/forecast/${latitude},${longitude}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(`Error in fetch: ${error.message}`);
      })
  }

  render() {
    return(
      <div className='page'>
        <h3 className='heading'>What will the weather be like?</h3>


      </div>
    )
  }
}

export default Weather
