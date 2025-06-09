"use client";

import React from 'react';
import { ThemeProvider as ReablocksThemeProvider, theme as reablocksTheme } from 'reablocks';

import { HeaderThemeProvider } from './HeaderTheme';
import { ThemeProvider as CustomThemeProvider } from './Theme'; // Assuming this is your own ThemeProvider

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <CustomThemeProvider> {/* Your existing custom theme provider */} 
      <ReablocksThemeProvider theme={reablocksTheme}> {/* Reablocks theme provider */} 
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </ReablocksThemeProvider>
    </CustomThemeProvider>
  );
};
