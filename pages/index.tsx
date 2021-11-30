import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { services } from '../data'
import styles from '../styles/Home.module.css'
import ServiceCard from "../components/ServiceCard";


const Index = () => {

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="my-3 text-base font-medium">
      I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div className='flex-grow p-4 mt-5 bg-green-400 dark:bg-dark-100' 
      style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wider'>Amit felajánlok</h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {
            services.map(service => (
              <div className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200'
              key={service.title}
              > 
                <ServiceCard service={service}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Index

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
