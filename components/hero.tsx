import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../lib/profile_pic.jpeg';

export default function Hero() {
  return (
    <section className='pt-24 pb-16 px-4'>
      <div className='container mx-auto max-w-6xl'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='flex-1 text-center lg:text-left'>
            <div className='inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
              <span className='text-white text-sm'>Dear Stranger,</span>
            </div>

            <p className='text-2xl md:text-3xl text-white/90 font-light mb-4 leading-relaxed'>
              My name is <span className='font-medium text-white'>Pedro</span>{' '}
              <br></br> and I am a
            </p>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
              Data Engineer &<br />
              <span className='text-[#020122]'>Software Developer</span>
            </h1>

            <div className='flex items-center justify-center lg:justify-start gap-2 mb-6'>
              <MapPin className='text-[#020122]' size={20} />
              <span className='text-white/80'>Madrid, Spain</span>
            </div>

            <p className='text-xl text-white/80 mb-8 max-w-2xl'>
              Data Engineer Intern at Electronic Arts with a background in
              Software Engineering. Passionate about building data-driven
              solutions and creating impactful software.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Button
                asChild
                size='lg'
                className='bg-[#00a6fb] hover:bg-[#0582ca] text-white'
              >
                <Link href='#contact'>
                  Get In Touch
                  <ArrowRight className='ml-2' size={20} />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='border-white text-white hover:bg-white hover:text-[#051923] bg-transparent'
              >
                <Link href='#projects'>View My Work</Link>
              </Button>
            </div>
          </div>

          <div className='flex-1 flex justify-center lg:justify-end'>
            <div className='relative'>
              <div className='w-96 h-96 bg-gradient-to-br from-[#00a6fb]/20 to-[#003554]/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center'>
                <div className='relative w-80 h-80 bg-gradient-to-br from-[#00a6fb] to-[#0582ca] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl'>
                  <Image
                    src={profilePic}
                    alt='Profile picture'
                    fill
                    className='object-cover object-center transition-transform duration-300 hover:scale-105'
                    sizes='(max-width: 768px) 256px, 256px'
                    priority
                  />
                </div>
              </div>
              <div className='absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-pulse'></div>
              <div className='absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm animate-pulse delay-75'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
