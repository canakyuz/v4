"use client";

import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from "next-themes/dist/types";

interface ProvidersProps {
 children: React.ReactNode;
}

const ThemeProviders: React.FC<ProvidersProps> = ({ children, ...props }: ThemeProviderProps) => {
 return <ThemeProvider
  themes={["light", "dark",]}
  attribute='class'
  {...props}
 >
  {children}
 </ThemeProvider>;
};

export default ThemeProviders;
