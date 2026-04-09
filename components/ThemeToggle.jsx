"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [showTransition, setShowTransition] = useState(false);
  const [transitionTheme, setTransitionTheme] = useState(null);

  const handleToggle = () => {
    if (showTransition) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    setTransitionTheme(newTheme);
    setShowTransition(true);

    // Switch theme halfway through the overlay
    setTimeout(() => {
      toggleTheme();
    }, 1000);

    // Dismiss overlay after GIF has played
    setTimeout(() => {
      setShowTransition(false);
      setTransitionTheme(null);
    }, 2200);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        disabled={showTransition}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-foreground/10 hover:bg-foreground/20 border border-foreground/10 transition-all duration-300 cursor-pointer disabled:opacity-50"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMoon className="text-accent text-lg" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiSun className="text-accent text-lg" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="text-xs font-medium text-foreground/70 hidden sm:inline">
          {theme === "dark" ? "Dark Side" : "Light Side"}
        </span>
      </button>

      {/* Full-screen GIF Transition Overlay */}
      <AnimatePresence>
        {showTransition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{
              background:
                transitionTheme === "dark"
                  ? "radial-gradient(ellipse at center, #0d0d0d 0%, #1c1c22 100%)"
                  : "radial-gradient(ellipse at center, #ffffff 0%, #f0f1f5 100%)",
            }}
          >
            {/* GIF */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              className="mb-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={transitionTheme === "dark" ? "/assets/darkside.webp" : "/assets/lightside.webp"}
                alt={transitionTheme === "dark" ? "Dark Side" : "Light Side"}
                className="w-[720px] h-[720px] xl:w-[900px] xl:h-[900px] object-contain rounded-2xl"
              />
            </motion.div>

            {/* Label */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-center"
            >
              <h2
                className={`text-4xl xl:text-5xl font-bold tracking-tight ${
                  transitionTheme === "dark"
                    ? "text-white"
                    : "text-[#1c1c22]"
                }`}
              >
                {transitionTheme === "dark" ? "Dark Side" : "Light Side"}
              </h2>
              <p
                className={`text-base mt-2 ${
                  transitionTheme === "dark"
                    ? "text-white/50"
                    : "text-[#1c1c22]/50"
                }`}
              >
                {transitionTheme === "dark"
                  ? "Embrace the darkness..."
                  : "Step into the light..."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeToggle;
