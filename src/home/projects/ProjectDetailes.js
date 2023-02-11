import ImageGallery from "react-image-gallery";
import { useLoaderData } from "react-router-dom";
import footerIMG from "../../assets/images/fahadFooter.jpg";

const ProjectDetailes = () => {
  const projects = useLoaderData();
  const {
    project_name,
    description,
    short_points,
    long_points,
    technology,
    live_site,
    github_client,
    github_server,
  } = projects;

  return (
    <div>
      <div className="h-1/2 w-full">
        <ImageGallery items={projects.slider_image} />
      </div>

      <div className="max-w-md  p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h2 className="text-xl font-bold">{project_name}</h2>
          <h2 className="text-lg font-semibold">{description}</h2>
          <p className="mt-4 dark:text-gray-400">
            {short_points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </p>
          <p className="mt-4 dark:text-gray-400">
            {long_points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </p>
          <p className="font-bold"> Technology Used: {technology}</p>
          <div className="flex items-center mt-8 space-x-4">
            <img
              src={footerIMG}
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">Fahad</h3>
              <time
                datetime="2021-02-18"
                className="text-sm dark:text-gray-400"
              >
                Dec 18th 2022
              </time>
            </div>
          </div>
          <div className="my-6 flex justify-between">
            <a
              href={live_site}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm"
            >
              Live
            </a>
            <a
              href={github_client}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm"
            >
              Client
            </a>
            <a
              href={github_server}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm"
            >
              Server
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectDetailes;
