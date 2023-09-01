import "./App.css";
import { IoLogoLinkedin, IoLogoGithub, IoMdPerson } from "react-icons/io";
import { useState, useEffect } from "react";

import pdf from "./Assets/resume.pdf";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://joshlibackend.ca/projects", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => {
        //console.log(res);
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <div className="mx-5">
      <div className="text-5xl my-10">Joshua Li </div>
      <div>
        <div className="text-ml leading-loose">
          <div className="text-2xl mb-3">Hey! 👋</div>
          <p>
            You can call me Josh.
            <br></br>I am a second-year student at the University of Waterloo
            studying Computer Science and an alumni of Upper Canada College. I
            am passionate about building impactful technologies, specifically in
            the areas of AI, distributed computing, and fintech.
            <br></br>
            Currently, I work as a developer @ CGI on cloud and
            containerization. Previously, I facilitated web development during
            my internship @ Pensieve (Silicon Valley-based startup). I have
            programmed competitively and experimented with machine learning as
            well.
            <br></br>
            In my free time, you can catch me rock climbing, biking around
            toronto, or reading on philosophy.
            <br></br>
            You can find my LinkedIn, GitHub and Resume below:
          </p>
        </div>
        <div className="flex items-baseline mt-4 mb-6">
          <div className="space-x-6 flex">
            <a href={"https://www.linkedin.com/in/joshli04/"}>
              <IoLogoLinkedin />
            </a>
            <a href={"https://github.com/JoshLiCoding"}>
              <IoLogoGithub />
            </a>
            <a href={pdf}>
              <IoMdPerson />
            </a>
          </div>
        </div>
      </div>

      <div className="text-4xl my-10 text-center">Projects</div>
      <p className="my-3">
        Click on "Website" to visit to the finished product or click anywhere
        else in the box to visit the GitHub/Devpost page.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {projects.map((project, index) => {
          //console.log(project);
          return (
            <a
              href={project.code_url}
              key={index}
              target="_blank"
              className="p-2 border border-solid rounded border-black flex flex-1 flex-col justify-between"
            >
              <div>
                <div className="border border-solid rounded border-grey">
                  <img
                    src={project.photo_url}
                    className="object-cover h-60 mx-auto"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 mx-3">
                  <div className="flex-auto text-2xl font-semibold mb-2 text-center">
                    {project.title}
                  </div>
                  <div className="flex-auto text-sm text-center">
                    {project.description}
                  </div>
                  <div className="flex-auto text-xs text-center italic mt-1">
                    {project.tech_stack}
                  </div>
                </div>
              </div>
              {project.website_url != null && (
                <div className="text-ml text-center mt-2 mb-2">
                  <a
                    target="_blank"
                    href={project.website_url}
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-teal-600 transition duration-300 ease-out border-2 border-teal-500 rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-500 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-teal-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Website
                    </span>
                    <span className="relative invisible">Website</span>
                  </a>
                </div>
              )}
            </a>
          );
        })}
      </div>

      <div className="text-ml my-8">
        Feel free to reach out to me at <u>joshual2004.work@gmail.com</u>
        <br></br>
        &copy; 2022 Joshua Li
      </div>
    </div>
  );
}

export default App;
