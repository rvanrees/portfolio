export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-300/10">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-baseline space-x-4">
              <nav aria-label="Breadcrumb">
                <ol
                  role="list"
                  className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                >
                  <li>
                    <div className="flex items-center">
                      <a
                        href="/"
                        className="mr-2 text-sm text-gray-900 hover:underline"
                      >
                        rvanrees
                      </a>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center">
                      <a
                        href="/"
                        className="mr-2 text-sm font-bold text-gray-900 hover:underline"
                      >
                        portfolio
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
