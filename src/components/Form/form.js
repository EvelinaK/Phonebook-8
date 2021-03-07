import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Load from '../Loader/Loader';
import { operations, contactsSelectors } from '../../redux/contacts';
import validate from './ValidateInfo';
import useForm from './UseForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.scss';

export default function Form({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  // const isLoading = useSelector(contactsSelectors.getLoading);

  // const dispatch = useDispatch();
  // const isLoading = useSelector(contactsSelectors.getLoading);
  //       dispatch(operations.addContact(name, number));
  return (
    <>
      <div>
        <div className="wrapper">
          <header className="page-header">
            <form className="user-info-form" onSubmit={handleSubmit}>
              <label className="label">
                Name
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={values.username}
                  onChange={handleChange}
                  // onChange={handleChange}
                  // id={nameInputId}
                ></input>
              </label>
              <label className="label">
                Number
                <input
                  className="form-input"
                  type="text"
                  name="number"
                  value={values.usernumber}
                  onChange={handleChange}
                  // id={numberInputId}
                />
              </label>

              <button className="submit-form-btn" type="submit">
                Add Contact
              </button>
            </form>
          </header>
        </div>
        {/* {isLoading && <Load />} */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

// export default function Form() {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const dispatch = useDispatch();
//   const isLoading = useSelector(contactsSelectors.getLoading);

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         return setName(value);
//       case 'number':
//         return setNumber(value);
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (name || number !== '') {
//       dispatch(operations.addContact(name, number));
//       setName('');
//       setNumber('');
//       return;
//     }
//     toast('!Please enter all fields');
//   };

//   return (
//     <>
//       <div>
//         <div className="wrapper">
//           <header className="page-header">
//             <form className="user-info-form" onSubmit={handleSubmit}>
//               <label className="label">
//                 Name
//                 <input
//                   className="form-input"
//                   type="text"
//                   name="name"
//                   value={name}
//                   onChange={handleChange}
//                   // id={nameInputId}
//                 ></input>
//               </label>
//               <label className="label">
//                 Number
//                 <input
//                   className="form-input"
//                   type="text"
//                   name="number"
//                   value={number}
//                   onChange={handleChange}
//                   // id={numberInputId}
//                 />
//               </label>

//               <button className="submit-form-btn" type="submit">
//                 Add Contact
//               </button>
//             </form>
//           </header>
//         </div>
//         {isLoading && <Load />}
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop
//           closeOnClick
//           rtl
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//       </div>
//     </>
//   );
// }
