import { log } from "async";
import Joi from "joi";

const schema = Joi.object().keys({
  a: Joi.string(),
});

try {
  value = await schema.validateAsync({ name: "JohnDoe", age: -30 }, { abortEarly: false });
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}

console.log("End of John");
