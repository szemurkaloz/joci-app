import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { services } from '../data'
import styles from '../styles/Home.module.css'
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion"
import { fadeInUp, routeAnimation, stagger } from '../animation'

const About = () => {

  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
     <head>
       <title>
         QWeb delveloper | portfolio
       </title>
     </head>
      <h6 className="my-3 text-base font-medium">
      I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div className='flex-grow p-4 mt-5 bg-green-400 dark:bg-dark-100' 
      style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wider'>Amit felajánlok</h6>
        <motion.div variants={stagger} initial='initial' animate='animate' className='grid gap-6 lg:grid-cols-2'>
          {
            services.map(service => (
              <motion.div variants={fadeInUp} className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200'
              key={service.title}
              > 
                <ServiceCard service={service}/>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>

  )
}

export default About

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

export const getStaticProps = async (context: GetServerSidePropsContext) => {

const res = await fetch('http://localhost:3000/api/services');
const data = await res.json();
//console.log("CLIENT", data.services)

  return {
    props: {
      services: data.services,
    }
  }
}

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: process.env.VERCEL_UR } }
// }


//Video : hogx kell felrakni publikálásra
//https://www.youtube.com/watch?v=atebfXxl9B4&t=11619s
