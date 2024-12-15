// pages/TransitionPage.js
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import CountdownTimer from "./CountDown/index";
import ViewPage from "./ViewPage";
import styles from "./TransitionPage.module.css";

const TransitionPage = () => {
  const [transitionTime, setTransitionTime] = useState(2.2);
  const [currentPage, setCurrentPage] = useState("view-form");
  const [countDownTime, setCountdownTime] = useState(new Date());

  useEffect(() => {
    const fetchTransitionTime = async () => {
      try {
        const response = await fetch("/api/fetch-time");
        const data = await response.json();
        setTransitionTime(parseInt(data.transitionTime, 10));
        setCountdownTime(data.countdownTime);
      } catch (error) {
        console.error("Error fetching transition time:", error);
      }
    };

    fetchTransitionTime();
  }, []);

  useEffect(() => {
    const animationDuration = 2.2;
    const tltransition = gsap
      .timeline({ paused: true })
      .set(`.${styles.viewFormContainer}, .${styles.countdownPageContainer}`, {
        opacity: 0,
      }) // Initially hide both pages
      .fromTo(
        `.${styles.pageTransitionRed}`,
        animationDuration,
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left", ease: "power4.inOut" }
      )
      .fromTo(
        `.${styles.pageTransitionBlack}`,
        animationDuration,
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left", ease: "power4.inOut" },
        "-=0.2"
      )
      .set(`.${styles.pageTransitionRed}`, { scaleX: 0 })
      .to(`.${styles.pageTransitionBlack}`, animationDuration, {
        scaleX: 0,
        transformOrigin: "right",
        ease: "power4.inOut",
      })
      .set(`.${styles.viewFormContainer}, .${styles.countdownPageContainer}`, {
        opacity: 1,
      });

    const intervalId = setInterval(
      () => {
        tltransition.restart();
        setCurrentPage((prevPage) =>
          prevPage === "view-form" ? "countdown" : "view-form"
        );
      },
      (transitionTime + 4) * 1000
    );

    return () => clearInterval(intervalId);
  }, [transitionTime]);

  return (
    <div style={{ background: "#737373" }}>
      {/* View Page */}
      <div
        className={styles.viewFormContainer}
        style={{ display: currentPage === "view-form" ? "block" : "none" }}
      >
        {currentPage === "view-form" && <ViewPage />}
      </div>

      {/* Countdown Timer */}
      <div
        className={styles.countdownPageContainer}
        style={{ display: currentPage === "countdown" ? "block" : "none" }}
      >
        {currentPage === "countdown" && (
          <CountdownTimer EventCountdownTime={countDownTime} />
        )}
      </div>

      {/* Transition Effects */}
      <div className={styles.pageTransitionRed}></div>
      <div className={styles.pageTransitionBlack}></div>
    </div>
  );
};

export default TransitionPage;
