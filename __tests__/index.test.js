import reverse from "../src/index.js";

test("reverse", () => {
  expect(reverse("hallo")).toEqual("olleh");
  expect(reverse("")).toEqual("");
});
