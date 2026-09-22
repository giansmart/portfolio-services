import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import Celebration from "./Celebration";

export default function FinalePanel({ onOpenContact, onViewResume, onClose }) {
  const { dict } = useLanguage();
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)" }}
      role="dialog"
      aria-modal="true"
      aria-label="All fragments found"
    >
      <Celebration />
      <div
        className="w-full text-center"
        style={{
          maxWidth: 520,
          background: "#12172a",
          border: "4px solid #ffb84d",
          boxShadow: "10px 10px 0 rgba(0,0,0,0.5)",
          padding: "40px 36px",
        }}
      >
        <div className="pixel-font" style={{ fontSize: 14, color: "#ffb84d", lineHeight: 1.8, marginBottom: 16 }}>
          {dict.finale.title}
        </div>
        <p className="mono-font" style={{ color: "#cfd6cc", fontSize: 14, lineHeight: 1.7, marginTop: 0 }}>
          {dict.finale.body}
        </p>
        <div className="flex flex-wrap justify-center gap-3" style={{ marginTop: 24 }}>
          <button
            onClick={onOpenContact}
            className="pixel-font"
            style={{ fontSize: 11, color: "#0b0e1a", background: "#39ff88", border: "none", padding: "12px 18px", cursor: "pointer" }}
          >
            {dict.finale.sendMessage}
          </button>
          <a
            href="/Giancarlo_Poemape_CV.pdf"
            download
            className="pixel-font"
            style={{
              fontSize: 11,
              color: "#ffb84d",
              border: "2px solid #ffb84d",
              padding: "12px 18px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {dict.finale.downloadCv}
          </a>
        </div>
        <button
          ref={closeRef}
          onClick={onClose}
          className="pixel-font mono-font"
          style={{ marginTop: 24, fontSize: 10, color: "#9aa39a", background: "none", border: "none", cursor: "pointer" }}
        >
          {dict.finale.keepExploring}
        </button>

        {/* Low-key exits for anyone who's done playing — same playful tone
            as "keep exploring", not competing with the primary CTAs above. */}
        <div className="flex flex-col items-center" style={{ marginTop: 10, gap: 6 }}>
          <button
            onClick={onViewResume}
            className="mono-font"
            style={{ fontSize: 12, color: "#5c6a5c", background: "none", border: "none", cursor: "pointer" }}
          >
            {dict.finale.viewCv}
          </button>
          <a
            href="https://github.com/giansmart/portfolio-services"
            target="_blank"
            rel="noreferrer"
            className="mono-font"
            style={{ fontSize: 12, color: "#5c6a5c" }}
          >
            {dict.finale.viewSource}
          </a>
        </div>
      </div>
    </div>
  );
}
