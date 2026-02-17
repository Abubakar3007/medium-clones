"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";

const AuthPage = () => {
  // main mode (social screen or email screen)
  const [mode, setMode] = useState<"login" | "signup" | "email">("login");

  // email specific mode
  const [emailMode, setEmailMode] = useState<"login" | "signup">("login");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailClick = () => {
    setEmailMode(mode === "signup" ? "signup" : "login");
    setMode("email");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black/30 px-6 w-full">
      <div className="w-full max-w-[678px] shadow-lg relative bg-white rounded-sm p-6">
        <div className="py-10">

          {/* LOGIN / SIGNUP OPTIONS */}
          {(mode === "signup" || mode === "login") && (
            <>
              <h3 className="text-center text-[28px] font-semibold leading-8 mb-10">
                {mode === "login" ? "Welcome back" : "Join"} to Medium
              </h3>

              <div className="space-y-4 max-w-[300px] w-full mx-auto">

                {/* GOOGLE */}
                <Button
                  className="rounded-full w-full border-black text-base h-11"
                  variant="outline"
                >
                  Sign {mode === "login" ? "in" : "up"} with Google
                </Button>

                {/* GITHUB */}
                <Button
                  className="rounded-full w-full border-black text-base h-11"
                  variant="outline"
                >
                  Sign {mode === "login" ? "in" : "up"} with GitHub
                </Button>

                {/* Only show extra providers in login */}
                {mode === "login" && (
                  <>
                    <Button
                      className="rounded-full w-full border-black text-base h-11"
                      variant="outline"
                    >
                      Sign in with X
                    </Button>

                    <Button
                      className="rounded-full w-full border-black text-base h-11"
                      variant="outline"
                    >
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
                  Sign {mode === "login" ? "in" : "up"} with Email
                </Button>
              </div>
            </>
          )}

          {/* EMAIL FORM */}
          {mode === "email" && (
            <div className="max-w-[360px] w-full mx-auto">
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
                      className="rounded-sm h-[38px] border border-black bg-gray-100"
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
                    className="rounded-sm h-[38px] border border-black bg-gray-100"
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
                  Back
                </button>
              </p>
            </div>
          )}

          {/* BOTTOM TOGGLE */}
          {mode !== "email" && (
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
          )}
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMode("login")}
          className="absolute right-4 top-4"
        >
          <X className="stroke-1 text-neutral-500" />
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
