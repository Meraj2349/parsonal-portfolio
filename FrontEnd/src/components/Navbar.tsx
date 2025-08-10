"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme, isHydrated } = useTheme();
  const pathname = usePathname();

  // Show loading navbar until hydrated
  if (!isHydrated) {
    return (
      <nav className="fixed top-0 w-full backdrop-blur-sm border-b z-50 bg-white/90 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-black">&lt;/&gt;</span>
              <span className="text-lg sm:text-xl font-semibold text-black">
                Meraj
              </span>
            </Link>
            <div className="animate-pulse">Loading...</div>
          </div>
        </div>
      </nav>
    );
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-sm border-b z-50 transition-all duration-300 ${
        isDarkMode
          ? "bg-black/90 border-gray-800"
          : "bg-white/90 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              &lt;/&gt;
            </span>
            <span
              className={`text-lg sm:text-xl font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Meraj
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 relative ${
                    isActive
                      ? isDarkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${
                        isDarkMode ? "bg-blue-400" : "bg-blue-600"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Search & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden md:block">
              <div
                className={`flex items-center rounded-md px-3 py-1.5 border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-gray-100/70 border-gray-300"
                }`}
              >
                <svg
                  className={`w-4 h-4 mr-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search ..."
                  className={`bg-transparent text-sm border-none outline-none w-24 lg:w-32 ${
                    isDarkMode
                      ? "text-gray-300 placeholder-gray-500"
                      : "text-gray-700 placeholder-gray-400"
                  }`}
                />
                <span
                  className={`hidden lg:inline text-xs ml-2 ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  ⌘K
                </span>
              </div>
            </div>

            {/* Mobile Search Button */}
            <button
              className={`md:hidden p-2 transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 transition-colors duration-200 ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden border-t ${
              isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`px-2 pt-2 pb-3 space-y-1 ${
                isDarkMode ? "bg-black/95" : "bg-white/95"
              }`}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md transition-colors duration-200 text-base font-medium relative ${
                      isActive
                        ? isDarkMode
                          ? "text-blue-400 bg-blue-900/20"
                          : "text-blue-600 bg-blue-50"
                        : isDarkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        : "text-gray-600 hover:text-black hover:bg-gray-100/50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        className={`absolute left-0 top-0 w-1 h-full rounded-r-md ${
                          isDarkMode ? "bg-blue-400" : "bg-blue-600"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}

              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div
                  className={`flex items-center rounded-md px-3 py-2 border ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700"
                      : "bg-gray-100/50 border-gray-300"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 mr-2 ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search ..."
                    className={`bg-transparent text-sm border-none outline-none w-full ${
                      isDarkMode
                        ? "text-gray-300 placeholder-gray-500"
                        : "text-gray-700 placeholder-gray-400"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
