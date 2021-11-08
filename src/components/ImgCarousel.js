import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import "./../carousel.scss";
import img1 from ".././images/img1.jpg";
import img2 from ".././images/img2.jpg";
import img3 from ".././images/img3.jpg";
import img4 from ".././images/img4.jpg";
import img5 from ".././images/img5.jpg";
import img6 from ".././images/img6.jpg";
import img7 from ".././images/img7.jpg";
import img8 from ".././images/img8.jpg";

const slides = [
  {
    title: "",
    subtitle: "",
    description: "",
    image: img1,
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: img2,
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: img3,
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: img4,
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: img5,
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: img6,
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: img7,
  },
  {
    title: "",
    subtitle: "",
    description: "",
    image: img8,
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className='slide'
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className='slideContent'
        style={{
          backgroundImage: `url('${slide.image}')`,
          height: "60vh",
        }}
      >
        {/* <div className='slideContentInner'>
          <h2 className='slideTitle'>{slide.title}</h2>
          <h3 className='slideSubtitle'>{slide.subtitle}</h3>
          <p className='slideDescription'>{slide.description}</p>
        </div> */}
      </div>
    </div>
  );
}

const ImgCarousel = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "PREV" });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction='row'
      alignItems='center'
      justifyContent='center'
      style={{
        minHeight: "100vh",
        maxWidth: "100%",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        data-aos='fade-up'
      >
        <div className='slides'>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default ImgCarousel;
