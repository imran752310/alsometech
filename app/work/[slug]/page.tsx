import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const projects = {
  'faraz-pharmacy-pos': {
    title: 'Faraz Pharmacy POS',
    type: 'Business software · Desktop application',
    image: '/work/faraz-pharmacy-pos.png',
    summary: 'A focused point-of-sale system that brings inventory, sales, and everyday pharmacy operations into one clear workspace.',
    outcome: 'Less manual work, faster checkout, and a reliable operational view for the team.',
  },
  'atlas-solution': {
    title: 'Atlas Solution',
    type: 'Business website · Web development',
    image: '/work/atlas-solution.png',
    summary: 'A professional digital presence designed to make a technical service easier to understand and easier to trust.',
    outcome: 'A clearer story for prospective clients with a polished, responsive experience.',
  },
  snapbook: {
    title: 'Snapbook',
    type: 'Web application · Social product',
    image: '/work/snapbook.png',
    summary: 'A focused social product experience with a simple path from idea to interaction.',
    outcome: 'A usable product foundation that keeps discovery, sharing, and engagement feeling effortless.',
  },
} as const

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]
  if (!project) notFound()

  return <main className="min-h-screen bg-[#f7f5ef] text-[#101828]">
    <header className="border-b border-[#e4e7ec] bg-[#f7f5ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="/" className="flex items-center gap-2.5" aria-label="ALSOME Tech home"><span className="grid size-8 place-items-center rounded-lg bg-[#245c47] text-lg font-black tracking-[-.12em] text-white">A</span><span className="text-[15px] font-bold tracking-[-.04em]">ALSOME<span className="text-[#245c47]">.</span></span></a>
        <a href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[#245c47]"><ArrowLeft className="size-4" /> All work</a>
      </div>
    </header>
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pt-28">
      <p className="text-[11px] font-bold tracking-[.2em] text-[#245c47]">02 / SELECTED WORK</p>
      <div className="mt-6 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><h1 className="max-w-2xl text-5xl font-semibold leading-[.98] tracking-[-.07em] sm:text-7xl">{project.title}</h1><p className="mt-7 text-xs font-bold uppercase tracking-[.14em] text-[#c69a4b]">{project.type}</p><p className="mt-7 max-w-xl text-lg leading-8 text-[#667085]">{project.summary}</p></div>
        <div className="overflow-hidden rounded-3xl border border-[#dce8df] bg-[#17382a] shadow-[0_24px_70px_rgba(16,24,40,.12)]"><img src={project.image} alt={`${project.title} project preview`} className="aspect-[16/10] w-full object-cover" /></div>
      </div>
    </section>
    <section className="bg-[#101a18] px-5 py-20 text-white sm:px-8 lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.7fr_1.3fr] md:items-start"><p className="text-[11px] font-bold tracking-[.2em] text-[#a9e8b7]">THE OUTCOME</p><div><h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">{project.outcome}</h2><a href="/contact" className="mt-8 inline-flex items-center rounded-full bg-[#a9e8b7] px-6 py-3.5 text-sm font-bold text-[#12351f]">Start a project <ArrowUpRight className="ml-2 size-4" /></a></div></div></section>
  </main>
}
