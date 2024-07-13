import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import CardContext from "../../CardContext";
import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const openNotificationWithIcon = (type, text) => {
    notification[type]({
      message: (
        <div style={{ color: "#52c41a" }}>
          <strong>{text}</strong>
        </div>
      ),
      duartion: 1,
    });
  };
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    navigate("/signin");
    setIsModalOpen(false);
    setOpen(false);
  };
  const {
    data,
    handleSearch,
    cartItems,
    removeFromCart,
    clearCart,
    getCartTotal,
  } = useContext(CardContext);
  const cart = cartItems.filter((item) => item.isSelected === true).length;
  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <Link to="/">
            <img alt="Logo" src={Logo} />
          </Link>
        </div>
        <ul className="navigation-menu-main">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/featured">Featured</a>
          </li> */}
        </ul>
        <Modal
          title=""
          open={isModalOpen}
          okButtonProps={{
            children: "Sign in to checkout",
            style: {
              backgroundColor: "#FFFFFF",
              height: "50px",
              padding: "1rem 2rem",
              borderColor: "#d9d9d9",
            },
          }}
          cancelButtonProps={{
            style: { height: "50px" },
          }}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Sign in to checkout"
          cancelText="Continue shoppings"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>You must sign in to continue checking out</p>
          </div>
        </Modal>
        <div className="filters-toggle" role="presentation">
          <button
            className="button-muted button-small"
            // style={{padding:' .7rem 1rem'}}
            type="button"
          >
            Filters &nbsp;
            <span
              role="img"
              aria-label="filter"
              style={{ position: "relative", top: "4px" }}
              // className="anticon anticon-filter"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="filter"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="searchbar">
          <span
            role="img"
            aria-label="search"
            className="anticon anticon-search searchbar-icon"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="search"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
            </svg>
          </span>
          <input
            className="search-input searchbar-input"
            placeholder="Search product..."
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
          ></input>
        </div>
        <ul className="navigation-menu">
          <li className="navigation-menu-item">
            <button
              className="button-link navigation-menu-link basket-toggle"
              onClick={showDrawer}
            >
              <div className="badge">
                <span
                  role="img"
                  aria-label="shopping"
                  className="anticon anticon-shopping"
                  style={{ fontSize: "2.4rem" }}
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="shopping"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                  </svg>
                  {cart ? <span class="badge-count">{cart}</span> : ""}
                </span>
              </div>
            </button>
          </li>
          <li class="navigation-action">
            {token === null ? (
              <>
                {" "}
                <Link class="button button-small button-linkx" to="/signup">
                  Sign Up
                </Link>{" "}
                <Link
                  class="button button-small button-muted margin-left-s"
                  to="/signin"
                >
                  Sign In
                </Link>
              </>
            ) : (
              ""
            )}
          </li>
          {token === null ? (
            ""
          ) : (
            <li class="navigation-menu-item">
              <div
                class="user-nav"
                role="button"
                onClick={() => setOpens(!opens)}
                tabindex="0"
              >
                <h5 class="text-overflow-ellipsis">user</h5>
                <div class="user-nav-img-wrapper">
                  <img
                    alt=""
                    class="user-nav-img"
                    src="data:image/jpeg;base64,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"
                  />
                </div>
                <span
                  role="img"
                  aria-label="down"
                  class="anticon anticon-down"
                  style={{ fontSize: "1.2rem", marginLeft: "1rem" }}
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="down"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </span>
                <div
                  class="user-nav-sub"
                  style={opens ? { display: "block" } : { display: "none" }}
                >
                  <Link class="user-nav-sub-link">
                    View Account
                    <span
                      role="img"
                      aria-label="user"
                      class="anticon anticon-user"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="user"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                      </svg>
                    </span>
                  </Link>
                  <h6
                    class="user-nav-sub-link margin-0 d-flex"
                    role="presentation"
                    onClick={() => {
                      openNotificationWithIcon("success", "Log out");
                      localStorage.clear();
                    }}
                  >
                    Sign Out
                    <span
                      role="img"
                      aria-label="logout"
                      class="anticon anticon-logout"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="logout"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path>
                      </svg>
                    </span>
                  </h6>
                </div>
              </div>
            </li>
          )}
        </ul>
      </nav>
      <div class="basket" style={{ transform: open ? "none" : "" }}>
        <div class="basket-list">
          <div class="basket-header">
            <h3 class="basket-header-title">
              My Basket &nbsp;<span>( {cartItems?.length} item)</span>
            </h3>
            <Button
              // class="basket-toggle button button-border button-border-gray button-small"

              role="presentation"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              onClick={() => clearCart()}
              // class="basket-clear button button-border button-border-gray button-small"
              // type="button"
            >
              <span>Clear Basket</span>
            </Button>
          </div>
          {cartItems?.map((item, i) => {
            return (
              <div
                class="basket-item"
                style={{ borderColor: "#d9d9d9", borderRadius: "6px" }}
              >
                <div class="basket-item-control">
                  {/* <Button
                    class="button-border-gray"
                    onClick={() => addToCart(item.id, item.price)}
                  >
                    <span
                      role="img"
                      aria-label="plus"
                      class="anticon anticon-plus"
                      style={{ fontSize: "9px" }}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="plus"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <defs>
                          <style></style>
                        </defs>
                        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                      </svg>
                    </span>
                  </Button>
                  <Button
                    class=" button-border-gray button-small basket-control basket-control-minus"
                    disabled=""
                    onClick={() => removeFromCart(item.id)}
                    // type="primary"
                    // danger
                  >
                    <span
                      role="img"
                      aria-label="minus"
                      class="anticon anticon-minus"
                      style={{ fontSize: "9px" }}
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="minus"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </span>
                  </Button> */}
                </div>
                <div class="basket-item-wrapper">
                  <div class="basket-item-img-wrapper">
                    <img
                      alt="Tuluk"
                      class="basket-item-img is-img-loaded"
                      src={item.image}
                    />
                  </div>
                  <div class="basket-item-details">
                    <a href="/product/JzaakhGgN8w2AU2My470">
                      <h4 class="underline basket-item-name">{item.product}</h4>
                    </a>
                    <div class="basket-item-specs">
                      <div>
                        <span class="spec-title">Quantity</span>
                        <h5 class="my-0">{item.quantity}</h5>
                      </div>
                      <div>
                        <span class="spec-title">Size</span>
                        <h5 class="my-0">28 mm</h5>
                      </div>
                      <div>
                        <span class="spec-title">Color</span>
                        <div
                          style={{
                            backgroundColor: "rgb(0, 0, 0)",
                            width: "15px",
                            height: "15px ",
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="basket-item-price">
                    <h4 class="my-0">${item.price}</h4>
                  </div>
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    style={{ marginLeft: ".5rem" }}
                    class=""
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div class="basket-checkout">
          <div class="basket-total">
            <p class="basket-total-title">Subtotal Amout:</p>
            <h2 class="basket-total-amount">${getCartTotal()}</h2>
          </div>
          <Button onClick={showModal}>Check Out</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
