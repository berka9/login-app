import { useState } from "react";
import React from "react";
import "../index.css";
import "../App";

function Login() {
  const [form, setForm] = useState({
    mail: "",
    password: "",
    msgsrg: {},
    input: {},
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    if (validation()) {
      var input = {};
      input["password"] = "";
    }
    console.log(form);

    event.preventDefault();
  };

  const validation = (event) => {
    var msg2 = {};
    if (form.input["password"] === "") {
      msg2["null"] = "Şifre boş bırakılamaz";
    } else {
      msg2["true"] = "Giriş yapıldı";
    }

    setForm({ ...form, msgsrg: msg2 });
  };

  return (
    <div className="divcenter">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="text">Login </h1>

          <input
            className="textbox"
            placeholder="Mail"
            type="email"
            name="mail"
            value={form.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="textbox"
            placeholder="Şifre"
            type="password"
            name="password"
            minLength={6}
            maxLength={8}
            value={form.value}
            onChange={handleChange}
          />
        </div>
        <strong>
          <div>{form.msgsrg.null}</div>
          <div>{form.msgsrg.true}</div>
        </strong>
        <div>
          <input className="button" type="submit" value="Giriş Yap" />
        </div>
      </form>
    </div>
  );
}

export default Login;
