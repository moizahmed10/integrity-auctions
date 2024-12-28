import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loopCount, setLoopCount] = useState(1);
  const [countDownTime, setCountdownTime] = useState(new Date());
  const [transitionTime, setTransitionTime] = useState(2.2);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoPlayerRef = useRef(null);
  const currentLoopRef = useRef(loopCount);
  const router = useRouter();

  useEffect(() => {
    const fetchTimeSettings = async () => {
      try {
        const response = await fetch("/api/fetch-time");
        const data = await response.json();
        setTransitionTime(parseInt(data.transitionTime, 10));
        setCountdownTime(data.countdownTime);
        setVideoUrl(data.videoUrl);
        setLoopCount(parseInt(data.loopCount, 10));
        currentLoopRef.current = parseInt(data.loopCount, 10);
      } catch (error) {
        console.error("Error fetching time settings:", error);
      }
    };

    fetchTimeSettings();
  }, []);

  useEffect(() => {
    if (!videoUrl) return;

    loadYouTubeAPI();
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVideoPlaying(false);
      } else {
        if (videoPlayerRef.current) {
          videoPlayerRef.current.playVideo();
        }
        setIsVideoPlaying(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [videoUrl]);

  const loadYouTubeAPI = () => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }
  };

  const initializePlayer = () => {
    if (!window.YT || !window.YT.Player) {
      console.error("YouTube API is not ready");
      return;
    }

    const videoId = extractVideoId(videoUrl);
    if (!videoId) {
      console.error("Invalid YouTube video URL", videoUrl);
      return;
    }

    if (!videoPlayerRef.current) {
      videoPlayerRef.current = new window.YT.Player("youtube-player", {
        videoId: videoId,
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: handleVideoStateChange,
        },
        playerVars: {
          autoplay: 1,
          mute: 0,
          loop: 1,
          modestbranding: 1,
          controls: 0,
          rel: 0,
        },
      });
    }
  };

  const handleVideoStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      if (currentLoopRef.current > 1) {
        currentLoopRef.current -= 1;
        event.target.seekTo(0);
        event.target.playVideo();
      } else {
        router.push("/videoplayer");
      }
    }
  };

  const extractVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/?[\w-]{11}|(?:.*[?&]v=)|(?:\/.*\/)([\w-]{11}))(?![^&])|youtu\.be\/([\w-]{11}))/;
    const match = url.match(regex);
    if (match && (match[1] || match[2])) {
      return match[1] || match[2];
    } else {
      console.error("Failed to extract video ID from URL:", url);
      return null;
    }
  };

  return (
    <div style={{ background: "black", height: "100vh", width: "100vw" }}>
      {isVideoPlaying && videoUrl ? (
        <div className="fullscreenVideo">
          <div
            id="youtube-player"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          ></div>
        </div>
      ) : (
        <div style={{ color: "white", textAlign: "center", fontSize: "30px" }}>
          Video Finished or Paused
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
