export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Startup KPI Leak Detector
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find hidden revenue leaks<br />
          <span className="text-[#58a6ff]">in your metrics</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Stripe and your analytics APIs. Our pattern recognition engine scans your KPIs 24/7 and alerts you the moment a revenue leak appears — before it becomes a crisis.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Detecting Leaks — $39/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No credit card required to explore.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Stripe Integration','Anomaly Detection','Automated Alerts','Actionable Insights','MRR Tracking','Churn Signals'].map(f => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">All-Inclusive Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-sm text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited metric connections',
              'Real-time anomaly detection',
              'Stripe & analytics API sync',
              'Email & Slack alerts',
              'Revenue leak reports',
              'Priority support',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the leak detection work?</h3>
            <p className="text-sm text-[#8b949e]">We pull your revenue and usage metrics via API, then apply statistical pattern recognition to flag deviations — like sudden MRR drops, spike in failed charges, or unusual churn clusters — before they compound.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which data sources do you support?</h3>
            <p className="text-sm text-[#8b949e]">Currently Stripe for revenue data and major analytics APIs (Mixpanel, Amplitude, Segment). More integrations are added regularly based on user demand.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} KPI Leak Detector. All rights reserved.
      </footer>
    </main>
  )
}
