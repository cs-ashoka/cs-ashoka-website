import { bayon } from '@/utils/fonts';

export default function Home() {
  return (
    <div className={`flex w-full overflow-hidden`}>
      <div className='background w-[100vw] h-[86.5vh] sm:h-[86.25vh] lg:h-[86.05vh]'></div>
      <div className={`px-5 mx-auto sm:mx-0 sm:pl-[12vw] mt-[4vh] md:mt-[11vh]`}>
        <p className={`${bayon.className} text-primary text-7xl md:text-8xl font-bold text-shadow`}>CS SOCIETY</p>
        <p className={`mx-auto sm:mx-0 my-2 py-[3px] px-6 rounded-full font-extralight bg-secondary w-max drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)]`}>
          Read More
        </p>
      </div>
    </div>
  );
}  
                                  