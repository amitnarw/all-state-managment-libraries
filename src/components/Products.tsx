import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

interface ProductList {
  id: number;
  name: string;
  description: string;
  brand: string;
  original_price: number;
  discounted_price: number;
  image: string;
  avg_rating: number;
  quantity: number;
  created_at: Date;
}

const Products = () => {
  const [products, setProducts] = useState<ProductList[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setIsLoading(true);
    const { data, count } = await supabase
      .from("products")
      .select("*", { count: "exact" })
      .limit(5);
    setProducts(data || []);
    setCount(count || 0);
    setIsLoading(false);
  };
// console.log(Array.from({ length: Math.floor(count / 5) }))
  return (
    <div className="w-full h-screen">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col items-center justify-center gap-5 my-10">
          <h1 className="text-center font-bold text-4xl underline">PRODUCTS</h1>
          {products?.map((item) => (
            <li className="flex flex-row gap-6 bg-gray-100 rounded-2xl p-5 cursor-pointer hover:bg-gray-200 duration-300 w-[800px]">
              <img
                src={item?.image}
                alt={item?.name}
                className="w-40 h-40 object-cover rounded-xl"
              ></img>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-xl text-black">{item?.name}</p>
                  <p className="text-blue-500 font-semibold">{item?.brand}</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-gray-500 line-through">
                    ₹{item?.original_price}
                  </span>
                  <span className="font-bold text-xl">
                    ₹{item?.discounted_price}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="py-5 flex flex-row gap-2 items-center justify-center">
        {Array.from({ length: Math.floor(count / 5) }).map((item, index) => (
          <button className="bg-black dark:bg-white text-white dark:text-black rounded-xl px-5 py-1">{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Products;
