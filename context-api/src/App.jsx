function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Welcome to My Website
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This is a simple home page built with React and Tailwind CSS.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p className="text-gray-600">Brief description of the feature.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p className="text-gray-600">Another cool thing explained here.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p className="text-gray-600">Yet another amazing feature here.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-4">
        <div className="text-center text-sm text-gray-500">
          © 2025 MyWebsite. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
