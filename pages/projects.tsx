import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { projects as ProjectsData } from "../data";
import { Category } from "../type"
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation, stagger } from '../animation'

function Projects() {
const [projects, setprojects] = useState(ProjectsData);
const [active, setActive] = useState("All");
const [showDetail, setShowDetail] = useState<number | null>(null);

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
    <motion.div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }} variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <head>
       <title>
         QWeb delveloper | portfolio
       </title>
     </head>
      <ProjectNavbar handlerFilterCategory={handelFilterCategory} active={active}/>
      <motion.div variants={stagger} initial='initial' animate='animate' className="relative grid grid-cols-12 gap-4 my-3">
      {projects.map((project) => (
          <motion.div variants={fadeInUp} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={project.name}>
            <ProjectCard project={project} key={project.name} showDetail={showDetail} setShowDetail={setShowDetail} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
