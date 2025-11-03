import { useEffect } from "react";

function DetailModal({ title, detail, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-6">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-[3rem] bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-emerald-500 px-8 py-6 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/40 px-3 py-1 text-sm font-medium transition hover:bg-white hover:text-emerald-600"
          >
            Close
          </button>
        </div>
        <div className="px-8 py-8 text-slate-700">
          <p className="text-base leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
