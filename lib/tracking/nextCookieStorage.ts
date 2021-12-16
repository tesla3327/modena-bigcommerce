import { ScoringStorage, TestStorage } from '@uniformdev/optimize-tracker-common';
import { NextPageContext } from 'next';
import { parseCookies, setCookie } from 'nookies';
import { cookieScoringStorage, cookieTestStorage } from '@uniformdev/optimize-tracker';
import { GetCookie, SetCookie } from '@uniformdev/optimize-tracker';

const createCookieAccess: (ctx?: NextPageContext) => {
  getCookie: GetCookie;
  setCookie: SetCookie;
} = (ctx) => {
  return {
    getCookie: (name) => {
      const cookies = parseCookies(ctx) || {};
      return cookies[name];
    },

    setCookie: (name, value, maxAge) => {
      if (typeof window === 'undefined') {
        return;
      }

      setCookie(ctx, name, value, {
        maxAge,
        path: '/',
        sameSite: 'strict',
        secure: window.location.protocol === 'https:',
      });
    },
  };
};

export const createNextCookieStorage = (ctx?: NextPageContext): ScoringStorage => {
  const cookieAccess = createCookieAccess(ctx);
  const cookieStorage = cookieScoringStorage(cookieAccess);
  return cookieStorage;
};

export const createNextTestStorage = (ctx?: NextPageContext): TestStorage => {
  const cookieAccess = createCookieAccess(ctx);
  const cookieStorage = cookieTestStorage(cookieAccess);
  return cookieStorage;
};
