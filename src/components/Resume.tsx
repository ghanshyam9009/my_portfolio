"use client";
import Link from "next/link";
const Resume = () => {
  const downloadUrl =
    "https://drive.google.com/file/d/14tJttBV4rfPW4STNaCma3bVlv8mxm8cf/view?usp=sharing";

  https: return (
    <Link
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-400 duration-200 ease-in-out text-white font-bold md:py-3 md:px-6 px-4 py-2  md:rounded-[8px] rounded-[4px] focus:outline-none focus:shadow-outline text-sm"
      download={"Ghanshyam Choudhary Resume"}
    >
      Download Resume
    </Link>
  );
};

export default Resume;
// https://drive.google.com/file/d/1yht02kC690MPfCW6sJrCdPtlWnb1cTdL/view?usp=sharing
// https://docs.google.com/document/d/1LvRPUYeAJuiwiDHMhY2sY6lFu6ISwzLB/edit?usp=drive_link&ouid=108040475473083132634&rtpof=true&sd=true