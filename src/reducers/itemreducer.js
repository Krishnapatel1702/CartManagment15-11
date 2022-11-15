import React from "react";

const initialvalue = {
  cartitem: [],
  items: [],
};

export default (state = initialvalue, action) => {
  console.log(state);
  switch (action.type) {
    case "get_item":
      console.log("action", action.payload);

      var counter = { ...action.payload, counter: 1 };
      let myarr = [...state.cartitem, counter];

      return { ...state, cartitem: myarr };

    case "get_items":
      return { ...state, items: action.payload };

    case "cleard":
      const cleardata = state.cartitem.filter(function (val) {
        if (val.id !== action.payload.id) {
          return val;
        }
      });
      console.log(cleardata);
      return { ...state, cartitem: cleardata };
    default:
      return state;
  }
};
