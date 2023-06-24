import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        WHY CHOOSE US
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Our Values
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Collaborative Learning Community</p>
          <p className="text-gray-500 text-center">
            Join our website for interactive knowledge sharing. Connect with peers, ask questions, and collaborate for enhanced learning.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Extensive Note Library</p>
          <p className="text-gray-500 text-center">
            Access a wide range of public notes on various subjects. Find summaries, study guides, and explanations to support your studies.
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Instant Teacher Support</p>
          <p className="text-gray-500 text-center">
            Get immediate assistance from qualified teachers through live video sessions. Clear your doubts and receive expert guidance in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
