import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import YouTube from "react-youtube";

const extractVideoId = (url) => {
  const regex =
    /(?:youtube\.com\/(?:watch\?.*v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const VideoPlayer = () => {
  const [videoId, setVideoId] = useState(null);
  const playerRef = useRef(null);
  const currentLoopRef = useRef(1);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/fetch-time")
      .then((r) => r.json())
      .then((data) => {
        if (data.skipVideo) {
          router.push("/");
          return;
        }
        const id = extractVideoId(data.videoUrl);
        const loops = parseInt(data.loopCount, 10) || 1;
        setVideoId(id);
        currentLoopRef.current = loops;
      })
      .catch((err) => console.error("Error fetching config:", err));
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden && playerRef.current) {
        try {
          playerRef.current.playVideo();
        } catch {}
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const onReady = (event) => {
    playerRef.current = event.target;
    event.target.mute();
    event.target.playVideo();
  };

  const onEnd = () => {
    if (currentLoopRef.current > 1) {
      currentLoopRef.current -= 1;
      playerRef.current?.seekTo(0, true);
      playerRef.current?.playVideo();
    } else {
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };

  const onError = (event) => {
    console.error("YouTube Player Error:", event.data);
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      playsinline: 1,
    },
  };

  return (
    <div style={{ background: "black", height: "100vh", width: "100vw" }}>
      {videoId ? (
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
          onError={onError}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          iframeClassName="yt-iframe-full"
        />
      ) : (
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            paddingTop: "45vh",
          }}
        >
          Loading Video...
        </div>
      )}
      <style jsx global>{`
        .yt-iframe-full {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
