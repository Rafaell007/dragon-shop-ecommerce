import {
    BsPerson,
    BsTruck,
    BsGift,
    BsStar,
    BsArrowRight,
  } from "react-icons/bs";


  export function MemberBenefitsSection() {
    return (
        <>
        
        <div className="product-details_member-benefits-section">
                <div className="product-details_member-benefits-icon-container">
                  <BsPerson className="product-details_member-benefits-icon" />
                </div>
                <div className="product-details__member-benefits-copy">
                  <p className="product-details__member-benefits-lead">
                    Become a member to unlock more member only benefits!
                  </p>
                  <div className="product-details__member-benefits-list">
                    <div className="product-details__member-benefit-item">
                      <BsTruck
                        className="product-details__member-benefit-icon"
                        aria-hidden
                      />
                      <p className="product-details__member-benefit-text">
                        Free shipping
                      </p>
                    </div>
                    <div className="product-details__member-benefit-item">
                      <BsGift
                        className="product-details__member-benefit-icon"
                        aria-hidden
                      />
                      <p className="product-details__member-benefit-text">
                        30% off
                      </p>
                    </div>
                    <div className="product-details__member-benefit-item">
                      <BsStar
                        className="product-details__member-benefit-icon"
                        aria-hidden
                      />
                      <p className="product-details__member-benefit-text">
                        Get 100 Points
                      </p>
                    </div>
                  </div>
                </div>
                <BsArrowRight className="product-details_arrow-right-icon" />
              </div>
        
        
        </>
    )
  }