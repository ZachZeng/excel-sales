import React, { useState, useEffect } from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { ExportButton } from "../elements/StyledElements";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FileProcess = ({ saleData, replaceData }) => {
  const [billDate, setBillDate] = useState(new Date());
  const [dispatchDate, setDispatchDate] = useState(new Date());
  const [num, setNum] = useState("");
  const [dict, setDict] = useState();
  useEffect(() => {
    let dict = {};
    replaceData.map(item => {
      dict[item["产品名称"]] = { brand: item["替代品种"], price: item["单价"] };
    });
    setDict(dict);
  }, [replaceData]);

  const exportToExcel = () => {
    if (saleData === "") {
      alert("无数据");
      return;
    }

    if (num == "") {
      alert("请输入镜片类合计数量");
      return;
    }

    let newData = fileProcess(saleData);

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const wb = {
      Sheets: { sale: newData },
      SheetNames: ["sale"]
    };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    const filename = "出货单_新";
    FileSaver.saveAs(data, filename + fileExtension);
  };

  const fileProcess = _data => {
    let data = { ..._data };
    let brandColumn = "";
    let priceColumn = "";
    let nColumn = "";
    let numRow = 0;
    let totalPriceColumn = "U";
    let totalPrice = 0;
    for (const key in data) {
      switch (data[key].v) {
        case "产品名称":
          brandColumn = key.charAt(0);
          break;
        case "数量":
          nColumn = key.charAt(0);
          break;
        case "单价":
          priceColumn = key.charAt(0);
          break;
        case "镜片类合计数量：":
          numRow = key.substring(1);
          break;
        default:
          break;
      }
    }
    let i = 9;
    while (1) {
      if (data[`A${i}`].v == "镜片类合计数量：") {
        break;
      }

      console.log(data[`${brandColumn}${i}`].v);
      console.log(dict[data[`${brandColumn}${i}`].v]);
      if (dict[data[`${brandColumn}${i}`].v]) {
        data[`${priceColumn}${i}`].v = dict[data[`${brandColumn}${i}`].v].price;
        data[`${brandColumn}${i}`].v = dict[data[`${brandColumn}${i}`].v].brand;
      }
      let n = parseInt(data[`${nColumn}${i}`].v);
      totalPrice += n * parseFloat(data[`${priceColumn}${i}`].v);

      i++;
    }

    data["K5"].v = billDate.toLocaleDateString("zh-cn");
    data["K6"].v = dispatchDate.toLocaleDateString("zh-cn");

    var datestring =
      new Date().getFullYear() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getDate() +
      " " +
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();

    data[`F${numRow}`].v = num.toString();
    data[`${totalPriceColumn}${numRow}`].v = totalPrice.toString();

    return data;
  };

  return (
    <div style={{ marginBottom: 100 }}>
      <div>
        <h4>开单日期</h4>
        <DatePicker selected={billDate} onChange={date => setBillDate(date)} />
      </div>
      <div>
        <h4>出货日期</h4>
        <DatePicker
          selected={dispatchDate}
          onChange={date => setDispatchDate(date)}
        />
      </div>
      <div>
        <h4>合计数量</h4>
        <input
          value={num}
          onChange={event => setNum(event.target.value.replace(/\D/, ""))}
        />
      </div>

      <ExportButton onClick={exportToExcel}>导出</ExportButton>
    </div>
  );
};
