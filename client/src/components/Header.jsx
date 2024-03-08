import React, { useState } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
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
      <div className="flex space-x-4">
        <Link to="/" className="ml-4">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/locations">Locations</Link>
      </div>

      <form className="ml-auto relative">
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="cd:hidden lg:inline"
        />
      </form>

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
      </div>
    </Navbar>
  );
}
