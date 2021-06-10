import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";
import { Grid } from "semantic-ui-react";
import CustomCardSlide from "../layouts/CustomCardSlide";
import { Link } from 'react-router-dom'

const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={2.25}
    totalSlides={1}
    style={{ width: "600px" }}
  >
    <Grid>
      <Grid.Row>
        <Grid.Column width="4">
            <Link>
          <Slider>
            <CustomCardSlide
             image ="https://www.kariyer.net/_assets/img/career-guide-home/opportunity.jpg"
              index={0}
              header="Software Developer"
              meta="Friend"
            />
          </Slider>
          </Link>
        </Grid.Column>
        <Grid.Column width="4">
        <Link>
          <Slider>
            <CustomCardSlide
              image="https://www.kariyer.net/_assets/img/career-guide-home/opportunity.jpg"
              index={0}
              header="Software Developer"
              meta="Friend"
            />
          </Slider>
          </Link>
        </Grid.Column>
        <Grid.Column width="4">
        <Link>
          <Slider>
            <CustomCardSlide
              image="https://www.kariyer.net/_assets/img/career-guide-home/opportunity.jpg"
              index={0}
              header="Software Developer"
              meta="Friend"
            />
          </Slider>
          </Link>
        </Grid.Column>
        <Grid.Column width="4">
        <Link>
          <Slider>
            <CustomCardSlide
              image="https://www.kariyer.net/_assets/img/career-guide-home/opportunity.jpg"
              index={0}
              header="Software Developer"
              meta="Friend"
            />
          </Slider>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </CarouselProvider>
);

export default CardCarousel;
