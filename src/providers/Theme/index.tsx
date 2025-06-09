'use client'

import React, { createContext, useCallback, use, useEffect, useState } from 'react'

import type { Theme, ThemeContextType } from './types'

import canUseDOM from '@/utilities/canUseDOM'
import { defaultTheme, getImplicitPreference, themeLocalStorageKey } from './shared'
import { themeIsValid } from './types'
import { themeConfig } from '@/config/theme' // Import the theme config

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme | undefined>(
    canUseDOM ? (document.documentElement.getAttribute('data-theme') as Theme) : undefined,
  )

  const setTheme = useCallback((themeToSet: Theme | null) => {
    // Prevent manual theme changes if light mode is forced
    if (themeConfig.forceLightMode && themeToSet !== 'light') {
       console.warn("Theme changes are disabled because light mode is forced.");
       // Optionally set it back to light if needed, or just prevent the change
       // setThemeState('light');
       // document.documentElement.setAttribute('data-theme', 'light');
       return;
    }

    if (themeToSet === null) {
      window.localStorage.removeItem(themeLocalStorageKey)
      const implicitPreference = getImplicitPreference()
      document.documentElement.setAttribute('data-theme', implicitPreference || '')
      if (implicitPreference) setThemeState(implicitPreference)
    } else {
      setThemeState(themeToSet)
      window.localStorage.setItem(themeLocalStorageKey, themeToSet)
      document.documentElement.setAttribute('data-theme', themeToSet)
    }
  }, []) // Add themeConfig.forceLightMode to dependencies if needed, though it might be constant

  useEffect(() => {
    let themeToSet: Theme = defaultTheme;

    // Check if light mode is forced
    if (themeConfig.forceLightMode) {
      themeToSet = 'light';
      // Optionally clear localStorage preference if forcing light mode
      window.localStorage.removeItem(themeLocalStorageKey);
    } else {
      // Original logic to determine theme based on preference or system
      const preference = window.localStorage.getItem(themeLocalStorageKey);

      if (themeIsValid(preference)) {
        themeToSet = preference;
      } else {
        const implicitPreference = getImplicitPreference();
        if (implicitPreference) {
          themeToSet = implicitPreference;
        }
      }
    }

    document.documentElement.setAttribute('data-theme', themeToSet);
    setThemeState(themeToSet);
  }, []) // Keep dependencies empty to run only once on mount

  return <ThemeContext
  value={{ setTheme, theme }}
  >{children}</ThemeContext>
}

export const useTheme = (): ThemeContextType => use(ThemeContext)
