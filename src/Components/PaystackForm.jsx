import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import Lock from "../assets/lock.svg";

const PaystackForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [amount, setAmount] = useState();

  const handlePayment = (e) => {
    e.preventDefault();

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_live_c8dff72a3e98f74578c61304ee06db89296c3812",
      amount: amount * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        setAmount("");
        setEmail("");
        setFirstName("");
        setLastName("");
      },
      onCancel() {
        alert("payment cancelled");
      },
    });
  };

  return (
    <div className="pay-cont">
      <form onSubmit={handlePayment}>
        <h5>Invest in Her Future: Donate Today</h5>
        <div className="form-cont">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fname">Last Name</label>
            <input
              type="text"
              id="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="fname">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amt">Amount</label>
          <input
            type="number"
            id="amt"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type="submit">Donate</button>
        <div className="secure">
          <img src={Lock} />

          <div className="p">
            <p>This is a secure, encrypted payment.</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaystackForm;
