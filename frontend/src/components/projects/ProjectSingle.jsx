// single project card
import { motion } from "framer-motion";

const ProjectSingle = ({ title, category, image, deployUrl, codeUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}>
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <div>
          <img
            src={image}
            className="rounded-t-xl project-img border-none object-cover"
            alt="Single Project"
          />
          <div className="flex justify-center space-x-4 mt-2">
            <a className="flex text-red items-center justify-center  hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white dark:hover:text-ternary-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full dark:bg-ternary-light" href={codeUrl} >
              <span className="relative z-10">View Code</span>
            </a>
            <a className="group relative min-h-[50px] w-40 overflow-hidden border border-purple-500 bg-white  text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full dark:bg-ternary-light"
            href={deployUrl}>
              <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white dark:hover:text-ternary-white group-hover:before:h-full group-hover:after:h-full "></span>
              <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                View Live
              </span>
            </a>
          </div>
        </div>
        <div className="text-center px-4 py-6">
          <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
            {title}
          </p>
          <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
