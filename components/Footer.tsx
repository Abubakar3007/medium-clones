import Link from 'next/link';
const Footer = () => {
    const footerLinks = [
        { text: "Help", href: "/help" },
        { text: "Status", href: "/status" },
        { text: "About", href: "/about" },
        { text: "Careers", href: "/careers" },
        { text: "Press", href: "/press" },
        { text: "Blog", href: "/blog" },
        { text: "Privacy", href: "/privacy" },
        { text: "Policy", href: "/policy" },
        { text: "Terms", href: "/terms" },
        { text: "Text to speech", href: "/text-to-speech" }
    ]

    return (
        <footer className="py-6 border-t border-input/10">
            <div className="max-w-[680px] mx-auto px-6">
                <ul className="flex gap-3 text-xs text-muted-foreground justify-center flex-wrap">
                    {
                        footerLinks.map((link) => (
                            <li key={link.text}>
                                <Link href={link.href} className="hover:text-black">{link.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer