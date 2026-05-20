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
