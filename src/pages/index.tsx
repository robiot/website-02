import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Link from "next/link";
import Aos from "aos";
import { useEffect, useState } from "react";
import { projects, experiences } from "../consts/consts";
import ContactItem from "../components/Contact_item";
import { GitHub, Twitter, YouTube, Mail } from "@material-ui/icons";
import Typist from "react-typist";

function getYear() {
  return new Date().getFullYear();
}

function SectionTitle({ children }) {
  return (
    <div>
      <div
        className="w-48 h-2 mb-4 rounded-lg bg-gradient-to-r from-pink-400 to-blue-500"
        data-aos="zoom-in-right"
        data-aos-duration="250"
      />
      <div
        className="font-semibold text-4xl text-gray-200"
        data-aos="fade-left"
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeHover, setActiveHover] = useState<null | {
    title: string;
    desc: string;
  }>(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  });

  return (
    <Layout title="Home">
      <Nav />

      {/* Experience card */}
      {activeHover && (
        <div className="hidden xl:block fixed top-20 right-10 shadow-project rounded-md ">
          <div className="w-80 m-auto shadow-project rounded-md p-4 bg-gray-900">
            <div className="text-center text-xl font-semibold">
              {activeHover.title}
            </div>
            <div className="text-lg text-gray-300 mt-3">{activeHover.desc}</div>
          </div>
        </div>
      )}

      <div className="container-lg mx-auto px-5 flex-grow">
        <div className="flex justify-between mt-20 md:mt-48">
          <div className="flex-wrap w-description">
            <Typist
              cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }}
              avgTypingDelay={100}
            >
              <p className="text-6xl text-gray-100 font-semibold mb-2">
                Hello, I'm Robiot.
              </p>
            </Typist>
            <p className="text-3xl text-gray-400">
              A 14 year old Software developer.
            </p>
            <Link href="#about">
              <div
                className="w-48 mt-6 h-10 rounded-lg flex justify-center items-center
                              bg-gradient-to-r from-pink-400 to-blue-500 font-semibold cursor-pointer
                              transform hover:-translate-y-1 hover:shadow-2xl transition duration-200 ease-in-out"
              >
                More
              </div>
            </Link>
          </div>
          <div data-aos="fade-right">
            <img
              src="/images/robot.png"
              className="geeks rounded-full w-80 border-transparent border-2 hover:border-gray-600 transition duration-500 ease-in-out"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
        </div>

        <div className="text-2xl text-gray-300 pt-32" id="about">
          <SectionTitle>About Me</SectionTitle>
          <div data-aos="fade-right">
            <p className="mt-5">
              Hi I'm Robiot. I do software development as a hobby and I really
              enjoy it. I have been coding seriously since 2020, but I've made
              some small projects before. I also practice some ethical hacking
              on my free time.
            </p>
            <p className="mt-2">
              I upload most of my projects to github, where some projects got
              really popular. Thanks!
            </p>
          </div>

          <div className="mt-8 font-semibold text-3xl text-gray-200">
            Experience
          </div>
          <div className="flex flex-wrap justify-stretch mt-6 w-full gap-3">
            {experiences.map((e, i) => {
              return (
                <div data-aos="flip-left" key={i}>
                  <div
                    className="w-36 md:w-44 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 font-semibold flex justify-center
                    items-center cursor-pointer transform hover:scale-105 duration-100"
                    onMouseEnter={() => {
                      setActiveHover({
                        title: e.name,
                        desc: e.description,
                      });
                    }}
                    onMouseLeave={() => {
                      setActiveHover(null);
                    }}
                  >
                    {e.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-2xl text-gray-300 pt-32" id="projects">
          <SectionTitle>Projects</SectionTitle>

          <div className="flex flex-wrap justify-stretch gap-10 mt-10">
            {projects.map((p, i) => {
              {
                /* Card */
              }
              return (
                <div
                  className="w-96 shadow-project rounded-md"
                  key={i}
                  data-aos="zoom-in-left"
                >
                  <img
                    src={p.image}
                    className="rounded-t-md object-cover object-top h-32 w-full bg-navbar-active"
                  />
                  <div className="px-10 py-4 text-center flex flex-col h-3/5">
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-xl text-gray-400 flex-grow">
                      {p.description}
                    </div>
                    <div className="flex justify-between gap-3 text-xl">
                      <a
                        className="w-full mt-6 h-10 rounded-lg flex justify-center items-center
                              bg-gradient-to-r from-blue-400 to-blue-500 font-semibold cursor-pointer"
                        href={p.source}
                        target="_blank"
                      >
                        Source
                      </a>
                      {p.website && (
                        <a
                          className="w-full mt-6 h-10 rounded-lg flex justify-center items-center
                                bg-gradient-to-r from-blue-400 to-blue-500 font-semibold cursor-pointer"
                          href={p.website}
                          target="_blank"
                        >
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-2xl text-gray-300 pt-32" id="contact">
            <SectionTitle>Contact Me</SectionTitle>

            <div data-aos="fade-right">
              <p className="mt-5">
                You can contact me using my email or by the Discord server.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <ContactItem href="mailto:me@robiot.dev">
                <Mail width="0" className="mb-1 mr-2" />
                Email
              </ContactItem>
              <ContactItem href="https://github.com/robiot">
                <GitHub width="0" className="mb-1 mr-2" />
                Github
              </ContactItem>
              <ContactItem href="https://youtube.com/c/robiot">
                <YouTube width="0" className="mb-1 mr-2" />
                Youtube
              </ContactItem>
              <ContactItem href="https://discord.gg/3Pf8Xu5Kjm">
                Discord
              </ContactItem>
              <ContactItem href="https://twitter.com/realrobiot">
                <Twitter width="0" className="mb-1 mr-2" />
                Twitter
              </ContactItem>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-48 bg-navbar-active h-10 flex justify-center items-center">
        Copyright © Robiot {getYear()}
      </div>
    </Layout>
  );
}
