import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store, { addQuote, setIndex, colors } from "./store";
import { Provider, connect } from "react-redux";

export default class AddQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }
  getRandom = () => {
    this.props.setQuoteIndex(
      Math.floor(Math.random() * this.props.quotes.length)
    );
    let newColorIndex = Math.floor(Math.random() * 12);
    document.getElementsByTagName("body")[0].style.backgroundColor =
      colors[newColorIndex];
    document.getElementById("container").style.color = colors[newColorIndex];
    document.querySelectorAll("button").forEach((ele) => {
      ele.style.backgroundColor = colors[newColorIndex];
      ele.style.borderColor = colors[newColorIndex];
    });
  };
  render() {
    return (
      <div id="container">
        <div className="quoteDisplay">
          <div id="quote">{this.props.quotes[this.props.index].quote}</div>
          <div id="author">
            by - {this.props.quotes[this.props.index].author}
          </div>
          <button onClick={this.getRandom} id="nextQuote">
            Next Quote
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    quotes: state.mainQuotes,
    index: state.index,
  };
};

const mapDispatchToProps = () => {
  return {
    addQuote: function (quote, author) {
      store.dispatch(addQuote(quote, author));
    },
    setQuoteIndex: function (index) {
      store.dispatch(setIndex(index));
    },
  };
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuote);

class AppDrawer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedComponent />
      </Provider>
    );
  }
}

ReactDOM.render(<AppDrawer />, document.getElementById("root"));
