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
        
        <div className="product-detail__member">
                <div className="product-detail__member-icon-wrap">
                  <BsPerson className="product-detail__member-icon" />
                </div>
                <div className="product-detail__member-copy">
                  <p className="product-detail__member-lead">
                    Become a member to unlock more member only benefits!
                  </p>
                  <div className="product-detail__member-list">
                    <div className="product-detail__member-item">
                      <BsTruck
                        className="product-detail__member-item-icon"
                        aria-hidden
                      />
                      <p className="product-detail__member-item-text">
                        Free shipping
                      </p>
                    </div>
                    <div className="product-detail__member-item">
                      <BsGift
                        className="product-detail__member-item-icon"
                        aria-hidden
                      />
                      <p className="product-detail__member-item-text">
                        30% off
                      </p>
                    </div>
                    <div className="product-detail__member-item">
                      <BsStar
                        className="product-detail__member-item-icon"
                        aria-hidden
                      />
                      <p className="product-detail__member-item-text">
                        Get 100 Points
                      </p>
                    </div>
                  </div>
                </div>
                <BsArrowRight className="product-detail__member-arrow" />
              </div>
        
        
        </>
    )
  }
