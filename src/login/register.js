import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      surname: "",
      mail: "",
      password: "",
      confirmpassword: "",
      msg: {},
      input: {},
    };
    this.pwdConfirm = this.pwdConfirm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    if (this.validation()) {
      var input = {};
      input["password"] = "";
      input["confirmpassword"] = "";
    }
    console.log(this.state);

    event.preventDefault();
  }

  pwdConfirm(e) {
    var inputpwd = this.state.input;
    inputpwd[e.target.name] = e.target.value;
    this.setState({
      inputpwd,
    });
  }

  validation() {
    var msg1 = {};
    if (this.state.input["password"] !== this.state.input["confirmpassword"]) {
      msg1["password"] = "Şifreler aynı değil❌";
    } else {
      msg1["confirmpassword"] = "Şifreler aynı✅";
    }
    this.setState({
      msg: msg1,
    });
  }

  render() {
    return (
      <div className="divcenter">
        <form onSubmit={this.handleSubmit}>
          <h1 className="text">Register 👤</h1>
          <div>
            <input
              className="textbox"
              placeholder="İsim"
              type="text"
              name="fname"
              maxLength={10}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className="textbox"
              placeholder="Soyisim"
              type="text"
              name="surname"
              maxLength={15}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              className="textbox"
              placeholder="Mail"
              type="email"
              name="mail"
              maxLength={25}
              value={this.state.value}
              onChange={this.handleChange}
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
              value={this.state.value}
              onChange={(e) => {
                this.handleChange(e);
                this.pwdConfirm(e);
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
              value={this.state.value}
              onChange={(e) => {
                this.handleChange(e);
                this.pwdConfirm(e);
              }}
            />
          </div>
          <strong>
            <div className="msgtext">{this.state.msg.password}</div>
            <div className="msgtexttrue">{this.state.msg.confirmpassword}</div>
          </strong>
          <div>
            <input className="button" type="submit" value="Kayıt Ol" />
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
