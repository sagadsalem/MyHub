import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'

import { SimpleLayout } from '@/components/SimpleLayout'
import cinemaBoxLogo from '@/images/projects/cinemabox.jpeg'
import tvBoxLogo from '@/images/projects/tvbox.jpeg'
import soundBoxLogo from '@/images/projects/soundbox.jpeg'
import aqsatiLogo from '@/images/projects/aqsati.jpeg'
import fodfilxLogo from '@/images/projects/fodflix.jpeg'
import postgraduateLogo from '@/images/projects/postgraduate.jpeg'
import asdpsLogo from '@/images/projects/asdps.jpeg'
import lumiarLogo from '@/images/projects/lumiar.jpeg'
import rasanaLogo from '@/images/projects/rasana.jpeg'

const projects = [
  {
    name: 'Cinema Box',
    description: 'A digital movie theater for watching movies, series and ainme.',
    link: { href: 'https://www.albox.co', label: 'albox.co' },
    logo: cinemaBoxLogo,
  },
  {
    name: 'Sound Box',
    description: 'A digital music player for listening to music and podcasts.',
    link: { href: 'https://www.albox.co', label: 'albox.co' },
    logo: soundBoxLogo,
  },
  {
    name: 'Tv Box',
    description: 'A digital TV for watching TV channels and live streams.',
    link: { href: 'https://www.albox.co', label: 'albox.co' },
    logo: tvBoxLogo,
  },
  {
    name: 'Smart Aqsati',
    description: 'A service to manage sales by installments between merchants and customers.',
    link: { href: 'https://aqsati.iq/', label: 'aqsati.iq' },
    logo: aqsatiLogo,
  },
  {
    name: 'Fodflix',
    description:
      'A digital menu for restaurants, cafes, markets, and other businesses.',
    link: { href: 'https://fodflix.com', label: 'fodflix.com' },
    logo: fodfilxLogo,
  },
  {
    name: 'Postgraduate',
    description: 'A service to applying for postgraduate studies at UOT.',
    link: { href: 'https://gradapply.uotechnology.edu.iq', label: 'gradapply.uotechnology.edu.iq' },
    logo: postgraduateLogo,
  },
  {
    name: 'ASDPS',
    description: 'academic skills development for postgraduate students.',
    link: { href: 'https://asdps.rdd.edu.iq', label: 'asdps.rdd.edu.iq' },
    logo: asdpsLogo,
  },
  {
    name: 'Lumiar',
    description: 'an website for applying to the Lumiar school in Iraq.',
    link: { href: 'https://lumiar.iq', label: 'lumiar.iq' },
    logo: lumiarLogo,
  },
  {
    name: 'Rasana',
    description: 'An exam for students (non-employees) who hold graduate degrees',
    link: { href: 'https://rasana.scrdiraq.gov.iq', label: 'rasana.scrdiraq.gov.iq' },
    logo: rasanaLogo,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Sajad Salem</title>
        <meta
          name="description"
          content="things I've worked on to leave a dent in the grand tapestry of existence."
        />
      </Head>
      <SimpleLayout
        title="I've worked on things that aim to leave a dent in the grand tapestry of existence"
        intro="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them I cannot share because they are projects running on the internal network."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link target="_blank" href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
