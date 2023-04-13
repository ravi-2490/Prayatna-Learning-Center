import { useState } from "react";
import styles from "../../styles/Login.module.css";
const Index = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login);
    setLogin({
      email: "",
      password: "",
    });
  };
  return (
    <div className={styles.body}>
      <div className={styles.center}>
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className={styles.txt}>
            <input
              type="text"
              name="email"
              required
              value={login.email}
              onChange={handleChange}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className={styles.txt}>
            <input
              type="password"
              name="password"
              required
              value={login.password}
              onChange={handleChange}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className={styles.pass}>Forgot Password?</div>
          <input type="submit" value="Login" className={styles.sub} />
          <div className={styles.signup}>
            Not a member?
            <a href="/signup">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
