"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const animate = () => {
      followerPosRef.current.x +=
        (posRef.current.x - followerPosRef.current.x) * 0.1;
      followerPosRef.current.y +=
        (posRef.current.y - followerPosRef.current.y) * 0.1;
      if (follower) {
        follower.style.left = followerPosRef.current.x + "px";
        follower.style.top = followerPosRef.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseEnter = () => {
      cursor.classList.add("hovered");
      follower.classList.add("hovered");
    };
    const onMouseLeave = () => {
      cursor.classList.remove("hovered");
      follower.classList.remove("hovered");
    };

    document.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    const interactables = document.querySelectorAll("a, button, [data-cursor]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={followerRef} className="cursor-follower hidden md:block" />
    </>
  );
}
