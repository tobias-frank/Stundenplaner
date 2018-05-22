import React, { Component } from 'react';
import Button from './Button';
import * as Colors from '../constants/Colors';
import iconUser from '../assets/user.svg';
import iconPassword from '../assets/password.svg';
import iconVisible from '../assets/visible.svg';
import iconInvisible from '../assets/invisible.svg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.light,
  },
  inputField: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  icon: {
    width: 25,
    height: 25,
    margin: 5,
  },
  label: {
    color: Colors.blue,
    marginBottom: 5,
  },
  input: {
    width: 250,
    height: 30,
    border: 0,
    borderBottom: `1px solid ${Colors.darkBlue}`,
    fontSize: 18,
    color: Colors.darkBlue,
    backgroundColor: Colors.light,
    outline: 0,
  },
  error: {
    height: 20,
    marginLeft: 35,
    color: 'red',
  },
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      nameError: '',
      passwordError: '',
      hideInput: true,
    };
  }

  onClick = () => {
    this.setState({
      nameError: '',
      passwordError: '',
    });

    if (!this.state.name) {
      return this.setState({
        nameError: 'Bitte gib einen Namen ein.',
      });
    }

    if (!this.state.password) {
      return this.setState({
        passwordError: 'Bitte gib ein Passwort ein.',
      });
    }

    this.props.onSubmit();
  };

  onVisiblityClick = () => {
    this.setState({
      hideInput: !this.state.hideInput,
    });
  };

  render() {
    return (
      <form style={styles.container}>
        <div style={styles.inputField}>
          <img style={styles.icon} src={iconUser} alt="userIcon" />
          <div style={styles.column}>
            <p style={styles.label}>Login</p>
            <input
              style={styles.input}
              type="text"
              value={this.state.name}
              onChange={event =>
                this.setState({
                  name: event.target.value,
                })
              }
            />
          </div>
        </div>
        <p style={styles.error}>{this.state.nameError}</p>
        <div style={styles.inputField}>
          <img style={styles.icon} src={iconPassword} alt="passwordIcon" />
          <div style={styles.column}>
            <p style={styles.label}>Passwort</p>
            <input
              style={styles.input}
              type={this.state.hideInput ? 'password' : 'text'}
              value={this.state.password}
              onChange={event =>
                this.setState({
                  password: event.target.value,
                })
              }
            />
          </div>
          <img
            style={{ ...styles.icon, ...{ marginLeft: -25 } }}
            src={this.state.hideInput ? iconVisible : iconInvisible}
            alt="hidePassword"
            onClick={this.onVisiblityClick}
          />
        </div>
        <p style={styles.error}>{this.state.passwordError}</p>
        <Button margin={50} text="Einloggen" onClick={this.onClick} />
      </form>
    );
  }
}

export default Login;