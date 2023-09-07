import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar (){
  return (
  <div>

     <NavLink 
     to ="/"
     exact
     style={linkStyles}
     activeStyle={{
      background: "red",
    }}>
      Home
    </NavLink>

    <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>

      <NavLink
      to= "/signup"
      exact
      style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Signup
      </NavLink>

      <NavLink
      to="/message"
      exact
      style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Message
      </NavLink>
  </div>
  );

}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function Signup (){
  return (
    <div>
      <h1>Open an Account with us!</h1>
    </div>
  )
}

function Message (){
  return (
    <div>
      <h1>Leave us a message</h1>
      <textarea type="text" placeholder="Type here"/>
      <button>Submit</button>
    </div>
  )
}

ReactDOM.render(
<BrowserRouter>
<Navbar />
  <Switch>

    <Route exact path="/about">
      <About/>
    </Route>

    <Route exact path="/login">
      <Login/>
    </Route>

    <Route exact path="/">
      <Home/>
    </Route>

    <Route exact path="/signup">
      <Signup/>
    </Route>

    <Route exact path="/message">
   <Message/>
    </Route>

  </Switch>
</BrowserRouter>, document.getElementById("root"));
