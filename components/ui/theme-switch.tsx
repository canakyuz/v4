"use client";
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { IconMoon, IconSunHigh } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

const ThemeSwitch: React.FC = () => {
 const { resolvedTheme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  setMounted(true);
 }, []);

 if (!mounted) {
  return null;
 }

 return (
  <Button
   variant="ghost"
   aria-label='Toggle Dark Mode'
   type='button'
   size='icon'

   onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
  >
   {resolvedTheme === 'dark' ? (
    <IconMoon className='h-5 w-5 text-orange-300' />
   ) : (
    <IconSunHigh className='h-5 w-5 text-slate-800' />
   )}
  </Button>
 );
};

export default ThemeSwitch;
