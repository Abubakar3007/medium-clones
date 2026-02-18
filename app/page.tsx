import { Button } from "@/components/ui/button"
import Link from "next/link";
const links = [
  {
    text:"Our story",
    link:"/feed",
  },
  {
    text:"Membership",
    link:"/membership",
  },
  {
    text:"Write",
    link:"/write",
  },
  {
    text:"Sign In",
    link:"/sign-in",
  }
]
const footerLinks = ["Help", "Status", "About", "Careers", "Press", "Blog", "Privacy", "Rules", "Terms", "Text to speech"];

const page = () => {
  return (
    <main>
      <header className="border-b border-black">
        <div className="py-6 flex justify-between items-center max-w-[1192px] w-full mx-auto">
          <Link href="/" className="text-2xl font-medium">Prismio</Link>
          <div className="flex gap-6 items-center">
            <ul className="flex gap-6 text-sm">
              {
                links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.link}>{link.text}</Link>
                  </li>
                ))
              }
            </ul>
            <Button
              variant="default"
              className="rounded-full"
            >
              Get started
            </Button>
          </div>
        </div>
      </header>

      <section className="flex relative justify-center items-center h-full w-full py-20 overflow-hidden">
        <div className="max-w-[1192px] w-full mx-auto">
          <div className="right-0 absolute -translate-y-1/2 top-1/2">
            <img alt="Brand image" className="" src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" width="460" height="600" loading="eager" />
          </div>
          <h1 className="text-[120px] tracking-tight leading-[100px] mb-12 max-w-4xl pt-10">Human <br /> stories & ideas</h1>
          <p className="text-[24px] tracking-tight leading-[32px] mb-12 font-light">A place to read, write, and deepen your understanding</p>
          <Button variant="default" className="rounded-full text-xl px-10 h-12">Start reading</Button>
        </div>
      </section>

      <footer className="bg-[#F7F4ED] border-t border-black py-6">
        <ul className="flex justify-center items-center gap-6 text-xs text-neutral-500">
          {
            footerLinks.map((link) => (
              <li key={link}>
                <Link href="">{link}</Link>
              </li>
            ))
          }
        </ul>
      </footer>
    </main>
  )
}

export default page