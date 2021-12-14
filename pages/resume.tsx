import { ISkill } from "../type"
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation } from "../animation";

function Resume() {

    return (
        <motion.div className='px-6' py-2 variants={routeAnimation} initial="initial" animate="animate" exit="exit">
            <div className='grid gap-6 md:grid-cols-2'>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className="my-2 text-xl font-bold">Tanulmányok</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Computer science mérnök</h5>
                        <p className="font-semibold">Academy of Technology (2017-2021)</p>
                        <p className="my-3">
                            I am currently pursuing B.tech in Computer Science Engineering
                            from Academy of Technology
                        </p>

                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
                        <p className="font-semibold">Tata Consultancy Services</p>
                        <p className="my-3">I dont know why I am doing this job</p>
                    </div>
                </motion.div>
            </div>
            {/* Nyelvek és eszközök */}
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <h5 className='my-3 text-lg font-bold'>Nyelvek és keretrendszerek </h5>
                    <div className='my-2'>
                        {languages.map((language) => <Bar data={language} key={language.name} />)}
                    </div>
                </div>
            </div>
            {/* Tools és Szoftverek */}
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <h5 className='my-3 text-lg font-bold'>Eszközök és programok </h5>
                    <div className='my-2'>
                        {tools.map((tool) => <Bar data={tool} key={tool.name} />)}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume
