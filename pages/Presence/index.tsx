import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Reminders from "./Reminders";
import { About } from "./About";
import { Links} from "./UI";
import Link from "next/link";
export default function App() {
  let location = useLocation();
  let aboutIsActive = location.pathname.match("/about");
  let remindersIsActive = !aboutIsActive;

  return (
    <div className="pt-12">
      <header className="max-w-md mx-auto">
        <nav className="mt-4 space-x-5">
          <Links
            className={`pb-px font-medium text-sm ${
              remindersIsActive
                ? "text-cool-gray-900 border-b-2 border-cool-gray-600"
                : "text-cool-gray-500 hover:text-cool-gray-900"
            }`}
            to={`/${location.search}`}
          >
            Reminders
          </Links>
          <Links
            className={`pb-px font-medium text-sm ${
              aboutIsActive
                ? "text-cool-gray-900 border-b-2 border-cool-gray-600"
                : "text-cool-gray-500 hover:text-cool-gray-900"
            }`}
            to={`/about${location.search}`}
          >
            About
          </Links>
        </nav>
      </header>

      <main className="mt-10">
          <Link href="/about">
            <About />
          </Link>
          <Link href="/:listId" >
            <Reminders />
          </Link>
      </main>
    </div>
  );
}