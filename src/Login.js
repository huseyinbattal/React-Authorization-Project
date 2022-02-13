import React from 'react';


class Login extends React.Component {
  //rconst
  constructor() {
    super()

    this.state = {
      autorized: false,
      counter: 2
    }
  }

  enableInput = () => {
    //alert("lutfen 5 saniye bekleyiniz")
    const input = document.querySelector(".form-control");
    input.placeholder = "5 saniye bekleyiniz";
    setTimeout(() => {
      document.querySelector(".btn").disabled = false;
      document.querySelector(".form-control").disabled = false;
      input.value = "";
      input.placeholder = "Password";

    }, 5000);
  }



  autorized = () => {
    const button = document.querySelector(".btn")
    const input = document.querySelector(".form-control")
    if (this.props.user.password === input.value) {
      //console.log("onaylandi")
      this.setState({ autorized: true })

    } else {
      alert("yanlis girdiniz")

      this.setState({ counter: this.state.counter - 1 })
      if (this.state.counter === 0) {
        input.disabled = true
        button.disabled = true
        this.enableInput()
      }
    }


  }

  render() {
    let contact = (
      <div className='card'>
        <h2>{this.props.user.name}</h2>
        <img src={this.props.user.imgURL} alt="" />
        <p>{this.props.user.mail}</p>
        <p>{this.props.user.phone}</p>
      </div>
    )


    let login = (
      <div className="card">
        <form className="form-inline" action='#' onSubmit={this.autorized}>
          <div className="form-group">
            <input type="password" className="form-control mx-sm-3" placeholder="Password" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );

    return (

      <div id="authorization">
        <h1>Enter the Password</h1>
        {/* {login}  */}
        {this.state.autorized ? contact : login}

      </div>
    )
  }
}


export default Login;