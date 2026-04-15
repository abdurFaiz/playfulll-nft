
import { Mail, ChevronRight } from 'lucide-react'

// Inline SVG replacements for Twitter/X and GitHub
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const CF = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P'

const VIDEOS = {
  hero: `${CF}/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4`,
  about: `${CF}/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4`,
  cta: `${CF}/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4`,
  nft1: `${CF}/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4`,
  nft2: `${CF}/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4`,
  nft3: `${CF}/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4`,
}

const NAV_LINKS = ['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact']

const NFT_CARDS = [
  { video: VIDEOS.nft1, score: '8.7/10' },
  { video: VIDEOS.nft2, score: '9/10' },
  { video: VIDEOS.nft3, score: '8.2/10' },
]

function VideoEl({ src, className = '' }: { src: string; className?: string }) {
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={className}
    />
  )
}

function SocialButtons({ vertical = false }: { vertical?: boolean }) {
  const icons = [
    { Icon: Mail, label: 'Mail' },
    { Icon: TwitterIcon, label: 'Twitter' },
    { Icon: GithubIcon, label: 'Github' },
  ]
  return (
    <>
      {icons.map(({ Icon, label }, i) => (
        <button
          key={label}
          aria-label={label}
          className={`liquid-glass flex items-center justify-center rounded-[1rem] w-14 h-14 hover:bg-white/10 transition-colors cursor-pointer ${vertical && i < 2 ? 'border-b border-white/10' : ''}`}
        >
          <Icon size={20} className="text-[#EFF4FF]" />
        </button>
      ))}
    </>
  )
}

export default function App() {
  return (
    <div className="bg-[#010828] min-h-screen text-[#EFF4FF] overflow-x-hidden">

      {/* Texture overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          backgroundImage: 'url(/texture.png)',
          backgroundSize: 'cover',
          mixBlendMode: 'lighten',
          opacity: 0.6,
        }}
      />

      {/* ─── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden rounded-b-[32px]">
        <VideoEl src={VIDEOS.hero} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#010828]/30" />

        <div className="relative z-10 h-full flex flex-col mx-auto max-w-[1831px] px-4 sm:px-8 lg:px-12">
          {/* Header row */}
          <div className="flex items-center justify-between pt-6 lg:pt-8">
            <span className="text-[16px] uppercase text-[#EFF4FF] tracking-wide" style={{ fontFamily: 'Anton, sans-serif' }}>
              Orbis.Nft
            </span>

            <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
              <ul className="flex items-center gap-10">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] uppercase text-[#EFF4FF] hover:text-[#6FFF00] transition-colors" style={{ fontFamily: 'Anton, sans-serif' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:flex flex-col gap-3">
              <SocialButtons />
            </div>
          </div>

          {/* Hero text */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative lg:ml-32" style={{ maxWidth: '780px' }}>
              <h1
                className="text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase text-[#EFF4FF] leading-[1.05] md:leading-[1]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Beyond earth
                <br />
                and ( its ) familiar
                <br />
                boundaries
              </h1>
              <span
                className="absolute -right-4 sm:right-0 top-0 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-[#6FFF00] -rotate-1 opacity-90"
                style={{ fontFamily: 'Condiment, cursive', mixBlendMode: 'exclusion' }}
              >
                Nft collection
              </span>
            </div>

            <div className="flex lg:hidden gap-3 mt-8">
              <SocialButtons />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: ABOUT ────────────────────────────────────── */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <VideoEl src={VIDEOS.about} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#010828]/40" />

        <div className="relative z-10 mx-auto max-w-[1831px] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 flex flex-col justify-between min-h-screen">
          {/* Top row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="relative">
              <h2
                className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-[#EFF4FF] leading-[1]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Hello!
                <br />
                I'm orbis
              </h2>
              <span
                className="absolute bottom-0 right-0 translate-y-1/4 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] text-[#6FFF00] rotate-2"
                style={{ fontFamily: 'Condiment, cursive', mixBlendMode: 'exclusion' }}
              >
                Orbis
              </span>
            </div>

            <p className="font-mono text-[14px] sm:text-[16px] uppercase text-[#EFF4FF] max-w-[266px]">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>

          {/* Bottom decorative rows */}
          <div className="flex flex-row justify-between mt-auto pt-16">
            <div className="flex flex-col gap-6">
              {[0, 1].map((i) => (
                <p key={i} className="font-mono text-[14px] sm:text-[16px] uppercase text-[#010828] lg:text-[#EFF4FF] lg:opacity-10 max-w-[266px]">
                  A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
                </p>
              ))}
            </div>
            <div className="hidden lg:flex flex-col gap-6">
              {[0, 1].map((i) => (
                <p key={i} className="font-mono text-[14px] sm:text-[16px] uppercase text-[#EFF4FF] opacity-10 max-w-[266px] text-right">
                  A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: NFT COLLECTION GRID ──────────────────────── */}
      <section className="bg-[#010828] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1831px] px-4 sm:px-8 lg:px-12">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-12">
            <div>
              <h2
                className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-[#EFF4FF] leading-[1]"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                Collection of
              </h2>
              <div className="ml-12 sm:ml-24 lg:ml-32 flex items-baseline gap-3">
                <span className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-[#6FFF00] leading-[1]" style={{ fontFamily: 'Condiment, cursive' }}>
                  Space
                </span>
                <span className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-[#EFF4FF] leading-[1]" style={{ fontFamily: 'Anton, sans-serif' }}>
                  objects
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end">
              <div className="flex items-baseline gap-3">
                <span className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] uppercase text-[#EFF4FF] leading-[1]" style={{ fontFamily: 'Anton, sans-serif' }}>
                  SEE
                </span>
                <div className="flex flex-col leading-[1]">
                  <span className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-[#EFF4FF]" style={{ fontFamily: 'Anton, sans-serif' }}>ALL</span>
                  <span className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] uppercase text-[#EFF4FF]" style={{ fontFamily: 'Anton, sans-serif' }}>CREATORS</span>
                </div>
              </div>
              <div className="bg-[#6FFF00] h-[6px] sm:h-[8px] lg:h-[10px] w-full mt-2 rounded-full" />
            </div>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NFT_CARDS.map(({ video, score }, idx) => (
              <div key={idx} className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors">
                <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
                  <VideoEl src={video} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="liquid-glass rounded-[20px] px-5 py-4 mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-[#EFF4FF]/70 uppercase font-mono">Rarity Score:</p>
                    <p className="text-[16px] text-[#EFF4FF] uppercase" style={{ fontFamily: 'Anton, sans-serif' }}>{score}</p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform cursor-pointer">
                    <ChevronRight size={20} className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CTA ───────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <VideoEl src={VIDEOS.cta} className="w-full h-auto block" />
        <div className="absolute inset-0 bg-[#010828]/30" />

        {/* Text content */}
        <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-6 sm:px-12">
          <div className="relative text-right">
            <span
              className="absolute -top-8 sm:-top-12 left-0 text-[17px] sm:text-[32px] md:text-[48px] lg:text-[68px] text-[#6FFF00]"
              style={{ fontFamily: 'Condiment, cursive', mixBlendMode: 'exclusion' }}
            >
              Go beyond
            </span>
            <h2
              className="text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] uppercase text-[#EFF4FF] leading-[1.05]"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-12">JOIN US.</span>
              REVEAL WHAT'S HIDDEN.
              <br />
              DEFINE WHAT'S NEXT.
              <br />
              FOLLOW THE SIGNAL.
            </h2>
          </div>
        </div>

        {/* Bottom-left social icons */}
        <div
          className="absolute liquid-glass rounded-[0.5rem] sm:rounded-[0.875rem] lg:rounded-[1.25rem] overflow-hidden"
          style={{ left: '8%', bottom: '12%' }}
        >
          {[Mail, TwitterIcon, GithubIcon].map((Icon, i) => (
            <button
              key={i}
              className={`flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer
                w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                h-[14vw] sm:h-[4rem] md:h-[3.5rem] lg:h-[5rem]
                ${i < 2 ? 'border-b border-white/10' : ''}`}
            >
              <Icon size={20} className="text-[#EFF4FF]" />
            </button>
          ))}
        </div>
      </section>

    </div>
  )
}
