import Left from '@/components/Left'
import Right from '@/components/Right'

export default function Home() {
  return (
    // Root Layout
    <div className='gradient-bg flex h-screen px-24'>
      {/* // Left-fixed */}
      <div className='w-1/2 overflow-hidden flex flex-col items-center justify-around'>
        {/* upper-container */}
        <div className='flex flex-col justify-between items-start h-1/3 w-2/3 border border-red-300'>
            {/* Name-title-passion */}
            <div>
              <h1 className='text-4xl sm:text-5xl text-white font-bold tracking-tight'>Brittany chiang</h1>
              <h3 className='mt-3 text-lg sm:text-xl text-white font-medium tracking-tight'>Senior Frontend Engineer</h3>
              <p className='mt-4 max-w-xs leading-normal text-slate'>I build pixed-perfect, engaging, and accessible digital experiences.</p>
            </div>
            {/* side-nav-menu */}
            <div></div>
        </div>
        {/* lower-container */}
        <div className='h-[80px] w-2/3 border border-blue-300'>Logos</div>
      </div>
      {/* // Right-Scrollable */}
      <div className='w-1/2 flex flex-col justify-center items-center overflow-y-scroll '>
        <h1 className='text-4xl text-white font-bold'>Right</h1>
      
      </div>
    </div>
  );
}
