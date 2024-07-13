import React, { useContext } from "react";
import CardContext from "../../CardContext";
import { message } from 'antd';
import Navbar from "../Navbar/Index";
const Home = () => {
  const { data, handleClick, addToCart,removeFromCart } = useContext(CardContext);
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Add to cart',
        duration: 2,
      });
    }, 1000);
  };
  const closeMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'warning',
        content: 'Remove to cart',
        duration: 2,
      });
    }, 1000);
  };
  return (
    <div>
      <main class="content">
      {contextHolder}
        <section class="product-list-wrapper">
          <div class="product-grid">
            {data?.map((item, i) => {
              return (
                <div
                  key={i}
                  class="css-vbgp86-SkeletonTheme"
                  style={{ width: "250px" }}
                >
                  <div class="product-card " style={{ boxShadow: "none" }}>
                    {item.isSelected === true ? (
                      <span
                        role="img"
                        aria-label="check"
                        class="anticon anticon-check fa fa-check product-card-check"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="check"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                        </svg>
                      </span>
                    ) : (
                      ""
                    )}
                    <div class="product-card-content" role="presentation">
                      <div class="product-card-img-wrapper">
                        <img
                          alt="Sugat"
                          class="product-card-img is-img-loaded"
                          src={item.image}
                        />
                      </div>
                      <div class="product-details">
                        <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                          {item.product}
                        </h5>
                        <p class="product-card-brand">{item.brand}</p>
                        <br />
                        <h4 class="product-card-price">
                          ${item.price}
                          {item.isSelected === true ? (
                            <button
                              onClick={() => {
                                removeFromCart(item.id)
                                closeMessage()
                                handleClick(item.id, !item.isSelected);
                              }}
                              class="button-links"
                            >
                              Add to basket
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                handleClick(item.id, !item.isSelected);
                                openMessage()
                                addToCart(
                                  item.id,
                                  item.price,
                                  item.product,
                                  item.image,
                                  item.isSelected
                                );
                              }}
                              class="button-links"
                            >
                              Add to basket
                            </button>
                          )}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div class="css-vbgp86-SkeletonTheme">
              <div
                class="product-card "
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 10px 15px; border: 1px solid rgb(166, 165, 165)",
                }}
              >
                <span
                  role="img"
                  aria-label="check"
                  class="anticon anticon-check fa fa-check product-card-check"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="check"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                  </svg>
                </span>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Kulangot"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&amp;token=7dca264f-c345-4cfc-93a8-60217a53f66a"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Kulangot
                    </h5>
                    <p class="product-card-brand">Salt</p>
                    <h4 class="product-card-price">$67.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block button-border button-border-gray"
                  type="button"
                >
                  Remove from basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Tiktilaok Manok"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&amp;token=809a3249-f83d-4aec-b134-34a65ce2ce10"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Tiktilaok Manok
                    </h5>
                    <p class="product-card-brand">Sexbomb</p>
                    <h4 class="product-card-price">$78.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Very Nice"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&amp;token=31e796ad-dbd6-4e4f-a8a9-192f5158684a"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Very Nice
                    </h5>
                    <p class="product-card-brand">Salt maalat</p>
                    <h4 class="product-card-price">$79.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Quake Overload"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&amp;token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Quake Overload
                    </h5>
                    <p class="product-card-brand">Yezyow</p>
                    <h4 class="product-card-price">$80.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Kutu"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2Fc0cvo2QXFMX1wO7EpvQC?alt=media&amp;token=7115b501-723c-4fd3-9c00-e709ad38bd8a"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Kutu
                    </h5>
                    <p class="product-card-brand">Sexbomb</p>
                    <h4 class="product-card-price">$129.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Tuluk"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FJzaakhGgN8w2AU2My470?alt=media&amp;token=92c7e2f7-77b4-416c-b415-5842418c3dc0"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Tuluk
                    </h5>
                    <p class="product-card-brand">Black Kibal</p>
                    <h4 class="product-card-price">$142.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Takla Green"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FmrkQoZV2qlpaRWsonHtH?alt=media&amp;token=374fabb7-24e8-4355-bc88-70fec1c2d60d"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Takla Green
                    </h5>
                    <p class="product-card-brand">Sexbomb</p>
                    <h4 class="product-card-price">$150.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Balakubak"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&amp;token=5e722063-a792-4502-9f6e-c3df1581aa9c"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Balakubak
                    </h5>
                    <p class="product-card-brand">Betsin Maalat</p>
                    <h4 class="product-card-price">$170.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Pitaklan"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FaubOenOJu42CNp4zXTLX?alt=media&amp;token=1d5fd281-b9cc-499b-94a5-225273b1eabc"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Pitaklan
                    </h5>
                    <p class="product-card-brand">Black Kibal</p>
                    <h4 class="product-card-price">$174.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Burnikk"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&amp;token=be15689c-e12c-4829-9d78-32395ef1e3f7"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Burnikk
                    </h5>
                    <p class="product-card-brand">Sexbomb</p>
                    <h4 class="product-card-price">$240.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Sipon Malapot"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYjDAQSbkSZlartelhFyV?alt=media&amp;token=9b0bdd5e-eb91-4d99-a52f-298c12879fa3"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Sipon Malapot
                    </h5>
                    <p class="product-card-brand">salt</p>
                    <h4 class="product-card-price">$250.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Buldit"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&amp;token=23d7673c-a0bf-4dcb-89f1-8482446b56be"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Buldit
                    </h5>
                    <p class="product-card-brand">Salt Maalat</p>
                    <h4 class="product-card-price">$250.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Merry Christmas"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FzxNR1gLeEDPA5KXUtGmo?alt=media&amp;token=dd5c69fd-6c69-47c2-8a50-2447ed0c9ca2"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Merry Christmas
                    </h5>
                    <p class="product-card-brand">Salt Maalat</p>
                    <h4 class="product-card-price">$259.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Tilis Malaput"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FvEjSLuZ2zyCwln0LHv4K?alt=media&amp;token=6b79fe0a-e7fa-4f23-a521-e6bad01032d0"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Tilis Malaput
                    </h5>
                    <p class="product-card-brand">Betsin Maalat</p>
                    <h4 class="product-card-price">$340.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Merry Christmas"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2Fs3uuRu71Mon65lHohQZ1?alt=media&amp;token=6298fb20-91d4-461a-af78-90a404f89cd7"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Merry Christmas
                    </h5>
                    <p class="product-card-brand">Salt Maalat</p>
                    <h4 class="product-card-price">$365.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Tilapia"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FkEq31Ad5RBwmqOebNBqA?alt=media&amp;token=75307fe0-2f8b-4a78-a82a-a4996b5ca94e"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Tilapia
                    </h5>
                    <p class="product-card-brand">salt Maalat</p>
                    <h4 class="product-card-price">$450.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div>
            <div class="css-vbgp86-SkeletonTheme">
              <div class="product-card " style={{ boxShadow: "none" }}>
                <div class="product-card-content" role="presentation">
                  <div class="product-card-img-wrapper">
                    <img
                      alt="Kibal Batal"
                      class="product-card-img is-img-loaded"
                      src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&amp;token=8d33ea34-2de3-466b-9b3d-27015e9cd540"
                    />
                  </div>
                  <div class="product-details">
                    <h5 class="product-card-name text-overflow-ellipsis margin-auto">
                      Kibal Batal
                    </h5>
                    <p class="product-card-brand">Kibal Black</p>
                    <h4 class="product-card-price">$674.00</h4>
                  </div>
                </div>
                <button
                  class="product-card-button button-small button button-block "
                  type="button"
                >
                  Add to basket
                </button>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
