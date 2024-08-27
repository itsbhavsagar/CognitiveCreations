// import React from "react";

// const Projects = () => {
//   return (
//     <div>
//       <section className="bg-white py-6 sm:py-8 lg:py-12">
//         <div className="mx-auto max-w-screen-xl px-4 md:px-8">
//           <div className="relative mb-10 pt-8 md:mb-16">
//             <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-800 md:mb-6 md:text-4xl">
//               Integration Guides
//             </h2>
//             <span className="absolute left-1/2 top-0 rounded-lg bg-cyan-400 px-2 text-white">
//               NEW
//             </span>
//           </div>

//           <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
//             <article className="">
//               <a
//                 className="block rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-2 transition hover:scale-105"
//                 href="#"
//               >
//                 <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
//                   12 Ways to Utilize Zapier for Business Productivity
//                 </h2>
//                 <div className="flex items-center rounded-md px-4 py-3">
//                   <img
//                     className="h-10 w-10 rounded-full object-cover"
//                     src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
//                     alt="Simon Lewis"
//                   />
//                   <p className="ml-4 w-56">
//                     <strong className="block text-lg font-medium text-white">
//                       Simon Lewis
//                     </strong>
//                     <span className="text-xs text-white">
//                       {" "}
//                       Founder of 2 Startups{" "}
//                     </span>
//                   </p>
//                 </div>
//               </a>
//             </article>

//             <article className="">
//               <a
//                 className="block rounded-lg bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 p-2 transition hover:scale-105"
//                 href="#"
//               >
//                 <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
//                   12 Ways to Utilize Zapier for Business Productivity
//                 </h2>
//                 <div className="flex items-center rounded-md px-4 py-3">
//                   <img
//                     className="h-10 w-10 rounded-full object-cover"
//                     src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
//                     alt="Simon Lewis"
//                   />
//                   <p className="ml-4 w-56">
//                     <strong className="block text-lg font-medium text-white">
//                       Simon Lewis
//                     </strong>
//                     <span className="text-xs text-white">
//                       {" "}
//                       Founder of 2 Startups{" "}
//                     </span>
//                   </p>
//                 </div>
//               </a>
//             </article>

//             <article className="">
//               <a
//                 className="block rounded-lg bg-gradient-to-r from-purple-500 via-indigo-400 to-indigo-400 p-2 transition hover:scale-105"
//                 href="#"
//               >
//                 <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
//                   12 Ways to Utilize Zapier for Business Productivity
//                 </h2>
//                 <div className="flex items-center rounded-md px-4 py-3">
//                   <img
//                     className="h-10 w-10 rounded-full object-cover"
//                     src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
//                     alt="Simon Lewis"
//                   />
//                   <p className="ml-4 w-56">
//                     <strong className="block text-lg font-medium text-white">
//                       Simon Lewis
//                     </strong>
//                     <span className="text-xs text-white">
//                       {" "}
//                       Founder of 2 Startups{" "}
//                     </span>
//                   </p>
//                 </div>
//               </a>
//             </article>

//             <article className="">
//               <a
//                 className="block rounded-lg bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-400 p-2 transition hover:scale-105"
//                 href="#"
//               >
//                 <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
//                   12 Ways to Utilize Zapier for Business Productivity
//                 </h2>
//                 <div className="flex items-center rounded-md px-4 py-3">
//                   <img
//                     className="h-10 w-10 rounded-full object-cover"
//                     src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
//                     alt="Simon Lewis"
//                   />
//                   <p className="ml-4 w-56">
//                     <strong className="block text-lg font-medium text-white">
//                       Simon Lewis
//                     </strong>
//                     <span className="text-xs text-white">
//                       {" "}
//                       Founder of 2 Startups{" "}
//                     </span>
//                   </p>
//                 </div>
//               </a>
//             </article>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;

import React from "react";

const projects = [
  {
    title: "12 Ways to Utilize Zapier for Business Productivity",
    colorFrom: "orange-500",
    colorVia: "orange-400",
    colorTo: "yellow-400",
    author: "Simon Lewis",
    authorTitle: "Founder of 2 Startups",
    imgSrc: "/images/y9s3xOJV6rnQPKIrdPYJy.png",
    imgAlt: "Simon Lewis",
  },
  {
    title: "12 Ways to Utilize Zapier for Business Productivity",
    colorFrom: "blue-500",
    colorVia: "sky-400",
    colorTo: "cyan-400",
    author: "Simon Lewis",
    authorTitle: "Founder of 2 Startups",
    imgSrc: "/images/y9s3xOJV6rnQPKIrdPYJy.png",
    imgAlt: "Simon Lewis",
  },
  {
    title: "12 Ways to Utilize Zapier for Business Productivity",
    colorFrom: "purple-500",
    colorVia: "indigo-400",
    colorTo: "indigo-400",
    author: "Simon Lewis",
    authorTitle: "Founder of 2 Startups",
    imgSrc: "/images/y9s3xOJV6rnQPKIrdPYJy.png",
    imgAlt: "Simon Lewis",
  },
  {
    title: "12 Ways to Utilize Zapier for Business Productivity",
    colorFrom: "fuchsia-500",
    colorVia: "pink-500",
    colorTo: "rose-400",
    author: "Simon Lewis",
    authorTitle: "Founder of 2 Startups",
    imgSrc: "/images/y9s3xOJV6rnQPKIrdPYJy.png",
    imgAlt: "Simon Lewis",
  },
];

const ProjectCard = ({
  title,
  colorFrom,
  colorVia,
  colorTo,
  author,
  authorTitle,
  imgSrc,
  imgAlt,
}) => (
  <article>
    <a
      className={`block rounded-lg bg-gradient-to-r from-${colorFrom} via-${colorVia} to-${colorTo} p-2 transition hover:scale-105`}
      href="#"
    >
      <h2 className="mx-4 mt-4 mb-10 font-serif text-2xl font-semibold text-white">
        {title}
      </h2>
      <div className="flex items-center rounded-md px-4 py-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={imgSrc}
          alt={imgAlt}
        />
        <p className="ml-4 w-56">
          <strong className="block text-lg font-medium text-white">
            {author}
          </strong>
          <span className="text-xs text-white"> {authorTitle} </span>
        </p>
      </div>
    </a>
  </article>
);

const Projects = () => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="relative mb-10 pt-8 md:mb-16">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-gray-800 md:mb-6 md:text-4xl">
          Integration Guides
        </h2>
        <span className="absolute left-1/2 top-0 rounded-lg bg-cyan-400 px-2 text-white">
          NEW
        </span>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
