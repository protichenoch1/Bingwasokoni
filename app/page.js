export default function FatcomSolutions() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
      <header className="bg-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-indigo-700 font-bold flex items-center justify-center text-xl shadow">
              F
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Fatcom Solutions
              </h1>

              <p className="text-sm text-indigo-100">
                Online Earning Platform
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features">Features</a>
            <a href="#tasks">Tasks</a>
            <a href="#payments">Payments</a>
            <a href="#contact">Contact</a>
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
              <p className="text-slate-500 text-sm">
                Total Earnings
              </p>

              <h3 className="text-4xl font-bold mt-1">
                KES 48,520
              </h3>
            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              +18% This Month
            </div>

          </div>

          <div className="space-y-5">

            <div className="bg-slate-100 rounded-2xl p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Watch Videos</h4>
                <p className="text-sm text-slate-500">
                  Earn per completed video
                </p>
              </div>

              <span className="font-bold text-indigo-700">
                KES 150
              </span>
            </div>

            <div className="bg-slate-100 rounded-2xl p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Daily Check-in</h4>
                <p className="text-sm text-slate-500">
                  Claim daily rewards
                </p>
              </div>

              <span className="font-bold text-indigo-700">
                KES 80
              </span>
            </div>

            <div className="bg-slate-100 rounded-2xl p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">Referral Bonus</h4>
                <p className="text-sm text-slate-500">
                  Invite friends to earn more
                </p>
              </div>

              <span className="font-bold text-indigo-700">
                KES 500
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section
        id="features"
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-4xl font-bold">
            Platform Features
          </h3>

          <p className="text-slate-600 mt-4 text-lg">
            Everything you need to earn and withdraw securely.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-slate-900 text-slate-300 py-10 text-center"
      >

        <h4 className="text-2xl font-bold text-white">
          Fatcom Solutions
        </h4>

        <p className="mt-2 text-sm">
          © 2026 Fatcom Solutions. All rights reserved.
        </p>

      </footer>

    </div>
  );
        }
