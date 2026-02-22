import {useState} from 'react';
import { BsList } from "react-icons/bs";
import "./HeaderNavMobile.css";

export function HeaderNavMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <div className="header-nav-mobile">
           
                <button
                className="header-nav-mobile-button"
                onClick={()=> setIsOpen(!isOpen)}
                aria-label="Open mobile menu"
                >
                    <BsList />
                </button>
                {isOpen && (
                    <div
                    onClick={()=> setIsOpen(false)}
                    className='mobile-sidebar-overlay'>
                        <aside className= 'mobile-sidebar'>
                            <div className='mobile-sidebar-close'></div>
                            <div className='mobile-sidebar-content'>
                                <ul className='mobile-sidebar-list'>
                                    <li><a href="">New in</a></li>
                                    <li><a href="">Flash sale</a></li>
                                    <li><a href="">Best sellers</a></li>
                                    <li><a href="">Men</a></li>
                                    <li><a href="">Women</a></li>
                                    <li><a href="">Kids</a></li>
                                </ul>

                            </div>
                        </aside>
                      
                    </div>
                )}
            </div>
            
      
        </>
    )
}