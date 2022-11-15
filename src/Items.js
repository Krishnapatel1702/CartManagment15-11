import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData, { cleardata } from "./action/itemaction";
import { getsingle } from "./action/itemaction";

export default function Items() {
  const mydata = useSelector((state) => state.Item.items);
  const item = useSelector((state) => state.Item.cartitem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(mydata);

  const setdata = (index) => {
    dispatch(getsingle(index));
  };
  const removeItem = (val) => {
    dispatch(cleardata(val));
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="ml-auto">
            {/* <h4>{item.length}</h4> */}
            <b>Products Added in Cart</b>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              {mydata?.map(function (val, index) {
                return (
                  <>
                    <div className="col-md-3">
                      <div
                        className="card"
                        style={{ width: "100%", margin: "10px" }}
                      >
                        <img
                          className="card-img-top"
                          src={val.image}
                          alt="Card image cap"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">{val.description}</p>
                        <p className="card-text">Price : {val.price} $</p>
                        <button
                          onClick={() => {
                            setdata(index);
                          }}
                          className="btn btn-primary"
                        >
                          Add To cart
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            {item?.map(function (val, index) {
              return (
                <>
                  <div className="col-md-6">
                    <div
                      className="card"
                      style={{ width: "100px", margin: "10px" }}
                    >
                      <img
                        className="card-img-top"
                        src={val.image}
                        alt="Card image cap"
                      />
                    </div>

                    <div className="">
                      <button
                        className="removebtn_style"
                        onClick={() => removeItem(val)}
                      >
                        remove from cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
