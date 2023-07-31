import React from "react";
import { useState } from "react";

export default function Table() {
  const brands = [
    {
      name: "Apple",
    },
    {
      name: "JBL",
    },
    {
      name: "Samsung",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-sky-400 dark:text-sky-300 ">
        <thead className="text-xs text-sky-700 bg-sky-50 dark:bg-sky-700 dark:text-sky-300">
          <tr>
            <th scope="col" className="px-6 py-3 w-96">
              Brands
            </th>
            <th scope="col" className="px-6 py-3 w-32">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {brands.map((item, index) => (
            <tr className="bg-white border-b dark:bg-sky-800 dark:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-sky-900 whitespace-nowrap dark:text-white w-40"
              >
                {item.name}
              </th>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
