import { Box, IconButton, Slider, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { colors } from "../theme";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function VideoControls({
  isPlaying,
  volume,
  currentTime,
  duration,
  isFullscreen,
  onPlayPause,
  onVolumeChange,
  onSeek,
  onFullscreen,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1,
        bgcolor: colors.navbar,
      }}
    >
      <IconButton color="inherit" onClick={onPlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>

      <Typography variant="caption" sx={{ minWidth: 80 }}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Typography>

      <Slider
        size="small"
        min={0}
        max={duration || 1}
        value={currentTime}
        onChange={(_, value) => onSeek(value)}
        sx={{ flexGrow: 1 }}
      />

      {volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
      <Slider
        size="small"
        min={0}
        max={100}
        value={volume}
        onChange={(_, value) => onVolumeChange(value)}
        sx={{ width: 100 }}
      />

      <IconButton color="inherit" onClick={onFullscreen}>
        {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </Box>
  );
}

export default VideoControls;
