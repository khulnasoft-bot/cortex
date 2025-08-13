"use client"

import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { Navbar } from "@/components/Navbar"
import { LoadingScreen } from "@/components/landing/LoadingScreen"
import Index from "@/pages/Index"
import SearchPage from "@/pages/SearchPage"
import ManagePage from "@/pages/ManagePage"
import WorkflowsPage from "@/pages/WorkflowsPage"
import Profile from "@/pages/Profile"
import Settings from "@/pages/Settings"
import Import from "@/pages/Import"
import HowPage from "@/pages/HowPage"
import WhyPage from "@/pages/WhyPage"
import NotFound from "@/pages/NotFound"

function App() {
  const { isLoading } = useAuth()

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/manage" element={<ManagePage />} />
          <Route path="/workflows" element={<WorkflowsPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/import" element={<Import />} />
          <Route path="/how" element={<HowPage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
