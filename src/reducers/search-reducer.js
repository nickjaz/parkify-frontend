export default (state = [], action) => {
  let {type, payload} = action;
  switch (type) {
  case 'SEARCH':
    return payload;
  default: 
    return state;
  }
};
