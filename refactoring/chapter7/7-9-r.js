function foundPerson(people) {
  const candidates = ["Don", "John", "Kent"];
  return people.find((p) => candidates.includes(p)) || "";
}

console.log(foundPerson(["John"]));
console.log(foundPerson(["Don", "John"]));
console.log(foundPerson(["Kent", "Don", "John"]));
console.log(foundPerson(["Lisa", "Don", "Tom"]));

/**
 * 함수라는 것 또한 캡슐화이다
 * 이름만 두고 내부 세부 사항은 숨겨두고, 이름만으로 유추하고 넘어갈 수 있도록 만들어주는 것이 좋다
 */
