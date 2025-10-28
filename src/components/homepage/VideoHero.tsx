import React from 'react';

const VideoHero: React.FC = () => {
  return (
    <section className="relative w-full border-b border-[#242424] bg-[#000000]">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[730px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/ddyymyvny/video/upload/v1760703716/Banner_Video_bd66ag.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> 
      </div>
    </section>
  );
};

export default VideoHero;