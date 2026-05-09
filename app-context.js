import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import viMessages from './locales/vi.json'
import enMessages from './locales/en.json'

const AppContext = createContext(null)

const translations = { vi: viMessages, en: enMessages }

export function AppProvider({ children }) {
  const [locale, setLocale] = useState('vi')
  const [darkMode, setDarkMode] = useState(false)

  // Load saved preferences
  useEffect(() => {
    const savedLocale = localStorage.getItem('clarity41-locale')
    const savedDark = localStorage.getItem('clarity41-dark')
    if (savedLocale) setLocale(savedLocale)
    if (savedDark === 'true') setDarkMode(true)
  }, [])

  // Apply dark mode class to html
  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('clarity41-dark', darkMode.toString())
  }, [darkMode])

  // Save locale
  useEffect(() => {
    localStorage.setItem('clarity41-locale', locale)
  }, [locale])

  const toggleDark = useCallback(() => setDarkMode(prev => !prev), [])
  const toggleLocale = useCallback(() => {
    setLocale(prev => prev === 'vi' ? 'en' : 'vi')
  }, [])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[locale]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }, [locale])

  const value = useMemo(() => ({
    locale,
    setLocale,
    darkMode,
    setDarkMode,
    toggleDark,
    toggleLocale,
    t,
  }), [locale, darkMode, toggleDark, toggleLocale, t])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
