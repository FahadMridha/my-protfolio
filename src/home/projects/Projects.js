import React from "react";
import dreamBike from "../../assets/images/dreamBike.PNG";
import BuyFitness from "../../assets/images/byyFitness.PNG";
import programming from "../../assets/images/programmingClassroom.PNG";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "DREAM-BIKE",
      image: dreamBike,
      live: "https://resale-product-76830.web.app/",
      description:
        "Website has to be related to selling used (second-hand products) with the ability to advertise a product.I can handle user and JWT authentication systems.Developed different dashboards with admin.",
    },
    {
      id: "2",
      name: "BUY FITNESS",
      image: BuyFitness,
      live: "https://service-review-8b4de.web.app/",
      description:
        "Designed a website for online training service.I can handle user and JWT authentication systems.Users can buy a service and post reviews about her/him service.",
    },
    {
      id: "3",
      name: "ONLINE CLASSROOM",
      image: programming,
      live: "https://classroom-d2773.web.app/",
      description:
        "Designed a website for an online education system.A single page application for online courses.Users can buy courses and download pdf files.",
    },
  ];

  return (
    <div className="m-10">
      <div className="m-6">
        <h1 className="text-center text-3xl">
          My Recent <span className="text-purple-900 font-bold">Works</span>
        </h1>
        <p></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div className="card card-compact w-96 bg-purple-500 shadow-xl">
            <figure>
              <img src={project.image} alt="images" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.live}
                  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 bg-slate-300 hover:bg-slate-400"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
