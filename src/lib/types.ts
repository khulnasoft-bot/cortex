export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: "user" | "admin"
  createdAt: Date
  updatedAt: Date
}

export interface CortexItem {
  id: string
  title: string
  content: string
  type: "document" | "code" | "image" | "link" | "note"
  keywords: string[]
  writer: string
  createdAt: Date
  updatedAt: Date
  size?: string
  url?: string
  cortexId?: string
}

export interface Cortex {
  id: string
  name: string
  description?: string
  color?: string
  icon?: string
  itemCount: number
  createdAt: Date
  updatedAt: Date
  category: "private" | "shared" | "team"
}

export interface Project {
  id: string
  name: string
  description?: string
  status: "planning" | "in-progress" | "review" | "completed"
  priority: "low" | "medium" | "high"
  dueDate?: Date
  assignees: string[]
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface SearchResult {
  id: string
  title: string
  content: string
  type: string
  relevance: number
  source: string
  url?: string
}

export interface ChatMessage {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  sources?: SearchResult[]
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: Date
  updatedAt: Date
}
