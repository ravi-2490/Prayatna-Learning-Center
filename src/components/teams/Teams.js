import TeamsItems from "./TeamsItems";
import Image from "next/image";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Teams = () => {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">
              The Team Behind Prayatna Learning Center
            </h2>

            <p className="section-subtitle"></p>
          </div>
          {TeamsItems.map((item) => {
            return (
              <div className="col-sm-6 col-md-4" key={item.id}>
                <div className="team-item">
                  <Image src={item.imageUri} className="team-img" alt="pic" />
                  <h3>{item.name}</h3>
                  <div className="team-info">
                    <p>{item.designation}</p>
                  </div>
                  <p>
                    {item.name} is our co-founder and has developed search
                    strategies for a variety of clients from international
                    brands to medium sized businesses for over five years.
                  </p>

                  <ul className="team-icon">
                    <li>
                      <a
                        href={item.facebookUrl}
                        className="facebook"
                        target="_blank"
                      >
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href={item.linkedinUrl}
                        className="twitter"
                        target="_blank"
                      >
                        <AiFillLinkedin />
                      </a>
                    </li>

                    <li>
                      <a
                        href={item.instagramUrl}
                        className="dribble"
                        target="_blank"
                      >
                        <BsInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href={item.mailId}
                        className="pinterest"
                        target="_blank"
                      >
                        <AiOutlineMail />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;
