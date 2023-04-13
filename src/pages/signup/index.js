import { useState } from "react";
import styles from "../../styles/Signup.module.css";
import Link from "next/link";
const Index = () => {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignup({ ...signup, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signup);
    setSignup({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h2>Signup</h2>
        <form method="post" onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              onChange={handleChange}
              value={signup.name}
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              value={signup.email}
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              required
              onChange={handleChange}
              value={signup.password}
            />
          </div>
          <div className={styles.policy}>
            <input type="checkbox" required />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className={`${styles.inputBox} ${styles.button}`}>
            <input type="Submit" value="Register Now" />
          </div>
          <div className={styles.text}>
            <h3>
              Already have an account? <Link href="/login">Login</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
