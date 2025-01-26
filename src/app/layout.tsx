import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar";

export const metadata: Metadata = {
  title: "brickwall",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute={'class'}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
        <SidebarProvider defaultOpen>
          <AppSidebar />
          <main className="w-screen">
            <SidebarTrigger />
          {children}
          </main>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
