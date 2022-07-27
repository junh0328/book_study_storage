export class Shipment {
  constructor(trackingNumber, shippingCompany) {
    this.trackingNumber = trackingNumber;
    this.shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.shippingCompany;
  }

  set shippingCompany(arg) {
    this.shippingCompany = arg;
  }

  get trackingNumber() {
    return this.trackingNumber;
  }

  set trackingNumber(arg) {
    this.trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

export class Shipment {
  constructor(trackingInformation) {
    this.trackingInformation = trackingInformation;
  }

  get trackingInfo() {
    return this.trackingInformation.display;
  }

  get trackingInformation() {
    return this.trackingInformation;
  }

  set trackingInformation(trackingInformation) {
    this.trackingInformation = trackingInformation;
  }
}

const shipment = new Shipment(999, 'Maersk');
console.log(shipment.trackingInfo);

shipment.trackingInformation.shippingCompany = 'COSCO';
console.log(shipment.trackingInfo);
