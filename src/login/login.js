import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // console.log("Mail: " + this.state.mail);
    // console.log("password: " + this.state.password);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="divcenter">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1 className="text">Login ➡️</h1>

            <input
              className="textbox"
              placeholder="Mail"
              type="email"
              name="mail"
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
              minLength={6}
              maxLength={8}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input className="button" type="submit" value="Giriş Yap" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
