"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const TAP_THRESHOLD = 5; // need 5+ rapid taps
const TAP_WINDOW_MS = 1200; // all taps must happen within this window

const Photo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const tapCountRef = useRef(0);
  const tapTimerRef = useRef(null);

  const handleTap = useCallback(() => {
    tapCountRef.current += 1;

    // reset timer on every tap
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);

    if (tapCountRef.current >= TAP_THRESHOLD) {
      tapCountRef.current = 0;
      setShowVideo(true);
      return;
    }

    // reset count if no follow-up tap within the window
    tapTimerRef.current = setTimeout(() => {
      tapCountRef.current = 0;
    }, TAP_WINDOW_MS);
  }, []);

  return (
    <>
      <div className="w-full h-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          {/* image - rapid tap (4+) to show video */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            onClick={handleTap}
            className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative z-10 rounded-full overflow-hidden cursor-pointer"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/photo.jpg`}
              priority
              quality={100}
              fill
              alt="Manish Rao"
              className="object-cover"
            />
          </motion.div>

          {/* circle - adjusted size to be closer to photo */}
          <motion.svg
            className="w-[330px] xl:w-[530px] h-[330px] xl:h-[530px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              className="stroke-accent"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Video Overlay */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
            >
              <IoMdClose className="text-2xl text-white" />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[98vw] max-w-[1600px] aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/intro-video.mp4`}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Photo;
