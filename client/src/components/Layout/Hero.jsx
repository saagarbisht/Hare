import { Link } from 'react-router'
import heroImg from '../../assets/hare-hero.webp'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
const Hero = () => {
  return (
    <section className='relative'>
      <img src={heroImg} alt="hare-hero-image" className='w-full h-[340px] md:h-[540px] lg:h-[640px] object-cover'/>
      <div className='absolute inset-0 bg-white/5 flex items-center justify-center'>
        <div className='text-center text-white p-6'>
          <h1 className='text-4xl md:text-9xl font-bold tracking-tight uppercase mb-4 font-outline'>Vacation <br /> Ready</h1>
          <p className='text-sm tracking-tighter md:text-lg mb-6 font-outline'>
            Explore our vacatio-ready outfit with fast worldwide shipping.
          </p>
          <Link to='#' className='bg-white/70 border border-black text-gray-900 p-2 md:px-6 rounded-full md:text-lg hover:bg-white hover:border-white transition flex items-center gap-3  w-44 mx-auto'>Shop Now <MdKeyboardDoubleArrowRight />
          </Link>
        </div>  
      </div>
    </section>
  )
}

export default Hero