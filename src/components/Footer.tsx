import React from 'react';

const Footer = () => {
  return (
    <footer
      className="relative mx-auto max-w-4xl text-center py-4"
      style={{
        borderTop: '2px solid transparent',
        backgroundImage:
          'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(209, 213, 219, 0.2), rgba(255, 255, 255, 0))',
        backgroundSize: '100% 2px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}
    >
      <div className="text-sm text-gray-500 dark:text-gray-300">
        &copy; {new Date().getFullYear()} KillianCodes. All rights reserved.
      </div>
      <div className="flex justify-center mt-2 space-x-4">
        <a
          href="#"
          className="hover:underline text-gray-600 dark:text-gray-400"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:underline text-gray-600 dark:text-gray-400"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="hover:underline text-gray-600 dark:text-gray-400"
        >
          Contact Us
        </a>
      </div>
      {/* Logo centré */}
      <div className="flex justify-center items-center mt-4 mb-4">
        <img
          src="/stripintlogo.png"
          alt="Logo"
          className="h-[20px] w-[150px] object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
