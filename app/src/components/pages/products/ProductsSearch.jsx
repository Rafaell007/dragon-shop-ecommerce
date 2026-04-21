import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import "./ProductsSearch.css";

export function ProductsSearch ({ searchQuery, setSearchQuery }) {
    const inputRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.focusSearch) {
            inputRef.current?.focus();
            window.history.replaceState({}, "");
        }
    }, [location.state]);

    return (
        <>
        <div className="products-search">
            <input
            ref={inputRef}
            type="search"
            className="products-search__input"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search products"
            />
        </div>
        </>
    );

}