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

const SupabaseProducts = () => {
  const [products, setProducts] = useState<ProductList[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    getAllProducts();
  }, [page]);

  const getAllProducts = async () => {
    setIsLoading(true);
    const { data, count } = await supabase
      .from("products")
      .select("*", { count: "exact" })
      .range((page - 1) * pageSize, page * pageSize - 1);
    setProducts(data || []);
    setCount(count || 0);
    setIsLoading(false);
  };

  return (
    <div className="w-full h-screen">
      {isLoading ? (
        <div className="flex items-center justify-center h-full w-full">
          <p>Loading...</p>
        </div>
      ) : (
        <ul className="flex flex-col items-center justify-center gap-5 my-10">
          <h1 className="text-center font-bold text-4xl underline">PRODUCTS</h1>
          {products?.map((item) => (
            <li
              key={item?.id}
              className="flex flex-row gap-6 bg-gray-100 rounded-2xl p-5 cursor-pointer hover:bg-gray-200 duration-300 w-[800px]"
            >
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
                  {item?.discounted_price ? (
                    <>
                      <span className="text-gray-500 line-through">
                        ₹{item?.original_price}
                      </span>
                      <span className="font-bold text-xl">
                        ₹{item?.discounted_price}
                      </span>
                    </>
                  ) : (
                    <span className="font-bold text-xl">
                      ₹{item?.original_price}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && (
        <div className="py-5 flex flex-row gap-2 items-center justify-between px-20">
          <p>
            <span>Total results: </span>
            <span>
              {(page - 1) * pageSize + products?.length}/{count}
            </span>
          </p>
          <div className="flex flex-row gap-2">
            {Array.from({ length: Math.ceil(count / pageSize) }).map(
              (item, index) => (
                <button
                  key={index}
                  className={`${
                    page === index + 1
                      ? "bg-black dark:bg-white text-white dark:text-black py-1.5 px-6"
                      : "border-2 black py-1 px-4"
                  } rounded-xl cursor-pointer`}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
          <div>
            <select
              onChange={(e) => setPageSize(Number(e.target.value))}
              value={pageSize}
              className="rounded-lg bg-gray-100/50 border border-gray-400 py-1 px-1"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupabaseProducts;
