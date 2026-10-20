'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Check, Mail, MapPin, Menu, Phone, X } from 'lucide-react'

const pageData = {
  services: {
    eyebrow: '01 / SERVICES',
    title: 'Digital work with a clear business purpose.',
    intro: 'We combine strategy, design, and engineering to make digital products that are useful, distinctive, and ready to grow.',
    cards: [
      ['Business websites', 'Build trust and generate better inquiries with a sharp, responsive website.'],
      ['Custom software', 'Replace manual processes with tools designed around the way your team works.'],
      ['AI and automation', 'Use practical AI to reduce repetitive work and make business knowledge easier to access.'],
      ['SaaS products', 'Turn a promising idea into a focused, scalable product people can use.'],
    ],
  },
  work: {
    eyebrow: '02 / SELECTED WORK',
    title: 'Thoughtful products for practical problems.',
    intro: 'A closer look at the kinds of digital experiences and business systems we create with our clients.',
    cards: [
      ['Faraz Pharmacy POS', 'Business software that brings inventory, sales, and daily operations into one place.', '/work/faraz-pharmacy-pos.png'],
      ['Atlas Solution', 'A professional web presence designed to make a technical service easier to understand.', '/work/atlas-solution.png'],
      ['Snapbook', 'A focused social product experience with a simple path from idea to interaction.', '/work/snapbook.png']
    ],
  },
  about: {
    eyebrow: '03 / ABOUT ALSOME',
    title: 'Small enough to care. Technical enough to build.',
    intro: 'ALSOME Tech is a digital product studio for ambitious teams that want clarity, quality, and momentum.',
    cards: [
      ['Built around goals', 'We begin with the business problem, audience, and outcome—not a list of trendy features.'],
      ['Design with purpose', 'Visual quality meets clear navigation, useful functionality, and accessible experiences.'],
      ['Engineering that lasts', 'We favor maintainable code, sensible architecture, and practical performance.'],
      ['Clear communication', 'You always know what is being built, why it matters, and what comes next.'],
    ],
  },
} as const

export function PageShell({ type }: { type: keyof typeof pageData }) {
  const data = pageData[type]
  return <main className="min-h-screen bg-[#f7f5ef] text-[#101828]">
    <SiteHeader />
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28">
      <p className="animate-rise text-[11px] font-bold tracking-[.2em] text-[#245c47]">{data.eyebrow}</p>
      <h1 className="animate-rise animate-rise-delay-1 mt-6 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.07em] sm:text-7xl">{data.title}</h1>
      <p className="animate-rise animate-rise-delay-2 mt-8 max-w-2xl text-lg leading-8 text-[#667085]">{data.intro}</p>
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.cards.map(([title, text, image], index) => <article key={title} className={`animate-rise animate-rise-delay-${Math.min(index + 1, 3)} overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#a8d8b2] hover:shadow-[0_18px_45px_rgba(22,101,52,.08)]`}>
          {image && <img src={image} alt={`${title} product preview`} className="aspect-[16/10] w-full object-cover" />}
          <div className="p-7">
            <span className="text-xs font-bold text-[#c69a4b]">0{index + 1}</span>
            <h2 className={`${image ? 'mt-8' : 'mt-14'} text-xl font-semibold tracking-[-.03em]`}>{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#667085]">{text}</p>
          </div>
        </article>)}
      </div>
    </section>
    <section className="bg-[#101a18] px-5 py-20 text-white sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[11px] font-bold tracking-[.2em] text-[#a9e8b7]">READY WHEN YOU ARE</p><h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-.06em]">Have a useful idea? Let&apos;s make it real.</h2></div><a href="/contact" className="inline-flex w-fit items-center rounded-full bg-[#a9e8b7] px-6 py-3.5 text-sm font-bold text-[#12351f]">Start a project <ArrowUpRight className="ml-2 size-4" /></a></div></section>
    <Footer />
  </main>
}

export function ContactPage() {
  const [sent, setSent] = useState(false)
  return <main className="min-h-screen bg-[#f7f5ef] text-[#101828]"><SiteHeader /><section className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:pt-44"><div><p className="text-[11px] font-bold tracking-[.2em] text-[#245c47]">04 / START A PROJECT</p><h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[.98] tracking-[-.07em] sm:text-7xl">Tell us what you&apos;re building.</h1><p className="mt-8 max-w-md text-lg leading-8 text-[#667085]">Share a little about your goals, and we&apos;ll get back to you with thoughtful next steps.</p><div className="mt-12 grid gap-4 text-sm text-[#667085]"><span className="flex items-center gap-3"><Mail className="size-4 text-[#245c47]" /> hello@alsome.tech</span><span className="flex items-center gap-3"><MapPin className="size-4 text-[#245c47]" /> Working worldwide</span><span className="flex items-center gap-3"><Phone className="size-4 text-[#245c47]" /> Flexible collaboration</span></div></div><form onSubmit={(event) => { event.preventDefault(); setSent(true) }} className="rounded-3xl border border-[#e4e7ec] bg-white p-6 shadow-[0_20px_60px_rgba(16,24,40,.07)] sm:p-9"><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Name<input required name="name" className="rounded-xl border border-[#d0d5dd] bg-[#fbfcfa] px-4 py-3 font-normal outline-none focus:border-[#245c47]" placeholder="Your name" /></label><label className="grid gap-2 text-sm font-semibold">Email<input required type="email" name="email" className="rounded-xl border border-[#d0d5dd] bg-[#fbfcfa] px-4 py-3 font-normal outline-none focus:border-[#245c47]" placeholder="you@company.com" /></label></div><label className="mt-5 grid gap-2 text-sm font-semibold">What can we help with?<select name="service" className="rounded-xl border border-[#d0d5dd] bg-[#fbfcfa] px-4 py-3 font-normal outline-none focus:border-[#245c47]"><option>Website or redesign</option><option>Custom software</option><option>AI or automation</option><option>SaaS or digital product</option></select></label><label className="mt-5 grid gap-2 text-sm font-semibold">Project details<textarea required name="details" rows={6} className="resize-none rounded-xl border border-[#d0d5dd] bg-[#fbfcfa] px-4 py-3 font-normal outline-none focus:border-[#245c47]" placeholder="Tell us about your goals, timeline, and budget." /></label><button className="mt-6 inline-flex items-center rounded-full bg-[#245c47] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#0f4f27]">{sent ? 'Message ready to send' : 'Send inquiry'} {sent ? <Check className="ml-2 size-4" /> : <ArrowUpRight className="ml-2 size-4" />}</button>{sent && <p className="mt-4 text-sm text-[#245c47]">Thanks — your message is ready. Connect your preferred email service when you want submissions delivered.</p>}</form></section><Footer /></main>
}

function PageLogo() {
  return <a href="/" className="group flex items-center" aria-label="ALSOME Tech home"><img src="/alsome-tech-logo.png" alt="ALSOME Tech" className="h-8 w-auto max-w-[150px] object-contain" /></a>
}

function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ]

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e4e7ec]/70 bg-[#f7f5ef]/90 backdrop-blur-xl"><div className="mx-auto flex min-h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"><PageLogo /><nav className="hidden items-center gap-2 text-[13px] font-medium text-[#667085] md:flex">{links.map((link) => { const active = pathname === link.href; return <a key={link.href} href={link.href} aria-current={active ? 'page' : undefined} className={`rounded-full px-3 py-2 transition-colors ${active ? 'bg-[#e2f1e5] font-semibold text-[#245c47]' : 'hover:text-[#245c47]'}`}>{link.label}</a> })}<a href="/contact" className="ml-2 rounded-full bg-[#245c47] px-4 py-2.5 font-semibold text-white">Start a project <ArrowUpRight className="ml-2 size-4" /></a></nav><button className="rounded-full p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <nav className="flex flex-col gap-1 border-t border-[#e4e7ec] bg-[#f7f5ef] px-5 py-4 md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`rounded-xl px-3 py-3 font-medium ${pathname === link.href ? 'bg-[#e2f1e5] font-semibold text-[#245c47]' : 'text-[#667085]'}`}>{link.label}</a>)}<a href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-[#245c47] px-5 py-3 text-center font-semibold text-white">Start a project</a></nav>}</header>
}
function Footer() { return <footer className="bg-[#101a18] px-5 pb-8 text-[#94aa9c] sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold text-white">ALSOME<span className="text-[#c69a4b]">.</span></span><span>Digital products, thoughtfully built.</span><span>© 2026 ALSOME Tech</span></div></footer> }
