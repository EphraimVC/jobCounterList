// import React, { useState } from "react";
// import { currentDate } from "./Helpers/Date";

// function Test(props) {
//     const mainArrValue = props.arrVal;

//     const filtering = () => {
//         const formInputValue = props.date;
//         const getDate = currentDate();
//         return formInputValue === getDate;
//     };

//     let sameDateArr = mainArrValue.filter(filtering);
//     const count = sameDateArr.length;

//     return <div></div>;
// }

// function Test(props) {
//     const [searchWord, setSearchWord] = useState();
//     const values = props.arrVal;

//     const extractComps = (arr, prop) => {
//         let comps = arr.map((item) => item[prop]);
//         return comps;
//     };

//     const compArray = extractComps(values, "comp");

//     console.log(compArray);

//     const comparing = (wordCompare) => {
//         return wordCompare == searchWord;
//     };

//     const selected = compArray.find(comparing);

//     console.log(selected);

//     return (
//         <div className="form-control mt-2 ml-8 ">
//             <div className="input-group ">
//                 <input
//                     type="text"
//                     placeholder="Search…"
//                     className="input input-bordered"
//                     onChange={(e) => {
//                         setSearchWord(e.target.value);
//                     }}
//                 />
//                 <button className="btn btn-square">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                         />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }
// export default Test;

// TASK
// FIND A CARD WITH THE SAME VALUE THAT IS INPUT ON THE SEARCH Bar

// how to find the value?
//  using a find array method to finds the exact value
//     how to compare the values ?

//         how to select the right  card?

// if (searchWord === "") {
//     return (
//         <div className="bg-gray-100 w-96 rounded-2xl p-2 sm:mb-12">
//             <div className="form-control mt-2 ml-8 ">
//                 <div className="input-group ">
//                     <input
//                         type="text"
//                         placeholder="Search…"
//                         className="input input-bordered"
//                         onChange={(e) => {
//                             setSearchWord(e.target.value);
//                         }}
//                     />
//                     <button className="btn btn-square">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                             />
//                         </svg>
//                     </button>
//                     <button className="btn btn-secondary">
//                         <FaTrashAlt />
//                     </button>
//                 </div>
//             </div>

//             <div className="divider"></div>
//             <div className="list m-4">
//                 <ul>
//                     {values.map(({ key, comp, titles, desc, dat }) => {
//                         return (
//                             <li key={key}>
//                                 <Card
//                                     company={comp}
//                                     title={titles}
//                                     description={desc}
//                                     date={dat}
//                                 />
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// } else {
//     return (
//         <div className="bg-gray-100 w-96 rounded-2xl p-2 sm:mb-12">
//             <div className="form-control mt-2 ml-8 ">
//                 <div className="input-group ">
//                     <input
//                         type="text"
//                         placeholder="Search…"
//                         className="input input-bordered"
//                         onChange={(e) => {
//                             setSearchWord(e.target.value);
//                         }}
//                     />
//                     <button className="btn btn-square">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                             />
//                         </svg>
//                     </button>
//                     <button className="btn btn-secondary">
//                         <FaTrashAlt />
//                     </button>
//                 </div>
//             </div>

//             <div className="divider"></div>
//             <div className="list m-4">
//                 <ul>
//                     {result.map(({ key, comp, titles, desc, dat }) => {
//                         return (
//                             <li key={key}>
//                                 <Card
//                                     company={comp}
//                                     title={titles}
//                                     description={desc}
//                                     date={dat}
//                                 />
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// }

const removedJobArr = values.splice(x, 1);




    