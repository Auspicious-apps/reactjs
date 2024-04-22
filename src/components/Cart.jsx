import { useEffect, useState } from "react";
import { useSiteStore } from "../context/siteStore";
import axios from "axios";
import { Payment } from "@mercadopago/sdk-react";

export default function Cart({ toggleHandle, products }) {
  const cart = useSiteStore((state) => state.cart);
  const [showPayment, togglePayment] = useState(false);
  const removeFromCart = useSiteStore((store) => store.removeFromCart);
  const updateQuantity = useSiteStore((store) => store.updateQuantity);
  const [paymentData, setPaymentData] = useState({});
  const getProduct = (id) => {
    return products.find((product) => product.id === id);
  };

  const [whatsappNumber, setWhatsappNumber] = useState("");

  const checkout = () => {
    console.log("Checking out");

    let items = [];

    cart.forEach((item) => {
      items.push({
        id: item.id,
        description: "La Manita Product",
        priceValue: getProduct(item.id).priceValue,
        quantity: item.quantity,
      });
    });

    axios
      .post("https://lamanita.mx/backend/public/api/payments/processnew", {
        order_id: "123455",
        items: items,
        external_reference: 2,
        whatsapp_number: whatsappNumber,
      })
      .then((res) => {
        console.log(res);
        window.location.href = res.data.init_point;
        setPaymentData(res.preference_id);
        console.log(res);
      });
  };

  const [total, setTotal] = useState(0);
  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += getProduct(item.id).priceValue * item.quantity;
    });

    setTotal(total);
  };

  useEffect(() => {
    getTotal();
  }, [cart]);

  console.log(cart);

  return (
    <div>
      {!showPayment && (
        <section className="fixed top-0 left-0 w-full z-50 bg-[#ccccca]">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-transparent">
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Carrito
                </h1>
              </header>

              <div className="mt-8">
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li className="flex items-center gap-4" key={item.id}>
                      <img
                        src={getProduct(item.id).img}
                        alt=""
                        className="size-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-gray-900">
                          {getProduct(item.id).title}
                        </h3>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <form>
                          <label htmlFor="Line1Qty" className="sr-only">
                            {" "}
                            Quantity{" "}
                          </label>

                          <input
                            onChange={(e) => {
                              updateQuantity(item.id, parseInt(e.target.value));
                            }}
                            type="number"
                            min="1"
                            value={parseInt(item.quantity)}
                            id="Line1Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                        </form>

                        <button
                          onClick={() => {
                            console.log("remoooovivvinng");
                            removeFromCart(item.id);
                          }}
                          className="text-gray-600 transition hover:text-red-600"
                        >
                          <span className="sr-only">Remove item</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl>
                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>${total}</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <button
                        onClick={toggleHandle}
                        className="block rounded bg-red-700 px-5 py-3 text-sm mr-1 text-gray-100 transition hover:bg-gray-600"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => togglePayment(true)}
                        disabled={total < 2000}
                        className="block disabled:bg-gray-300 disabled:text-gray-500 rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {showPayment && (
        <div>
          {/* input first name and whatsap number */}

          <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8 bg-[#ccccca] fixed top-0 left-0 w-full z-50">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Please Enter Contact details
              </h1>
            </div>

            <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label for="number" className="sr-only">
                  Whatsapp number
                </label>

                <div className="relative">
                  <input
                    type="tel"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter whatsapp number"
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    checkout();
                  }}
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Comprar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
