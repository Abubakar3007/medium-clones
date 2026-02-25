"use client";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react';
import { Check } from 'lucide-react';
import AuthDialog from '@/components/AuthDialog';
import { useAuth } from '../context/authContext';
const page = () => {

    const [isStarted, setIsStarted] = useState(false);

    const features = [
        { id: 1, text: "Read member-only stories" },
        { id: 2, text: "Support writers you read most" },
        { id: 3, text: "Listen to audio narrations" },
        { id: 4, text: "Read offline with the Medium app" },
        { id: 5, text: "Access our Mastodon community" },
        { id: 6, text: "Connect your custom domain" },
        { id: 7, text: "Create your own publications" },
    ];

    const features1 = [
        { id: 1, text: "All Medium member benefits" },
        { id: 2, text: "Share member-only stories with anyone and drive more earnings for writers" },
        { id: 3, text: "Customize app icon" }
    ]

    const footerLinks = [
        { text: "About", link: "/about" },
        { text: "Terms", link: "/terms" },
        { text: "Privacy", link: "/privacy" },
        { text: "Help", link: "/help" },
        { text: "Terms", link: "/terms" },
        { text: "Press", link: "/press" }
    ];

    const { user } = useAuth();

    return (
        <div>
            <header className="p-6 flex justify-between border-b border-black/90 items-center ">
                <Link href="/" className='text-white text-3xl font-bold'>
                    <img src="./logo/black-logo.png" alt="" className='w-14' />
                </Link>

                {
                    !user && (
                        <div className="flex sm:gap-4 gap-2">
                            <Button variant="outline" className='bg-transparent sm:h-10 sm:text-sm text-xs h-8' onClick={() => setIsStarted(true)}>Sign in</Button>
                            <Button variant="default" className='sm:h-10 sm:text-sm text-xs h-8' onClick={() => setIsStarted(true)}>Sign up</Button>
                        </div>
                    )
                }

            </header>

            <main>
                <div className="flex justify-between border-b border-input md:flex-row flex-col">
                    <div className='flex-1 bg-[#B2D68D66] md:border-none border-b border-input'>
                        <div className="md:border-r md:border-input sm:pt-16 pt-12 sm:pr-20 pr-8 pb-12 pl-8 gap-12 flex flex-col justify-between h-full">
                            <h1 className="xl:text-[85px] xl:leading-[88px] md:text-[70px] md:leading-[74px] text-[48px] leading-[52px] tracking-tighter font-light font-serif">Support human stories</h1>

                            <div className="max-w-[540px] w-full">
                                <p className="xl:text-[22px] text-lg xl:leading-7 leading-6 text-muted-foreground mb-12">Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.</p>
                                <div className="flex xl:gap-4 gap-3">
                                    <Button variant="default" className="px-5 text-base">Get started</Button>
                                    <Button variant="outline" className="px-5 text-base bg-transparent hover:bg-transparent">View plans</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:h-[640px] h-[560px] xl:w-[520px] md:w-[375px] w-full relative bg-[#B2D68D]">
                        <div className="h-full w-full flex flex-col">
                            <div className="flex w-full grow items-end" style={{
                                backgroundImage: `
                                            linear-gradient(
                                            rgba(255, 255, 255, 0) 43.75%, 
                                            rgb(178, 214, 141) 94.27%
                                            ),
                                            url("https://miro.medium.com/v2/1*YhmNsow7HNTf0Wu5raYD8A.png")
                                        `,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            >
                                <button className="px-4 py-2 rounded-full ml-8 bg-[#ffc017] text-black h-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 64 64" className="inline-block mr-2">
                                        <path fill="black" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path>
                                    </svg>
                                    <span>Member-only story</span>
                                </button>
                            </div>
                            <div className="py-6 px-8">
                                <div className='h-[128px]'>
                                    <h2 className="text-[32px] leading-9 tracking-tight line-clamp-3 text-ellipsis font-serif">AI and the Future of Work: What Stays 100% Human?</h2>
                                </div>
                                <div className="flex gap-4">
                                    <img alt="Cassie Kozyrkov" className='w-12 h-12 rounded-full' loading="lazy" src="https://miro.medium.com/v2/resize:fill:54:54/1*pIJYAvf37_hLJXUpZs7z6w.png" />
                                    <div>
                                        <p className="text-base leading-6">Cassie Kozyrkov</p>
                                        <p className="text-base leading-6">Chief Decision Scientist at Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 px-8 flex border-b border-input gap-12 lg:flex-row flex-col">
                    <div className="md:max-w-[485px] w-full text-left">
                        <div className="sticky top-[152px]">
                            <h2 className="md:text-[70px] md:leading-[74px] text-[48px] leading-[52px] tracking-tight font-serif">Why membership?</h2>
                        </div>
                    </div>

                    <div className="md:max-w-[680px] w-full text-left flex flex-col md:gap-[120px] gap-20">
                        <div>
                            <h2 className="md:text-[48px] text-[28px] md:leading-[52px] leading-8 tracking-tight mb-4 font-serif">Reward writers</h2>
                            <p className="md:text-xl md:leading-7 text-base leading-6">Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.</p>
                        </div>
                        <div>
                            <h2 className="md:text-[48px] text-[28px] md:leading-[52px] leading-8 tracking-tight mb-4 font-serif">Unlock every story</h2>
                            <p className="md:text-xl md:leading-7 text-base leading-6">Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.</p>
                        </div>
                        <div>
                            <h2 className="md:text-[48px] text-[28px] md:leading-[52px] leading-8 tracking-tight mb-4 font-serif">Enhance your reading experience</h2>
                            <p className="md:text-xl md:leading-7 text-base leading-6">Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.</p>
                        </div>
                        <div>
                            <h2 className="md:text-[48px] text-[28px] md:leading-[52px] leading-8 tracking-tight mb-4 font-serif">Elevate your writing</h2>
                            <p className="md:text-xl md:leading-7 text-base leading-6">Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.</p>
                        </div>
                        <div>
                            <h2 className="md:text-[48px] text-[28px] md:leading-[52px] leading-8 tracking-tight mb-4 font-serif">Support a mission that matters</h2>
                            <p className="md:text-xl md:leading-7 text-base leading-6">Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.</p>
                        </div>
                    </div>
                </div>

                <div className="py-20 px-8 flex border-b border-input gap-12 lg:flex-row flex-col">
                    <div className="max-w-[485px] w-full text-left">
                        <div className="sticky top-[152px]">
                            <h2 className="md:text-[70px] md:leading-[74px] text-[48px] leading-[52px] tracking-tight font-serif">What members are saying</h2>
                        </div>
                    </div>
                    <div className="max-w-[680px] w-full text-left flex flex-col md:gap-[120px] gap-20">
                        <div className="flex md:gap-8 gap-4 md:flex-row flex-col">
                            <a href="" className='shrink-0'>
                                <img alt="Cassie Kozyrkov" className="w-20 h-20 rounded-full object-cover shrink-0" loading="lazy" src="https://miro.medium.com/v2/resize:fill:91:91/1*djKJlXxmezn6fBPzHnipnw.jpeg" />
                            </a>
                            <div>
                                <p className="md:text-[21px] md:leading-8 text-lg leading-7 font-light tracking-tight mb-4">The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer.</p>
                                <p className="text-base leading-6"><a href=""><span>Cassie Kozyrkov,</span></a> Chief Decision Scientist at Google and Medium member</p>
                            </div>
                        </div>
                        <div className="flex md:gap-8 gap-4 md:flex-row flex-col">
                            <a href="" className='shrink-0'>
                                <img alt="Enrique Dans" className="w-20 h-20 rounded-full object-cover shrink-0" loading="lazy" src="https://miro.medium.com/v2/resize:fill:91:91/1*ZYP58jl-6KcKocr1P7r5Hw.jpeg" />
                            </a>
                            <div>
                                <p className="md:text-[21px] md:leading-8 text-lg leading-7 font-light tracking-tight mb-4">Medium has proved a game-changer for me, and quickly became the subscription I value the most, and I have quite a few. The cost is nothing compared to the value Medium generates for me month after month.</p>
                                <p className="text-base leading-6">
                                    <a href=""><span>Enrique Dans,</span></a> Professor of Innovation at IE Business School and Medium member
                                </p>
                            </div>
                        </div>
                        <div className="flex md:gap-8 gap-4 md:flex-row flex-col">
                            <a href="" className='shrink-0'>
                                <img alt="Wenqi Glantz" className="w-20 h-20 rounded-full object-cover shrink-0" loading="lazy" src="https://miro.medium.com/v2/resize:fill:91:91/1*Ce4jOl6gjeebSiHsknN2-A.jpeg" />
                            </a>
                            <div>
                                <p className="md:text-[21px] md:leading-8 text-lg leading-7 font-light tracking-tight mb-4">For us tech folks, Medium membership unlocks a whole treasure trove of high-quality articles. One good technology book could sell for over the Medium membership fee amount. It’s your choice whether to buy one book, or buy hundreds and thousands of books by unlocking member-only reading on Medium. Investing in a Medium membership is one of the best investments I have ever made for my career.</p>
                                <p className="text-base leading-6">
                                    <a href="">
                                        <span>Wenqi Glantz,</span>
                                    </a>
                                    <span>Software Architect at ArisGlobal and Medium member</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 px-8 flex border-b border-input gap-12 md:flex-row flex-col" id="membership-plans">
                    <div className="max-w-[485px] w-full text-left">
                        <div className="sticky top-[152px]">
                            <h2 className="md:text-[70px] md:leading-[74px] text-[48px] leading-[52px] tracking-tight font-serif">Membership plans</h2>
                        </div>
                    </div>
                    <div className="max-w-[680px] w-full text-left flex gap-8 md:flex-row flex-col">
                        <div className="flex-1 border border-input/10 p-8 text-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 64 64" className='mx-auto'>
                                <path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path>
                            </svg>
                            <div className="my-6">
                                <h2 className="text-2xl leading-6 tracking-tight">Medium Member</h2>
                                <p className="text-sm leading-6">$5/month or $50/year</p>
                            </div>
                            <Link href="">
                                <Button variant="secondary" className='h-9 w-full'>
                                    Get started
                                </Button>
                            </Link>
                            <hr className="my-6" />
                            <ul className="space-y-4">
                                {
                                    features.map((list, index) => (
                                        <li key={index} className='flex gap-2 items-center text-left'>
                                            <Check className='w-4 h-4 text-primary shrink-0' />
                                            <p>{list.text}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="flex-1 border border-input/10 p-8 text-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 64 64" className='mx-auto'>
                                <path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path>
                            </svg>
                            <div className="my-6">
                                <h2 className="text-2xl leading-6 tracking-tight">Friend of Medium</h2>
                                <p className="text-sm leading-6">$5/month or $150/year</p>
                            </div>

                            <Link href="">
                                <Button variant="secondary" className='h-9 w-full'>
                                    Get started
                                </Button>
                            </Link>
                            <hr className="my-6" />
                            <ul className="space-y-4">
                                {
                                    features1.map((list, index) => (
                                        <li key={index} className='flex gap-2 items-center text-left'>
                                            <Check className='w-4 h-4 text-primary shrink-0' />
                                            <p>{list.text}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-[#B2D68D66] py-20 px-8 text-center">
                    <h2 className="md:text-[70px] md:leading-[74px] text-[48px] leading-[52px] tracking-tight font-serif mb-12">Unlock a world of wisdom</h2>
                    <Link href="">
                        <Button className='px-5 text-base'>Get started</Button>
                    </Link>
                </div>
            </main>

            <footer className="p-6 flex justify-between border-t border-black/90 items-center md:flex-row flex-col">
                <Link href="/" className='text-3xl font-bold'>
                    Prismio
                </Link>
                <ul className='flex gap-4 text-[10px]'>
                    {
                        footerLinks.map((data, index) => (
                            <li key={index}><Link href={data.link} className='underline'>{data.text}</Link></li>
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