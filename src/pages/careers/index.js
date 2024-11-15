import styles from "../../styles/About.module.css";
import Image from "next/image";
import Table from "react-bootstrap/Table";
import image from "../../../public/images/careers/jobs.webp";
import Head from "next/head";
function Careers() {
  return (
    <>
      <Head>
        <title>Prayatna Learning Center-Careers</title>
        <meta
          name="description"
          content="Best coaching center for the pre-school,high school,class-10,first PUC,second PUC,JEE mains,JEE advance,NATA and K-CET. We give one to one mentorship to all our student and also provide full assistance on the overall development of the student."
        />
        <meta name="keywords" content="best,best coaching center,PUC,K-CET" />
        <meta
          name="author"
          content="Ashwin kumar,Deepshikha Sharma and Ravi kumar"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <section
        id="careers"
        style={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
                  <td>Offline Teachers</td>
                  <td>Bangalore-Onsite</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Non Teaching Staff</td>
                  <td>Center Incharge</td>
                  <td>Bangalore-Onsite</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Non Teaching Staff</td>
                  <td>Marketing Intern</td>
                  <td>Bangalore-Onsite</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Non Teaching Staff</td>
                  <td>Academic Counseller</td>
                  <td>Bangalore-Onsite</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
