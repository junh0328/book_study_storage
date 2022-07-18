let defaultOwner = { firstName: "마틴", lastName: "파울러" };

function getDefaultOwner() {
  // return Object.assign({}, defaultOwner);
  return { ...defaultOwner };
}

const owner = getDefaultOwner();
owner.firstName = "준희";
console.log(owner);
console.log(getDefaultOwner());
