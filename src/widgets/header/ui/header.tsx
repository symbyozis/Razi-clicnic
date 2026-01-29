'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/shared/ui';
import { phoneFormat } from '@/shared/lib/phone-format';
import appConfig from '@/shared/config/app.config.json';

const navItems = [
  { title: 'Главная', href: '/' },
  { title: 'О нас', href: '/about' },
  { title: 'Услуги', href: '/services' },
  { title: 'Врачи', href: '/doctors' },
  { title: 'Контакты', href: '/contacts' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { contacts } = appConfig;

  return (
    <header className="py-8 relative">
      {pathname === '/' && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent -z-10" />
      )}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-3">
            <Link href="/">
              <svg
                width="134"
                height="58"
                viewBox="0 0 844 204"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-auto"
              >
                <path
                  d="M284.283 98.2576C303.203 98.2576 315.753 89.9916 315.753 77.5434C315.753 69.7772 310.973 63.8991 302.31 60.5159C309.777 57.4273 313.861 52.0535 313.861 44.9791C313.861 33.3254 301.81 25.5593 283.685 25.5593C267.55 25.5593 254.803 36.0167 254.803 49.5584H268.746C268.746 42.8858 275.12 38.2038 283.881 38.2038C293.142 38.2038 298.82 41.3906 298.82 46.568C298.82 52.5444 294.437 55.4322 283.582 55.4322H277.409V66.1887H283.685C295.137 66.1887 300.815 69.8754 300.815 75.8473C300.815 81.8237 294.74 85.5059 284.783 85.5059C274.325 85.5059 266.858 80.1276 266.858 72.1606H252.915C252.915 87.0011 266.559 98.2532 284.283 98.2532V98.2576Z"
                  fill="#9E9E9E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.3784 27.1883H116.038V43.5196H50.3784C31.7218 43.5196 16.4529 58.7841 16.4529 77.4452V151.304C16.4529 169.961 31.7173 185.23 50.3784 185.23H124.237C142.894 185.23 158.163 169.965 158.163 151.304V85.4166H174.494V151.304C174.494 178.945 151.879 201.561 124.237 201.561H50.3784C22.7372 201.561 0.121582 178.945 0.121582 151.304V77.4452C0.121582 49.8039 22.7372 27.1883 50.3784 27.1883Z"
                  fill="#21CDAA"
                />
                <path
                  d="M87.2453 161.82C111.941 161.82 128.321 151.032 128.321 134.781C128.321 124.64 122.081 116.972 110.771 112.554C120.519 108.523 125.848 101.507 125.848 92.2767C125.848 77.0702 110.12 66.9296 86.4642 66.9296C65.4063 66.9296 48.7671 80.5785 48.7671 98.2576H66.964C66.964 89.5497 75.2836 83.4394 86.7231 83.4394C98.8097 83.4394 106.219 87.5992 106.219 94.3567C106.219 102.154 100.501 105.926 86.3303 105.926H78.2696V119.963H86.4597C101.407 119.963 108.816 124.774 108.816 132.571C108.816 140.369 100.885 145.18 87.888 145.18C74.2392 145.18 64.4913 138.16 64.4913 127.764H46.2944C46.2944 147.131 64.103 161.82 87.2408 161.82H87.2453Z"
                  fill="#21CDAA"
                />
                <path
                  d="M131.503 43.8276H157.368V69.9558H174.266V43.8276H200.136V27.1883H174.266V0.930725H157.368V27.1883H131.503V43.8276Z"
                  fill="#21CDAA"
                />
              </svg>
            </Link>
          </div>
          <nav className="md:col-span-7">
            <ul className="flex justify-center gap-6 flex-wrap">
              {navItems.map(({ title, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-base font-medium transition-colors hover:text-[#21CDAA] ${
                      pathname === href
                        ? 'text-[#21CDAA] border-b-2 border-[#21CDAA] pb-1'
                        : 'text-gray-700'
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2 flex justify-end">
            <a
              href={`tel:${contacts.phone}`}
              className="text-[#21CDAA] hover:text-[#1bb598] font-medium text-lg transition-colors"
            >
              {phoneFormat(contacts.phone)}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};
