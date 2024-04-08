import React,{useState,useEffect} from 'react'
import videobg from '../../Assets/videobg.mp4'
import { useSpring, animated } from 'react-spring';
import Loader from '../Loader/Loader';

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2500 },
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching or component loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
    {isLoading ? (
      <Loader/>
      ):(
      <div className=''>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/40">
          </div>
          <div className=" m-0 p-0 w-[100%] h-[100vh] ">
            <video
              src={videobg}
              autoPlay
              loop
              muted
              className="w-[100%] h-[100%] object-cover"
            ></video>
          </div>
          <animated.div style={fadeIn} className="top-0 absolute w-[100%] h-[100%] flex-col flex justify-center ">
            <div className="absolute p-10  text-white m-auto md:w-[700px]">
              <h3 className="items-center font-Rajdhani sm:text-4xl md:text-5xl text-5xl font-bold">
                Welcome to ThreatSense AI
              </h3>
              <p className="text-xl py-6 font-Rajdhani flex text-justify">
                Welcome to our Disaster Management System, a cutting-edge application designed to assist in mitigating the impact of natural disasters such as earthquakes, wildfires, and floods. Our system utilizes advanced machine learning algorithms to analyze images and assess the severity of the disaster, as well as identify the type of disaster and the number of individuals affected.
            </p>
            </div>
          </animated.div>
          <div className="max-w-[1200px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="grid grid-cols-2 h-[90vh] grid-rows-3">
            <img
              className="row-span-2 p-2 w-full h-full object-cover"
              src="https://images.pexels.com/photos/11518764/pexels-photo-11518764.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="/"
            />
            <img
              className=" w-full h-full p-2 object-cover"
              src="https://images.pexels.com/photos/15804048/pexels-photo-15804048/free-photo-of-ambulance-at-the-earthquake-site.jpeg"
              alt="/"
            />
            <img
              className="row-span-2 p-2 w-full h-full object-cover"
              src="https://lexipol.brightspotcdn.com/dims4/default/88917c2/2147483647/strip/true/crop/1200x675+0+60/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk1-prod-lexipol.s3.us-east-2.amazonaws.com%2Fbrightspot%2F8b%2F28%2Fb3ceec9f4f53d0f5722435c6dda4%2Fap21234052853752.jpg"
              alt="/"
            />
            <img
              className="row-span-2 w-full p-2 h-full object-cover"
              src="https://images.pexels.com/photos/14776524/pexels-photo-14776524.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-14776524.jpg&fm=jpg"
              alt="/"
            />
            <img
              className="w-full h-full p-2 object-cover"
              src="https://media.istockphoto.com/id/1327617934/photo/aerial-view-of-flooded-houses-with-dirty-water-of-dnister-river-in-halych-town-western-ukraine.jpg?b=1&s=612x612&w=0&k=20&c=QVFsWng7-JSzyuDbtDHpyzqqcfW6Wt230hG441wOGR4="
              alt="/"
            />
          </div>

          {/* Right Side */}

          <div className=" flex flex-col justify-center">
            <p className="font-bold text-5xl md:text-5xl font-Rajdhani w-full py-3">
              Welcome to ThreatSense AI
            </p>
            <div className="">
              <div>
                <p className="text-xl font-Rajdhani flex text-justify py-3">
                1.Saving Lives: Rapid response and accurate assessment of disaster situations can help save countless lives by ensuring timely evacuation and medical assistance.
                </p>
              </div>
              <div>
                <p className="text-xl font-Rajdhani flex text-justify py-3">
                2.Minimizing Damage: By promptly identifying the type and severity of a disaster, appropriate measures can be taken to minimize its impact on infrastructure and the environment.
                </p>
              </div>
              <div>
                <p className="text-xl font-Rajdhani flex text-justify py-3">
                3.Resource Allocation: Efficient allocation of resources such as emergency personnel, medical supplies, and equipment is essential for managing disasters effectively and maximizing relief efforts.
                </p>
              </div>
              <div>
                <p className="text-xl font-Rajdhani flex text-justify py-3">
                4.Community Resilience: A well-prepared and coordinated response to disasters fosters community resilience, enabling individuals and communities to recover and rebuild in the aftermath of a crisis. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default About