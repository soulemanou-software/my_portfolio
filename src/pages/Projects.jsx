import { ProjectsData } from "../components/Api/ProjectsData";
import { AiOutlineArrowRight } from "react-icons/ai";

const Project = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-full px-5 pt-32 bg-white dark:bg-slate-300">
        <div className="grid justify-center place-items-center">
          <h2 data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="4000" className="bg-[url('https://github.com/soulemanou-software/my_portfolio/blob/master/src/assets/A02.jpg?raw=true')]  md:bg-[left_bottom] bg-[left_bottom] bg-no-repeat md:bg-[length:260px] bg-[length:300px] text-5xl font-bold bg-clip-text text-transparent drop-shadow-[1.5px_-1.5px_1px_white] h-20  ">
            ./Projects
          </h2>
          <p className="text-xl">Selected projects I&apos;ve worked on in the past</p>
        </div>
        <div className="grid justify-center w-full grid-cols-1 gap-4 py-10 md:grid-cols-4 grid-rows-auto">
          {ProjectsData.map((El) => (
            <div key={El.id} className="grid bg-white border-none rounded-md shadow-2xl gridow-cols-1 grid-rows-auto">
              <img src={El.thumbnails} alt="" className="w-full h-auto rounded-t-md" />
              <div className="flex flex-col justify-between h-full p-3 border-b-4 rounded-md border-b-red-700">
                <h2 className="text-2xl font-semibold text-center">{El.title}</h2>
                <button
                  data-modal-target={`modal-${El.id}`} data-modal-toggle={`modal-${El.id}`}
                  className="my-2 items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 dark:text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white w-full"
                >
                  <span className="relative flex flex-row items-center justify-around w-full px-5 py-1 text-xl font-light transition-all duration-75 ease-in bg-white md:px-16 md:py-2 group-hover:bg-opacity-0">
                    <span>See Project</span>
                    <AiOutlineArrowRight className="text-2xl" />
                  </span>
                </button>
                {/* modal */}

                <div id={`modal-${El.id}`} tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full m-5">
                  <div className="relative w-full max-w-max max-h-max">
                    <div className="relative w-full bg-white border-red-800 rounded-lg shadow h-min border-y-4 ">
                      <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-800 hover:text-red-900 rounded-lg text-sm w-8 h-8  ml-auto inline-flex justify-center items-center dark:hover:bg-red-600 dark:hover:text-white" data-modal-hide={`modal-${El.id}`}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                      {/* content */}
                      <div className="px-6 pt-12 my-0 ">
                        <div className="flex items-center justify-between flex-rows">
                          <a href={El.livedemo} target="_blank" className="flex flex-row-reverse justify-center h-10 gap-2 p-2 font-semibold border-2 border-gray-700 rounded-md item-center w-max hover:bg-blue-700 hover:text-white hover:border-none" rel="noreferrer">
                            <span>Live Demo</span>
                          </a>
                          <a href={El.github} target="_blank" className="flex flex-row justify-center h-10 gap-2 p-2 font-semibold border-2 border-gray-700 rounded-md item-center w-max hover:bg-blue-700 hover:text-white hover:border-none" rel="noreferrer">
                            <span> GitHub </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center place-content-center ">
                        <img src={El.thumbnails} alt="" className="md:w-[24rem] my-2" />
                      </div>
                      <div className="flex flex-row flex-wrap-reverse justify-center gap-2 px-2 text-center w-fit">
                        {
                          El.languages.map((language) => (
                            <span
                              key={language}
                              className=" bg-blue-700 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-700 dark:text-white"
                            >
                              {language}
                            </span>
                          ))
                        }
                      </div>
                      <p className="p-6 text-center w-fit md:w-[30rem]">{El.description}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;