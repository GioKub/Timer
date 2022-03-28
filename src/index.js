import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      seconds: 0
    }
  }

  render(){
    return(
      this.state.seconds
    )
  }

  componentDidMount(){
    setInterval(()=>this.setState({seconds: this.state.seconds+1}), 1000)
  }
}

ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);