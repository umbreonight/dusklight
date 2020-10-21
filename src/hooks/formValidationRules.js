export default function validate(values) {
  let errors = {};

  // if (!values.username || values.username === "") {
  //   errors.username = "Email address is required";
  // } else if (!/\S+@\S+\.\S+/.test(values.username)) {
  //   errors.username = "Email address is invalid";
  // }

  // if (!values.email || values.email === "") {
  //   errors.email = "Email address is required";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Email address is invalid";
  // }

  // if (!values.password) {
  //   errors.password = "Password is required";
  // } else if (values.password.length < 4) {
  //   errors.password = "Password must be 4 or more characters";
  // }

  return errors;
}

export function userValidation(values) {
  let errors = {};

  if (!values.username || values.username === "") {
    errors.username = "Username is required";
  }

  if (!values.email || values.email === "") {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password must be 4 or more characters";
  }

  return errors;
};

function noValidation(values) {
  let errors = {}

  return errors;
}

export {
  noValidation
}
