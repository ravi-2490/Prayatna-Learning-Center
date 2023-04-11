import { useState } from "react";
import styles from "../../styles/Login.module.css";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
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
    if (login.email === "admin@123" && login.password === "admin@123") {
      router.push("/admin_dashboard");
    }
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
              value={login.userName}
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
            Not a member? <a href="/signup">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
