import Image from 'next/image'

export default function Home() {
  return (
    

  <div className='px-8 py-36  bg-slate-50 dark:bg-slate-900  text-slate-900 dark:text-white h-screen flex flex-col items-center' >
    <div className=' mx-auto flex flex-col items-center'>

    <h1 className="font-bold text-6xl ">Rapidly build modern websites  </h1>
    <h1 className="font-bold text-6xl ">    without ever leaving your HTML.     </h1>
    <p className='mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400'>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
    <button className='text-slate-100 bg-slate-900 dark:bg-sky-500 py-4 px-6 rounded-md mt-10'>Get started</button>
    </div>
  </div>
   
  )
}