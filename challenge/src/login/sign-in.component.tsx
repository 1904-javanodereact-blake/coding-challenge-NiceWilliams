import React from 'react';

interface ISignInState {
  monstername: string;
  password: string;
  errorMessage: string;
}

export class SignInComponent extends React.Component<any, ISignInState> {
  constructor(props) {
    super(props);
    this.state = {
      monstername: '',
      password: '',
      errorMessage: ''
    };
  }

  submit = async (event) => {
    event.preventDefault();
    console.log('attempting to login');
    const credentials = {
      monstername: this.state.monstername,
      password: this.state.password
    };

    try {
      const resp = await fetch('http://localhost:8081/monsters/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(credentials),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(resp);

      if (resp.status === 401) {
        this.setState({
          errorMessage: 'Invalid Credentials'
        });
      } else if (resp.status === 200) {
          //redirect to spaceships page
         const monster = await resp.json();
        this.props.history.push('/spaceships');
      } else {
        this.setState({
          errorMessage: 'Cannot Login At This Time'
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  updateMonstername = (event) => {
    this.setState({
      monstername: event.target.value
    });
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    const { monstername, password, errorMessage } = this.state;
    return (
      <form className="form-signin" onSubmit={this.submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputMonstername" className="sr-only">Username</label>
        <input type="text" id="inputMonstername" name="monstername"
          className="form-control" placeholder="Username"
          required value={monstername} onChange={this.updateMonstername} />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" name="password"
          className="form-control" placeholder="Password"
          required value={password} onChange={this.updatePassword} />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p id="login-error">{errorMessage}</p>
      </form>
    );
  }
}
