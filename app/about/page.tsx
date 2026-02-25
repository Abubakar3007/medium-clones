"use client";
import AuthDialog from '@/components/AuthDialog';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
const footerLinks = [
    {
        text: "About",
        link: "/about"
    },
    {
        text: "Terms",
        link: "/terms"
    },
    {
        text: "Privacy",
        link: "/privacy"
    },
    {
        text: "Help",
        link: "/help"
    },
    {
        text: "Press",
        link: "/press"
    },
    {
        text: "Contact",
        link: "/contact"
    }
]

const page = () => {
    const [isStarted, setIsStarted] = useState(false);

    const { user } = useAuth();
    console.log(user)
    return (
        <div className="bg-[#242424]">
            {/* header */}
            <header className="p-5 pl-8 flex justify-between border-b border-white/90 items-center text-white">
                <Link href="/" className='text-3xl font-bold'>
                    <img src="./logo/white-logo.png" alt="logo" className='w-14' />
                </Link>

                {!user && (
                    <div className="flex sm:gap-4 gap-2">
                        <Button variant="outline" className='rounded-full border-white bg-transparent sm:text-sm text-xs sm:h-10 h-8' onClick={() => setIsStarted(true)}>Sign in</Button>
                        <Button variant="default" className='rounded-full bg-white/90 text-black hover:bg-white sm:text-sm text-xs sm:h-10 h-8' onClick={() => setIsStarted(true)}>Sign up</Button>
                    </div>
                )}

            </header>

            {/* section */}
            <section
                className="[@media(min-width:900px)]:pt-[120px] pt-20 [@media(min-width:900px)]:px-8 px-5 [@media(min-width:900px)]:pb-[144px] pb-20 [@media(min-width:900px)]:bg-[url('/images/dot-bg.webp')] bg-right text-white">
                <div className='max-w-[680px]'>
                    <h1 className='sm:text-[85px] text-[48px] mb-10 sm:mb-[72px] leading-14 sm:leading-[88px] text-white font-serif'>Everyone has a story to tell</h1>
                    <p className="text-[21px] font-serif">Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without having to build a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.</p>
                    <br />
                    <br />
                    <blockquote className="text-[28px] leading-10 tracking-normal">
                        <span>Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</span>
                    </blockquote>
                    <br />
                    <br />
                    <p className="text-[21px] font-serif">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
                    <br />
                    <p className="text-[21px] font-serif">Over 100 million people connect and share their wisdom on Medium every month. They’re software developers, amateur novelists, product designers, CEOs, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>
                    <br />
                    <p className="text-[21px] font-serif">Instead of selling ads or selling your data, we’re supported by a growing community of over a million
                        <a className="underline" href="">Medium members</a> who believe in our mission. If you’re new here,
                        <span><a className="underline" href="">start reading</a></span>.
                        Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then
                        <a className="underline" href="">write your story</a>.
                    </p>
                </div>
            </section>

            <a className="sm:pt-13 pt-8 sm:pb-16 pb-10 sm:px-8 px-5 border-t text-white border-white block max-w-full transition-colors duration-300 ease-out delay-100 hover:bg-white hover:text-black font-serif" href="">
                <div className="flex justify-between items-center">
                    <span className="sm:text-[70px] text-[32px] sm:leading-[74px] leading-9 tracking-tight">Start reading</span>
                    <span className="sm:text-[60px] sm:leading-[74px] text-[32px]">→</span>
                </div>
            </a>

            <a className="sm:pt-13 pt-8 sm:pb-16 pb-10 sm:px-8 px-5 border-t text-white border-white block max-w-full transition-colors duration-300 ease-out delay-100 hover:bg-white hover:text-black font-serif" href="">
                <div className="flex justify-between items-center">
                    <span className="sm:text-[70px] text-[32px] sm:leading-[74px] leading-9 tracking-tight">Start writing</span>
                    <span className="sm:text-[60px] sm:leading-[74px] text-[32px]">→</span>
                </div>
            </a>

            <a className="sm:pt-13 pt-8 sm:pb-16 pb-10 sm:px-8 px-5 border-t text-white border-white block max-w-full transition-colors duration-300 ease-out delay-100 hover:bg-white hover:text-black font-serif" href="">
                <div className="flex justify-between items-center">
                    <span className="sm:text-[70px] text-[32px] sm:leading-[74px] leading-9 tracking-tight">Become a member</span>
                    <span className="sm:text-[60px] sm:leading-[74px] text-[32px]">→</span>
                </div>
            </a>

            {/* footer */}
            <footer className="bg-white text-black p-6 flex justify-between items-center md:flex-row flex-col">
                <Link href="/" className='text-3xl font-bold'>
                    <img src="./logo/black-logo.png" alt="logo" className='w-14' />
                </Link>
                <ul className="flex gap-2 text-[10px]">
                    {
                        footerLinks.map((data, index) => (
                            <li key={index}>
                                <Link href={data.link} className='underline'>{data.text}</Link>
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
        </div>
    )
}

export default page