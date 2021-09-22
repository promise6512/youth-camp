const User = require("./User.js");
test("getName", () => {
  const user = new User("hjp");
  expect(user.getName()).toBe("hjp");
})