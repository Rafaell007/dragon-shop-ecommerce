import { useNavigate } from "react-router";
import { Header } from "../../header/Header";
import "./NotFoundPage.css";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="not-found-page">
        <h1 className="not-found-page__code">404</h1>
        <h2 className="not-found-page__title">Page not found</h2>
        <p className="not-found-page__message">Please try again later.</p>
        <button
          type="button"
          className="not-found-page__back-btn"
          onClick={() => navigate(-1)}
        >
          GO BACK
        </button>
      </div>
    </>
  );
}
