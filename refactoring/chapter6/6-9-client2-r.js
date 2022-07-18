import { acquireReading } from "./6-9-r.js";

const aReading = acquireReading();
const taxableCharge = aReading.taxableCharge;

console.log(taxableCharge);
