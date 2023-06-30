import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ nombres: "", apellidos: "", email: "", telefono: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    const formData = new URLSearchParams();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    
    fetch('https://hooks.zapier.com/hooks/catch/15793138/3ds9uwv/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombres" value={form.nombres} onChange={handleChange} />
      <input type="text" name="apellidos" value={form.apellidos} onChange={handleChange} />
      <input type="email" name="email" value={form.email} onChange={handleChange} />
      <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;