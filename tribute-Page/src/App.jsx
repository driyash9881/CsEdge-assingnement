import { useState } from 'react'
import image from './assets/rabindranaath.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-100% flex justify-center  h-[200vh]'>
      <div className='w-[70%] p-4 rounded-3xl h-[100%] bg-white shadow-2xl shadow-[#616161] border-2 border-[#403f3da0] '>
        <div className='w-[100%] h-[30%]'>
          <img src={image} className=' opacity-80 w-[100%] rounded-3xl h-[100%] 'height={20}  alt="img" />
          <div className='p-5'>
            <h1 className='text-[3em] px-5'>Rabindranath Tagore</h1>
            <p className='text-base  theme mb-5'>The Visionary Poet, Writer, and Nobel Laureate</p>
          </div>
           <div className='text-left flex flex-col gap-5 px-5 text-lg font-sans'>
            <p>
            Rabindranath Tagore <span className='border-b-2 text-[#4e4c4c] bg-yellow-200 p-1 border-[#1b1c1fde]'>(May 7, 1861 - August 7, 1941) </span>  was a polymath from India, acclaimed as one of the greatest literary figures of the 20th century. Known primarily as a poet, Tagore was also a novelist, playwright, painter, philosopher, and musician. His profound literary works, which blend traditional Indian and modern Western ideas, played a significant role in shaping modern Bengali literature and music.
            </p>

            <p>
            Tagore's poetic prowess earned him the Nobel Prize in Literature in
            <span className='border-b-2 text-[#4e4c4c] bg-yellow-200 p-1 border-[#1b1c1fde]'>1913</span> , making him the first non-European to receive the honor. His creations, especially his poetry, explore themes of nature, spirituality, and humanism. Beyond his literary contributions, Tagore's efforts in education and cultural reform have left an indelible mark on Indian society and the world.
            </p>

            <p>
            Tagore's legacy continues to inspire and resonate globally, with his writings and music celebrated for their lyrical beauty and philosophical depth. His contributions to literature and culture make him an enduring symbol of creativity, intellect, and humanitarian values.
            </p>
           </div>

           <div>
            <h3 className='text-2xl text-left mt-5 font-medium  px-8'>
            Timeline of Rabindranath Tagore's Life
            </h3>
            <div className='border-b w-[52%] ml-10 bg-black h-[0.1em]'></div>
            <div className='text-left ml-14 mt-5'>
            <p className='span'> 
              <span className='text-lg font-sans p-1 font-semibold'>1861: </span>
               Born on May 7 in Calcutta (now Kolkata), British India.</p>
            <p className='span'>   <span className='text-lg font-sans p-1 font-semibold'>1861: </span> Becomes the first non-European to win the Nobel Prize in Literature for his work "Gitanjali" (Song Offerings).</p>
            <p className='span'>   <span className='text-lg font-sans p-1 font-semibold'>1913: </span> Travels to England to study law but returns without completing his  studies</p>
             <p className='span'>   <span className='text-lg font-sans p-1 font-semibold'>1915: </span> Knighted by the British Crown but renounces the title in 1919 in protest against the Jallianwala Bagh massacre.</p>
             <p className='span'>   <span className='text-lg font-sans p-1 font-semibold'>1921: </span> Establishes Visva-Bharati University in Santiniketan, emphasizing a holistic and inclusive approach to education.</p>
             <p className='span'>   <span className='text-lg font-sans p-1 font-semibold'>1941: </span> Passes away on August 7 in Calcutta, British India.</p>
            </div>

            <div className='theme text-[#4e4c4c] bg-yellow-50 leading-6 border-l-4 border-[#787777] mt-11 ml-8 p-4 text-left text-[0.9em]'>
      “Where the mind is without fear and the head is held high; Where knowledge is free; Where the world has not been broken up into fragments by narrow domestic walls; ... Into that heaven of freedom, my Father, let my country awake.” <span className='font-semibold '>  - Rabindranath Tagore</span>
      </div>
           </div>
        </div>

      </div>
     
     </div>
    </>
  )
}

export default App
