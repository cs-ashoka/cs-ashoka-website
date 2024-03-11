import React from "react";
import { bayon } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import HeroImage from "../../../../public/img/aboutbg.png";
import { getSortedPostsData } from "@/lib/event-posts";
import { getPostData } from "@/lib/event-posts";
import { GalleryWithCarousel } from "@/components/carousel/carousel";
import NotFound from "@/app/not-found";
import { imageOptimizer } from "next/dist/server/image-optimizer";

// export function generateStaticParams() {
//     const eventPosts = getSortedPostsData()

//     return eventPosts.map((event) => ({
//         eventSlug: event.slug
//     }))
// }

// export function generateMetadata({ params }: { params: { eventSlug: string } }) {

//     const eventPosts = getSortedPostsData()
//     const { eventSlug } = params

//     const eventPost = eventPosts.find(event => event.slug === eventSlug)

//     if (!eventPost) {
//         return {
//             title: 'Post Not Found',
//             date: '--/--/----'
//         }
//     }

//     return {
//         title: eventPost.title,
//         date: eventPost.date,
//     }
// }

export default async function EventsPost({ params }: { params: { slug: string } }) {

  const eventPosts = getSortedPostsData()

  if (!eventPosts.find(event => event.slug === params.slug)) NotFound()

  const { title, date, contentHtml, imgList, type } = await getPostData(params.slug)
  console.log(imgList);
  // var imgList:string[] = new Array("hi")
  // const eventDate = getFormattedDate(date)

  return (
    <main className={`w-full h-fit overflow-x-hidden`}>
      <div className="-z-10 bottom-0 absolute w-full h-[86.5vh] overflow-hidden">
        <span className="block w-full h-full relative overflow-hidden">
          <Image
            src={HeroImage}
            priority
            placeholder="blur"
            alt="Person coding"
            fill={true}
            quality={100}
            className="object-cover object-bottom w-full h-full"
          />
        </span>
      </div>
      {/* <div className={`absolute ml-1/5`}>/</div> */}
      <div className={`md:w-3/5 w-5/6 mx-auto mb-10`}>
        <div className={`md:bg-white bg-primary px-10 py-3 rounded-2xl w-full mx-auto md:mt-[4vh]`}>
          <p
            className={`${bayon.className} md:text-primary text-white text-5xl md:text-8xl font-bold text-center`}
          >
            {title}
          </p>
          <p className={`${poppins.className} text-black md:text-4md font-bold text-center`}>
            {date}
          </p>
        </div>
      </div>
      <div className={`w-11/12 mx-auto mb-10`}>
        <div className={`bg-white py-5 px-10 rounded-2xl max-md:text-center mt-8`}>
          <section className={`${poppins.className} text-black md:text-4md text-justify`} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
        <br></br><br></br>
        <GalleryWithCarousel imageList = {imgList} type = {type}/>
      </div>
    </main>
  );
};

// export default EventsPost;