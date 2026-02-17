import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
    return (
        <div className="bg-[#242424] text-white">
            {/* header */}
            <header className="p-6 flex justify-between border-b border-white/90 items-center">
                <Link href="/" className='text-3xl font-bold'>
                    Prismio
                </Link>
                <div className="flex gap-4">
                    <Button variant="outline" className='rounded-full border-white'>Sign in</Button>
                    <Button variant="default" className='rounded-full bg-white text-black'>Sign up</Button>
                </div>
            </header>

            {/* section */}
            <section className="pt-[120px] px-8 pb-[144px]">
                <div className='max-w-[680px]'>
                    <h1 className='text-[85px] mb-[72px] leading-[88px]'>Everyone has a story to tell</h1>
                    <p className="text-[21px]">Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without having to build a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.</p>
                    <br />
                    <br />
                    <blockquote className="text-[28px] leading-10 tracking-normal">
                        <span>Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</span>
                    </blockquote>
                    <br />
                    <br />
                    <p className="text-[21px]">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
                    <br />
                    <p className="text-[21px]">Over 100 million people connect and share their wisdom on Medium every month. They’re software developers, amateur novelists, product designers, CEOs, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>
                    <br />
                    <p className="text-[21px]">Instead of selling ads or selling your data, we’re supported by a growing community of over a million
                        <a className="underline" href="">Medium members</a> who believe in our mission. If you’re new here,
                        <span><a className="underline" href="">start reading</a></span>.
                        Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then
                        <a className="underline" href="">write your story</a>.
                    </p>
                </div>
            </section>

            <a className="pt-13 pb-16 px-8 border-t border-white block max-w-full transition-colors duration-300 ease-out delay-100 hover:bg-white hover:text-black" href="">
                <div className="flex justify-between items-center">
                    <span className="text-[70px] leading-[74px] tracking-tight">Start reading</span>
                    <span className="text-[70px]">→</span>
                </div>
            </a>
            <a className="pt-13 pb-16 px-8 border-t border-white block max-w-full transition-colors duration-300 ease-out delay-100 hover:bg-white hover:text-black" href="">
                <div className="flex justify-between items-center">
                    <span className="text-[70px]">Start writing</span>
                    <span className="text-[70px]">→</span>
                </div>
            </a>
            <a className="pt-13 pb-16 px-8 border-t border-white block max-w-full transition-colors duration-300 ease-out delay-100 hover:bg-white hover:text-black" href="">
                <div className="flex justify-between items-center">
                    <span className="text-[70px]">Become a member</span>
                    <span className="text-[70px]">→</span>
                </div>
            </a>

            {/* footer */}
            <footer className="bg-white text-black p-6 flex justify-between items-center">
                <Link href="/" className='text-2xl font-bold'>
                    Prisim
                </Link>
                <ul className="flex gap-2 text-[11px]">
                    <li>
                        <Link href="/about" className='underline'>About</Link>
                    </li>
                    <li>
                        <Link href="/terms" className='underline'>Terms</Link>
                    </li>
                    <li>
                        <Link href="/privacy" className='underline'>Privacy</Link>
                    </li>
                    <li>
                        <Link href="/help" className='underline'>Help</Link>
                    </li>
                    <li>
                        <Link href="/business" className='underline'>Teams</Link>
                    </li>
                    <li>
                        <Link href="/press" className='underline'>Press</Link>
                    </li>
                    <li>
                        <Link href="/contact" className='underline'>Contact</Link>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default page