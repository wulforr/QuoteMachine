import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Add_Quote = "ADD_QUOTE";
const SET_INDEX = "SET_INDEX";

const addQuote = (quote, author) => {
  return {
    type: Add_Quote,
    quote,
    author,
  };
};

const setIndex = (index) => {
  return {
    type: SET_INDEX,
    index,
  };
};

const initialState = {
  mainquotes: [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      quote:
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch",
    },
    {
      quote:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss",
    },
    {
      quote:
        "In three words I can sum up everything I've learned about life: it goes on",
      author: "Robert Frost",
    },
    {
      quote:
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron",
    },
    {
      quote:
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
    },
  ],
  index: Math.floor(Math.random() * 10),
};

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Quote: {
      let newState = Object.assign({}, state);
      newState.mainquotes = [
        ...state.mainquotes,
        { quote: action.quote, author: action.author },
      ];
      return newState;
    }
    case SET_INDEX: {
      let newState = Object.assign({}, state);
      newState.index = action.index;
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

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
    let newcolorindex = Math.floor(Math.random() * 12);
    document.getElementsByTagName("body")[0].style.backgroundColor =
      colors[newcolorindex];
    document.getElementById("container").style.color = colors[newcolorindex];
    document.querySelectorAll("button").forEach((ele) => {
      ele.style.backgroundColor = colors[newcolorindex];
      ele.style.borderColor = colors[newcolorindex];
    });
  };
  render() {
    return (
      <div id="container">
        <div className="quotedisplay">
          <div id="quote">{this.props.quotes[this.props.index].quote}</div>
          <div id="author">
            by - {this.props.quotes[this.props.index].author}
          </div>
          <button onClick={this.getRandom} id="nextquote">
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
    quotes: state.mainquotes,
    index: state.index,
  };
};

const mapDispatchToProps = () => {
  return {
    addquote: function (quote, author) {
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
