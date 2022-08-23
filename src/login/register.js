import { useState } from "react";
import React from "react";
import "../index.css";
import "../App";

function Register() {
  const [form, setForm] = useState({
    fname: "",
    surname: "",
    mail: "",
    password: "",
    confirmpassword: "",
    msg: {},
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
      input["confirmpassword"] = "";
      // input["surname"] = "";
    }
    console.log(form);

    event.preventDefault();
  };

  const pwdConfirm = (event) => {
    var inputpwd = form.input;
    inputpwd[event.target.name] = event.target.value;
  };

  // const nullTest = (event) => {
  //   var nullTesting = form.input;
  //   nullTesting[event.target.name] = event.target.value;
  // };

  const validation = (event) => {
    var msg1 = {};
    var msg2 = {};
    if (form.input["password"] !== form.input["confirmpassword"]) {
      msg1["password"] = "Şifreler aynı değil ❌";
    } else {
      msg1["confirmpassword"] = "Şifreler aynı ✅";
    }
    setForm({ ...form, msg: msg1 });

    // if ((form.input["surname"] = form.input[false])) {
    //   msg2["null"] = "Soyisim boş bırakılamaz";
    // } else {
    //   msg2["true"] = "Giriş yapıldı";
    // }
    // setForm({ ...form, msgsrg: msg2 });
  };

  return (
    <div className="divcenter">
      <form onSubmit={handleSubmit}>
        <h1 className="text">Register </h1>
        <div>
          <input
            className="textbox"
            placeholder="İsim"
            type="text"
            name="fname"
            maxLength={10}
            value={form.fname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="textbox"
            placeholder="Soyisim"
            type="text"
            name="surname"
            maxLength={15}
            value={form.surname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="textbox"
            placeholder="Mail"
            type="email"
            name="mail"
            maxLength={25}
            value={form.mail}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="textbox"
            placeholder="Şifre"
            type="password"
            name="password"
            maxLength={8}
            minLength={6}
            value={form.password}
            onChange={(e) => {
              handleChange(e);
              pwdConfirm(e);
            }}
          />
        </div>
        <div>
          <input
            className="textbox"
            placeholder="Şifreyi tekrar girin"
            type="password"
            name="confirmpassword"
            maxLength={8}
            minLength={6}
            value={form.confirmpassword}
            onChange={(e) => {
              handleChange(e);
              pwdConfirm(e);
            }}
          />
        </div>
        <strong>
          <div className="msgtext">{form.msg.password}</div>
          <div className="msgtexttrue">{form.msg.confirmpassword}</div>
        </strong>
        {/* <div>
          <strong>
            <div>{form.msgsrg.null}</div>
            <div>{form.msgsrg.true}</div>
          </strong>
        </div> */}
        <div>
          <input className="button" type="submit" value="Kayıt Ol" />
        </div>
      </form>
    </div>
  );
}

export default Register;
