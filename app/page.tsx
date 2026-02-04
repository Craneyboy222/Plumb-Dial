export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Never Miss Another Plumbing Job</h1>
        <p className="text-xl mb-8">When you can’t answer the phone, Plumb Dial does — books the job, sends reminders, and follows up so you don’t lose work.</p>
        <a href="#pricing" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">Protect My Phone Now</a>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <ol className="space-y-4 text-lg">
          <li>1. Customer calls your normal number</li>
          <li>2. If you miss it, AI answers instantly</li>
          <li>3. Job is booked or callback scheduled</li>
          <li>4. Confirmations and reminders sent automatically</li>
          <li>5. You see everything in one simple dashboard</li>
        </ol>
      </section>

      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Solo Plumber</h3>
              <p className="text-4xl font-extrabold mb-4">£249<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li>✔ AI answers missed & after-hours calls</li>
                <li>✔ Emergency vs routine triage</li>
                <li>✔ Booking + reminders</li>
                <li>✔ Follow-ups on missed leads</li>
              </ul>
              <a href="#" className="block bg-blue-600 text-white text-center py-3 rounded-lg">Start Free Trial</a>
            </div>
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <p className="text-4xl font-extrabold mb-4">£399<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-2 mb-6">
                <li>✔ Multiple phone numbers</li>
                <li>✔ Team routing & escalation</li>
                <li>✔ Priority alerts</li>
                <li>✔ Higher call volume</li>
              </ul>
              <a href="#" className="block bg-blue-600 text-white text-center py-3 rounded-lg">Start Free Trial</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-500">© {new Date().getFullYear()} Plumb Dial</footer>
    </main>
  );
}
