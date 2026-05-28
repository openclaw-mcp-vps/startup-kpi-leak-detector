import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KPI Leak Detector — Find Hidden Revenue Leaks',
  description: 'Analyzes startup metrics to identify unusual patterns and potential revenue leaks. Connect Stripe and analytics APIs to detect anomalies automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="947dcb53-f3fb-4704-961c-600680c1d29f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
