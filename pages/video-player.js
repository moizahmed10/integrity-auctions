import { useRef, useState } from "react";

const VideoLooper = ({ videoSrc, loopLimit, onLoopsCompleted }) => {
  const videoRef = useRef(null);
  const [loopCount, setLoopCount] = useState(0);

  const handleVideoEnd = () => {
    setLoopCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= loopLimit) {
        // Trigger the action when loop limit is reached
        onLoopsCompleted();
      }
      return newCount;
    });
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop={false} // Disable automatic looping to handle it manually
        onEnded={handleVideoEnd}
        style={{ width: "100%", maxHeight: "500px" }}
      />
      <p>Loop Count: {loopCount}</p>
    </div>
  );
};

export default function App() {
  const handleLoopsCompleted = () => {
    alert("The video has looped the specified number of times!");
    // Perform any other action here
  };

  return (
    <div>
      <h1>Video Looper</h1>
      <VideoLooper
        videoSrc="your-video-file.mp4"
        loopLimit={3} // Trigger action after 3 loops
        onLoopsCompleted={handleLoopsCompleted}
      />
    </div>
  );
}
