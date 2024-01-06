import { poppins } from "@/utils/fonts";
import CoreImage from "../../../../public/img/core.png";
import Image from "next/image";
import aryannath from "../../../../public/img/aryannath.png";
import roshni from "../../../../public/img/roshni.png";

export default function Core(){
    return (
        <main>
            <div className="-z-10 bottom-0 absolute w-full h-full overflow-hidden">
                <span className="block w-full h-full relative overflow-hidden">
                    <Image
                        src={CoreImage}
                        priority
                        placeholder="blur"
                        alt="Person coding"
                        fill={true}
                        quality={100}
                        className="object-cover mt-12 w-full h-full"
                    />
                </span>
            </div>
            <div style={{position: 'relative'}}>
                <p className={`${poppins.className} font-bold text-primary text-9xl`} style={{transform: 'rotate(-90deg)',  paddingTop:'700px', color: '#333533', translate: '-600px', position: 'absolute'}}>
                    PRESIDENTS
                </p>
            </div>
            <div>
                    <Image 
                    src={roshni}
                    alt="Roshni Agarwal's picture"
                    style={{marginLeft: '200px'}}
                    />
                    <p className={`${poppins.className} text-primary font-bold text-4xl`}style={{marginLeft: '340px', top: '365px', position:'absolute', color: '#D6D6D6'}}>
                        Roshni Agarwal 
                    </p>
                    <p className={`${poppins.className} text-primary font-bold text-4xl`}style={{marginLeft: '340px', top: '405px', position:'absolute'}}>
                        UG 25 
                    </p>
                    <Image 
                    src={aryannath}
                    alt="Aryan Nath's picture"
                    style={{marginLeft: '380px', marginTop: '72px'}}
                    />
                    <p className={`${poppins.className} text-primary font-bold text-4xl`}style={{marginLeft: '240px', top: '882px', position:'absolute', color: '#D6D6D6'}}>
                        Aryan Nath
                    </p>
                    <p className={`${poppins.className} text-primary font-bold text-4xl`}style={{marginLeft: '240px', top: '922px', position:'absolute'}} >
                        HAPPY BIRTHDAY!
                    </p>
            </div>
        </main>
    );
}