import React from 'react';

const VideoHero: React.FC = () => {
  return (
    <section className="relative w-full bg-gray-900">
      <div className="relative w-full h-[730px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/ddyymyvny/video/upload/v1760587521/210317_small_bgrn0n.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        

        
      </div>
    </section>
  );
};

export default VideoHero;