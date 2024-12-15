import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

const CountdownTimer = ({ EventCountdownTime = new Date() }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (EventCountdownTime) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(EventCountdownTime).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [EventCountdownTime]);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className={styles.countdownDisplay}>
        <div className={styles.countdownValue}>
          <p style={{ marginBottom: "25px" }}>
            {days.toString().padStart(2, "0")}{" "}
          </p>
          <span>days</span>
        </div>
        <div className={styles.countdownValue}>
          <p style={{ marginBottom: "25px" }}>
            {hours.toString().padStart(2, "0")}
          </p>
          <span> hours</span>
        </div>
        <div className={styles.countdownValue}>
          <p style={{ marginBottom: "25px" }}>
            {minutes.toString().padStart(2, "0")}
          </p>
          <span>minutes</span>
        </div>
        <div className={styles.countdownValue}>
          <p style={{ marginBottom: "25px" }}>
            {seconds.toString().padStart(2, "0")}
          </p>
          <span>seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.EventCountdownTimerContainer}>
      {EventCountdownTime ? (
        <>{formatTime(timeRemaining)}</>
      ) : (
        <p>Loading event time...</p>
      )}
    </div>
  );
};

export default CountdownTimer;
