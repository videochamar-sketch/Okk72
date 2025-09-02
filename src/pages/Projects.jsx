import { useGSAP } from '@gsap/react'
import VideoGrid from '../components/projects/VideoGrid'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  // Teasers section - 11 videos for quick previews
  const teasers = [
    { videoId: 'dQw4w9WgXcQ' },
    { videoId: 'jNQXAC9IVRw' },
    { videoId: 'M7lc1UVf-VE' },
    { videoId: 'ZZ5LpwO-An4' },
    { videoId: 'kJQP7kiw5Fk' },
    { videoId: 'tgbNymZ7vqY' },
    { videoId: 'L_jWHffIx5E' },
    { videoId: 'fJ9rUzIMcZQ' },
    { videoId: 'QH2-TGUlwu4' },
    { videoId: 'nfWlot6h_JM' },
    { videoId: 'hFZFjoX2cGg' }
  ]

  // Highlights section - 20 videos for detailed showcases
  const highlights = [
    { videoId: 'ScMzIvxBSi4' },
    { videoId: 'CevxZvSJLk8' },
    { videoId: 'kffacxfA7G4' },
    { videoId: 'qeMFqkcPYcg' },
    { videoId: 'SQoA_wjmE9w' },
    { videoId: 'ZbZSe6N_BXs' },
    { videoId: 'HEXWRTEbj1I' },
    { videoId: 'U9t-slLl69E' },
    { videoId: 'iik25wqIuFo' },
    { videoId: 'C0DPdy98e4c' },
    { videoId: 'YQHsXMglC9A' },
    { videoId: 'AdUw5RdyZxI' },
    { videoId: 'hTWKbfoikeg' },
    { videoId: 'NUYvbT6vTPs' },
    { videoId: 'RgKAFK5djSk' },
    { videoId: 'uelHwf8o7_U' },
    { videoId: 'EhxJLojIE_o' },
    { videoId: 'KQ6zr6kCPj8' },
    { videoId: 'MtN1YnoL46Q' },
    { videoId: 'sOnqjkJTMaA' }
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    // Animation for video containers entering viewport
    gsap.from('.video-container', {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 0.8,
      stagger: {
        amount: 0.6
      },
      scrollTrigger: {
        trigger: '.projects-content',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    // Section title animations
    gsap.from('.section-title', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.projects-content',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <div className='lg:px-12 px-6 lg:py-16 py-8 mb-[50vh]'>
      {/* Page Header */}
      <div className='pt-[35vh] mb-16'>
        <h1 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase text-center lg:text-left'>
          Projets
        </h1>
      </div>

      <div className='projects-content space-y-24'>
        {/* Teasers Section */}
        <section className='space-y-8'>
          <h2 className='section-title font-[font2] lg:text-6xl text-4xl uppercase text-center'>
            Teasers
          </h2>
          <VideoGrid 
            videos={teasers} 
            gridCols="lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
            aspectRatio="aspect-video"
          />
        </section>

        {/* Highlights Section */}
        <section className='space-y-8'>
          <h2 className='section-title font-[font2] lg:text-6xl text-4xl uppercase text-center'>
            Highlights
          </h2>
          <VideoGrid 
            videos={highlights} 
            gridCols="lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
            aspectRatio="aspect-video"
          />
        </section>
      </div>
    </div>
  )
}

export default Projects