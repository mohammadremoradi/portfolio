import { Divider } from "@mui/material";
import aboutImg from "../assets/img/about-image.jpg";

const AboutMe = () => {
  return (
    <>
      <section className="bg-black">
        <div className="text-center">
          <Divider
            sx={{
              "&::before": {
                borderColor: "#00f298",
                marginLeft: "5rem",
              },
              "&::after": {
                borderColor: "#07f7f7",

                marginRight: "5rem",
              },
            }}
          >
            <h1 className=" py-5 tx_color_title">ABOUT ME</h1>
          </Divider>
        </div>
        <div className="container  pb-5">
          <div className="row">
            <div className="px-2 mb-5 col-md-6 position-relative ">
              <div className="about_img_border box">
                <img src={aboutImg} alt="about me" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 text-white my-auto ">
              <ul>
                <li className="tx_special text-white position-relative">
                  I'm a dedicated fullstack web developer, with 2+ years
                  experience in web design and development, including
                  programming, debugging, and wireframes. Proficient in Laravel,
                  JavaScript, React, Next, and Seo. With top-notch programming
                  skills and in-depth knowledge of php
                </li>
                <li className="py-4">
                  <span className="tx_special">Name : </span> MohammadReza
                  Moradi
                </li>
                <li className="">
                  <span className="tx_special">Age : </span> 28
                </li>
                <li className="py-4">
                  <span className="tx_special">Languages : </span>
                  English, Persian
                </li>

                <li className="position-relative">
                  <span className="tx_special">Phone : </span>
                  <a
                    className=" text-white link-light"
                    href="https://wa.me/+989337588847"
                  >
                    (+98) 933 758 88 47
                  </a>
                </li>

                <li className="py-4 position-relative">
                  <span className="tx_special">Email : </span>
                  <a
                    className=" text-white link-light"
                    href="mailto:mreza19374@gmail.com"
                  >
                    mreza19374@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
