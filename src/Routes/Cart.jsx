import { useCart } from "react-use-cart";
import EmptyCart from "../Components/Cart/EmptyCart";

function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    totalUniqueItems
  } = useCart();

  if (isEmpty) return <EmptyCart />;

  return (
    <>
      <div className="flex justify-center "><span className="text-white font-mono font-extrabold text-xl">Your Cart </span></div>
      <div className="p-10">
        {items.map((item) => (
          <span key={item.id}>
            <div className="overflow-x-auto w-full">
              <table className="table w-full ">
                <tbody>
                  <tr>

                    {/* removeItem */}
                    <th className="sm:py-16 lg:py-0 w-1/12 bg-white text-black">
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
                          <div className="text-black">{item.category}</div>
                        </div>

                      </div>
                    </td>

                    {/* item name */}
                    <td className=" bg-white w-1/4 text-black">
                      {item.quantity} x {item.name}
                    </td>

                    {/* items prices */}
                    <td className="w-1/6 bg-white text-black">
                      {item.price}
                    </td>

                    {/* add and minus items */}
                    <td className="bg-white place-items-center sm:text-2xl lg:text-lg text-black">
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

        <div className="sm:text-3xl lg:text-xl text-white bg-black  rounded-lg p-5 sm:flex justify-between">
          <span>Total ${cartTotal},</span><br />
          <span>Total Products : {totalUniqueItems} </span>
          <button className="btn border-2 border-secondary gap-2 sm:text-3xl lg:text-lg w-auto bg-primary text-white font-bold">Checkout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
          </button>

        </div>
      </div>
    </>
  );
}

export default Cart;