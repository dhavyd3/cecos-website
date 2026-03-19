"use client";

import { useI18n } from "@/i18n/context";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const TRANSITION_DURATION_MS = 800;
const CONTENT_SWAP_DELAY_MS = 150;

interface PageTransitionContextValue {
  isTransitioning: boolean;
  startPageTransition: (action?: () => void) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue | undefined>(
  undefined
);

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const prevPath = useRef(pathname);
  const isTransitioningRef = useRef(false);
  const swapTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (swapTimerRef.current) {
      window.clearTimeout(swapTimerRef.current);
      swapTimerRef.current = null;
    }

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const startPageTransition = useCallback(
    (action?: () => void) => {
      if (isTransitioningRef.current) {
        return;
      }

      clearTimers();
      isTransitioningRef.current = true;
      setIsLoading(true);

      if (action) {
        swapTimerRef.current = window.setTimeout(() => {
          action();
          swapTimerRef.current = null;
        }, CONTENT_SWAP_DELAY_MS);
      }

      hideTimerRef.current = window.setTimeout(() => {
        isTransitioningRef.current = false;
        setIsLoading(false);
        hideTimerRef.current = null;
      }, TRANSITION_DURATION_MS);
    },
    [clearTimers]
  );

  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname;
      const timer = window.setTimeout(() => {
        startPageTransition();
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, [pathname, startPageTransition]);

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  return (
    <PageTransitionContext.Provider
      value={{
        isTransitioning: isLoading,
        startPageTransition,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition must be used within a PageTransitionProvider"
    );
  }

  return context;
}

export function PageTransitionLoader() {
  const { isTransitioning } = usePageTransition();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Animated CECOS logo mark */}
          <div className="flex flex-col items-center gap-5">
            {/* Spinning ring + pulsing dot */}
            <div className="relative w-16 h-16">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Spinning arc */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
              {/* Center dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Brand text */}
            <motion.span
              className="text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              CECOS
            </motion.span>

            {/* Progress bar */}
            <div className="w-32 h-0.5 rounded-full bg-border overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PageTransitionContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { locale } = useI18n();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${pathname}:${locale}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
