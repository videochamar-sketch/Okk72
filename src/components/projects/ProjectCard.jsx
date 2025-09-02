import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            {/* First video container - replaced image with responsive YouTube embed */}
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[30px] overflow-hidden h-full bg-black'>
                {/* Responsive video wrapper with 16:9 aspect ratio */}
                <div className='relative w-full h-full'>
                    <iframe
                        className='absolute top-0 left-0 w-full h-full object-cover'
                        src={`https://www.youtube.com/embed/${props.video1}?autoplay=0&mute=1&loop=1&playlist=${props.video1}&controls=1&modestbranding=1&rel=0`}
                        title="Project Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                {/* Improved hover overlay with better contrast for video content */}
                <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/40 backdrop-blur-sm'>
                    <h2 className='uppercase lg:text-4xl text-2xl font-[font1] border-3 lg:pt-3 pt-2 lg:px-6 px-4 text-white border-white rounded-full hover:bg-white hover:text-black transition-all duration-300'>
                        Voir le projet
                    </h2>
                </div>
            </div>
            
            {/* Second video container - replaced image with responsive YouTube embed */}
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[30px] overflow-hidden h-full bg-black'>
                {/* Responsive video wrapper with 16:9 aspect ratio */}
                <div className='relative w-full h-full'>
                    <iframe
                        className='absolute top-0 left-0 w-full h-full object-cover'
                        src={`https://www.youtube.com/embed/${props.video2}?autoplay=0&mute=1&loop=1&playlist=${props.video2}&controls=1&modestbranding=1&rel=0`}
                        title="Project Video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                {/* Improved hover overlay with better contrast for video content */}
                <div className='opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/40 backdrop-blur-sm'>
                    <h2 className='uppercase lg:text-4xl text-2xl font-[font1] border-3 lg:pt-3 pt-2 lg:px-6 px-4 text-white border-white rounded-full hover:bg-white hover:text-black transition-all duration-300'>
                        Voir le projet
                    </h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard