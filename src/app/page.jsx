import Left from '@/components/Left'
import Right from '@/components/Right'
import Image from 'next/image';
import IconGitHub from '../../public/assets/icons/git-icon-g.svg'
import IconTwitter from '../../public/assets/icons/twitter-icon-g.svg'
import IconLinkdin from '../../public/assets/icons/linkdin-icon-g.svg'

export default function Home() {
  return (
    // Root Layout
    <div className='gradient-bg flex h-screen'>
      {/* // Left-fixed */}
      <div className='w-1/2 overflow-hidden flex flex-col items-center justify-around'>
        {/* Heading-container */}
        <div className='flex flex-col justify-between items-start w-2/3 mt-16'>
            {/* Name-title-passion */}
            <div>
              <h1 className='text-4xl sm:text-5xl text-white font-bold tracking-tight'>Brittany chiang</h1>
              <h3 className='mt-3 text-lg sm:text-xl text-white font-medium tracking-tight'>Senior Frontend Engineer</h3>
              <p className='mt-4 max-w-xs leading-normal font-light text-slate-500'>I build pixed-perfect, engaging, and accessible digital experiences.</p>
            </div>
            {/* side-nav-menu */}
            <div></div>
        </div>
        {/* Navigation-container */}
        <nav className='nav w-2/3'>
          <ul className='mt-16'>
            {/* About */}
            <li>
            <a href='#' className='group flex items-center py-3 active'>
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About</span>
              </a>
            </li>
            {/* Experience */}
            <li>
              <a href='#' className='group flex items-center py-3 active'>
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Experience</span>
              </a>
            </li>
            {/* Projects */}
            <li>
              <a href='#' className='group flex items-center py-3 active'>
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Projects</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Links-container */}
        <ul className='flex items-center mt-8 w-2/3 mb-16'>
          {/* Github */}
          <li className='mr-10 text-xs shrink-0 hover:-translate-y-2 transition duration-150'>
            <Image src={IconGitHub} width={30} height={30} alt="github" />
          </li>
          {/* Linkdin */}
          <li className='mr-10 text-xs shrink-0 hover:-translate-y-2 transition duration-150'>
            <Image src={IconLinkdin} width={30} height={30} alt="github" />
          </li>
          {/* Twitter */}
          <li className='mr-10 text-xs shrink-0 hover:-translate-y-2 transition duration-150'>
            <Image src={IconTwitter} width={25} height={25} alt="github" />
          </li>
        </ul>
      </div>
      {/* // Right-Scrollable */}
      <div id='content' className='w-1/2 flex flex-col justify-start items-center gap-20 overflow-y-hidden pt-32 pr-60 '>
        {/* About-section */}
        <section id='about' className='scroll-mt-24 text-lg '>
          
            <p className='mb-4 text-slate-300'>
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
            </p>
            <p className='mb-4 text-slate-300'>
            My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.

            </p>
            <p className='mb-4 text-slate-300'>
            When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.
            </p>
          
        </section>
        {/* Experience-section */}
        <div class="group flex items-start justify-start rounded-sm px-6 py-4 transition duration-200 hover:bg-slate-500 hover:bg-opacity-10 hover:backdrop:blur-md hover:backdrop:filter">
    <div class="h-max w-1/3">
      <p class="mt-1 text-xs leading-snug text-gray-400">JULY - DEC 2024</p>
    </div>
    <div class="pl-400 h-max w-full">
      <h3 class="font-medium leading-snug text-white transition duration-200 group-hover:text-pink-500">Senior Frontend Engineer, Accessebility ✧ Klaviyo</h3>

      <p class="mt-2 text-sm leading-normal text-gray-400">Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.</p>
      <p></p>
      <ul class="mt-2 flex flex-wrap">
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Ember</div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">scss</div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Javascript</div>
        </li>
        <li class="mr-1.5 mt-2">
          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">MusicKit.js</div>
        </li>
      </ul>
    </div>
  </div>
        {/* Project-section */}
        {/* technologies-section */}
        {/* note-section */}
      
      </div>
    </div>
  );
}
