import { useLanguage } from "../i18n/LanguageContext";

// Buttons in this HUD sit right above the d-pad and get hit by rapid taps,
// so — same as TouchControls — they need iOS's long-press callout (copy/
// look up/translate) and text selection disabled, or a mistap pops that menu
// instead of pressing the button.
const noCalloutStyle = {
  userSelect: "none",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  WebkitTapHighlightColor: "transparent",
};

export default function Hud({ promptLabel, fragmentCount, fragmentTotal, muted, onToggleMuted, onOpenJournal, onExit }) {
  const { dict, lang, toggleLang } = useLanguage();

  return (
    <div
      className="absolute top-0 left-0 right-0 flex items-center justify-between gap-2 px-2 sm:px-6 z-20"
      style={{
        minHeight: 48,
        paddingTop: "env(safe-area-inset-top)",
        background: "rgba(11,14,26,0.85)",
        borderBottom: "2px solid #39ff88",
        ...noCalloutStyle,
      }}
    >
      <div className="min-w-0 flex-1">
        {promptLabel && (
          <div className="pixel-font animate-pulse truncate" style={{ fontSize: 10, color: "#ffb84d" }} aria-live="polite">
            <span>{dict.hud.pressE}</span>
            <span className="hidden sm:inline"> {promptLabel}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1 sm:gap-4 shrink-0">
        <button
          onClick={toggleLang}
          aria-label="Toggle language"
          className="pixel-font"
          style={{
            fontSize: 9,
            color: "#9aa39a",
            background: "none",
            border: "2px solid #3a4a3a",
            padding: "8px 6px",
            minHeight: 36,
            cursor: "pointer",
            ...noCalloutStyle,
          }}
        >
          {lang.toUpperCase()}
          <span className="hidden sm:inline"> &#8594; {dict.lang.switchTo}</span>
        </button>
        <button
          onClick={onToggleMuted}
          aria-label={muted ? "Unmute sound" : "Mute sound"}
          aria-pressed={muted}
          className="pixel-font"
          style={{
            fontSize: 9,
            color: muted ? "#5c6a5c" : "#39ff88",
            background: "none",
            border: `2px solid ${muted ? "#3a4a3a" : "#39ff88"}`,
            padding: "8px 6px",
            minHeight: 36,
            cursor: "pointer",
            ...noCalloutStyle,
          }}
        >
          &#9834;
          <span className="hidden sm:inline"> {muted ? dict.hud.soundOff : dict.hud.soundOn}</span>
        </button>
        <button
          onClick={onOpenJournal}
          className="pixel-font"
          style={{
            fontSize: 9,
            color: "#ffb84d",
            background: "none",
            border: "2px solid #ffb84d",
            padding: "8px 6px",
            minHeight: 36,
            cursor: "pointer",
            ...noCalloutStyle,
          }}
        >
          &#9670; {fragmentCount}/{fragmentTotal}
        </button>
        <button
          onClick={onExit}
          aria-label={dict.hud.exit}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9aa39a",
            background: "none",
            border: "2px solid #3a4a3a",
            padding: "6px 12px",
            minHeight: 44,
            minWidth: 44,
            cursor: "pointer",
            ...noCalloutStyle,
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1 }}>&#10005;</span>
          <span className="hidden sm:inline pixel-font" style={{ fontSize: 9, marginLeft: 8 }}>
            {dict.hud.exit}
          </span>
        </button>
      </div>
    </div>
  );
}
