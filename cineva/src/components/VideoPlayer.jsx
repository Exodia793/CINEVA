import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import { Box, Typography, Button } from "@mui/material";
import VideoControls from "./VideoControls";

const opts = {
  width: "100%",
  height: "100%",
  playerVars: { controls: 0, rel: 0, modestbranding: 1, playsinline: 1 },
};

function VideoPlayer({ videoId }) {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  const handleReady = (event) => {
    const p = event.target;
    setPlayer(p);
    setDuration(p.getDuration());
    setVolume(p.getVolume());
  };

  const handleStateChange = (event) => {
    setIsPlaying(event.data === 1);
    setDuration(event.target.getDuration());
  };

  useEffect(() => {
    if (!player || !isPlaying) return;
    const timer = setInterval(() => {
      setCurrentTime(player.getCurrentTime());
    }, 500);
    return () => clearInterval(timer);
  }, [player, isPlaying]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const handlePlayPause = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const handleVolumeChange = (value) => {
    if (!player) return;
    player.setVolume(value);
    setVolume(value);
  };

  const handleSeek = (value) => {
    if (!player) return;
    player.seekTo(value, true);
    setCurrentTime(value);
  };

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  if (hasError) {
    return (
      <Box
        sx={{
          p: 4,
          textAlign: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
        }}
      >
        <Typography gutterBottom>
          Trailer tidak dapat diputar di sini.
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          Tonton di YouTube
        </Button>
      </Box>
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        bgcolor: "#000",
        borderRadius: isFullscreen ? 0 : 2,
        overflow: "hidden",
        border: isFullscreen ? "none" : "1px solid",
        borderColor: "divider",
        ...(isFullscreen && {
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }),
      }}
    >
      <Box
        sx={{
          ...(isFullscreen
            ? { flex: 1, minHeight: 0 }
            : { aspectRatio: "16 / 9" }),
          "& div, & iframe": { width: "100%", height: "100%" },
        }}
      >
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={handleReady}
          onStateChange={handleStateChange}
          onError={() => setHasError(true)}
        />
      </Box>

      <VideoControls
        isPlaying={isPlaying}
        volume={volume}
        currentTime={currentTime}
        duration={duration}
        isFullscreen={isFullscreen}
        onPlayPause={handlePlayPause}
        onVolumeChange={handleVolumeChange}
        onSeek={handleSeek}
        onFullscreen={handleFullscreen}
      />
    </Box>
  );
}

export default VideoPlayer;
