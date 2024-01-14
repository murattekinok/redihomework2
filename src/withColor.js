// withColor.js
import React from 'react';

const withColor = (WrappedComponent) => {
  class WithColor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        buttonName: 'Test me', 
      };
    }

    handleButtonClick = () => {
      this.setState((prevState) => ({
        buttonName: prevState.buttonName === 'Test me' ? 'Clicked!' : 'Test me',
      }));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          buttonName={this.state.buttonName}
          onButtonClick={this.handleButtonClick}
        />
      );
    }
  }

  return WithColor;
};

export default withColor;
