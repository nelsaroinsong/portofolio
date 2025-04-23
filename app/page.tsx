//components
import AnimatedContent from './components/AnimatedContent/AnimatedContent';

//data
import { CodeBlockDemo } from './data/code';
import { ThreeDMarqueeDemo } from './data/three';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Section 1 */}
      <section className="relative min-h-screen px-4 sm:px-8 py-8 overflow-hidden">
      
        <div className="grid h-full w-full grid-cols-6 grid-rows-6 gap-1 text-black">
          {/* Top */}
          <div className="col-span-6 items-center justify-center">
            <AnimatedContent distance={100}>
              <p className="ml-4 -mt-1 text-sm sm:text-base">www</p>
            </AnimatedContent>
          </div>
          {/* Middle */}
          <div className="col-span-6 row-span-2 row-start-2 flex items-center justify-center">
            <div className="flex flex-col sm:flex-row mb-10 sm:mb-20">
              <AnimatedContent distance={100}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-thin tracking-tighter sm:mr-4 md:mr-20">portofolio</h1>
              </AnimatedContent>
              <AnimatedContent distance={150}>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-thin tracking-tighter mt-2 sm:mt-0">dev</h3>
              </AnimatedContent>
            </div>
          </div>
          {/* Bottom */}
          <div className="col-span-6 sm:col-span-2 row-span-2 row-start-4 flex items-center justify-center">
            <AnimatedContent distance={220}>
              <img 
                src="/2.png" 
                alt="icon" 
                className="object-cover max-w-full max-h-full w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 pb-4 sm:pb-8 md:pb-16" 
              />
            </AnimatedContent>
          </div>
          <div className="col-span-6 sm:col-span-2 row-span-2 sm:col-start-3 row-start-5 sm:row-start-4 flex items-center justify-center">
            <AnimatedContent distance={120}>
              <h1 className="text-sm md:text-md font-thin tracking-tight mt-0 sm:mt-[70px] md:mt-[140px]">by Lionel Kisra Injili</h1>
            </AnimatedContent>
          </div>
          <div className="col-span-6 sm:col-span-2 row-span-2 sm:col-start-5 row-start-6 sm:row-start-4 flex items-center justify-center">
            <AnimatedContent distance={130}>
              <img 
                src="/1.png" 
                alt="icon" 
                className="object-cover max-w-full max-h-full w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mt-2 sm:mt-0" 
              />
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen px-4 py-8 overflow-hidden bg-white">
        {/* text left */}
        <AnimatedContent distance={200}>
          <div className="flex flex-col justify-center text-left text-[#1e2125] leading-none pl-0 sm:pl-4 mt-8 md:mt-16">
            <AnimatedContent distance={100}>
              <p className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-thin tracking-tighter">
                technology
              </p>
            </AnimatedContent>
            <AnimatedContent distance={150}>
              <p className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-thin tracking-tighter -mt-1 sm:-mt-3 md:-mt-5">
                stack, 
              </p>
            </AnimatedContent>
            <AnimatedContent distance={200}>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-thin tracking-tighter -mt-1 sm:-mt-0">
                for website development
              </p>
            </AnimatedContent>
            <AnimatedContent distance={200}>
              <p className="text-xs sm:text-sm font-thin tracking-tighter mt-16 sm:mt-32 md:mt-[240px]">
                started being a web developer since 2023 "
              </p>
            </AnimatedContent>
          </div>
        </AnimatedContent>

        {/* right */}
        <div className="flex flex-col justify-center items-center md:items-start h-full mt-12 md:mt-0">
          <div className="w-full -ml-0 sm:-ml-4 md:-ml-8">
            <AnimatedContent distance={120}>
              <CodeBlockDemo />
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="relative min-h-screen overflow-hidden mx-4 sm:mx-8 md:mx-12 my-0">
        <ThreeDMarqueeDemo />
      </section>

      {/* Section 4 */}
      <section className="relative min-h-screen overflow-hidden px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* title */}
            <div className="col-span-1 md:col-span-2">
              <AnimatedContent distance={100}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-tighter text-center md:text-left mb-8 sm:mb-12">
                  connect with me
                </h2>
              </AnimatedContent>
            </div>
            
            {/* sosmed */}
            <div className="space-y-8">
              <AnimatedContent distance={120}>
                <div className="flex flex-col space-y-6">
                  <p className="text-xl sm:text-xl font-thin tracking-tighter">social media.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                    {/* github */}
                    <a 
                      href="https://github.com/nelsaroinsong" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 border border-gray-200 hover:border-black transition-colors duration-300 group rounded-sm"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <svg  
                          xmlns="http://www.w3.org/2000/svg"  
                          width="24"  
                          height="24"  
                          viewBox="0 0 24 24"  
                          fill="none"  
                          stroke="currentColor"  
                          strokeWidth="2"  
                          strokeLinecap="round"  
                          strokeLinejoin="round"  
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github group-hover:scale-110 transition-transform duration-300"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                        <span className="text-sm font-thin group-hover:font-normal transition-all duration-300">Github</span>
                      </div>
                    </a>

                    {/* ig */}
                    <a 
                      href="https://instagram.com/nelsaroinsong" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 border border-gray-200 hover:border-black transition-colors duration-300 group rounded-sm"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram group-hover:scale-110 transition-transform duration-300"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          <path d="M16.5 7.5v.01" />
                        </svg>
                        <span className="text-sm font-thin group-hover:font-normal transition-all duration-300">Instagram</span>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedContent>
            </div>
           </div>
        </div> 
      </section>
    </div>
  );
}