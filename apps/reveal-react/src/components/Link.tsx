"use client";
import { useAnnouncer } from "./Announcer";
import styles from "./Link.module.css";
import { PropsWithChildren } from "react";

type LinkProps = PropsWithChildren<{
  href: string;
}>;

export default function Link({ href, children }: LinkProps) {
  const announce = useAnnouncer();

  function handleClick(ev: React.MouseEvent<HTMLAnchorElement>) {
    const target = ev.currentTarget as HTMLAnchorElement;

    if (target.href === location.href) {
      return;
    }

    ev.preventDefault();
    announce(target.href);
  }

  return (
    <a href={href} className={styles.link} onClick={handleClick}>
      {children}
    </a>
  );
}
