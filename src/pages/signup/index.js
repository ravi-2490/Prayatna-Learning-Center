import { useState } from "react";
import styles from "../../styles/Signup.module.css";
import Link from "next/link";
const Index = () => {
  const [login, setLogin] = useState({
    name: "",
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
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className={styles.body}>
      <div className={styles.center}>
        <h1>Signup</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className={styles.txt}>
            <input
              type="text"
              name="name"
              required
              value={login.name}
              onChange={handleChange}
            />
            <span></span>
            <label>Name</label>
          </div>
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
          <input type="submit" value="signup" className={styles.sub} />
          <div className={styles.signup}>
            Already a member?
            <Link href="/login">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
