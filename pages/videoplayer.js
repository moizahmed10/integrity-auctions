import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import CountdownTimer from "./CountDown/index";
import ViewPage from "./ViewPage";
import ViewPage2 from "./ViewPage2";
import ViewPage3 from "./ViewPage3";

import styles from "./TransitionPage.module.css";

const TransitionPage = () => {
  const [transitionTime, setTransitionTime] = useState(1);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [countDownTime, setCountdownTime] = useState(new Date());
  const [displayPages, setDisplayPages] = useState([]);
  const transitionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch transition time and page display settings
    const fetchSettings = async () => {
      try {
        const [timeResponse, pageResponse] = await Promise.all([
          fetch("/api/fetch-time"),
          fetch("/api/getpageStatus"),
        ]);

        const timeData = await timeResponse.json();
        const pageData = await pageResponse.json();

        setCountdownTime(timeData.countdownTime);
        setDisplayPages(
          [
            { id: "view-form", show: pageData.display1 },
            { id: "view-form-2", show: pageData.display2 },
            { id: "view-form-3", show: pageData.display3 },
            { id: "countdown", show: true }, // Always show countdown page
          ].filter((page) => page.show)
        ); // Filter pages based on display flag
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    if (displayPages.length === 0) return;

    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 1 },
    });

    tl.to(transitionRef.current, { opacity: 0 })
      .set(transitionRef.current, {
        onComplete: () => {
          const nextIndex = currentPageIndex + 1;
          if (nextIndex >= displayPages.length) {
            navigate("/");
          } else {
            setCurrentPageIndex(nextIndex);
          }
        },
      })
      .to(transitionRef.current, { opacity: 1 }, "+=0.2");

    const intervalId = setInterval(() => {
      tl.restart();
    }, (transitionTime + 4) * 1000);

    return () => clearInterval(intervalId);
  }, [currentPageIndex, displayPages, transitionTime, navigate]);

  return (
    <div style={{ background: "#737373" }}>
      <div ref={transitionRef} className={styles.transitionContainer}>
        {displayPages.length > 0 && (
          <>
            {displayPages[currentPageIndex]?.id === "view-form" && (
              <div className={styles.viewFormContainer}>
                <ViewPage />
              </div>
            )}
            {displayPages[currentPageIndex]?.id === "view-form-2" && (
              <div className={styles.viewFormContainer}>
                <ViewPage2 />
              </div>
            )}
            {displayPages[currentPageIndex]?.id === "view-form-3" && (
              <div className={styles.viewFormContainer}>
                <ViewPage3 />
              </div>
            )}
            {displayPages[currentPageIndex]?.id === "countdown" && (
              <div className={styles.countdownPageContainer}>
                <CountdownTimer EventCountdownTime={countDownTime} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TransitionPage;
