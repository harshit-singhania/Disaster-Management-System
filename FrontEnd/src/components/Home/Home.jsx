import React, { useState, useRef, useEffect } from 'react';
import Landing_Page1 from '../../Assets/Landing_Page1.jpg';
import pexels from '../../Assets/pexels-eberhard-grossgasteiger-1292115.jpg';
import { data } from '../Data/Data';
import { IoCloseCircleSharp } from '../../Assets/Icons';

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

function Home() {
  const refs = Array.from({ length: 3 }, () => useRef());
  const isVisible = refs.map((ref) => useIsVisible(ref));
  const [fade, setFade] = useState(false);
  const [selectedDisasterIndex, setSelectedDisasterIndex] = useState(null);

  const onBringGlassInfront = (index) => {
    setFade(true);
    setSelectedDisasterIndex(index);
  };

  return (
    <div className="">
      <div
        className="w-[100%] h-screen flex-col flex justify-center mx-auto max-w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg "
        style={{ backgroundImage: `url(${Landing_Page1})` }}
      >
        <div className="ml-[3%]  p-10 text-black m-auto md:w-[700px] ">
          <p className="font-Rajdhani font-bold text-4xl">Welcome to ThreatSenseAI</p>
          <p className="py-3 text-l font-Rajdhani">Rapid image analysis for precise disaster detection and immediate alerting.</p>
        </div>
      </div>

      <div
        className="w-[100%] flex-col flex justify-center mx-auto max-w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
        style={{ backgroundImage: `url(${pexels})` }}
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 m-auto gap-x-5 gap-y-5 mt-8 p-3 ml-3 mr-3">
          {data.map((item, index) => (
            <div
              ref={refs[index]}
              className={`transition-opacity ease-in duration-700 card md:w-90 sm:w-70 glass m-3 ${
                isVisible[index] ? 'opacity-100' : 'opacity-0'
              }`}
              key={index}
            >
              <figure>
                <img src={item.image} alt={item.name} />
              </figure>
              <div className={`card-body`}>
                <h2 className="card-title">{item.name}</h2>
                {/* <p>{item.description1}</p> */}
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-250"
                    onClick={() => onBringGlassInfront(index)}
                  >
                    Learn now!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex justify-center mb-[4%]">
            <div
              className={`${fade === true && selectedDisasterIndex !== null ? '' : 'hidden'} card w-[65%] glass`}
            >
              <div className="card-body">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="glass rounded-2xl  inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none "
                    onClick={() => {
                      setFade(false);
                      setSelectedDisasterIndex(null);
                    }}
                  >
                    <span className="sr-only">Close menu</span>
                    <IoCloseCircleSharp className="h-6 w-6" />
                  </button>
                </div>
                {/* <div className="">
                  {selectedDisasterIndex !== null && (
                    <div  >
                      <h2  >{data[selectedDisasterIndex].name}</h2>
                      <p>{data[selectedDisasterIndex].description2}</p>
                    </div>
                  )}
                </div> */}
                <div className="">
                {selectedDisasterIndex !== null && (
                  <div>
                    <p className='text-5xl text-[#ACE2E1] font-Rajdhani font-bold py-3'>{data[selectedDisasterIndex].name}</p>
                    <ul className='text-xl text-white font-Rajdhani'> {/* Using unordered list (ul) for bullet points */}
                      {data[selectedDisasterIndex].description2.split('.').map((point, index) => (
                        <li key={index}>{point.trim()}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
