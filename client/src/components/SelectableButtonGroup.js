import React, { Component } from 'react';
import SelectableButton from './SelectableButton';

class SelectableButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {},
      numSelected: 0
    };

    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidUpdate () {
    // if (this.props.handleSelected) {
    //   this.props.handleSelected(this.state.selected, this.state.numSelected);
    // }
  }

  static defaultProps = {
    maxSelected: 2
  }

  handleSelection (selected, value, text) {
    let newNum = this.state.numSelected;
    let newSelected = {};

    if (selected) {
      newSelected = { ...this.state.selected, [value]: text };
      newNum += 1;
      console.log(newSelected);
      this.setState({ selected: newSelected, numSelected: newNum });
    } else {
      newSelected = Object.assign({}, this.state.selected);
      newNum -= 1;
      delete newSelected[value];
      console.log(newSelected);
      this.setState({ selected: newSelected, numSelected: newNum });
    }
    if (this.props.handleSelected) {
      this.props.handleSelected(newSelected, newNum);
    }
  }

  render() {

    return this.props.items.map(item => {
      const text = item.text ? item.text : item;
      const value = item.value ? item.value : item;

      return (
        <div className={this.props.buttonClassName} key={item}>
          <SelectableButton
            handleSelection={this.handleSelection}
            text={text}
            value={value}
            disabled={this.state.numSelected === this.props.maxSelected && !this.state.selected[value] ? true : false}
          />
        </div>
      );
    });
  }
};

export default SelectableButtonGroup;
