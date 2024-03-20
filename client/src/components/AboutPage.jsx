import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="p-0 md:p-10 grid place-items-center">
        <h1 className="mb-10 font-semibold text-3xl text-orange md:pt-0 pt-10 mt-20">About</h1>
        <p className="text-justify ml-10 leading-10 px-10 md:px-40 ml-2	">
          At Neural Transformers.ai, we are passionate about leveraging the
          power of Al and machine learning to develop intelligent solutions that
          solve real-world problems. With a team of experienced professionals
          and industry experts, we are committed to delivering innovative
          products and services that push the boundaries of technological
          advancements. Our dedication to excellence has earned us recognition
          in the industry, and we continue to strive for excellence in
          everything we do.
        </p>
      </div>
      <div className="p-10">
        <h1 className="mb-10 ml-10 md:ml-40 font-semibold text-3xl text-orange">
          How we work ?
        </h1>
        <div className="ml-15 sm:px-40 rounded-3xl  md:ml-0 px-0 ">
          <ul className="bg-litePurple  p-10 md:p-10 list-disc rounded-3xl">
            <li className="text-justify mt-4 leading-10">
              Discovery And Planning: We Collaborate Closely With Your Team To
              Understand Your Specific Requirements, Goals, And Challenges. We
              Conduct A Thorough Analysis Of Your Data Sources, Processes, And
              Infrastructure.
            </li>
            <li className="text-justify mt-4 leading-10 ">
              Solution Design: Based On The Insights Gained From The Discovery
              Phase, We Design A Customized Solution Tailored To Your Business
              Needs. We Determine The Appropriate Technologies, Algorithms, And
              Models To Achieve Optimal Results.
            </li>
            <li className="text-justify mt-4 leading-10 ">
              Development And Integration: Our Experienced Team Of Data
              Scientists And Engineers Develop And Implement The Solution,
              Ensuring Seamless Integration With Your Existing Systems And
              Infrastructure. We Follow Best Practices For Data Security And
              Privacy Throughout The Process.
            </li>
            <li className="text-justify mt-4 leading-10 ">
              Solution Design: Based On The Insights Gained From The Discovery
              Phase, We Design A Customized Solution Tailored To Your Business
              Needs. We Determine The Appropriate Technologies, Algorithms, And
              Models To Achieve Optimal Results.
            </li>
            <li className="text-justify mt-4 leading-10 ">
              Deployment And Support: Once The Solution Is Ready, We Assist With
              Its Deployment And Provide Ongoing Support And Maintenance. We
              Monitor The Solution's Performance, Make Necessary Updates, And
              Provide Technical Assistance Whenever Needed.
            </li>
          </ul>
        </div>
      </div>
      <div className="p-10">
        <h1 className="mb-10 ml-10 md:ml-40 font-semibold text-3xl text-orange">
            Why choose us?
        </h1>
        <div className="ml-15 sm:px-40 rounded-3xl  md:ml-0 px-0 ">
          <ul className="bg-litePurple  p-10 md:p-10 list-disc rounded-3xl">
            <li className="text-justify mt-4 leading-10">
            Expertise in cutting-edge technologies: Our team stays updated with the latest advancements in data science and automation technologies, allowing us to deliver innovative and effective solutions.
            </li>
            <li className="text-justify mt-4 leading-10 ">
            Customized approach: We understand that every business is unique. Hence, we tailor our services to address your specific challenges and goals, ensuring maximum impact and value.
            </li>
            <li className="text-justify mt-4 leading-10 ">
            Quality and accuracy: We prioritize delivering high-quality and accurate solutions that meet your requirements and exceed expectations
            </li>
            <li className="text-justify mt-4 leading-10 ">
            Collaborative partnership: We believe in building strong partnerships with our clients
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
