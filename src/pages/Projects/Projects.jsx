import React from "react";
import project_image from './page.png'
import clabed from './clabed.png'
import bloggle from './bloggle.png'
import { useState, useEffect } from "react";
import {sanityClient} from '../../sanityClient'

// const projectData = [
//   {
//     id: 1,
//     image: project_image,
//     name: "iRefer",
//     subtext: "Connecting You to Quality Services, Products, and Solutions.",
//     technology: "Nextjs + Tailwind + Sanity(CMS) + Typescript",
//   },
//   {
//     id: 2,
//     image: clabed,
//     name: "Clabed Autos",
//     subtext: "Connecting You to Quality Services, Products, and Solutions.",
//     technology: "React + CSS + Node +   MongoDB",
//   },
//   {
//     id: 3,
//     image: bloggle,
//     name: "Bloggle",
//     subtext: "Blog about your favorite things and explore loads of content.",
//     technology: "React + Tailwind + Node +   MongoDB",
//   },
//   {
//     id: 4,
//     image: project_image,
//     name: "Kulture Kaps",
//     subtext: "Connecting You to Quality Services, Products, and Solutions.",
//     technology: "Nextjs + Tailwind + Sanity(CMS) + Typescript",
//   },
// ];

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "project"]{
              title,
              subtitle,
              technology,
              codeLink,
              viewLink,
              mainImage {
                asset -> {
                  _id,
                  url
                },
                alt
              }
            }`
          )
          .then((data) => {
            console.log("Fetched Projects:", data);
            setProjects(data);
          })
          .catch(console.error);
      }, []);
  return (
    <div>
      <div className="mt-[3rem] grid grid-cols-3 gap-[2rem]">
        {projects.map((project, index) => (
          <div className="shadow-xl" key={index}>
            {/* <img src={project.mainImage} alt={project.mainImage.alt} /> */}
            {project.mainImage && (
              <img src={project.mainImage.asset.url} alt={project.name} />
            )}
            <div className="text-white py-10 px-5 flex gap-4 flex-col">
              <h1>{project.title}</h1>

              <p className="text-[#B2B2B3]"> {project.subtitle} </p>

              <p className="">{project.technology} </p>

              <div className="flex items-center justify-start gap-6 text-sm text-[#B2B2B3] cursor-pointer">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="hover:scale-[1.1]">Code</a>
                <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="hover:scale-[1.1]">View live</a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
