"use client";
import ProfileLayout from '@/components/ProfileLayout'
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { authors, stories, formatNumber } from "@/app/lib/mock-data";
import { useParams } from "next/navigation";
import Link from 'next/link';

const page = () => {
    const { id } = useParams();
    const [isGetStarted, setIsGetStarted] = useState(true);
    const [aboutImage, setAboutImage] = useState('');
    const [about, setAbout] = useState('');
    const author = authors.find(a => a.id === id) || authors[0];

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        setAboutImage(imageUrl);
    };

    // Save about
    const saveAbout = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAbout('');
        setAboutImage('');
    }

    // Cancel about
    const cancelAbout = () => {
        setIsGetStarted(true);
        setAbout('');
    }

    return (
        <ProfileLayout>
            <div className="py-6 animate-fade-in">
                {/* if user don't have about us */}
                <div className="mb-12 pb-12 border-b border-gray-200/80">
                    {
                        isGetStarted ? (
                            <div className="sm:py-16 sm:px-8 p-6 bg-neutral-100/50">
                                <div className="w-[70%] mx-auto text-center">
                                    <h2 className="text-base mb-5">Tell the world about yourself</h2>
                                    <p className="font-normal mb-5 leading-6">Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.</p>
                                    <Button variant="outline" className="rounded-full border-black" onClick={() => setIsGetStarted(false)}>Get started</Button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                {/* Add image show here */}
                                {
                                    aboutImage && (
                                        <div className="mb-6">
                                            <picture>
                                                <img src={aboutImage} alt="" loading="lazy" className="w-full" />
                                            </picture>
                                        </div>
                                    )
                                }

                                {/* form */}
                                <form onSubmit={saveAbout}>
                                    {/* textare */}
                                    <textarea
                                        className="resize-none w-full border-none outline-none min-h-12 text-3xl"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    ></textarea>
                                    {/* input text field */}
                                    <div className="flex justify-between gap-2 items-center pt-10">
                                        {/* Select image */}
                                        <label className="flex text-sm text-green-700 gap-2 items-center cursor-pointer">
                                            <span className="w-8 h-8 border border-green-700 rounded-full grid place-items-center flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="24" fill="none" viewBox="0 0 24 24" className="stroke-green-700">
                                                    <path fill="#242424" fillRule="evenodd" d="M15.75 13.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" clipRule="evenodd"></path>
                                                    <path fill="#242424" fillRule="evenodd" d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v10a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-10A2.5 2.5 0 0 1 4.5 5m0 1.25c-.69 0-1.25.56-1.25 1.25v5.366l3.308-3.308a.625.625 0 0 1 .884 0l9.192 9.192H19.5c.69 0 1.25-.56 1.25-1.25v-10c0-.69-.56-1.25-1.25-1.25zm10.366 12.5L7 10.884l-3.75 3.75V17.5c0 .69.56 1.25 1.25 1.25z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            Insert photo
                                            <input
                                                className="d"
                                                type="file"
                                                hidden
                                                onChange={handleImage}
                                            />
                                        </label>
                                        {/* Save and Cancel buttons */}
                                        <div className="flex gap-2">
                                            <Button variant="outline" type="button" className="px-5 border-black rounded-full" onClick={cancelAbout}>Cancel</Button>
                                            <Button variant="default" className="px-6 text-base bg-black text-white rounded-full">Save</Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </div>

                <div>
                    <p className="text-lg leading-relaxed font-serif">{author.bio}</p>
                    <div className="mt-8 flex gap-10">
                        <Link href="" className="font-medium text-green-700">{formatNumber(author.followers)} Followers</Link>
                        <Link href="" className="font-medium text-green-700">{formatNumber(author.following)} Following</Link>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    )
}

export default page