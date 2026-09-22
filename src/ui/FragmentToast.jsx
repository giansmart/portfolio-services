import { useLanguage } from "../i18n/LanguageContext";

export default function FragmentToast({ title }) {
  const { dict } = useLanguage();
  if (!title) return null;
  return (
    <div
      className="fixed left-1/2 z-40 pixel-font"
      style={{
        top: 72,
        transform: "translateX(-50%)",
        background: "#12172a",
        border: "2px solid #ffb84d",
        color: "#ffb84d",
        padding: "10px 18px",
        fontSize: 10,
        // Sits right above the d-pad, same as the HUD — without this, rapid
        // taps nearby select this text and pop iOS's copy/search callout.
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        WebkitTapHighlightColor: "transparent",
      }}
      role="status"
    >
      &#9670; {dict.toast.found} {title.toUpperCase()}
    </div>
  );
}
