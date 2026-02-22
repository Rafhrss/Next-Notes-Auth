import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Suspense } from "react";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      {/* Bungkus Sidebar dengan Suspense karena di dalamnya ada SearchForm (nuqs) */}
      <Suspense fallback={<div className="w-70 h-screen bg-sidebar animate-pulse" />}>
        <AppSidebar />
      </Suspense>
      <main className="flex-1 min-h-screen overflow-auto">
        {children}
      </main>
    </SidebarProvider>
  
  )
}