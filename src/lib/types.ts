export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: "admin" | "user" | "developer"
  createdAt: Date
  updatedAt: Date
}

export interface Project {
  id: string
  name: string
  description: string
  status: "active" | "completed" | "paused" | "archived"
  priority: "low" | "medium" | "high" | "urgent"
  progress: number
  startDate: Date
  endDate?: Date
  tags: string[]
  team: User[]
  createdBy: string
  createdAt: Date
  updatedAt: Date
}

export interface Workflow {
  id: string
  name: string
  description: string
  steps: WorkflowStep[]
  status: "draft" | "active" | "paused" | "completed"
  projectId?: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
}

export interface WorkflowStep {
  id: string
  name: string
  description: string
  type: "manual" | "automated" | "approval"
  status: "pending" | "in_progress" | "completed" | "failed"
  assignedTo?: string
  dueDate?: Date
  dependencies: string[]
  metadata: Record<string, any>
}

export interface ChatMessage {
  id: string
  content: string
  role: "user" | "assistant" | "system"
  timestamp: Date
  metadata?: Record<string, any>
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: Date
  updatedAt: Date
}

export interface CortexItem {
  id: string
  name: string
  type: "project" | "workflow" | "document" | "code" | "design"
  status: string
  priority: "low" | "medium" | "high" | "urgent"
  tags: string[]
  createdAt: Date
  updatedAt: Date
  metadata: Record<string, any>
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  timestamp: Date
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export type Theme = "light" | "dark" | "system"

export interface AppSettings {
  theme: Theme
  notifications: boolean
  autoSave: boolean
  language: string
}
