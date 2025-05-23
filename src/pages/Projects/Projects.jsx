import React from "react";
import project_image from './page.png'
import clabed from './clabed.png'
import bloggle from './bloggle.png'
import { useState, useEffect } from "react";
import { sanityClient } from '../../sanityClient'
import { TbBrandGithub } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {
        loading ? (
          <div className="mt-[3rem] flex items-center justify-center text-white text-xl">
            Loading <span className="bounce-dot">.</span><span className="bounce-dot">.</span><span className="bounce-dot">.</span>
          </div>
        ) : (
          <div className="mt-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projects.map((project, index) => (
          <div className="shadow-2xl" key={index}>
            {/* <img src={project.mainImage} alt={project.mainImage.alt} /> */}
            {project.mainImage && (
              // <img src={project.mainImage.asset.url} alt={project.name} />
              <LazyLoadImage
              src={project.mainImage.asset.url}
              alt={project.name}
              effect="blur"
              />
            )}
            <div className="text-white py-10 px-5 flex gap-4 flex-col">
              <h1>{project.title}</h1>

              <p className="text-[#B2B2B3]"> {project.subtitle} </p>

              <p className="">{project.technology} </p>

              <div className="flex items-center justify-start gap-6 text-sm text-[#B2B2B3] cursor-pointer">
                <div className="flex items-center gap-2 hover:scale-[1.1] transition">
                  <TbBrandGithub className="fill-white" />
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="">Code</a>
                </div>
                <div className="flex items-center gap-2 hover:scale-[1.1] transition">
                  <AiFillEye className="text-white" />
                  <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="">View live</a>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
        )
      }
      
    </div>
  );
};

export default Projects;
