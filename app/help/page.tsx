import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react';
import Link from 'next/link';

const page = () => {

    const helpCards = [
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTEARGVR2XQ7511H41H5W",
            title: "Getting started",
            description: "Learn more about Medium and set up your account",
            links: [
                "Sign in or sign up to Medium",
                "Using Medium",
                "Medium glossary"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTF1ZE1YTWR6GGZ6NQZ66",
            title: "Managing your account",
            description: "Everything you need to know about your account settings and profile page",
            links: [
                "Your profile URL",
                "Your profile page",
                "Adjust email preferences",
                "Manage your subscription",
                "Connect social media accounts"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTCEW7SASKE6614S40VPK",
            title: "Reading",
            description: "Control your reading experience on Medium",
            links: [
                "Your homepage",
                "Create and manage lists",
                "Control your recommendations",
                "Mute an author or publication",
                "About Audio"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTCV4TA96KKK04FJFBS4E",
            title: "Managing stories",
            description: "Manage your content",
            links: [
                "Stats",
                "Story details and stats page",
                "Audience stats",
                "About Friend Links",
                "Email subscriptions"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKT8F0RT26QCHXZJMCWRZV",
            title: "Writing & editing",
            description: "Master the story editor",
            links: [
                "Writing and publishing your first story",
                "Create, edit, or delete a story",
                "Using the story editor",
                "Using images",
                "Using topics"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKT968HYASVD9ETJKR0WTK",
            title: "Distribution",
            description: "Learn more about distribution on Medium",
            links: [
                "What happens to your story when you publish on Medium",
                "Medium’s Distribution guidelines",
                "Review stories for Boost, criteria, and network distribution"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTAQ34GQZNQY0NH7DS559",
            title: "Partner Program",
            description: "Start earning for your content",
            links: [
                "Partner Program Guide",
                "Make a story eligible to earn money",
                "Partner Program earnings dashboard",
                "Calculating earnings in the Partner Program"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTAHNNPDM87D5Y6GV4W0R",
            title: "Publications",
            description: "Learn how to set up and manage a Medium publication",
            links: [
                "Getting started with a Medium publication",
                "How to submit a story to a publication",
                "How to manage story submissions",
                "Publication settings and layout"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTA7H3VSH9G6G87KRJBWT",
            title: "Terms & Policies",
            description: "The fine print",
            links: [
                "Terms of Service",
                "Medium Rules",
                "Privacy Policy",
                "Partner Program Terms"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTA7H3VSH9G6G87KRJBWT",
            title: "Content",
            description: "Content policies",
            links: [
                "COVID-19 Content Policy",
                "Controversial, Suspect, and Extreme Content",
                "Best practices for journalism on Medium"
            ]
        },
        {
            image: "https://help.medium.com/hc/theming_assets/01HZPKTA7H3VSH9G6G87KRJBWT",
            title: "Safety",
            description: "Learn about Medium’s safety tools",
            links: [
                "Block a user",
                "Manage responses",
                "Report posts & users",
                "Report copyright infringement",
                "User data protection"
            ]
        }
    ];

    return (
        <>
            <header className='bg-black w-full'>
                <div className='flex justify-between py-6 max-w-[1200px] w-full mx-auto items-center'>
                    <div className='flex gap-4 items-center'>
                        <Link href="/" className='text-white text-3xl font-bold'>
                            Prismio
                        </Link>
                        <span className='text-white/80'>Help Center</span>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Link href="" className='text-white/80'>Back to medium.com</Link>
                        <Button
                            size="sm"
                            className='border border-white/80 rounded-full text-white/80'
                        >
                            Submit a request
                        </Button>
                    </div>
                </div>
            </header>
            <main>
                <div className="relative py-[8%] bg-[#B7DCED] px-6">
                    <div className="absolute inset-0 w-full h-full bg-[url('/images/help-bg.png')] bg-cover bg-center"></div>
                    <div className="max-w-[720px] w-full mx-auto text-center">
                        <h1 className="mb-8 text-5xl">How can we help?</h1>

                        <form className="relative w-full">
                            <input name="utf8" value="" autoComplete="off" placeholder='Search..' className='h-[60px] px-14 bg-white rounded-full w-full placeholder-gray-400 text-xl outline-none' />
                            <div className="absolute left-5 top-1/2 -translate-y-1/2"><Search/></div>
                        </form>

                        <div className='mt-8 text-center flex items-center justify-center text-base gap-2 flex-wrap'>
                            <span>Popular:</span>
                            <div className="flex flex-col sm:flex-row items-center gap-2 flex-wrap">
                                <a href="" className='underline'>Membership</a>
                                <a href="" className='underline'> Partner Program</a>
                                <a href="" className='underline'> Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category */}
                <section className='py-16'>
                    <div className='max-w-[1200px] w-full mx-auto xl:px-0 px-4'>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                            {helpCards.map((data, index) => (
                                <div className="border border-input/10 p-10" key={index}>

                                    <div className="flex mb-8 gap-6">
                                        <img className="w-12 h-12" src={data.image} alt={data.title} />
                                        <div>
                                            <h3 className="text-xl mb-1">{data.title}</h3>
                                            <span className="text-base text-muted-foreground">
                                                {data.description}
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="pl-[70px] text-base space-y-3">
                                        {data.links.map((link, i) => (
                                            <li
                                                key={i}
                                                className="relative pl-5 before:w-1 before:h-1 before:bg-muted-foreground/50 before:rounded-full before:absolute before:left-0 before:top-3"
                                            >
                                                <a href="#">
                                                    {link}
                                                </a>
                                            </li>
                                        ))}

                                        {/* See All Button (outside map) */}
                                        <li className="pl-5 inline-block mt-2">
                                            <a
                                                href="#"
                                                className="border-primary text-primary px-4 py-1.5 text-sm inline-block rounded-full border"
                                            >
                                                See all...
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Request */}
                <section className='py-16 bg-gray-100/50 text-center'>
                    <h2 className='text-4xl mb-10'>Can't find what you're looking for?</h2>
                    <button className='bg-primary text-white rounded-full px-4 py-2'>Submit a request</button>
                </section>
            </main>
            <footer className='bg-black text-right py-8'>
                <div className='max-w-[1200px] w-full mx-auto flex justify-end'>
                    <ul className="flex py-2 gap-3 text-sm text-white">
                        <li>
                            <a href="/status">Status</a>
                        </li>
                        <li>
                            <a href="/write">Writers</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/careers">Careers</a>
                        </li>
                        <li>
                            <a href="/privacy">Privacy</a>
                        </li>
                        <li>
                            <a href="/terms">Terms</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default page