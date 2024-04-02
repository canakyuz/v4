import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IconMoon, IconSunHigh } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

const ThemeSwitch: React.FC = React.memo(() => {
 const [mounted, setMounted] = useState(false);
 const { theme, setTheme, resolvedTheme, themes } = useTheme();

 useEffect(() => {
  setMounted(true);
 }, []);

 if (!mounted) {
  return null;
 }

 const handleThemeToggle = () => {
  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
 };

 return (
  <>
   <Button
    variant="ghost"
    aria-label="Toggle Dark Mode"
    type="button"
    size="icon"
    onClick={handleThemeToggle}
    className='focus:outline-none cursor-pointer transition-colors duration-0'
   >
    {resolvedTheme === 'dark' ? (
     <IconMoon className="h-5 w-5 text-orange-300" />
    ) : (
     <IconSunHigh className="h-5 w-5 text-slate-800" />
    )}
   </Button>
  </>
 );
});

export default ThemeSwitch;
