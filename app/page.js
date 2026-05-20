export default function FatcomSolutions() { return ( <div className="min-h-screen bg-slate-50 text-slate-900"> {/* Header */} <header className="bg-indigo-700 text-white shadow-lg"> <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between"> <div className="flex items-center gap-3"> <div className="w-12 h-12 rounded-2xl bg-white text-indigo-700 font-bold flex items-center justify-center text-xl shadow"> F </div> <div> <h1 className="text-2xl font-bold">Fatcom Solutions</h1> <p className="text-sm text-indigo-100">Online Earning Platform</p> </div> </div>

<nav className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#features" className="hover:text-indigo-200">Features</a>
        <a href="#tasks" className="hover:text-indigo-200">Tasks</a>
        <a href="#payments" className="hover:text-indigo-200">Payments</a>
        <a href="#contact" className="hover:text-indigo-200">Contact</a>
      </nav>
    </div>
  </header>

  {/* Hero */}
  <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
        Earn Online Easily
      </span>

      <h2 className="text-5xl font-extrabold leading-tight mt-6">
        Turn Your Free Time Into Daily Income
      </h2>

      <p className="text-lg text-slate-600 mt-6 leading-relaxed">
        Fatcom Solutions helps users earn money online through simple tasks,
        referrals, surveys, and digital opportunities.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition">
          Get Started
        </button>

        <button className="border border-slate-300 hover:bg-slate-100 px-6 py-3 rounded-2xl font-semibold transition">
          Learn More
        </button>
      </div>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-slate-500 text-sm">Total Earnings</p>
          <h3 className="text-4xl font-bold mt-1">KES 48,520</h3>
        </div>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          +18% This Month
        </div>
      </div>

      <div className="space-y-5">
        <div className="bg-slate-100 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <h4 className="font-semibold">Watch Videos</h4>
            <p className="text-sm text-slate-500">Earn per completed video</p>
          </div>
          <span className="font-bold text-indigo-700">KES 150</span>
        </div>

        <div className="bg-slate-100 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <h4 className="font-semibold">Daily Check-in</h4>
            <p className="text-sm text-slate-500">Claim daily rewards</p>
          </div>
          <span className="font-bold text-indigo-700">KES 80</span>
        </div>

        <div className="bg-slate-100 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <h4 className="font-semibold">Referral Bonus</h4>
            <p className="text-sm text-slate-500">Invite friends to earn more</p>
          </div>
          <span className="font-bold text-indigo-700">KES 500</span>
        </div>
      </div>
    </div>
  </section>

  {/* Features */}
  <section id="features" className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <h3 className="text-4xl font-bold">Platform Features</h3>
        <p className="text-slate-600 mt-4 text-lg">
          Everything you need to earn and withdraw securely.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl mb-5">
            💰
          </div>
          <h4 className="text-2xl font-bold mb-3">Easy Earnings</h4>
          <p className="text-slate-600 leading-relaxed">
            Complete simple online activities and earn instantly.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl mb-5">
            📱
          </div>
          <h4 className="text-2xl font-bold mb-3">Mobile Friendly</h4>
          <p className="text-slate-600 leading-relaxed">
            Use the platform easily on your phone or desktop.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl mb-5">
            🔒
          </div>
          <h4 className="text-2xl font-bold mb-3">Secure Withdrawals</h4>
          <p className="text-slate-600 leading-relaxed">
            Withdraw your earnings safely through M-Pesa and banks.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Tasks */}
  <section id="tasks" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14">
        <h3 className="text-4xl font-bold">Popular Tasks</h3>
        <p className="text-slate-600 mt-4 text-lg">
          Complete tasks daily and increase your income.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "Watch Ads",
          "Survey Jobs",
          "Referral Program",
          "Social Media Tasks",
        ].map((task, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">⭐</div>
            <h4 className="text-xl font-bold">{task}</h4>
            <p className="text-slate-600 mt-3 text-sm leading-relaxed">
              Start earning from this activity today.
            </p>
            <button className="mt-6 w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-2xl font-semibold transition">
              Start Task
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Payments */}
  <section id="payments" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-4xl font-bold leading-tight">
          Fast & Reliable Payments
        </h3>
        <p className="text-slate-600 mt-6 text-lg leading-relaxed">
          Fatcom Solutions supports secure withdrawal methods including
          M-Pesa, Airtel Money, and bank transfer options.
        </p>

        <ul className="mt-8 space-y-4 text-slate-700">
          <li>✅ Instant withdrawal processing</li>
          <li>✅ Low withdrawal fees</li>
          <li>✅ Available in Kenya</li>
          <li>✅ 24/7 support system</li>
        </ul>
      </div>

      <div className="bg-indigo-700 text-white rounded-3xl p-10 shadow-2xl">
        <h4 className="text-3xl font-bold mb-6">Withdraw Funds</h4>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-2xl px-5 py-4 bg-white text-slate-900 outline-none"
          />

          <input
            type="number"
            placeholder="Amount"
            className="w-full rounded-2xl px-5 py-4 bg-white text-slate-900 outline-none"
          />

          <input
            type="text"
            placeholder="M-Pesa Number"
            className="w-full rounded-2xl px-5 py-4 bg-white text-slate-900 outline-none"
          />

          <button className="w-full bg-white text-indigo-700 hover:bg-slate-100 py-4 rounded-2xl font-bold transition">
            Request Withdrawal
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer id="contact" className="bg-slate-900 text-slate-300 py-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h4 className="text-2xl font-bold text-white">Fatcom Solutions</h4>
        <p className="mt-2 text-sm">
          © 2026 Fatcom Solutions. All rights reserved.
        </p>
      </div>

      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Support</a>
      </div>
    </div>
  </footer>
</div>

); }
