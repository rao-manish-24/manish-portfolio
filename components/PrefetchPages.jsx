"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// All routes to prefetch on app load
const routes = [
  "/",
  "/domains",
  "/resume", 
  "/projects",
  "/contact",
  "/ml",
  "/devops",
  "/system-design",
];

const PrefetchPages = () => {
  const router = useRouter();

  useEffect(() => {
    // Prefetch all pages in the background when app loads
    routes.forEach((route) => {
      router.prefetch(route);
    });
  }, [router]);

  return null; // This component doesn't render anything
};

export default PrefetchPages;

