export default function fetchData() {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "get_items", payload: data });
      })
      .catch((error) => {
        throw error;
      });
  };
}
export function getsingle(ind) {
  const val = ind + 1;

  return (dispatch) => {
    fetch(`https://fakestoreapi.com/products/${val}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "get_item", payload: data });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function cleardata(data1) {
  return (dispatch) => {
    dispatch({ type: "cleard", payload: data1 });
  };
}
