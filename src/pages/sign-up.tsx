import React from "react";
import SignUpImg from "@/assets/img/signup_Illustration.png";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Input,
  Spacer,
  Link,
  theme,
} from "@nextui-org/react";
import GoogleLogo from "../assets/img/Google_Logo.png";
// import Link from "next/link";
import Icons from "@/components/icons";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignUp() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 h-screen w-screen">
      <div className="flex justify-center items-center bg-white">
        <div className=" flex flex-col justify-center items-center w-3/4">
          <div className="flex pb-7 pt-2">
            <Icons iconName="Brand Logo" />
          </div>
          <h3 className="text-2xl font-semibold tracking-wide">Sign Up</h3>
          <Spacer y={1} />

          {/* Social login section */}
          <div className="flex">
            {/* <Button
              css={{ backgroundColor: "$btnBg", color: "#030229", height: 40 }}
              size="sm"
            >
              <Image src={GoogleLogo} alt="Google Logo" className="mr-1" />
              Google
            </Button> */}
            <GoogleSignin />
            <Spacer x={1} />
            {/* <Button css={{ backgroundColor: "$black", height: 40 }} size="sm">
              <Icons iconName="Github" />
              GitHub
            </Button> */}
            <GithubSignin />
          </div>

          <Spacer y={1} />
          {/* Divider */}
          <div className="flex w-full items-center">
            <div className="border-t border-t-gray-300 w-full mr-2"></div>
            <p>Or</p>
            <div className="border-t border-t-gray-300 w-full ml-2"></div>
          </div>
          {/* Full Name */}
          <Input label="Name" placeholder="John Doe" width="100%" />
          <Spacer y={1} />
          {/* Email */}
          <Input label="Email" placeholder="johndoe@gmail.com" width="100%" />
          <Spacer y={1} />
          {/* Password */}
          <Input.Password label="Password" width="100%" />
          <Spacer y={1} />

          <div className="flex w-full  items-start">
            <Checkbox size="sm" className="py-1 pr-2" />
            <p className="text-base">
              By creating an account you agree to the{" "}
              <Link href="#" underline="true">
                terms of use
              </Link>{" "}
              and our{" "}
              <Link href="#" underline="true">
                privacy policy.
              </Link>
            </p>
          </div>
          <Spacer y={1} />
          <Button style={{ width: "100%" }}>Create account</Button>
          <Spacer y={0.5} />
          <p className="text-base">
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
      <div className="lg:flex hidden col-span-2 bg-[#FAFAFA] justify-center items-center ">
        <div className="w-7/12 justify-end items-end">
          <Image src={SignUpImg} alt="sign up illustration" width={800} />
        </div>
      </div>
    </div>
  );
}

async function callNodejsForGoogle(body: any) {
  const response = await fetch(
    `http://localhost:3001/signin-with-google/signin-with-google`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: body }),
    }
  ).then((res) => res.json());
  console.log("response", response);
}

function GoogleSignin() {
  const { data: session } = useSession();
  const handleLogin = (e: any) => {
    console.log("before signin");
    e.preventDefault();
    signIn("google");
    console.log("after signin");
  };

  if (session) {
    console.log(session);
    // callNodejsForGoogle(session.user)
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>;
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <>
      <Button
        css={{ backgroundColor: "$btnBg", color: "#030229", height: 40 }}
        size="sm"
        onClick={(e) => handleLogin(e)}
      >
        <Image src={GoogleLogo} alt="Google Logo" className="mr-1" />
        Google
      </Button>
      {/* <p>You are not signed in.</p>
      <button onClick={(e) => handleLogin(e)}>Sign in with Google</button> */}
    </>
  );
}

async function callNodejsForGithub(body: any) {
  const response = await fetch(
    `http://localhost:3001/signin-with-github/signin-with-github`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: body }),
    }
  ).then((res) => res.json());
  console.log("response", response);
}

function GithubSignin() {
  const { data: session } = useSession();
  const handleLogin = (e: any) => {
    console.log("before signin");
    e.preventDefault();
    signIn("github");
    console.log("after signin");
  };

  if (session) {
    console.log(session);
    callNodejsForGithub(session.user);
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>;
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <>
      <Button
        css={{ backgroundColor: "$black", height: 40 }}
        size="sm"
        onClick={(e) => handleLogin(e)}
      >
        <Icons iconName="Github" />
        GitHub
      </Button>
      {/* <p>You are not signed in.</p>
      <button onClick={(e) => handleLogin(e)}>Sign in with Github</button> */}
    </>
  );
}
