"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useAuth } from '@/app/context/authContext';
import { useState } from "react";
import AuthDialog from "@/components/AuthDialog";
const links = [
  {
    text: "Our story",
    link: "/about",
  },
  {
    text: "Membership",
    link: "/membership",
  }
]
const footerLinks = [
  { text: "Help", link: "/help" },
  { text: "Status", link: "/status" },
  { text: "About", link: "/about" },
  { text: "Careers", link: "/careers" },
  { text: "Press", link: "/press" },
  { text: "Blog", link: "/blog" },
  { text: "Privacy", link: "/privacy" },
  { text: "Rules", link: "/rules" },
  { text: "Terms", link: "/terms" },
  { text: "Text to speech", link: "/text-to-speech" },
];

const page = () => {

  const { user } = useAuth();
  const [isStarted, setIsStarted] = useState(false);

  return (
    <main>
      <header className="border-b border-black">
        <div className="py-5 flex justify-between items-center max-w-[1192px] w-full mx-auto [@media(min-width:900px)]:px-0 md:px-12 px-6">
          <Link href="/" className="text-3xl font-medium">
            <img src="./logo/black-logo.png" alt="logo" className="w-14" />
          </Link>
          <div className="flex gap-6 items-center">
            <ul className="gap-6 text-sm md:flex hidden">
              {
                links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.link}>{link.text}</Link>
                  </li>
                ))
              }
            </ul>
            <button className="text-sm sm:block hidden" onClick={() => setIsStarted(true)}>Write</button>
            <button className="text-sm sm:block hidden" onClick={() => setIsStarted(true)}>Sign in</button>

            <Button
              variant="default"
              size="sm"
              className="rounded-full"
              onClick={() => setIsStarted(true)}

            >
              Get started
            </Button>
          </div>
        </div>
      </header>

      <section className="flex relative justify-center items-center h-full w-full py-20 overflow-hidden min-h-[calc(100vh_-_143px)]">
        <div className="max-w-[1192px] w-full mx-auto [@media(min-width:900px)]:px-0 md:px-12 px-6">
          <div className="xl:right-0 -right-[26%] absolute -translate-y-1/2 top-1/2 hidden [@media(min-width:900px)]:block">
            <img alt="Brand image" className="" src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" width="460" height="600" loading="eager" />
          </div>

          <h1 className="[@media(min-width:900px)]:text-[120px] md:text-[106px] text-[80px] tracking-tight md:leading-[100px] leading-[72px] mb-12 max-w-4xl pt-12 font-serif">Human <br /> stories & ideas</h1>
          <p className="text-[24px] tracking-tight leading-[32px] mb-12 font-light">A place to read, write, and deepen your understanding</p>
          <Button className="rounded-full text-xl px-10 h-12 [@media(min-width:900px)]:bg-black [@media(min-width:900px)]:hover:bg-black bg-green-600 hover:bg-green-700" onClick={() => window.location.href = '/feed'}>Start reading</Button>
        </div>
      </section>

      <footer className="[@media(min-width:900px)]:bg-[#F7F4ED] bg-black border-t border-black [@media(min-width:900px)]:py-6 py-8">
        <ul className="flex justify-center flex-wrap items-center md:gap-5 gap-x-5 gap-y-3 md:px-12 px-6">
          {
            footerLinks.map((data, index) => (
              <li key={index}>
                <Link href={data.link} className="text-xs text-white/90 [@media(min-width:900px)]:text-muted-foreground">{data.text}</Link>
              </li>
            ))
          }
        </ul>
      </footer>

      {
        isStarted && (
          <AuthDialog isStarted={isStarted} setIsStarted={setIsStarted} />
        )
      }
    </main>
  )
}

export default page