import React, { Component } from 'react';

class SelectableButton extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({ selected: !this.state.selected});
    this.props.handleSelection(!this.state.selected, this.props.value, this.props.text)
  }

  render () {
    const buttonText = this.props.text.charAt(0).toUpperCase() + this.props.text.slice(1);

    let styleClass = 'ui large button blue';
    if (!this.state.selected) styleClass += ' basic';
    if (this.props.disabled) styleClass += ' disabled';

    return (
      <div style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
        <button
          className={styleClass}
          onClick={this.handleClick}
          style={{ minWidth: '10em' }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
};

export default SelectableButton;
