import React from 'react';
import PropTypes from 'prop-types';
import './contactList.scss';
import 'font-awesome/css/font-awesome.min.css';

const ContactList = ({ items, onDeleteContact }) => (
  <div className="contacts-list">
    <div className="contacts-info-table">
      {/* <p>{items}</p> */}
      <div className="list">
        {items.map(({ id, name, number }) => (
          <div className="contacts" key={id}>
            <span className="listItemText">{name}:</span>
            <span className="listItemText">{number}</span>
            <button
              className="contacts-button"
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
ContactList.propTypes = {
  items: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
export default ContactList;
