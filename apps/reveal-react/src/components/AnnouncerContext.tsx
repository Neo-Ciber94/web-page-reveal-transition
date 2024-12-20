"use client";
import { createContext, PropsWithChildren, use, useState } from "react";

type AnnouncerStatus = {
  state: "wait" | "left" | "right";
  isLeft: boolean;
};

type AnnouncerContextProps = {
  status: AnnouncerStatus;
  setStatus: React.Dispatch<React.SetStateAction<AnnouncerStatus>>;
};

const AnnouncerContext = createContext<AnnouncerContextProps | null>(null);

export default function AnnouncerProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<AnnouncerStatus>({
    state: "left",
    isLeft: true,
  });

  return (
    <AnnouncerContext.Provider value={{ status, setStatus }}>
      {children}
    </AnnouncerContext.Provider>
  );
}

export function useAnnouncerContext() {
  const ctx = use(AnnouncerContext);

  if (ctx == null) {
    throw new Error("AnnouncerContext is not set");
  }

  return ctx;
}
