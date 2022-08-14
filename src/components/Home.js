// import React from 'react'


// const Home = () => {
//   return (
//     // <div>
//     //   <div className="hero min-h-screen bg-base-200">
//     //     <div className="hero-content flex-col lg:flex-row-reverse">
//     //       <img
//     //         src="https://placeimg.com/260/400/arch"
//     //         className="max-w-sm rounded-lg shadow-2xl"
//     //       />
//     //       <div>
//     //         <h1 className="text-5xl font-bold">Box Office News!</h1>
//     //         <p className="py-6">
//     //           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//     //           excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//     //           et a id nisi.
//     //         </p>
//     //         <button className="btn btn-primary">Get Started</button>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>


//     <div class="bg-white dark:bg-gray-800">
        

//         <div class="container px-6 py-16 mx-auto">
//             <div class="items-center lg:flex">
//                 <div class="w-full lg:w-1/2">
//                     <div class="lg:max-w-lg">
//                         <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Subscribe To The <span class="text-blue-500">Newsletter</span></h1>

//                         <p class="mt-4 text-gray-600 dark:text-gray-400">be the first to knows when our <span class="font-medium text-blue-500">Brand</span> is live</p>

//                         <div class="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                            
//                             <button class="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
//                                 Subscribe
//                             </button>
//                         </div>
//                     </div>
//                 </div>
        
//                 <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
//                     <img class="w-full h-full max-w-md" src="https://placeimg.com/1000/800/arch" alt="#"/>
//                 </div>
//             </div>
//         </div>
//     </div>

//   );
// }

// export default Home;

import React from "react";
import ItemListConteiner from "./ItemListConteiner";
const Home = () => {
    
    return (
        <div>
            <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family"/>
                <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img tabIndex="0" role="img" aria-label="people smiling" className="mx-auto" src="https://i.imgur.com/kr1VL6N.png"  alt="people smiling"/>
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full ml-5">
                        <p tabIndex="0" className="text-indigo-700 uppercase text-2xl mb-4">Tu tienda online</p>
                        <h1 tabIndex="0" className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">React Js & Tailwind</h1>
                        <p tabIndex="0" className="text-gray-800 font-regular mb-8">COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare products is developed and rigorously tested with leading scientists. Indulge yourself in a luxurious and sensorial skincare experience. Cutting-edge innovations, proven by Science.</p>
                        
                    </div>
                </div>
            </div>
        </section>
        <ItemListConteiner />
        </div>
    );
};
export default Home;
