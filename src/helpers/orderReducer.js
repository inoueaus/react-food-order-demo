const orderReducer = (state, action) => {
    if (action.type === "ADD_TO_ORDER") {
      if (state.map(item => item.id).includes(action.item.id)) {
        return state.map((item) => {
          if (item.id === action.item.id) {
            item.count += action.item.count;
            return item;
          } else {
            return item;
          }
        });
      }
      return [...state, action.item];
    }
    if (action.type === "ADD_ONE") {
      return state.map((item) => {
        if (item.id === action.id) {
          item.count++;
          return item;
        } else {
          return item;
        }
      });
    } else if (action.type === "REDUCE_ONE") {
      //check if item needs to be reduced or removed
      const index = state.map((item) => item.id).indexOf(action.id);
      //delete if count is 1
      if (state[index].count === 1) {
        return state.filter((item) => item.id !== action.id);
      }
      //reduce count if greater than 1
      return state.map((item) => {
        if (item.id === action.id && item.count > 1) {
          item.count--;
          return item;
        } else {
          return item;
        }
      });
    }
  };

export default orderReducer;