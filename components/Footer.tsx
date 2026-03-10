"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-black px-6 md:px-[5vw] py-7 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-[0.72rem] text-muted tracking-[0.06em]">
        © {year}{" "}
        <a href="#" className="text-accent hover:text-cream transition-colors duration-200">
          Sandeep
        </a>{" "}
        — Designed & Built with ♥
      </p>

      <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.1em] uppercase text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink inline-block" />
        Open to new opportunities
      </div>

      <p className="text-[0.72rem] text-muted tracking-[0.06em] text-right">
        MERN Stack Developer
      </p>
    </footer>
  );
}
