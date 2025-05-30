'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-teal-900 text-white py-2 relative px-4">
      {/* Mobile toggle button */}
      <div className="flex justify-between items-center md:hidden">
        <h1 className="text-lg font-semibold"></h1>
        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Nav list - responsive */}
      <ul
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 md:gap-3 md:justify-center mt-3 md:mt-0`}
      >
        <li>
          <Link href="/" className="hover:underline block px-2 py-1">Home</Link>
        </li>

        {/* About Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => !mobileMenuOpen && toggleDropdown('about')}
          onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
        >
          <span
            className="cursor-pointer block px-2 py-1"
            onClick={() => mobileMenuOpen && toggleDropdown('about')}
          >
            About ▾
          </span>
          {openDropdown === 'about' && (
            <ul className="md:absolute md:top-full left-0 bg-white text-black shadow-md py-0 w-60 z-10 md:block">
              {[
                ['/history', 'History'],
                ['/visionmission', 'Vision & Mission'],
                ['/karmaveer', ' Dr.Karmaveer Bhaurao Patil'],
                ['/awards', 'Awards & Honours'],
                ['/memorandum', 'MoU'],
                ['/projects', 'Projects'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="block px-4 py-2 hover:bg-gray-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Facilities Dropdown */}
        {/* <li
          className="relative"
          onMouseEnter={() => !mobileMenuOpen && toggleDropdown('facilities')}
          onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
        >
          <span
            className="cursor-pointer block px-2 py-1"
            onClick={() => mobileMenuOpen && toggleDropdown('facilities')}
          >
            Facilities ▾
          </span>
          {openDropdown === 'facilities' && (
            <ul className="md:absolute md:top-full left-0 bg-white text-black shadow-md py-0 w-60 z-10 md:block">
              <li>
                <Link href="/facilities" className="block px-4 py-2 hover:bg-gray-200">Libraries</Link>
              </li>
              <li>
                <Link href="/hostel" className="block px-4 py-2 hover:bg-gray-200">Hostel</Link>
              </li>
              <li>
                <Link href="/sports" className="block px-4 py-2 hover:bg-gray-200">Sports</Link>
              </li>
            </ul>
          )}
        </li> */}

        {/* Branches Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => !mobileMenuOpen && toggleDropdown('branches')}
          onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
        >
          <span
            className="cursor-pointer block px-2 py-1"
            onClick={() => mobileMenuOpen && toggleDropdown('branches')}
          >
            Branches ▾
          </span>
          {openDropdown === 'branches' && (
            <ul className="md:absolute md:top-full left-0 bg-white text-black shadow-md py-0 w-60  z-10 md:block">
              <li>
                <Link href="/ashramshala" className="block px-4 py-2 hover:bg-gray-200">Ashramshala</Link>
              </li>
              {/* <li>
                <Link href="/karmaveervidyaprabodhini" className="block px-4 py-2 hover:bg-gray-200">Karmaveer Vidya Prabodhini</Link>
              </li> */}
              {/* <li>
                <Link href="/colleges" className="block px-4 py-2 hover:bg-gray-200">Colleges</Link>
              </li> */}
              <li>
                <Link href="/teachertrainingschools" className="block px-4 py-2 hover:bg-gray-200">Teacher Training Schools</Link>
              </li>
              {/* <li>
                <Link href="/primaryschools" className="block px-4 py-2 hover:bg-gray-200">Primary Schools</Link>
              </li> */}
              <li>
                <Link href="/secondaryschools" className="block px-4 py-2 hover:bg-gray-200">Secondary Schools</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Static Links */}
        {[
          ['/management', 'Management'],
          ['/academics', 'Academics'],
          ['/research', 'Research'],
          ['/recruitment', 'Recruitment'],
          ['/quicklinks', 'Quick Links'],
          // ['/centenary-projects', 'Centenary Projects'],
          ['/ebooks', 'eBooks'],
          ['/onlineinfo', 'Online Info'],
          ['/tender', 'Tender'],
          ['/feedback', 'Feedback'],
         
        ].map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="hover:underline block px-2 py-1">{label}</Link>
          </li>
        ))}

        {/* Login Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => !mobileMenuOpen && toggleDropdown('login')}
          onMouseLeave={() => !mobileMenuOpen && toggleDropdown(null)}
        >
          <span
            className="cursor-pointer block px-2 py-1"
            onClick={() => mobileMenuOpen && toggleDropdown('login')}
          >
            Login ▾
          </span>
          {openDropdown === 'login' && (
            <ul className="md:absolute md:top-full left-0 bg-white text-black shadow-md py-2 w-40 z-10 md:block">
              <li>
                <Link href="/login" className="block px-4 py-2 hover:bg-gray-200">Admin Login</Link>
              </li>
              <li>
                <Link href="/registration" className="block px-4 py-2 hover:bg-gray-200">School Login</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
