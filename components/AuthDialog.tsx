"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import GoogleIcon from '@mui/icons-material/Google';
import Link from "next/link";

interface AuthDialogProps {
    isStarted: boolean;
    setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthDialog = ({ isStarted, setIsStarted }: AuthDialogProps) => {

    // main mode (social screen or email screen)
    const [mode, setMode] = useState<"login" | "signup" | "email">("signup");

    // email specific mode
    const [emailMode, setEmailMode] = useState<"login" | "signup">("login");

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleEmailClick = () => {
        setEmailMode(mode === "signup" ? "signup" : "login");
        setMode("email");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-black/30 px-6 w-full fixed inset-0">
            <div className="w-full max-w-[678px] shadow-lg relative bg-white rounded-sm p-6">
                <div className="py-10">

                    {/* LOGIN / SIGNUP OPTIONS */}
                    {(mode === "signup" || mode === "login") && (
                        <>
                            <h3 className="text-center text-[28px] font-semibold leading-8 mb-10">
                                {mode === "login" ? "Welcome back" : "Join to Medium"}
                            </h3>

                            <div className="space-y-4 max-w-[300px] w-full mx-auto">

                                {/* GOOGLE */}
                                <Button
                                    className="rounded-full w-full border-black text-base h-11"
                                    variant="outline"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="!w-6 !h-6">
                                        <g id="google">
                                            <g id="google-vector" fillRule="evenodd" clipRule="evenodd">
                                                <path id="Shape" fill="#4285F4" d="M20.64 12.205q-.002-.957-.164-1.84H12v3.48h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615"></path>
                                                <path id="Shape_2" fill="#34A853" d="M12 21c2.43 0 4.468-.806 5.957-2.18L15.05 16.56c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.958v2.332A9 9 0 0 0 12.001 21"></path>
                                                <path id="Shape_3" fill="#FBBC05" d="M6.964 13.712a5.4 5.4 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71V7.96H3.957A9 9 0 0 0 3 12.002c0 1.452.348 2.827.957 4.042z"></path>
                                                <path id="Shape_4" fill="#EA4335" d="M12 6.58c1.322 0 2.508.455 3.441 1.346l2.582-2.58C16.463 3.892 14.427 3 12 3a9 9 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    Sign {mode === "login" ? "in" : "up"} with Google
                                </Button>

                                {/* GITHUB */}
                                <Button
                                    className="rounded-full w-full border-black text-base h-11"
                                    variant="outline"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="!h-6 !w-6">
                                        <g id="facebook">
                                            <g id="facebook-vector">
                                                <path fill="#1877F2" d="M22 12.002c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.799c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.989c4.78-.75 8.437-4.888 8.437-9.879"></path>
                                                <path fill="#fff" d="m15.893 14.893.443-2.891h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.284 0-3.777 1.385-3.777 3.89v2.204h-2.54v2.89h2.54v6.989a10 10 0 0 0 3.124 0v-6.988z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    Sign {mode === "login" ? "in" : "up"} with facebook
                                </Button>

                                {/* Only show extra providers in login */}
                                {mode === "login" && (
                                    <>
                                        <Button
                                            className="rounded-full w-full border-black text-base h-11"
                                            variant="outline"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="!h-6 !w-6">
                                                <g id="apple">
                                                    <path id="apple-vector" fill="currentColor" d="M18.52 8.23c-.106.086-1.993 1.183-1.993 3.62 0 2.82 2.401 3.818 2.473 3.843-.011.06-.381 1.366-1.266 2.696-.788 1.17-1.612 2.34-2.865 2.34s-1.575-.751-3.022-.751c-1.41 0-1.91.775-3.056.775S6.845 19.67 5.925 18.34C4.86 16.778 4 14.35 4 12.048c0-3.694 2.329-5.653 4.621-5.653 1.218 0 2.233.825 2.998.825.728 0 1.863-.874 3.248-.874.525 0 2.412.05 3.654 1.885m-4.31-3.448c.572-.701.978-1.674.978-2.647 0-.135-.011-.272-.035-.382-.933.036-2.042.64-2.71 1.44-.526.616-1.016 1.589-1.016 2.575 0 .148.024.296.035.344a1.4 1.4 0 0 0 .25.025c.837 0 1.89-.578 2.497-1.355"></path>
                                                </g>
                                            </svg>
                                            Sign in with X
                                        </Button>

                                        <Button
                                            className="rounded-full w-full border-black text-base h-11"
                                            variant="outline"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="!h-6 !w-6">
                                                <path fill="#242424" d="M13.346 10.932 18.88 4.5h-1.311l-4.805 5.585L8.926 4.5H4.5l5.803 8.446L4.5 19.69h1.311l5.074-5.898 4.053 5.898h4.426zM11.55 13.02l-.588-.84-4.678-6.693h2.014l3.776 5.4.588.842 4.907 7.02h-2.014z"></path>
                                            </svg>
                                            Sign in with Apple
                                        </Button>
                                    </>
                                )}

                                {/* EMAIL BUTTON */}
                                <Button
                                    className="rounded-full w-full border-black text-base h-11"
                                    variant="outline"
                                    onClick={handleEmailClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="!h-6 !w-6">
                                        <g id="email-icon">
                                            <g id="Group 10123" stroke="#242424">
                                                <rect id="Rectangle 1488" width="17" height="13" x="3.5" y="5.505" rx="1"></rect>
                                                <path id="Vector 107" strokeLinecap="round" d="m3.5 8.005 8.5 6 8.5-6"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    Sign {mode === "login" ? "in" : "up"} with email
                                </Button>
                            </div>
                        </>
                    )}

                    {/* EMAIL FORM */}
                    {mode === "email" && (
                        <div className="max-w-[360px] w-full mx-auto">
                            <div>
                                <img alt="Envelope icon" className="mx-auto" width="48" height="51" loading="lazy" src="https://miro.medium.com/v2/da:true/3e3f2c8aabad5bb10182c44f47176f83047662875df6ff780201f140e46aa1f9"/>
                            </div>   
                            <h2 className="text-center text-[28px] font-semibold leading-8 my-6">
                                {emailMode === "login"
                                    ? "Sign in with email"
                                    : "Sign up with email"}
                            </h2>

                            <form
                                className="space-y-6"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                {/* NAME FIELD ONLY IN SIGNUP */}
                                {emailMode === "signup" && (
                                    <div>
                                        <Label htmlFor="name" className="mb-2 block">
                                            Your full name
                                        </Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="rounded-sm h-[38px] border border-black bg-gray-100 focus:bg-white"
                                        />
                                    </div>
                                )}

                                {/* EMAIL FIELD */}
                                <div>
                                    <Label htmlFor="email" className="mb-2 block">
                                        Your email
                                    </Label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="rounded-sm h-[38px] border border-black bg-gray-100 focus:bg-white"
                                    />
                                </div>

                                <Button className="rounded-full h-[38px] mx-auto w-fit block text-sm font-medium">
                                    {emailMode === "login" ? "Sign in" : "Create account"}
                                </Button>
                            </form>

                            <p className="text-center text-sm mt-6">
                                <button
                                    onClick={() => setMode(emailMode)}
                                    className="underline font-medium"
                                >
                                    {emailMode==="login"?"Back to login options":"Back to signup options"}
                                </button>
                            </p>
                            <p className="text-center text-sm mt-6">
                                {emailMode === "login" ? (
                                    <>
                                        No account?{" "}
                                        <button
                                            onClick={() => setMode("signup")}
                                            className="underline font-medium"
                                        >
                                            Create one
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{" "}
                                        <button
                                            onClick={() => setMode("login")}
                                            className="underline font-medium"
                                        >
                                            Sign in
                                        </button>
                                    </>
                                )}
                            </p>

                            <p className="text-muted-foreground text-[10px] mt-6 text-center font-light">By clicking "Sign up", you accept Medium's <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>.</p>
                             <p className="text-muted-foreground text-[10px] text-center font-light">This site uses reCaptcha and the Google <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>.</p>
                        </div>
                    )}

                    {/* BOTTOM TOGGLE */}
                    {mode !== "email" && (
                        <>
                            <p className="text-center text-sm mt-10">
                                {mode === "login" ? (
                                    <>
                                        No account?{" "}
                                        <button
                                            onClick={() => setMode("signup")}
                                            className="underline font-medium"
                                        >
                                            Create one
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{" "}
                                        <button
                                            onClick={() => setMode("login")}
                                            className="underline font-medium"
                                        >
                                            Sign in
                                        </button>
                                    </>
                                )}
                            </p>
                            {
                                mode === "login" && (
                                    <p className="text-center text-sm mt-4">Forgot email or trouble signing in? <Link href="/help" className="underline">Get help</Link>.</p>
                                )
                            }

                            <p className="text-muted-foreground text-xs mt-6 text-center font-light">By clicking "Sign up", you accept Medium's Terms of Service and Privacy Policy.</p>
                        </>
                    )}
                </div>

                {/* CLOSE BUTTON */}
                <button
                    onClick={() => setIsStarted(false)}
                    className="absolute right-4 top-4"
                >
                    <X className="stroke-1 text-neutral-500" />
                </button>
            </div>
        </div>
    )
}

export default AuthDialog