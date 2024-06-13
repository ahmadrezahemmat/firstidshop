import MyNavbar from "../../components/navbar/Navbar";
import "./Login.css";
function Login() {
  return (
    <>
      <MyNavbar />
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
