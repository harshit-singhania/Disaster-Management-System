// import {useState,useRef,useEffect} from "react";
import {useState} from "react";
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
const FooterContact =()=>{

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const NameChangeHandler=(e)=>{
    const value=e.target.value;
    setName(value);
    // console.log(name);
  }

  const EmailChangeHandler=(e)=>{
    const value=e.target.value;
    setEmail(value);
    // console.log(email)
  }

  const MessageChangeHandler=(e)=>{
    const value=e.target.value;
    setMessage(value);
    // console.log(message)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      alert("Submitted")
      await axios.post("http://localhost:8000/api/v1/users/register",{
        name:name,
        email:email,
        message:message
      })
    }
    catch(e){
      console.log("Error sending frontEnd data to backend using POST API : ",e)
    }
  };

  const formTab = [
    { 
      title:"Name",
      placeholder:"Enter Your name",
      type:"text",
      Name: "", 
      onChange:NameChangeHandler
    },
    { 
      title:"Email",
      placeholder:"Enter Your Email-ID",
      type:"text",
      Email: "" ,
      onChange:EmailChangeHandler
    }, 
    { 
      title:"Message",
      placeholder:"Enter Your Message",
      type:"textarea",
      Message: "" ,
      onChange:MessageChangeHandler
    }
  ];
  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `KIIT University, Bhubaneswar, Odisha, India`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      desription: `+91 7782037428`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      desription: `sahdebsaha909@gmail.com`,
    },
    {
      icon: <BsGlobeAmericas className="text-4xl" />,
      title: "Website",
      desription: <a href="/">Home</a>,
    },
  ];

  return (
    <>
      <div>
        <div className=" w-[100%] flex-col flex  mx-auto max-w-full bg-cover  bg-center bg-no-repeat ">
          <div className="flex justify-center sm:mt-[10%] md:mt-[8%] xs:mt-[20%]">
            <p className="font-Rajdhani text-5xl font-bold">Contact Me</p>
          </div>
      {/* Cards */}
        <div className="container mx-auto mt-[10%]">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto  ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        <div className={` w-[100%] h-screen flex-col flex  mx-auto max-w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg`} >
      <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
        <div className="lg:w-1/2 w-full p-4">
          <form action="POST" className="  shadow-lg rounded-md px-2 pt-6 pb-8 mb-4">
            <div className="flex  flex-col">
              {formTab.map((x, index) => {
                return (
                  <div key={index} className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">{x.title}</span>
                    </label>
                    {x.type === "textarea" ? (
                      <textarea
                      rows="10"
                      cols="50"
                      placeholder={x.placeholder}
                      className="input input-bordered w-full p-2"
                      onChange={x.onChange}
                    />
                    ):(
                      <input
                      type={x.type}
                      placeholder={x.placeholder}
                      className="input input-bordered w-full  p-2"
                      onChange={x.onChange}
                      />
                      )}
                      </div>
                    );
                  })}
              <div className="w-full my-4 flex justify-end ">
                <button className="btn rounded-full w-full" onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full   p-4">
          <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
             <iframe 
              className="absolute rounded-md inset-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6626320403816!2d85.81352567469679!3d20.355551210561252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091813dab8d5%3A0xa033051ccddbbcbc!2sKalinga%20Institute%20of%20Industrial%20Technology!5e0!3m2!1sen!2sin!4v1706421593896!5m2!1sen!2sin" 
              width="800" 
              height="600" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
      </div>
      </div> 
    </>
  )
}

export default FooterContact;