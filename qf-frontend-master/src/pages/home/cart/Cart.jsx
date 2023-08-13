import React, { createContext, useContext, useEffect, useState } from "react";
import CartItem from "../../../components/cartItem/CartItem";
import "./cart.scss";
import axios from "axios";
import {
  API_IP,
  API_IP_2,
  ChangeHeaderNavColorContext,
  ProgressBarContext,
  UserContext,
} from "../../../helper/Context";
import Footer from "../../../layouts/Footer";
import defaultImg from "../../../assets/img/defaultpropic.png";
import Rating from "../../../components/rating/Rating";
import { NavLink } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

let cartIdsObj ;
  

const api = axios.create({
  baseURL: `http://${API_IP_2}/`,
});
export const CartListContext = createContext();

function Cart() {
  const { user, setUser } = useContext(UserContext);
  const [checkedAll, setCheckedAll] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [updateUi, setUpdateUi] = useState(false);
  const [checkedUser, setCheckedUser] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);
  const { progress, setProgress } = useContext(ProgressBarContext);


  const { changeHeaderNavColor, setChangeHeaderNavColor } = useContext(
    ChangeHeaderNavColorContext
  );


  useEffect(() => {
    setChangeHeaderNavColor(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    setProgress(10);
    await api
      .get(`/api/cart/cart-items/${user._id}`, {})
      .then((res) => {
        setCartList(res.data.cartItems);
        // setCheckedUser(res.data.cartItems[0].service.seller);
        // console.log(res.data.cartItems);
      })
      .catch((e) => {
        console.log(e);
      });
    setProgress(100);
  };
  const removeFromList = (index) => {
    setCartList([...cartList.slice(0, index), ...cartList.slice(index + 1)]);
    setUpdateUi(!updateUi);
  };
  return (
    <CartListContext.Provider value={{ updateUi, setUpdateUi }}>
      <div className="Cart">
        <div className="services-list">
          <div className="left">
            <div className="cart-header">
              <h1>
                Produts Cart <span>({cartList ? cartList.length : 0})</span>
              </h1>
              <div className="spacer"></div>
              {checkedAll || selectedList.length > 0 ? (
                <button
                  onClick={async () => {
                    setProgress(10);
                     cartIdsObj = {
                      cartIds: selectedList.filter((value, index, array) => {
                        return selectedList.indexOf(value) === index
                      }),
                    };
                    // console.log(cartIdsObj);
                    await api
                      .delete(`/api/cart/delete/all/`, {
                        data: cartIdsObj,
                      })
                      .then((res) => {
                        setProgress(100);
                        fetchData();
                        console.log(res);
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  }}
                >
                  Remove All
                </button>
              ) : (
                <></>
              )}
              <input
                type="checkbox"
                name=""
                id=""
                onChange={(e) => {
                  setCheckedAll(e.target.checked);
                  let tempList = [];
                  e.target.checked &&
                    cartList.forEach((element) => {
                      tempList.push(element._id);
                    });

                  // console.log("##", tempList);
                  setSelectedList(tempList);
                }}
              />
            </div>
            {console.log(cartList)}
            {cartList &&
              cartList.length > 0 &&
              cartList.map((item, index) => (
                <>
                <CartItem   key={item._id}

                  cart_id={index}
                  cartItem_id={item.service.service._id}
                  title={item.service.service.title}
                  fnImg={item.service.service.fnImg}
                  price={item.service.service.price}
                  service={item.service}
                  isSelected={index === selectedItem}
                  onClickOnItem={() => {
                    setCheckedUser(item.service.service._id);
                    setSelectedItem(index);
                  }}
                  onChecked={() => {
                    cartIdsObj = {
                      cartIds: selectedList.filter((value, index, array) => {
                        return selectedList.indexOf(value) === index
                      }),
                    };
                    setSelectedList([...selectedList, item.service.service._id]);
                  }}
                  onUnChecked={() => {
                    setSelectedList(
                      selectedList.filter((sitem) => sitem != item.service.service._id)
                    );
                  }}
                  onClickRemove={async () => {
                    setProgress(10);
                    await api
                      .delete(`/api/cart/${item.service.service._id}`,{
                        data: cartIdsObj,
                      })
                      
                      .then(() => {
                        setProgress(100);
                        removeFromList(index);
                          
                      })
                      .catch(() => {});
                    
                  }}
                  checked={checkedAll}
                />
                </>
                
              ))}
          </div>
          <div className="right">
            <div className="profile">
              <div className="profile-img">
                <img
                  src={
                    user.proPic
                      ? `http://${API_IP_2}/api/${user.proPic}`
                      : defaultImg
                  }
                  alt=""
                />
              </div>
              <div className="container1">
                <div className="name">
                  {checkedUser.name ? checkedUser.name : user.firstName}
                </div>
                {/* <div className="row">
                  <div className="rating-num">
                    {checkedUser.rating ? checkedUser.rating : "-"}
                  </div>
                  <div className="rating-sub">
                    <Rating rating={checkedUser.rating} />
                    <div className="reviews">10 reviews</div>
                  </div>
                </div> */}
              </div>
              {/* <div className="container2">
                <ul>
                  <li>Job</li>
                  <li>Availability</li>
                  <li>Age</li>
                  <li>Location</li>
                </ul>
                <ul>
                  <li>{checkedUser.job ? checkedUser.job : "-"}dhjfdgjhfgsfhdsgfsjhfgdsfjsg</li>
                  <li>{checkedUser.availability ? checkedUser.availability : "-"}</li>
                  <li>{checkedUser.age ? checkedUser.age : "-"}</li>
                  <li>{checkedUser.city ? checkedUser.city : "-"}</li>
                </ul>
              </div> */}
              <div className="container2">
                <ul>
                  <li>
                    <span>Email</span>
                    <span>{checkedUser.email ? checkedUser.email : user.email}</span>
                  </li>
                  <li>
                    <span>Address</span>
                    <span>
                      {checkedUser.availability != undefined
                        ? checkedUser.availability
                        : "-"}
                    </span>
                  </li>
                  {/* <li>
                    <span>Age</span>
                    <span>
                      {checkedUser.age != undefined ? checkedUser.age : "-"}
                    </span>
                  </li> */}
                  {/* <li>
                    <span>Location</span>
                    <span>
                      {checkedUser.city != undefined ? checkedUser.city : "-"}
                    </span>
                  </li> */}
                </ul>
              </div>
              <button
                  className="place-order-btn">Buy Now</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </CartListContext.Provider>
  );
}

export default Cart;