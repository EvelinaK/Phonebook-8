import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { operations, contactsSelectors } from '../../redux/contacts';
const useForm = (callback, validate) => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const [values, setValues] = useState({
    name: '',
    number: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    console.log(values);

    e.preventDefault();

    dispatch(operations.addContact(values.name, values.number));
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
