import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  // Updated projects array to use YouTube video IDs instead of image URLs
  const projects = [{
    video1: 'dQw4w9WgXcQ', // Sample YouTube video ID
    video2: 'jNQXAC9IVRw' // Sample YouTube video ID
  }, {
    video1: 'M7lc1UVf-VE', // Sample YouTube video ID
    video2: 'ZZ5LpwO-An4' // Sample YouTube video ID
  }, {
    video1: 'kJQP7kiw5Fk', // Sample YouTube video ID
    video2: 'tgbNymZ7vqY' // Sample YouTube video ID
  }]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    // Adapted GSAP animation for video containers with improved height values
    gsap.from('.hero', {
      height: '200px', // Increased minimum height for better video visibility
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-8 p-4 mb-[100vh]'> {/* Increased padding for better video spacing */}
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='lg:mt-16 mt-8 lol'> {/* Improved top margin for better visual separation */}
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[600px] mb-12 flex lg:flex-row flex-col lg:gap-8 gap-6'> {/* Optimized height and spacing for videos */}
            <ProjectCard video1={elem.video1} video2={elem.video2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects