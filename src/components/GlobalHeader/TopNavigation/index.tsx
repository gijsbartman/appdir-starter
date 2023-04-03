'use client';

import { NavigationItems } from '@/constants';
import Link from 'next/link';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export default function TopNavigation() {
  const navRef = useRef<HTMLElement>(null);
  const [navActive, setNavActive] = useState(false);

  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }

  useLayoutEffect(() => {
    if (navRef.current) {
      document.documentElement.style.setProperty(
        '--header-height',
        `${navRef.current.offsetHeight}px`
      );
    }
    console.log('run');
  }, []);

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  return (
    <nav ref={navRef} id="top-navigation" className="text-white">
      <div className="p-4 text-xl font-bold">Website</div>
      <div className={`top-navigation-items-container ${navActive ? 'active' : ''}`}>
        <ul className="top-navigation-items">
          {NavigationItems.map((item, index) => (
            <li
              key={index}
              className={`top-navigation-item group ${item.subItems?.length ? 'has-subitems' : ''}`}
            >
              <Link href={item.destination}>{item.label}</Link>
              {item.subItems?.length ? (
                <>
                  <FiChevronDown
                    size={15}
                    className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                  />
                  <div className="top-navigation-subitems-container">
                    <ul className="top-navigation-subitems">
                      <li className="top-navigation-subitem mb-1 inline font-bold text-tertiary sm:hidden">
                        <Link href={item.destination}>Go to {item.label}</Link>
                      </li>
                      {item.subItems.map((subItem, index) => (
                        <li key={index} className="top-navigation-subitem">
                          <Link href={subItem.destination}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={toggleNav} className="block p-4 sm:hidden">
        {!navActive ? <HiOutlineMenuAlt3 size={25} /> : <FiX size={25} />}
      </button>
    </nav>
  );
}
