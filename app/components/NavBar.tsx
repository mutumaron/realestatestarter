"use client";

// import { useState } from "react";
import "./navbar.scss";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  // const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <Image src="/logo.png" alt="" width={500} height={500} />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <Image src="/logo.png" alt="" width={500} height={500} />
            <span>John Doe</span>
            <Link href={""} className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <Image
            src="/menu.png"
            alt=""
            width={500}
            height={500}
            // onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        {/* <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
