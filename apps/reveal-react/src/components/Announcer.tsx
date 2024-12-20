"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useCallback } from "react";
import { useAnnouncerContext } from "./AnnouncerContext";

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export default function Announcer({ children }: PropsWithChildren) {
  const { status } = useAnnouncerContext();

  return (
    <>
      <div id="navigation-announcer" data-nav-state={status.state}></div>
      {children}
    </>
  );
}

export function useAnnouncer() {
  const { setStatus } = useAnnouncerContext();
  const router = useRouter();

  return useCallback(
    async (url: string) => {
      setStatus((prev) => ({ ...prev, state: "wait" }));
      await sleep(800);

      setStatus((prev) => {
        return {
          isLeft: !prev.isLeft,
          state: prev.isLeft ? "right" : "left",
        };
      });

      router.push(url);
    },
    [router],
  );
}
