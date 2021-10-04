import React from 'react';
import { LayoutProps } from './layoutTypes';

export const FullWidth: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};
