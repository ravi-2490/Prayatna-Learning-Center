import styles from "../../styles/About.module.css";
import Image from "next/image";
import Table from "react-bootstrap/Table";
import image from "../../../public/images/careers/jobs.webp";
function Careers() {
  return (
    <section id="careers">
      <div className={styles.aboutus}>
        <div className={styles.imageContainer}>
          <Image src={image} alt="Image" className={styles.image} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title}>
            <h2>Join Our Team</h2>
          </div>
          <p className={styles.content}>
            Please send your CV to Us at
            <a href="mailto:plearningcenter17@gmail.com">
              <br /> plearningcenter17@gmail.com
            </a>
          </p>
          <h4>Job Openings</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Job Category</th>
                <th>Job Roles</th>
                <th>Job Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Teaching</td>
                <td>Online Teachers</td>
                <td>Remote</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Teaching</td>
                <td>Offline Teachers</td>
                <td>Bangalore</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Non Teaching Staff</td>
                <td>Center Incharge</td>
                <td>Bangalore</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Non Teaching Staff</td>
                <td>Marketing Intern</td>
                <td>Bangalore</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Non Teaching Staff</td>
                <td>Academic Counseller</td>
                <td>Bangalore</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
}

export default Careers;
