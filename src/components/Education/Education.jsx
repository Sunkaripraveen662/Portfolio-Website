import React from "react";

import {PiCertificate } from "react-icons/pi";

const Education = () => {
  return (
    <div id="Education" className="p-2 md:p-16">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Education</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-2 items-center">
          <PiCertificate color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">University PG College Secunderabad </h2>
              <p className="text-sm leading-tight font-thin">
                Nov 2022 - Oct 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Master of Computer Applications</li>
                <li>- 7.3 CGPA</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-2 items-center">
          <PiCertificate color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Government Degree college Medak</h2>
              <p className="text-sm leading-tight font-thin">
                Jul 2019 - Aug 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Bachelor of Science.</li>
                <li>- 8.23 CGPA</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-2 items-center">
          <PiCertificate color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Geetha Junior College Medak</h2>
              <p className="text-sm leading-tight font-thin">
                Jun 2017 - Mar 2019
              </p>
              <ul className="text-sm p-2">
                <li>- Intermediate.</li>
                <li>- 84%</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-2 items-center">
          <PiCertificate color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">ZPHS Maktha Bhoopathipur</h2>
              <p className="text-sm leading-tight font-thin">
                Jul 2016 - Mar 2017
              </p>
              <ul className="text-sm p-2">
                <li>- Secondary Education.</li>
                <li>- 8.5 CGPA</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;