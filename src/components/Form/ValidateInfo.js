export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Username required';
  }

  //   if (!values.email) {
  //     errors.email = 'Email required';
  //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = 'Email address is invalid';
  //   }
  if (!values.number) {
    errors.number = 'Password is required';
  } else if (values.number.length < 6) {
    errors.number = 'Password needs to be 6 characters or more';
  }

  //   if (!values.password2) {
  //     errors.password2 = 'Password is required';
  //   } else if (values.password2 !== values.password) {
  //     errors.password2 = 'Passwords do not match';
  //   }
  return errors;
}
