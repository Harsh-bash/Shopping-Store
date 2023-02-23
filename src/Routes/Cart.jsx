import { useCart } from "react-use-cart";
import EmptyCart from "../Components/Cart/EmptyCart";

function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <EmptyCart />;

  return (
    <>
      <div className="p-10 text-gray-700 sm:text-3xl lg:text-lg flex justify-center h-auto">
        <div className="p-10 place-items-center rounded-2xl font-semibold bg-secondary lg:w-2/3 sm:w-full">

          <div>
            {items.map((item) => (
              <span key={item.id}>
                <div className="overflow-x-auto w-full">
                  <table className="table w-full bg-primary">
                    <tbody>
                      <tr>

                        {/* removeItem */}
                        <th className="sm:py-16 lg:py-0 w-1/12 bg-white">
                          <span><button onClick={() => removeItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          </button></span>
                        </th>

                        {/* item profile */}
                        <td className="bg-white w-1/3 ">

                          {/* avatar */}
                          <div className="flex items-center space-x-3  bg-white">
                            <div className="avatar  bg-white">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>

                            {/* name */}
                            <div>
                              <div>{item.name}</div>
                            </div>

                          </div>
                        </td>

                        {/* item name */}
                        <td className=" bg-white w-1/4">
                          {item.quantity} x {item.name}
                        </td>

                        {/* items prices */}
                        <td className="w-1/6 bg-white">
                          {item.price}
                        </td>

                        {/* add and minus items */}
                        <td className="bg-white place-items-center sm:text-2xl lg:text-lg">
                          <div className="flex justify-between bg-white font-semibold w-full">
                            <span><button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            </svg>

                            </button></span>
                            <span>{item.quantity}</span>
                            <span><button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                            </button></span>
                          </div>
                        </td>

                      </tr>
                    </tbody>
                  </table>

                </div>
              </span>
            ))}
          </div>

          <div className="bg-white p-10 my-5 rounded-xl ">
            <div className="sm:text-4xl lg:text-2xl text-white bg-secondary  rounded-lg p-5 flex justify-between">

              <span>Total ${cartTotal}</span>
              <button className="btn border-2 border-white gap-2 sm:text-3xl lg:text-2xl w-auto bg-white text-secondary font-bold">Checkout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cart;