import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#0B1220]">
      {/* Top Bar */}
      <header className="bg-[#0B1220] text-white border-b-4 border-[#1F3A5F]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Image src="/plumb-dial-logo.svg" alt="Plumb Dial" width={200} height={44} />
          <span className="hidden md:block text-sm tracking-wide text-slate-300">AI Front Office for Plumbers</span>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#0B1220] text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl font-extrabold leading-tight mb-8">Never Miss<br />Another Plumbing Job</h1>
            <p className="text-xl text-slate-300 mb-10 max-w-xl">When you can’t answer the phone, Plumb Dial does. Calls answered, jobs booked, reminders sent — automatically.</p>
            <div className="flex gap-4">
              <a href="#pricing" className="bg-[#2DD4BF] hover:bg-[#1FB6A8] text-[#0B1220] px-10 py-4 rounded-lg text-lg font-bold shadow-xl">Protect My Phone</a>
              <span className="self-center text-sm text-slate-400">No installs. Cancel anytime.</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#1F3A5F]" />
            <Image src="/mockup-new-job.svg" alt="New job captured" width={340} height={680} className="relative bg-white" priority />
          </div>
        </div>
      </section>

      {/* Problem Strip */}
      <section className="bg-white border-y-4 border-[#1F3A5F]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
          <div className="border-2 border-[#CBD5E1] p-6">
            <p className="font-bold text-lg mb-2">Missed Calls</p>
            <p className="text-slate-600">Customers call the next plumber when you don’t answer.</p>
          </div>
          <div className="border-2 border-[#CBD5E1] p-6">
            <p className="font-bold text-lg mb-2">Wasted Time</p>
            <p className="text-slate-600">Chasing voicemails, texts, and follow-ups.</p>
          </div>
          <div className="border-2 border-[#CBD5E1] p-6">
            <p className="font-bold text-lg mb-2">Lost Jobs</p>
            <p className="text-slate-600">Every missed call is lost money.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-16">How Plumb Dial Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white border-l-4 border-[#2DD4BF] p-8">
            <Image src="/mockup-missed-call.svg" alt="Missed call logged" width={280} height={560} className="mb-6" />
            <p className="font-bold text-lg">AI answers missed calls instantly</p>
            <p className="text-slate-600 mt-2">No voicemail. No delays.</p>
          </div>
          <div className="bg-white border-l-4 border-[#2DD4BF] p-8">
            <Image src="/mockup-booked.svg" alt="Job booked" width={280} height={560} className="mb-6" />
            <p className="font-bold text-lg">Jobs booked or callbacks scheduled</p>
            <p className="text-slate-600 mt-2">Automatically, without your phone.</p>
          </div>
          <div className="bg-white border-l-4 border-[#2DD4BF] p-8">
            <p className="font-bold text-lg">Confirmations & reminders sent</p>
            <p className="text-slate-600 mt-2">Fewer no‑shows. Cleaner days.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[#0B1220] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-16">Straightforward Pricing</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white text-[#0B1220] p-10 border-4 border-[#2DD4BF]">
              <h3 className="text-2xl font-extrabold mb-4">Solo Plumber</h3>
              <p className="text-5xl font-extrabold mb-6">£249<span className="text-lg font-medium">/month</span></p>
              <ul className="space-y-4 mb-8 text-lg">
                <li>✔ AI answers missed & after‑hours calls</li>
                <li>✔ Emergency vs routine triage</li>
                <li>✔ Booking & reminders</li>
                <li>✔ Anti‑ghosting follow‑ups</li>
              </ul>
              <a href="#" className="block bg-[#0B1220] text-white text-center py-4 font-bold">Start Now</a>
            </div>
            <div className="bg-white text-[#0B1220] p-10 border-4 border-[#CBD5E1]">
              <h3 className="text-2xl font-extrabold mb-4">Team</h3>
              <p className="text-5xl font-extrabold mb-6">£399<span className="text-lg font-medium">/month</span></p>
              <ul className="space-y-4 mb-8 text-lg">
                <li>✔ Multiple phone numbers</li>
                <li>✔ Team routing & escalation</li>
                <li>✔ Priority alerts</li>
                <li>✔ Higher call volume</li>
              </ul>
              <a href="#" className="block bg-[#0B1220] text-white text-center py-4 font-bold">Start Now</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white text-center py-10 text-slate-500 border-t-2 border-[#CBD5E1]">© {new Date().getFullYear()} Plumb Dial</footer>
    </main>
  );
}
