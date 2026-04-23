import "./LoadingIndicator.css";

export function LoadingIndicator({
  label = "Loading…",
  minHeight = "60vh",
  showSpinner = true,
  showProgressBar = true,
}) {
  return (
    <div
      className="loading-indicator"
      role="status"
      aria-live="polite"
      aria-busy="true"
      style={{ minHeight }}
    >
      <span className="loading-indicator__sr">{label}</span>

      {showProgressBar && (
        <div className="loading-indicator__progress">
          <div className="loading-indicator__progress-bar" />
        </div>
      )}

      {showSpinner && (
        <div className="loading-indicator__center">
          <div className="loading-indicator__spinner" />
        </div>
      )}
    </div>
  );
}
