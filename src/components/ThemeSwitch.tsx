"use client"


import * as React from "react";
import { useTheme } from 'next-themes'
export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => (
        setMounted(true)
    ), [])
    if (!mounted) {
        return null
    }
    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? 'light' : 'dark'}</button>
    )
}
