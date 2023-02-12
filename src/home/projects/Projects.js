import React from "react";
import dreamBike from "../../assets/images/dreamBike.PNG";
import BuyFitness from "../../assets/images/byyFitness.PNG";
import programming from "../../assets/images/programmingClassroom.PNG";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Projects = () => {
  const allProjects = [
    {
      id: "01",
      name: "DREAM-BIKE",
      image: dreamBike,
      live: "https://resale-product-76830.web.app/",
      description:
        "Website has to be related to selling used (second-hand products) with the ability to advertise a product.I can handle user and JWT authentication systems.Developed different dashboards with admin.",
    },
    {
      id: "02",
      name: "BUY FITNESS",
      image: BuyFitness,
      live: "https://service-review-8b4de.web.app/",
      description:
        "Designed a website for online training service.I can handle user and JWT authentication systems.Users can buy a service and post reviews about her/him service.",
    },
    {
      id: "03",
      name: "ONLINE CLASSROOM",
      image: programming,
      live: "https://classroom-d2773.web.app/",
      description:
        "Designed a website for an online education system.A single page application for online courses.Users can buy courses and download pdf files.",
    },
  ];

  return (
    <div>
      <div className=" mx-10 py-20">
        <div className="mb-20">
          <h1 className="text-center text-4xl font-bold">My Recent Works</h1>
          <div className="w-36 h-[2px] bg-white mx-auto mt-2"></div>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          data-aos-duration="1200"
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 "
        >
          {allProjects &&
            allProjects.map((project) => (
              <div className="card card-compact w-full shadow-xl">
                <figure>
                  <img
                    className="w-full aspect-[16/11]  object-cover object-top transition-all ease-in-out duration-[2000ms] hover:object-bottom"
                    src={project.image}
                    alt="images"
                  />
                </figure>
                <div className="bg-base-100 p-6">
                  <h2 className="card-title">{project.name}</h2>
                  <p>{project.description}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/projects/${project.id}`}
                      className="flex items-center text-xs font-medium "
                    >
                      READ MORE&nbsp;
                      <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
