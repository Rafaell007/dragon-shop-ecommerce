import "./CartPaymentSummary.css";


export function CartPaymentSummary( {cartProducts}) {
    return (
        <>
        <div className="cart-payment-summary-container">
            <div className="total-price-container"></div>
            <div className="worry-free-delivery-container"></div>
            <div className="payment-methods-container"></div>
        </div>
        </>
    )
}