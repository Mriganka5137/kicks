"use client";
import { getAllCategories } from "@/lib/actions/category.action";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IoIosArrowDown } from "react-icons/io";

const categories = [
  {
    name: "Sneakers",
    poductsNumber: "20",
  },
  // Create 10 shoes categories
  {
    name: "Shoes",
    poductsNumber: "20",
  },
  {
    name: "Boots",
    poductsNumber: "20",
  },
  {
    name: "Sandals",
    poductsNumber: "20",
  },
  {
    name: "Slippers",
    poductsNumber: "20",
  },
  {
    name: "Flip Flops",
    poductsNumber: "20",
  },
  {
    name: "Loafers",
    poductsNumber: "20",
  },
];

const Categories = async () => {
  const path = usePathname();
  const router = useRouter();
  if (path !== "/dashboard/products") return null;
  const searchParams = useSearchParams();

  const categoryFilter = searchParams.get("category");
  // const categories = await getAllCategories();
  // console.log(categories);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className=" w-full space-y-4 ">
      <div className="flex w-full justify-between  items-center">
        <h1 className=" text-[20px] capitalize font-semibold font-rubik">
          Categories
        </h1>
        <IoIosArrowDown className="size-5" />
      </div>

      {categories &&
        categories.map((category) => (
          <div
            key={category.name}
            className="flex justify-between items-center w-full   "
          >
            <p
              className="capitalize cursor-pointer hover:text-blue-500"
              onClick={() => {
                // push to curent page with category filter
                router.push(
                  path + "?" + createQueryString("category", category.name)
                );
              }}
            >
              {category.name}
            </p>
            <p
              className={cn(
                "px-3 py-2 rounded-lg text-[14px] ",
                categoryFilter === category.name ? "bg-blue-500 text-white" : ""
              )}
            >
              {category.poductsNumber}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Categories;
