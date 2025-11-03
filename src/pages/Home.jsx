import { useState } from "react";

import DetailModal from "../components/DetailModal";
import persona1 from "../assets/personas/persona-1.jpg";
import persona2 from "../assets/personas/persona-2.jpg";
import persona3 from "../assets/personas/persona-3.jpg";

const services = [
  {
    id: "photo-editing",
    title: "Photo Editing",
    blurb: "Transform any photo into a polished masterpiece.",
    detail:
      "Background swaps, fake identities, and complete photo manipulations tailored exactly to how you want to appear."
  },
  {
    id: "voice-clone",
    title: "Voice Clone / Creation",
    blurb: "Craft hyper-realistic voice identities.",
    detail:
      "Clone celebrity or private voices and generate dialogue that sounds exactly like them, perfect for any scenario."
  },
  {
    id: "website-creation",
    title: "Website Creation",
    blurb: "Launch a fast, modern digital HQ.",
    detail:
      "Strategy, storytelling, and development for e-commerce, investment, crypto, brokerage, and any site you require."
  },
  {
    id: "ai-avatars",
    title: "AI Realistic Avatars",
    blurb: "Design life-like avatars and personas.",
    detail:
      "Produce endless consistent images of your character so you never worry about lacking the perfect photo again."
  },
  {
    id: "ai-video",
    title: "AI Video Creation",
    blurb: "Produce cinematic videos with AI tooling.",
    detail:
      "Generate realistic talking videos with voice-enabled avatars even without original footage of the person."
  },
  {
    id: "brand-growth",
    title: "Brand Growth",
    blurb: "Scale your presence with smart positioning.",
    detail:
      "Learn faceless content creation, monetization, and strategy to grow your influence while staying unseen."
  }
];

const academyTracks = [
  {
    id: "academy-video",
    title: "Video Call Mastery",
    detail:
      "Discover how cinematic AI video calls are produced with step-by-step guidance that makes it feel like watching a movie."
  },
  {
    id: "academy-photo",
    title: "Photo Editing Pro",
    detail:
      "Level up with practical tutorials, start earning quickly, and collaborate with the Bombate team while you learn."
  },
  {
    id: "academy-web",
    title: "Website Creation",
    detail:
      "Master no-code AI tools in weeks. Build full web apps and pages without traditional coding as Bombate shows you how."
  }
];

export default function Home() {
  const [activeDetail, setActiveDetail] = useState(null);

  const personaImages = [
    {
      id: "persona-1",
      src: persona1,
      alt: "Digital persona of a confident entrepreneur"
    },
    {
      id: "persona-2",
      src: persona2,
      alt: "AI-crafted persona representing a creative professional"
    },
    {
      id: "persona-3",
      src: persona3,
      alt: "Digital persona of a visionary strategist"
    }
  ];

  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section id="home" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
              Bombate Agency
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Forge, Mask, or Transform Your Digital Identity Powered by Bombate AI.
            </h1>
            <p className="text-lg text-slate-600">
              We partner with creators, executives, and private individuals to build believable
              digital doubles: voices, faces, and websites engineered with precision AI.
            </p>
            <div className="flex gap-4">
              <a
                href="#services"
                className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/qr/X76NOH7T3MUTC1"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="h-72 w-full max-w-sm rounded-3xl bg-slate-900/90 p-6 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-400">
                AI Showcase
              </p>
              <h3 className="mt-4 text-2xl font-semibold">Digital Personas</h3>
              <p className="mt-2 text-sm text-slate-200">
                Glimpse how Bombate blends photorealistic avatars with immersive storytelling for any identity.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-2xl bg-slate-700/60" />
                <div className="h-20 rounded-2xl bg-slate-700/60" />
                <div className="h-20 rounded-2xl bg-slate-700/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            About Bombate
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Bombate Agency is an all-in-one AI creative studio for the modern era. We craft
            photorealistic avatars, clone voices, and deploy branded experiences that let you
            present or protect the identity you need. From stealth rebrands to headline-ready
            launches, we guide you every step.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Services Overview
              </h2>
              <p className="mt-2 text-slate-600">
                Tap a service to preview what we deliver. Detailed pop-ups coming next.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                onClick={() => setActiveDetail({ title: service.title, detail: service.detail })}
              >
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.blurb}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Academy */}
      <section id="academy" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Bombate Academy</h2>
            <p className="mt-2 text-slate-600">
              Learn our exact playbooks for video calls, photo editing, and website creation so you can
              earn, collaborate, and master the same AI workflows we use every day.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {academyTracks.map((track) => (
              <button
                key={track.id}
                type="button"
                className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                onClick={() => setActiveDetail({ title: track.title, detail: track.detail })}
              >
                <h3 className="text-lg font-semibold text-slate-900">{track.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{track.detail}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to create or reinvent your digital presence?
          </h2>
          <p className="mt-3 text-slate-200">
            Tell us what you’re imagining and we’ll design a Bombate experience that delivers it with precision.
          </p>
          <a
            href="https://wa.me/qr/X76NOH7T3MUTC1"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
          >
            Start Your Project
          </a>
        </div>
      </section>
      {activeDetail && (
        <DetailModal
          title={activeDetail.title}
          detail={activeDetail.detail}
          onClose={() => setActiveDetail(null)}
        />
      )}
    </main>
  );
}
