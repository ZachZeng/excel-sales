import React, { useState } from "react";
import { SaleDropzone, ReplaceDropzone } from "./index";
import { FileProcess } from "./FileProcess";

export const SaleProcess = () => {
  const [saleData, setSaleData] = useState();
  const [replaceData, setReplaceData] = useState();

  const handleSaleDrop = dropSaleData => {
    setSaleData(dropSaleData);
  };

  const handleReplaceDrop = data => {
    setReplaceData(data);
  };

  console.log("saleData", saleData);
  console.log("replaceData", replaceData);

  return (
    <div>
      <SaleDropzone onDropFile={handleSaleDrop} />
      <ReplaceDropzone onDropFile={handleReplaceDrop} />
      {replaceData === undefined || saleData === undefined ? (
        <div>
          <p></p>
        </div>
      ) : (
        <FileProcess saleData={saleData} replaceData={replaceData} />
      )}
    </div>
  );
};
