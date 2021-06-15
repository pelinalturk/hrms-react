import React, { useState, useEffect } from "react";

import { CarouselProvider } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  Card,
  ButtonContainer,
  SliderContainer,
  StyledSlide,
  StyledSlider,
  BackButton,
  NextButton,
  CardText,
  CardButton,
  CardButtonBlue,
} from "./styles";
import { JobTitleService } from "../../services/jobTitleService";
import { Link } from "react-router-dom";

export default function JobTitle() {
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
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={8}
        visibleSlides={4}
        step={4}
      >
        <ButtonContainer>
          <BackButton>
            <FiChevronLeft size="1.5em" />
          </BackButton>
          <NextButton>
            <FiChevronRight size="1.5em" />
          </NextButton>
        </ButtonContainer>
        <SliderContainer>
          <StyledSlider classNameAnimation="animating">
            {jobTitles.map((jobTitle) => (
              <StyledSlide
                index={jobTitle.id}
                classNameHidden="hidden"
                classNameVisible="visible"
              >
                <Card>
                  <div>
                    <CardText>
                      <Link>
                        <h2>{jobTitle.title}</h2>
                      </Link>
                    </CardText>
                  </div>
                </Card>
              </StyledSlide>
            ))}
          </StyledSlider>
        </SliderContainer>
      </CarouselProvider>
    </div>
  );
}