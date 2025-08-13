// "use client";
// import Slider from "react-slick";

// const Experience = () => {
//   const settings = {
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <div className="w-full md:py-10 py-2 ">
//       <h2 className="md:text-3xl text-2xl  mb-8 text-gray-800 font-bold pb-5 border-b-[1px] border-gray-300">
//         Experience
//       </h2>
//       <div className="w-full border-[1px] border-gray-200  px-5 sm:py-12 py-8 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6">
//         <div className="md:w-[45%] w-full">
//           <h1 className="md:text-xl text-lg font-bold  text-gray-800">
//             Junior Frontend Developer
//             <div className="md:text-md text-sm text-gray-500">
//               Arm Education Opc Pvt Limited
//             </div>
//           </h1>
//           <p className="my-2 text-base text-gray-500">
//             September 2023 - June 2024
//           </p>
//           <div className="my-5 text-base text-gray-500">
//             <li>
//               Developed dynamic and responsive web applications using{" "}
//               <span className="text-black text-bold">Angular</span> and{" "}
//               <span className="text-black text-bold">React</span>, ensuring a
//               seamless user experience.
//             </li>
//             <li>
//               Integrated robust authentication and authorization features using
//               <span className="text-black text-bold"> Keycloak</span> in both
//               React and Next.js environments, ensuring secure user access.
//             </li>
//             <li>
//               Worked on the migration project from PHP to Java using
//               <span className="text-black text-bold">Maven</span> with
//               <span className="text-black text-bold">
//                 JUnit testing, Java Collections Framework, and XML
//               </span>
//               for configuration and data handling.
//             </li>
//           </div>

//           <div>
//             <h2 className="font-semibold text-lg text-gray-800 mt-5">
//               Tech Used
//             </h2>
//             <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
//               <i className="ci ci-2x ci-react"></i>
//               <i className="ci ci-2x ci-mongodb"></i>
//               <i className="ci ci-2x ci-ts"></i>
//               <i className="ci ci-2x ci-angular"></i>
//               <i className="ci ci-2x ci-nodejs"></i>
//               <i className="ci ci-2x ci-tailwindcss"></i>
//               <i className="ci ci-2x ci-nextjs"></i>
//               <i className="ci ci-2x ci-java"></i>
//             </div>
//           </div>
//         </div>
//         <div className="md:w-[55%] w-full overflow-hidden rounded-xl">
//           <Slider {...settings}>
//             <img
//               src={"/images/Project2/chicchat1.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//             <img
//               src={"/images/Project2/chicchat2.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//             <img
//               src={"/images/Project2/chicchat3.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//             <img
//               src={"/images/Project2/chicchat4.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//             <img
//               src={"/images/Project2/chicchat5.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//           </Slider>
//         </div>
//       </div>
//       <div className="w-full border-[1px] border-gray-200  px-5 sm:py-12 py-8 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6">
//         <div className="md:w-[45%] w-full">
//           <h1 className="md:text-xl text-lg font-bold  text-gray-800">
//             Junior Frontend Developer [ Traning & Internship ]
//             <div className="md:text-md text-sm text-gray-500">
//               Arm Education Opc Pvt Limited
//             </div>
//           </h1>
//           <p className="my-2 text-base text-gray-500">
//             March 2023 - August 2023
//           </p>
//           <div className="my-5 text-base text-gray-500">
//             <li>
//               Developed web applications using <span className="text-black text-bold">
//                 React.js, Next.js, and various UI libraries including Tailwind
//                 UI, Ant Design, and Material UI
//               </span>
//               , ensuring modern and user-friendly interfaces.
//             </li>
//             <li>
//               Integrated
//               <span className="text-black text-bold"> third-party APIs </span>to
//               extend application functionalities and developed backend services
//               using <span className="text-black text-bold">Next Auth</span>,
//               providing secure authentication solutions.
//             </li>
//             <li>
//               Enhanced application performance and user experience by leveraging
//               state-of-the-art tools and technologies.
//             </li>
//           </div>

//           <div>
//             <h2 className="font-semibold text-lg text-gray-800 mt-5">
//               Tech Used
//             </h2>
//             <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
//               <i className="ci ci-2x ci-react"></i>
//               <i className="ci ci-2x ci-mongodb"></i>
//               <i className="ci ci-2x ci-ts"></i>
//               <i className="ci ci-2x ci-angular"></i>
//               <i className="ci ci-2x ci-nodejs"></i>
//               <i className="ci ci-2x ci-tailwindcss"></i>
//               <i className="ci ci-2x ci-nextjs"></i>
//               <i className="ci ci-2x ci-java"></i>
//             </div>
//           </div>
//         </div>
//         <div className="md:w-[55%] w-full overflow-hidden rounded-xl">
//           <Slider {...settings}>
//             <img
//               src={"/images/Project2/chicchat1.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//             <img
//               src={"/images/Project2/chicchat2.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//             <img
//               src={"/images/Project2/chicchat3.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//             <img
//               src={"/images/Project2/chicchat4.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//             <img
//               src={"/images/Project2/chicchat5.png"}
//               alt=""
//               loading="lazy"
//               className="w-full md:h-[375px] rounded-xl"
//             />
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
