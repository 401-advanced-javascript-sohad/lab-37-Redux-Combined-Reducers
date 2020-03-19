/* eslint-disable no-case-declarations */
let initialSatate = {
  category: {

    fruits: ['Apples', 'oranges', 'bananas'],
    vegetables: [' lettuce', ' spinach', 'silverbeet', 'potato'],
    Meat: ['Beef', 'Chicken', 'Turkey', 'Fish'],

  },
  output: [],
};

export default (state = initialSatate, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'choose':
    let category = state.category;
    let output = state.category[payload];

    return { category, output };

  default:
    return state;
  }
};

export const chooseList = (clicked) => {
  return {
    type: 'choose',
    payload: clicked,
  };
};

