import React, { useState } from "react";
import styles from "../../../../styles/OnlineClass.module.css";

import { db } from "../../../../../firebase/initFirebase";
import { collection, addDoc } from "firebase/firestore";

import Loading from "@/components/loading/Loading";

import { toast } from "react-toastify";

const Add_online_Class_User = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roles: "",
  });

  const [loading, setLoading] = useState(false);

  const putData = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "online class user"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    if (formData.roles === "") {
      event.preventDefault();
      alert("Please select the roles");
    } else {
      event.preventDefault();
      setLoading(true);
      await putData(formData);
      setLoading(false);
      toast.success(
        `${formData.name} added successfully as a ${formData.roles}`,
        {
          position: "top-right", // Set the position of the toast
          autoClose: 3000, // Set the auto-close duration in milliseconds
          hideProgressBar: false, // Show or hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the auto-close timer on hover
          draggable: true, // Allow the toast to be dragged
          progress: undefined, // Use the default progress component
        }
      );
      setFormData({
        name: "",
        email: "",
        password: "",
        roles: "",
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3>Add Online Class user</h3>
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              placeholder="Enter name"
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              name="password"
              value={formData.password}
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
            <label>Roles</label>
            <select name="roles" value={formData.roles} onChange={handleChange}>
              <option value="Roles">------Select Roles-----</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default Add_online_Class_User;
