let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export function getDefaultOwner() {
  // return Object.assign({}, defaultOwner);
  return { ...defaultOwner };
}

/**
 * 불변성
 * 변하지 않는 성질
 */
