// ColorButton.js
import React from 'react';
import withColor from './withColor';

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'WHITE',
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      backgroundColor: prevState.backgroundColor === 'WHITE' ? 'BLACK' : 'WHITE',
    }));
  };

  render() {
    return (
      <button
        style={{ backgroundColor: this.state.backgroundColor }}
        onClick={() => {
          this.props.onButtonClick(); 
          this.handleClick();
        }}
      >
        {this.props.buttonName}
      </button>
    );
  }
}

export default withColor(ColorButton); 
