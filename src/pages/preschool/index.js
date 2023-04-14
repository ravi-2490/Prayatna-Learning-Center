import * as React from "react";
import ImageList from "@mui/material/ImageList";
import Image from "next/image";
import ImageListItem from "@mui/material/ImageListItem";
import PreSchoolItems from "./PreSchoolItems";

function PreSchool() {
  return (
    <section id="preschool">
      <center>
        <div className="container">
          <h2 style={{ color: "green" }}>PreSchool Offering</h2>
          <p align="center">
            We founded the Pre-School in 2022 with a vision to make learning and
            fun go hand in hand for for toddlers.We are making sure to provide a
            homely environment for kids and also instill a routine which is
            going to help in long way.
          </p>
        </div>
        <div>
          <div className="column">
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={170}
            >
              {PreSchoolItems.map((idx) => (
                <ImageListItem key={idx.id}>
                  <Image
                    src={idx.url}
                    width={180}
                    height={180}
                    alt="Image"
                    srcSet={idx.url}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </center>
    </section>
  );
}

export default PreSchool;
