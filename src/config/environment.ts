export const config = {
  app: {
    name: "CortexDev",
    version: "1.0.0",
    url: import.meta.env.VITE_APP_URL || "https://cortexdev.com",
    description: "AI-Powered Development Platform",
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL || "https://api.cortexdev.com",
    timeout: 10000,
  },
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    darkMode: true,
    notifications: true,
  },
  social: {
    twitter: "@cortexdev",
    github: "https://github.com/cortexdev",
    discord: "https://discord.gg/cortexdev",
  },
  seo: {
    siteName: "CortexDev",
    twitterHandle: "@cortexdev",
    ogImage: "/og-image.png",
    themeColor: "#000000",
  },
} as const

export type Config = typeof config
