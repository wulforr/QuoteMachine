import { createStore } from "redux";

const Add_Quote = "ADD_QUOTE";
const SET_INDEX = "SET_INDEX";

export const addQuote = (quote, author) => {
  return {
    type: Add_Quote,
    quote,
    author,
  };
};

export const setIndex = (index) => {
  return {
    type: SET_INDEX,
    index,
  };
};

const initialState = {
  mainQuotes: [
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

export const colors = [
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
      newState.mainQuotes = [
        ...state.mainQuotes,
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
export default store;
