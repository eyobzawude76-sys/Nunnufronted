"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-xl font-extrabold text-white shadow-md">
              K
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-extrabold leading-tight text-blue-800">
                Kolleejjii Polii Teeknikaa Sirre
              </h1>
              <p className="text-xs text-gray-500">
                Technical & Vocational Education
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <Link
              href="/"
              className="hidden font-semibold text-blue-700 transition hover:text-blue-900 sm:block"
            >
              Home
            </Link>

            <Link
              href="/reports"
              className="hidden font-semibold text-gray-700 transition hover:text-blue-700 md:block"
            >
              Reports
            </Link>

            <Link
              href="#about"
              className="hidden font-semibold text-gray-700 transition hover:text-blue-700 md:block"
            >
              About
            </Link>

            <Link
              href="#features"
              className="hidden font-semibold text-gray-700 transition hover:text-blue-700 md:block"
            >
              Features
            </Link>

           
        <Link
              href="/login"
              className="rounded-lg border border-blue-700 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50 sm:px-5"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:bg-blue-800 sm:px-5"
            >
              Register
            </Link>
                <Link
              href="/reports"
              className="hidden font-semibold text-gray-700 transition hover:text-blue-700 md:block"
            >
              Reports
            </Link>

          </div>
        </div>
     
      </nav>

      </main>
  );
}
