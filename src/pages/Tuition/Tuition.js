
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Image from "next/image";
import ImageListItem from '@mui/material/ImageListItem';
import TuitionItems from '../Tuition/TuitionItems'

function Tuition() {
  return (
    <section id="tuition">
      <center>
          <div className="container">
              <h2 style={{ color: "green" }}>Tuition(Offline/Online)</h2>
              <p align="center"> We are providing Tuition & Coaching for all classes starting from nursery to 12th Standard.
                For all boards like state, CBSE, ICSE, IGCSE.We have experienced and dedicated teachers 
                who ensure effective learning of students. Also we provide individual attention to students 
                as our teachers teach in small groups. We also provide online one-to-one learning 
                classes for kids who are unable to reach our center.
              </p>
          </div>
          <div>
          <div>
                <ImageList sx={{ width: 500, height: 500 }}
                    cols={3} rowHeight={170}>
                    {TuitionItems.map((idx) => (
                        <ImageListItem key={idx.id} >
                            <Image
                                src={idx.url}
                                width={164}
                                height={185}
                                alt='Image'
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

export default Tuition;