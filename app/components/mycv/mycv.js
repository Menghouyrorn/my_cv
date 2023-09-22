"use client";
import React from "react";
import Image from "next/image";

function Mycv() {
  return (
    <div>
      <div className="text-center mb-4 mt-2 ">
        <h1 className="text-2xl font-bold">CURRICULUM VITAE</h1>
      </div>
      <div className="flex justify-between m-auto h-[750px] w-[70%] shadow-lg">
        <div className="bg-gray-300 flex flex-col gap-y-5 w-[50%] shadow-md border-gray-600 border-spacing-1">
          <div className="flex flex-col mt-1 gap-y-3 items-center w-[100%]">
            <Image
              src="/image/me.jpg"
              height={120}
              alt="my profile"
              width={120}
            />
            <h1 className="text-lg">Rorn Menghouy</h1>
            <h1 className="font-bold text-xl">Web Developer</h1>
            <div className="flex gap-x-2">
              <h1 className="font-bold">GitHub:</h1>{" "}
              <a href="https://github.com/Menghouyrorn" target="_blank">
                https://github.com/Menghouyrorn
              </a>
            </div>
          </div>
          <div className="w=[100%] flex  flex-col justify-between ml-7">
            <h1 className="font-bold border-b-2 border-black w-[96%]">
              Personal Info
            </h1>
            <div className="flex">
              <h1 className="w-[50%] font-bold">Gender</h1>
              <p className="w-[50%]">Male</p>
            </div>
            <div className="flex ">
              <h1 className="w-[50%] font-bold">DOB</h1>
              <p className="w-[50%]">26 january 2004</p>
            </div>
            <div className="flex ">
              <h1 className="w-[50%] font-bold">Nationality</h1>
              <p className="w-[50%]">Khmer</p>
            </div>
            <div className="flex">
              <h1 className="w-[50%] font-bold">Marital</h1>
              <p className="w-[50%]">Single</p>
            </div>
          </div>
          <div className="w=[100%] flex  flex-col justify-between ml-7">
            <h1 className="font-bold border-b-2 border-black w-[96%]">
              Contact
            </h1>
            <div className="flex">
              <h1 className="w-[50%] font-bold">Phone</h1>
              <p className="w-[50%]">(+885)69361307</p>
            </div>
            <div className="flex ">
              <h1 className="w-[50%] font-bold">Telegram</h1>
              <p className="w-[50%]">
                <a href="https://t.me/Rorn_Menghouy" target="_blank">
                  https://t.me/Rorn_Menghouy
                </a>
              </p>
            </div>
            <div className="flex ">
              <h1 className="w-[50%] font-bold">Email</h1>
              <p className="w-[50%]">menghouyrorn@gmail.comm</p>
            </div>
            <div className="flex">
              <h1 className="w-[50%] font-bold">Location</h1>
              <p className="w-[50%]">Khan Sen Sok, Phnom Penh</p>
            </div>
          </div>
          <div className="w=[100%] flex  flex-col justify-between ml-7">
            <h1 className="font-bold border-b-2 border-black w-[96%]">Skill</h1>
            <div className="flex">
              <h1 className="w-[50%] font-bold">Computer Programming</h1>
              <p className="w-[50%]">C, JavaScript ,PHP</p>
            </div>
            <div className="flex ">
              <h1 className="w-[50%] font-bold">Web Development</h1>
              <p className="w-[50%]">
                HTML ,CSS, Tailwind Css, React.JS, Next.JS
              </p>
            </div>
            <div className="flex ">
              <h1 className="w-[50%] font-bold">Database</h1>
              <p className="w-[50%]"> SQL , MySQL</p>
            </div>
            <div className="flex">
              <h1 className="w-[50%] font-bold">Version Control System</h1>
              <p className="w-[50%]">GitHub</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[50%] flex flex-col gap-y-3">
          <div className="w=[100%] flex  flex-col justify-between ml-7 mt-3">
            <h1 className="font-bold border-b-2 border-black w-[96%]">
              About Me
            </h1>
            <p>
              &emsp; &emsp;I am a hardworking and ambitious individual with a
              great passion for Information Technology especially with Websites.
              I am currently in my year three of studying Information Technology
              at National University of Management.
            </p>
          </div>
          <div className="w=[100%] flex h-[10%] flex-col justify-between ml-7">
            <h1 className="font-bold border-b-2 border-black w-[96%]">
              Work Experience
            </h1>
          </div>
          <div className="w=[100%] flex  flex-col gap-y-4 justify-between ml-7">
            <h1 className="font-bold border-b-2 border-black w-[96%]">
              Education Background
            </h1>
            <div className="flex flex-col gap-y-3">
              <h1 className="w-[100%] font-bold">
                Bachelor Degree 2020– Present
              </h1>
              <p className="w-[60%] ml-40">
                National University of Management Bachelor of Information
                Technology
              </p>
            </div>
            <div className="flex ">
              <h1 className="w-[32%] font-bold">2017 - 2020 :</h1>
              <p className="w-[50%]">
                High School Diploma at Krang Yov high school
              </p>
            </div>
          </div>
          <div className="w=[100%] flex gap-y-4 flex-col justify-between ml-7">
            <h1 className="font-bold border-b-2 border-black w-[96%]">
              TRAINED COURSE
            </h1>
            <p className="w-[100%]">
              . Successfully finished Microsoft Word , Excel and Power Point
              computer classes at Win World School
            </p>
            <p className="w-[100%]">
              . Successfully finished the web front end developer course at the
              Information Technology Skill Center
            </p>
          </div>
          <div className="w=[100%] flex gap-y-4 flex-col justify-between ml-7">
            <h1 className="font-bold border-b-2 border-black w-[96%]">Languages</h1>
            <div className="flex">
              <h1 className="w-[50%] font-bold">Khmer</h1>
              <p className="w-[50%]">Native</p>
            </div>
            <div className="flex ">
              <h1 className="w-[50%] font-bold">English</h1>
              <p className="w-[50%]">
              Medium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mycv;
