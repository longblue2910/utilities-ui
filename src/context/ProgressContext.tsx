"use client";

// ProgressContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ProgressContextProps {
  isNavigating: boolean;
  startNavigation: () => void;
}

const ProgressContext = createContext<ProgressContextProps | undefined>(
  undefined
);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isNavigating, setIsNavigating] = useState(false);

  const startNavigation = () => {
    setIsNavigating(true);
    setTimeout(() => setIsNavigating(false), 500); // Giả sử thời gian điều hướng là 500ms
  };

  return (
    <ProgressContext.Provider value={{ isNavigating, startNavigation }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextProps => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
