import React from 'react';

const VideoFrame = () => {
  const videoUrl = "https://youtu.be/r64mqNS8G58?si=HUlsqmTS1bh1ZYW6"; 

  // Extract the video ID from the URL
  const videoId = videoUrl.includes("youtu.be")
    ? videoUrl.split("youtu.be/")[1].split("?")[0]
    : videoUrl.split("v=")[1]?.split("&")[0];

  return (
    <div className="p-3">
      <div className="h-auto md:h-[90vh] border-none rounded-xl text-white flex items-center justify-center py-12 md:py-0 mx-[10px]">
        <div className="container mx-auto flex items-center justify-center w-full h-full">
          <div className="relative w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;

