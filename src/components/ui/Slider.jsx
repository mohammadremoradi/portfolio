// import { TypeAnimation } from "react-type-animation";
import me from "../../assets/img/me.png";
import laravel from "../../assets/img/laravel.jpg";
import reactImg from "../../assets/img/react.jpg";
import wordpress from "../../assets/img/wordpress.png";
import next from "../../assets/img/nextjs.png";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { mouseArraction } from "../../assets/constants/particles";
import { Link } from "react-router-dom";
const Slider = () => {
  const particleInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <div className="slider">
        <div className="container ">
          <Particles
            loaded={particleLoaded}
            init={particleInit}
            options={mouseArraction}
            id="tsparticles"
          />

          <div className="row py-5">
            <div className="col-xl-7 col-md-6 col-lg-5 my-auto ">
              <div className="text_slider text-white">
                <p className="text_first_slider">Hello, I'm</p>
                <h3>Mohammadreza</h3>
                <h1 className="py-3  ">Moradi</h1>
                <div className="max_content">
                  <p className="text_second_slider ">
                    I develop websites using ...
                  </p>
                  {/* <TypeAnimation
                    className="text-center"
                    sequence={[
                      "Laravel",
                      1000,
                      "React",
                      1000,
                      "Next",
                      1000,
                      "Wordpress",
                      1000,
                    ]}
                    wrapper="h1"
                    repeat={Infinity}
                  /> */}

                  <div className="text-center mt-4  position-relative">
                    <Link
                      className="btn btn-danger py-3"
                      target="_blank"
                      download
                      to="../../assets/my-cv.pdf"
                    >
                      Download my resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-5 my-auto col-md-6">
              <div className="position-relative re_wid">
                <div>
                  <img
                    src={me}
                    alt="mohammadreza moradi"
                    className="image_slider "
                  />
                </div>

                <div className="position-absolute skill_laravel">
                  <img
                    src={laravel}
                    alt="Laravel"
                    className="skill_img skill_laravel_rot"
                  />
                </div>

                <div className="position-absolute skill_react ">
                  <img
                    src={reactImg}
                    alt="react"
                    className="skill_img skill_react_rot"
                  />
                </div>

                <div className="position-absolute skill_wordpress ">
                  <img
                    src={wordpress}
                    alt="wordpress"
                    className="skill_img skill_wordpress_rot"
                  />
                </div>

                <div className="position-absolute skill_next ">
                  <img
                    src={next}
                    alt="next"
                    className="skill_img skill_next_rot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
