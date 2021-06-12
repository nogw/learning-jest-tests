import validator from "validator";
import isEmpty from '../utils/isEmpty';

const validateUser = (data: any) => {
  const errors: any = {}

  if (isEmpty(data.name)) {
    errors.name = "name is required"
  }

  if (isEmpty(data.email)) {
    errors.email = "email is required"
  }

  if (!validator.isEmail(data.email)) {
    errors.name = "email is invalid"
  }

  return {
    errors, 
    isValid: isEmpty(errors)
  }
}

export default validateUser