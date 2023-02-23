import { useCart } from "react-use-cart";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loading from "../../Components/Loading/ProductLoading";

function Products() {
  const { addItem } = useCart();
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const result = await axios(
        `https://fakestoreapi.com/products`
      );
      setdata(result.data);
      setIsLoading(false)
    };
    fetchData();

  }, []);

  return (
    <>

      {isLoading ? <Loading /> :
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">

              {data.map((p) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={p.id}>
                  <div className="bg-slate-900 rounded-xl p-2">
                    <span className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="object-cover object-center w-full h-full block rounded-xl" src={p.image} />
                    </span>
                    <div className="mt-4 lg:h-32 sm:h-44 p-2">
                      <h3 className="text-gray-500 lg:text-xs sm:text-xl tracking-widest title-font mb-1 flex justify-between"><span>{p.category}</span><span className="text-white lg:text-lg sm:text-2xl">${p.price}</span></h3>
                      <h2 className="title-font lg:text-sm sm:text-2xl text-white font-medium overflow-x-auto">{p.title}</h2>
                    </div>
                    <button className="bg-pink-600 rounded-xl hover:bg-pink-400 w-full text-black font-bold sm:py-5 lg:py-2 sm:text-3xl lg:text-lg" onClick={() => { addItem(p) }}>Buy</button>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      }
    </>
  );
}


export default Products;