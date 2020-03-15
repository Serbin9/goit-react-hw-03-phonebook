import React from "react";
import s from '../app.module.css'

const ContactListItem = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li>
      <span className={s.span}>{name}, </span>
      <span className={s.span}>{number}</span>
      <button className={s.button} onClick={deleteContact} type="button" id={id}>
        Delete contact
      </button>
    </li>
  );
};

export default ContactListItem;