import { acquireReading } from "./6-9-r.js";

const aReading = acquireReading();
const basicChargeAmount = aReading.baseCharge;

console.log(basicChargeAmount);
