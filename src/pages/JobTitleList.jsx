import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { useEffect, useState } from "react";
import { JobTitleService } from "../services/jobTitleService";
export default function JobTitleList() {
  const [jobTitles, setjobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setjobTitles(result.data.data));
  }, []);
  return (
    <div>
    <CarouselProvider
      /* naturalSlideWidth={100}
      naturalSlideHeight={100} */
      totalSlides={10}
      visibleSlides={8}
      infinite={true}
      
    >
      <Slider>
        {jobTitles.map((jobTitle) => (
          <Slide index={jobTitle.id}>
            <br />
            <p>{jobTitle.title}</p>
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
    </div>
  );
}
