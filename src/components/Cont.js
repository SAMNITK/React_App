import React, { useState, useEffect } from "react";
import "./Cont.css";
import { db } from "./firebase/config";
import { Link } from 'react-router-dom';

const Cont = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className = "cont_container">
    <Link to='/'>
              <img
                className = "logo"
                src = {require('../Images/Logo.png')}
                alt = ""
                />
      </Link>
      <h1>If you have any query you can fill your details and submit <br></br>or <br></br>You can contact on given numbers</h1>
    <div className='cont_detail'>
      <img src = ''> 
      </img>
    </div>
    <div className = "form_container">
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " #242424" }}
      >
        Submit
      </button>
    </form>
    </div>
    </div>
  );
};

export default Cont;
