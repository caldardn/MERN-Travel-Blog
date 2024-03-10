import React, { useState } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-custom-purple via-custom-blue to-custom-green rounded-lg text-white">
          Voyage
        </span>
        The World Is Yours To Explore
      </Link>

      <form className="ml-auto relative">
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="cd:hidden lg:inline"
        />
      </form>
      <div className="na:block an:hidden space-x-4">
        <Link to="/" className="ml-4">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/locations">Locations</Link>
      </div>

      <Button className="w-12 h-10 dc:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">sign in</Button>
        </Link>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/locations'>Locations</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
