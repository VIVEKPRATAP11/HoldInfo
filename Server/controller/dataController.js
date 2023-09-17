import { DataModel } from "../Models/DataSchema.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import axios from "axios";

export const dataController = catchAsyncError(async (req, res, next) => {
  const isDocExist = await DataModel.find();

  if (isDocExist.length <= 0) {
    const { data } = await axios.get("https://api.wazirx.com/api/v2/tickers");
    console.log(data);

    const arrayOfObjects = Object.keys(data)
      .map((key) => {
        return {
          id: key,
          ...data[key],
        };
      })
      .slice(0, 10);

    for (let i = 0; i < 10; i++) {
      await DataModel.create({
        ids: arrayOfObjects[i]["id"],
        name: arrayOfObjects[i]["name"],
        sell: arrayOfObjects[i]["sell"],
        buy: arrayOfObjects[i]["buy"],
        last: arrayOfObjects[i]["last"],
        volume: arrayOfObjects[i]["volume"],
        base_unit: arrayOfObjects[i]["base_unit"],
      });
    }
  }

  return res.status(200).json({
    success: true,
    message: "Data received in database",
    data: isDocExist,
  });
});
