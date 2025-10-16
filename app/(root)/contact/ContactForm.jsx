"use client";

import { useState } from "react";

export default function ContactForm({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { firstName, lastName, email, message };
    onSubmit?.(data);
    console.log("Child logged:", data);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="name-container">
        <div className="form-input">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="e.g. Wein"
            name="firstName"
            id="firstName"
            required
          />
        </div>

        <div className="form-input">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="e.g. Arbalest"
            name="lastName"
            id="lastName"
          />
        </div>
      </div>

      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. rabi@gmail.com"
          name="email"
          id="email"
          required
        />
      </div>

      <div className="form-input">
        <label htmlFor="message">Message</label>
        <textarea
          className="h-[5rem]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message ..."
          name="email"
          id="email"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
