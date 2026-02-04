import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/plumb-dial-logo.svg" alt="Plumb Dial" width={220} height={48} className="mb-8" />
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">Never Miss Another Plumbing Job</h1>
            <p className="text-xl text-slate-300 mb-10">When you can’t answer the phone, Plumb Dial does — books the job, sends reminders, and follows up so you don’t lose work.</p>
            <a href="#pricing" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">Protect My Phone Now</a>
          </div>
          <div className="flex justify-center">
            <Image src="/mockup-new-job.svg" alt="Plumb Dial mobile dashboard" width={320} height={640} priority />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-6">
            <Image src="/mockup-missed-call.svg" alt="Missed call logged" width={280} height={560} className="mx-auto mb-6" />
            <p className="text-lg">Missed calls are answered instantly and logged automatically.</p>
          </div>
          <div className="border rounded-2xl p-6">
            <Image src="/mockup-booked.svg" alt="Job booked" width={280} height={560} className="mx-auto mb-6" />
            <p className="text-lg">Jobs are booked or callbacks scheduled without you touching the phone.</p>
          </div>
          <div className="border rounded-2xl p-6">
            <p className="text-lg">Confirmations, reminders, and follow-ups run automatically.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-14 text-center">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border rounded-2xl p-8 bg-white shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Solo Plumber</h3>
              <p className="text-4xl font-extrabold mb-6">£249<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li>✔ AI answers missed & after-hours calls</li>
                <li>✔ Emergency vs routine triage</li>
                <li>✔ Booking + reminders</li>
                <li>✔ Follow-ups on missed leads</li>
              </ul>
              <a href="#" className="block bg-slate-900 text-white text-center py-4 rounded-xl">Start Free Trial</a>
            </div>
            <div className="border rounded-2xl p-8 bg-white shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <p className="text-4xl font-extrabold mb-6">£399<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li>✔ Multiple phone numbers</li>
                <li>✔ Team routing & escalation</li>
                <li>✔ Priority alerts</li>
                <li>✔ Higher call volume</li>
              </ul>
              <a href="#" className="block bg-slate-900 text-white text-center py-4 rounded-xl">Start Free Trial</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-slate-500">© {new Date().getFullYear()} Plumb Dial</footer>
    </main>
  );
}
