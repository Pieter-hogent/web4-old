interface Action {
  type: string;
  payload?: any;
}

function recipesReducer(state = { data: [] }, action: Action) {
  switch (action.type) {
    case 'ADD_RECIPE': {
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }
    case 'REMOVE_RECIPE': {
      // remove recipe with the same name
      return {
        ...state,
        data: state.data.filter(val => val.name !== action.payload.name)
      };
    }
    default:
      return state;
  }
}
export class Store {
  private _state: { [key: string]: any };
  private _reducers: { [key: string]: Function };
  private subscribers: Function[];

  constructor(reducers = {}, initialState = {}) {
    this._reducers = reducers;
    this._state = this.reduce(initialState, {});
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    };
  }
  get reducers() {
    return this._reducers;
  }
  get state(): { [key: string]: any } {
    return this._state;
  }
  set state(state: { [key: string]: any }) {
    this._state = state;
  }
  dispatch(action) {
    this.state = this.reduce(this.state, action);
    this.subscribers.forEach(fn => fn(this.state));
  }
  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}
const reducers = {
  recipes: recipesReducer
};

const store = new Store(reducers);

store.subscribe(data => {
  console.log(data.recipes);
});

const action: Action = {
  type: 'ADD_RECIPE',
  payload: { name: 'spaghetti', ingredients: ['minced meat'] }
};
store.dispatch(action);
store.dispatch({
  type: 'ADD_RECIPE',
  payload: { name: 'risotto', ingredients: ['rice', 'parmesan'] }
});
store.dispatch({ type: 'REMOVE_RECIPE', payload: { name: 'spaghetti' } });
