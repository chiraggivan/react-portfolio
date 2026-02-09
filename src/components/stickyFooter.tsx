import React from "react";
import { FaBootstrap } from "react-icons/fa6";
import { SiReact } from "react-icons/si";

interface StickyFooterProps {
  children: React.ReactNode;
}

function StickyFooter({ children }: StickyFooterProps) {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Page content (navbar, main, etc.) goes here */}
      <div className="flex-grow-1">{children}</div>
      {/* Footer */}
      <footer className=" bg-dark text-white border-top border-2 border-secondary">
        <div className="p-2 p-md-3 p-lg-4 d-flex flex-column flex-lg-row">
          <div className="d-flex flex-column me-auto ">
            {/* First row: Social links + icons */}
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center gap-4 mb-2 mb-lg-3">
              {/* You can wrap in me-auto if you want them pushed left on larger screens */}
              <div className="d-flex align-items-center gap-4 fs-5">
                <a
                  href="https://www.linkedin.com/in/chirag-givan/"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-linkedin me-2"></i>LinkedIn
                </a>
                <a
                  href="mailto:your.chirag.givan@gmail.com"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-envelope me-2"></i>Email
                </a>
                <a
                  href="https://github.com/chiraggivan"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-github me-2 "></i>GitHub
                </a>
              </div>
            </div>

            {/* Second row: Location */}
            <div className="d-flex align-items-center gap-2 fs-6 text-secondary">
              <i className="bi bi-geo-alt-fill"></i>
              <span>London, UK • Remote-friendly</span>
              {/* or just: <span>India</span> / <span>Berlin, Germany</span> etc. */}
            </div>
          </div>

          <div className="mt-2 mt-lg-0 text-white  text-start text-lg-end ">
            <div className="fs-5 mb-1 mb-lg-3">
              Built with <SiReact className="me-2" size={32} color="#61DAFB" />
              React + <FaBootstrap className="me-2" size={32} color="#8734fc" />
              Bootstrap 5
            </div>
            <small className="text-secondary ">
              © {new Date().getFullYear()} Your Brand — All rights reserved
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StickyFooter;
// ms-3 ms-lg-4 mt-4 mb-lg-3
// p-4 p-lg-0 mt-lg-4 me-4
