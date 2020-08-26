import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, customamount, clickcount } from '../actions/index';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
          count={this.props.count}
          clicked={this.props.clicked}
          custAmount={this.props.custAmount}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onCustomAmount={this.props.onCustomAmount}
          onClickCount={this.props.onClickCount} />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onCustomAmount: (count) => dispatch(customamount(count)),
    onClickCount: () => dispatch(clickcount())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clicked: state.clicked,
      custAmount: state.custAmount
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);