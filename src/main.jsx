import React from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  CssBaseline,
  Container,
} from "@mui/material";

const container = document.getElementById("root");
const root = createRoot(container);

// Global state
let seconds = 0;
let initialSeconds = 0;
let alertAt = 10;
let isRunning = false;
let intervalId = null;
let hasAlerted = false;

function tick() {
  seconds++;
  if (seconds === alertAt && !hasAlerted) {
    alert(`⏰ You've reached ${alertAt} seconds!`);
    hasAlerted = true;
    stopTimer(); // Stop the timer immediately
    return;
  }
  render();
}

function startTimer(reset = true) {
  if (reset) {
    seconds = initialSeconds;
    hasAlerted = false;
  }
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(tick, 1000);
    render();
  }
}

function stopTimer() {
  clearInterval(intervalId);
  isRunning = false;
  render();
}

function resetTimer() {
  stopTimer();
  seconds = initialSeconds;
  hasAlerted = false;
  render();
}

const Counter = () => {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box textAlign="center" py={4}>
        <Typography variant="h4" gutterBottom>
          ⏱️ Counting Up
        </Typography>

        <Typography variant="h2" color="primary" gutterBottom>
          {seconds}s
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
          <Button
            variant="contained"
            color="success"
            onClick={() => startTimer(true)}
            disabled={isRunning}
          >
            Start
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={stopTimer}
            disabled={!isRunning}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => startTimer(false)}
            disabled={isRunning}
          >
            Resume
          </Button>
          <Button variant="outlined" onClick={resetTimer}>
            Reset
          </Button>
        </Stack>

        <Stack spacing={2} direction="column" alignItems="center">
          <TextField
            label="Start From (sec)"
            type="number"
            value={initialSeconds}
            onChange={(e) => {
              initialSeconds = parseInt(e.target.value) || 0;
              seconds = initialSeconds;
              hasAlerted = false;
              render();
            }}
          />
          <TextField
            label="Alert At (sec)"
            type="number"
            value={alertAt}
            onChange={(e) => {
              alertAt = parseInt(e.target.value) || 0;
              hasAlerted = false;
              render();
            }}
          />
        </Stack>
      </Box>
    </Container>
  );
};

function render() {
  root.render(<Counter />);
}

render();
