import "./App.css";
import { IoLogoLinkedin, IoLogoGithub, IoMdPerson } from "react-icons/io";
import { useState, useEffect } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://joshli-backend-32dad87846e1.herokuapp.com/projects", {
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
    <div className="pt-20" style={{ marginLeft: "10%", marginRight: "10%" }}>
      <div className="text-5xl my-10 w-fit bg-white">Joshua Li </div>
      <div>
        <div className="text-ml">
          <div className="text-2xl mb-3 w-fit py-2 pl-2 pr-8 bg-lime-100 rounded">
            Hey! 👋
          </div>
          <div className="w-fit leading-8 bg-white">
            <p className="my-3">
              I'm a second-year CS student at the University of Waterloo and an
              alumni of Upper Canada College. I like to explore all things
              Computer Vision and ML when I have the time.
            </p>
            <p className="my-3">
              Outside of work, you can catch me reading, biking or travelling to
              see my friends.
            </p>
            <p>You can find my LinkedIn and GitHub below:</p>
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6">
          <div className="space-x-6 flex">
            <a href={"https://www.linkedin.com/in/joshli04/"}>
              <IoLogoLinkedin />
            </a>
            <a href={"https://github.com/JoshLiCoding"}>
              <IoLogoGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="text-4xl my-10 text-center w-fit bg-white">Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {projects.map((project, index) => {
          //console.log(project);
          return (
            <a
              href={project.code_url}
              key={index}
              target="_blank"
              className="p-2 border border-solid rounded hover:shadow-xl border-black flex flex-1 flex-col justify-between w-fit bg-white"
            >
              <div>
                <div className="border border-solid rounded border-grey">
                  <img
                    src={process.env.PUBLIC_URL + "thumbnails/" + project.photo}
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
                      Demo
                    </span>
                    <span className="relative invisible">Demo</span>
                  </a>
                </div>
              )}
            </a>
          );
        })}
      </div>

      <div className="text-ml my-8 w-fit bg-white">
        Feel free to reach out to me!
        <br></br>
        &copy; 2024 Joshua Li
      </div>
    </div>
  );
}

export default App;
