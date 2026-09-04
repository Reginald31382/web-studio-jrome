"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that help your business look credible, explain what you do, and turn visitors into customers.",
    features: ["Custom design", "Mobile responsive", "Contact forms"],
    price: "From $200",
  },
  {
    number: "02",
    title: "E-Commerce",
    description:
      "Modern online stores built around your products, your brand, and the way your customers actually shop.",
    features: [
      "Product catalogs",
      "Shopping functionality",
      "Payment integration",
    ],
    price: "From $500",
  },
  {
    number: "03",
    title: "Website Redesigns",
    description:
      "Give an outdated website a fresh, modern look that works better on phones and makes your business easier to find.",
    features: ["Modern UI", "Responsive redesign", "Performance improvements"],
    price: "Let's talk",
  },
  {
    number: "04",
    title: "Custom Web Applications",
    description:
      "Need more than a website? I can build custom functionality around the way your business operates.",
    features: ["Custom features", "Database integration", "API connections"],
    price: "Let's talk",
  },
];

const projects = [
  {
    title: "R|D Notary & Signing",
    category: "Business Website",
    description:
      "A professional online presence designed to explain services and make it easy for customers to get in touch.",
    image: "/projects/rdnotary.jpg",
    href: "https://rdnotary-n-signing.netlify.app/",
  },
  {
    title: "JROME",
    category: "E-Commerce",
    description:
      "A modern apparel storefront built around brand identity, product presentation, and online shopping.",
    image: "/projects/jrome_stu.jpg",
    href: "https://www.jrome-studios.com/",
  },
  {
    title: "LOCED",
    category: "Educational Website",
    description:
      "A modern educational platform designed to help people understand their locs, learn proper care, and make informed decisions about their hair and scalp health.",
    image: "/projects/loced.jpg",
    href: "https://www.loced.org/",
  },
];

const pricing = {
  starter: {
    price: "$150+",
    description: "For businesses that need a professional online presence.",
  },
  business: {
    price: "$200+",
    description: "For businesses that need more functionality.",
  },
};

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different, but I offer straightforward starting prices. The final cost depends on the number of pages, features, integrations, and overall complexity.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical business website can take anywhere from a few days to several weeks depending on the scope, content, and how quickly feedback is provided.",
  },
  {
    question: "Do I need to provide the design?",
    answer:
      "No. I can work from an existing design, help you develop an idea, or create a complete design direction for your business.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I can modernize your current website, improve its layout, make it mobile-friendly, and help improve the overall user experience.",
  },
  {
    question: "Can you build an online store?",
    answer:
      "Yes. I can build e-commerce websites with product catalogs, shopping functionality, payment integration, and other features your business needs.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes. Maintenance and ongoing updates can be discussed depending on your needs.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="group">
            <span className="text-xl font-bold tracking-[-0.04em]">
              J.ROME<span className="text-cyan-400">.</span>WEB
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Process
            </a>
            <a
              href="#work"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Work
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Pricing
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Get Started <span className="ml-1">↗</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-52">
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Websites built for your business
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Your business deserves a website that{" "}
                <span className="text-cyan-400">works.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/55 text-center">
                I build fast, modern websites for small businesses,
                entrepreneurs, and organizations without the expensive agency
                price tag.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-black transition hover:bg-cyan-300"
                >
                  Start Your Website
                  <span className="ml-3 transition group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
                >
                  See My Work
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40 ">
                <span>✓ Mobile Friendly</span>
                <span>✓ Custom Built</span>
                <span>✓ SEO Ready</span>
                <span>✓ Fast Loading</span>
              </div>
            </div>

            {/* HERO WEBSITE MOCKUP */}
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-cyan-400/[0.08] blur-3xl" />

              <div className="relative rounded-2xl border border-white/10 bg-[#111] p-2 shadow-2xl shadow-black/50">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="ml-3 h-6 flex-1 rounded-md bg-white/[0.04]" />
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-b-xl bg-[#0d1718] p-6 sm:p-8">
                  <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

                  <div className="relative flex items-center justify-between">
                    <div className="text-xs font-bold tracking-widest text-white/80">
                      YOUR BRAND
                    </div>
                    <div className="hidden gap-4 text-[9px] text-white/40 sm:flex">
                      <span>ABOUT</span>
                      <span>SERVICES</span>
                      <span>CONTACT</span>
                    </div>
                  </div>

                  <div className="relative mt-16 max-w-sm sm:mt-20">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                      Built for growth
                    </div>

                    <div className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                      Make your first impression count.
                    </div>

                    <div className="mt-4 max-w-xs text-xs leading-5 text-white/40">
                      A modern website designed to help your business stand out
                      and connect with the right customers.
                    </div>

                    <div className="mt-7 inline-flex rounded-full bg-cyan-400 px-4 py-2 text-[10px] font-bold text-black">
                      Explore More →
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 hidden h-24 w-24 rounded-full border border-cyan-400/20 sm:block" />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-[#151515] px-5 py-4 shadow-xl sm:-left-10">
                <div className="text-[10px] uppercase tracking-widest text-white/35">
                  Built with
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Next.js <span className="text-cyan-400">+</span> React
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6 py-7 text-xs font-medium uppercase tracking-[0.18em] text-white/35 lg:justify-between lg:px-8">
          <span>Custom Design</span>
          <span>Responsive Layouts</span>
          <span>Modern Technology</span>
          <span>Personal Service</span>
          <span>Built To Grow</span>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                The problem
              </div>

              <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Your business doesn't need{" "}
                <span className="text-white/35">just a website.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/50 text-center">
                It needs a website that makes people trust your business,
                understand your services, and take the next step.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/2.5 p-6 text-center">
                <div className="mb-8 text-2xl">💰</div>
                <h3 className="text-lg font-semibold">Too Expensive</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  Professional agencies can charge thousands for a website that
                  doesn't need to be complicated.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center">
                <div className="mb-8 text-2xl">🧩</div>
                <h3 className="text-lg font-semibold">Too Complicated</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  DIY platforms can be useful, but building everything yourself
                  takes time and technical knowledge.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center">
                <div className="mb-8 text-2xl">🕐</div>
                <h3 className="text-lg font-semibold">Too Time Consuming</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  You have a business to run. Your website should not become
                  another full-time job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="border-y border-white/[0.06] bg-[#0d0d0d] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Why work with me
              </div>

              <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                You're not hiring an agency.
                <br />
                <span className="text-white/35">
                  You're working directly with the developer.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/50 text-center">
                No account managers. No being passed around between departments.
                Just direct communication with the person building your website.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Let's work together <span>→</span>
              </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-white/10 pt-6 text-center">
                <div className="mb-5 text-2xl">🤝</div>
                <h3 className="text-xl font-semibold">Personal Service</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  Communicate directly with the developer building your website.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 text-center">
                <div className="mb-5 text-2xl">💵</div>
                <h3 className="text-xl font-semibold">Fair Pricing</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  Professional results without unnecessary agency overhead.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 text-center">
                <div className="mb-5 text-2xl">🚀</div>
                <h3 className="text-xl font-semibold">Built To Grow</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  Your website can evolve as your business grows.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 text-center">
                <div className="mb-5 text-2xl">⚡</div>
                <h3 className="text-xl font-semibold">Modern Technology</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  Fast, responsive websites built with modern development tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                What I build
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Websites that do more.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/45">
              From a simple business website to a custom digital experience, I
              build websites designed around your goals, your customers, and
              your budget.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-cyan-400">
                    {service.number}
                  </span>

                  <span className="text-2xl text-white/20 transition group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-semibold tracking-tight text-center">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/45 text-center">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-10 border-t border-white/10 pt-5 text-sm text-white/35 text-center">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="border-y border-white/[0.06] bg-[#0d0d0d] px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Built with modern technology
            </div>

            <h2 className="text-2xl font-semibold tracking-tight">
              Fast. Flexible. Ready to grow.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Modern APIs",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/55"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-xl">
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The process
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              From idea to website.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-5">
            {[
              [
                "01",
                "Tell Me About Your Business",
                "We'll discuss your goals, customers, and what you want your website to accomplish.",
              ],
              [
                "02",
                "Plan",
                "I'll recommend the pages, functionality, and overall structure.",
              ],
              [
                "03",
                "Design & Build",
                "I build your website and keep you involved throughout the process.",
              ],
              ["04", "Review", "You review the site and request changes."],
              [
                "05",
                "Launch",
                "Your website goes live and your business is ready for the next step.",
              ],
            ].map(([number, title, description]) => (
              <div key={number} className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-sm font-semibold text-cyan-400">
                    {number}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/45">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        id="work"
        className="border-y border-white/[0.06] bg-[#0d0d0d] px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Selected work
              </div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Websites I've built.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/45">
              A few examples of the type of digital experiences I can create for
              businesses and organizations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group block text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#161616]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100">
                    ↗
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    {project.category}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45 text-center">
                    {project.description}
                  </p>

                  <div className="mt-4 text-sm font-semibold text-cyan-400">
                    View Project →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Simple pricing
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              No mystery quotes.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/45">
              Choose the type of website you need, or let's talk about something
              custom.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
              <div className="text-sm font-semibold text-white/50">Starter</div>

              <div className="mt-6 text-4xl font-semibold tracking-tight">
                {pricing.starter.price}
              </div>

              <p className="mt-3 text-sm text-white/40 text-center">
                For businesses that need a simple, professional online presence.
              </p>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-4 text-sm text-white/60 text-center">
                <li>✓ Up to X pages</li>
                <li>✓ Mobile responsive</li>
                <li>✓ Contact form</li>
                <li>✓ Basic SEO</li>
                <li>✓ Domain setup</li>
                <li>✓ Deployment</li>
              </ul>

              <a
                href="#contact"
                className="mt-10 block rounded-full border border-white/15 py-3 text-center text-sm font-semibold transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Get Started
              </a>
            </div>

            <div className="relative rounded-2xl border border-cyan-400/40 bg-cyan-400/[0.04] p-8 sm:p-10">
              <div className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                Most Popular
              </div>

              <div className="text-sm font-semibold text-cyan-400">
                Business
              </div>

              <div className="mt-6 text-4xl font-semibold tracking-tight">
                {pricing.business.price}
              </div>

              <p className="mt-3 text-sm text-white/40 text-center">
                For businesses that need a more complete website with additional
                pages and functionality.
              </p>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-4 text-sm text-white/60 text-center">
                <li>✓ Everything in Starter</li>
                <li>✓ More pages</li>
                <li>✓ Custom design</li>
                <li>✓ Advanced forms</li>
                <li>✓ SEO optimization</li>
                <li>✓ Integrations</li>
              </ul>

              <a
                href="#contact"
                className="mt-10 block rounded-full bg-cyan-400 py-3 text-center text-sm font-bold text-black transition hover:bg-cyan-300"
              >
                Get Started
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
              <div className="text-sm font-semibold text-white/50">Custom</div>

              <div className="mt-6 text-4xl font-semibold tracking-tight">
                Let's Talk
              </div>

              <p className="mt-3 text-sm text-white/40 text-center">
                For businesses that need something unique.
              </p>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-4 text-sm text-white/60 text-center">
                <li>✓ E-commerce</li>
                <li>✓ Dashboards</li>
                <li>✓ Booking systems</li>
                <li>✓ APIs</li>
                <li>✓ Custom applications</li>
                <li>✓ Database integration</li>
              </ul>

              <a
                href="#contact"
                className="mt-10 block rounded-full border border-white/15 py-3 text-center text-sm font-semibold transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/[0.06] bg-[#0d0d0d] px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              FAQ
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Questions, answered.
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-medium text-white/80">
                    {faq.question}
                  </span>

                  <span className="text-xl font-light text-white/40">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === index
                      ? "grid-rows-[1fr] pb-6"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-sm leading-7 text-white/45">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 py-28 lg:px-8 lg:py-40"
      >
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[120px]" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Let's build something
          </div>

          <h2 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Ready to put your business{" "}
            <span className="text-cyan-400">online?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/45">
            Whether you're starting a business, growing an existing one, or
            finally ready to take your business online, let's build a website
            that works for you.
          </p>

          <a
            href="https://consultation-jrome.netlify.app/"
            className="mt-10 inline-flex items-center rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold text-black transition hover:bg-cyan-300"
          >
            Start My Website <span className="ml-3">↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-bold tracking-[-0.04em]">
              J.ROME<span className="text-cyan-400">.</span>WEB
            </div>
            <p className="mt-2 text-xs text-white/35">
              Websites built for your business.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-white/40">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a
              href="https://consultation-jrome.netlify.app/"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <div className="text-xs text-white/25">
            © {new Date().getFullYear()} JROME.WEB
          </div>
        </div>
      </footer>
      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                  {selectedProject.category}
                </div>

                <h3 className="mt-1 text-lg font-semibold">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white/60 transition hover:border-white/30 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Website Preview */}
            <div className="flex-1 bg-white">
              <iframe
                src={selectedProject.href}
                title={`${selectedProject.title} website preview`}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
