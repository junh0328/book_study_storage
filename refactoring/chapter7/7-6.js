class TrackingInformation {
  constructor(trackingNumber, shippingCompany) {
    this._trackingNumber = trackingNumber;
    this._shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  _trackingInformation;
  constructor(trackingInformation) {
    this._trackingInformation = trackingInformation;
  }

  get trackingInfo() {
    return this._trackingInformation.display;
  }

  get trackingInformation() {
    return this._trackingInformation;
  }

  set trackingInformation(trackingInformation) {
    this._trackingInformation = trackingInformation;
  }
}

const shipment = new Shipment(new TrackingInformation(999, "Maersk"));
console.log(shipment.trackingInfo);

shipment.trackingInformation.shippingCompany = "COSCO";
console.log(shipment.trackingInfo);
