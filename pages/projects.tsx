import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as ProjectsData } from "../data";
import { Category } from "../type"

function Projects() {
const [projects, setprojects] = useState(ProjectsData);
const [active, setActive] = useState("All")

const handelFilterCategory = (category: Category | "All") => {
    if (category === "All") {
        setprojects(ProjectsData);
        setActive(category);
        return
    }

    const newArray = ProjectsData.filter((project) => project.category.includes(category));
    setprojects(newArray);
    setActive(category);
}

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectNavbar handlerFilterCategory={handelFilterCategory} active={active}/>
      <div className="relative grid grid-cols-12 gap-4 my-3">
      {projects.map((project) => (
          <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={project.name}>
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
