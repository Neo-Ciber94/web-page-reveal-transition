"use client";
import { usePathname } from "next/navigation";
import { useAnnouncer } from "./Announcer";
import styles from "./Link.module.css";
import { PropsWithChildren, useMemo } from "react";

type LinkProps = PropsWithChildren<{
  href: string;
}>;

export default function Link({ href, children }: LinkProps) {
  const announce = useAnnouncer();
  const pathname = usePathname();
  const isActive = useMemo(() => {
    return pathname === new URL(href, "http://a").pathname;
  }, []);

  function handleClick(ev: React.MouseEvent<HTMLAnchorElement>) {
    const target = ev.currentTarget as HTMLAnchorElement;

    if (target.href === location.href) {
      return;
    }

    ev.preventDefault();
    announce(target.href);
  }

  return (
    <a
      href={href}
      data-active={isActive}
      className={styles.link}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
