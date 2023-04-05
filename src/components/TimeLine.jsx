import { Divider } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { GiJourney } from "react-icons/gi";

const TimeLine = () => {
  return (
    <>
      <section className="bg-black">
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
          <h1 className=" py-5 tx_color_title"> MY JOURNEY</h1>
        </Divider>
        <div className="text-md-center text-sm-start">
          <GiJourney color="#07f7f7" className=" timeline_icon" size="50px" />
        </div>
        <div className="timeLine">
          <div className="container_timeline left_timeLine text-md-end text-sm-start">
            <AnimationOnScroll animateIn="animate__backInUp">
              <div className="content_timeLine">
                <h2 className="tx_color_title">2020 March - 2020 May</h2>
                <p className="text-white">
                  Html, CSS, JavaScript / Jquery, Bootstrap, Tailwind
                </p>
                <p className="text-white text-start">
                  My journey into web development began with a 20-hour online
                  course in HTML, CSS, Bootstrap, and Tailwind. From there, I
                  honed my skills by applying these techniques to create
                  creatively designed and fully responsive websites. Throughout
                  my learning journey, I made sure to constantly challenge
                  myself by designing websites using the latest techniques and
                  trends in the industry. Along the way, I also took the
                  initiative to learn JavaScript and the jQuery framework, which
                  allowed me to add interactive and dynamic elements to my
                  websites. To further enhance my skills, I worked as an intern
                  at a company for two months, where I gained valuable
                  real-world experience in web development.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className="container_timeline right_timeLine">
            <AnimationOnScroll animateIn="animate__backInUp">
              <div className="content_timeLine">
                <h2 className="tx_color_title">2020 march - 2020 September</h2>
                <p className="text-white">PHP / Laravel</p>
                <p className="text-white">
                  After completing my internship, I decided to expand my skills
                  by learning PHP and building a custom CMS for my first
                  project. With a solid foundation in PHP, I then delved into
                  object-oriented programming and developed a framework similar
                  to Laravel.
                  <br className=""/>
                  <br className=""/>
                  As I mastered object-oriented programming and PHP, I began
                  learning Laravel and utilized its features to develop a custom
                  CRM with an API that allowed users to manage their customer
                  data from their WordPress site. Since learning Laravel, I have
                  exclusively used it for all my back-end projects. To date, I
                  have completed more than 20 projects using Laravel. I have
                  experience in designing and developing a wide range of
                  projects, including e-commerce platforms, multilingual
                  websites, CMS systems, and more.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="container_timeline left_timeLine text-md-end text-sm-start">
            <AnimationOnScroll animateIn="animate__backInUp">
              <div className="content_timeLine">
                <h2 className="tx_color_title"> 2021 </h2>
                <p className="text-white">Seo</p>
                <p className="text-white text-start">
                  Furthermore, some of my projects required on-page SEO
                  optimization to be designed in an optimal way for Google. To
                  meet these requirements, I started learning SEO and have had
                  several successful projects so far. I always strive to keep up
                  with the latest trends and updates in SEO to ensure that I am
                  providing the best possible results for my clients. I am
                  passionate about SEO and constantly seek to expand my
                  knowledge and expertise in this field, with the ultimate goal
                  of becoming an SEO specialist.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="container_timeline right_timeLine">
            <AnimationOnScroll animateIn="animate__backInUp">
              <div className="content_timeLine">
                <h2 className="tx_color_title">2021 February - 2021 June</h2>
                <p className="text-white">React / Next</p>
                <p className="text-white">
                  Ever since I started designing websites, I've been fascinated
                  by the idea of becoming a full-stack developer. That's why I
                  began learning React, and have since utilized a variety of its
                  technologies, such as Redux, Redux Toolkit, and others. I find
                  React's ability to create highly dynamic and interactive user
                  interfaces to be incredibly inspiring, and I'm constantly
                  amazed by the creativity of its community of developers. After
                  gaining experience with React in a couple of projects, I
                  decided to use the Next.js framework for server-side rendering
                  (SSR) in a few other projects. Next.js has become one of my
                  go-to choices for building highly performant and SEO-friendly
                  React applications. I believe that the combination of React
                  and Next.js is an incredibly powerful toolset for creating
                  dynamic and engaging web experiences.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeLine;
