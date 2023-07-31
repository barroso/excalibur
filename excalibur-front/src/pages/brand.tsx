import React, { useEffect } from "react";
import ApiCaller from "../clients/brand";
import Table from "../components/Table/Table";

export default function Brand() {
  useEffect(() => {
    console.log("Call service brand...");
    const apiCaller = new ApiCaller();
    apiCaller.getBrands();
  }, []);

  return (
    <div className="flex gap-10 py-10 flex-row flex-wrap justify-center">
      <Table/>
    </div>
  );
}