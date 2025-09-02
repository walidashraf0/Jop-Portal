import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to={"/"}>
          <img className="h-20 w-20 rounded-full" src="/mylogo.jpg" alt="Logo" />
        </Link>
        <Button variant={"outline"}>Login</Button>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </>
  );
};

export default Header;
