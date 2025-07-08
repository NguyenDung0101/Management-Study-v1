"use client";

import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { EnhancedStudyDashboard } from "@/components/enhanced-study-dashboard";
import { EnhancedTaskPlanner } from "@/components/enhanced-task-planner";
import { PomodoroTimer } from "@/components/pomodoro-timer";
import { StudyJournal } from "@/components/study-journal";
import { TaskArchive } from "@/components/task-archive";
import { CalendarView } from "@/components/calendar-view";
import { TaskOverview } from "@/components/task-overview";
import { UserProfile } from "@/components/user-profile";
import { StudyDiary } from "@/components/study-diary";
import { LoginPage } from "@/components/login-page";

export default function Home() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <EnhancedStudyDashboard />;
      case "calendar":
        return <CalendarView />;
      case "taskOverview":
        return <TaskOverview />;
      case "tasks":
        return <EnhancedTaskPlanner />;
      case "pomodoro":
        return <PomodoroTimer />;
      case "diary":
        return <StudyDiary />;
      case "journal":
        return <StudyJournal />;
      case "archive":
        return <TaskArchive />;
      case "profile":
        return <UserProfile />;
      default:
        return <EnhancedStudyDashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-to-br from-background to-muted/10">
        <AppSidebar currentView={currentView} onViewChange={setCurrentView} />
        <main className="flex-1 p-6 bg-background/50 backdrop-blur-sm">
          {renderCurrentView()}
        </main>
      </div>
    </SidebarProvider>
  );
}
