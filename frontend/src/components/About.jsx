import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-br from-blue-100 to-blue-50">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">About Spell Checker</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Empowering users with smart writing tools to ensure your words are always correct, confident, and professional.
        </p>
      </section>

      {/* Personal Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <img
          src="/assets/anuragsen.jpg" // replace with your actual image path
          alt="Your Portrait"
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-2">Hi, I'm Aditi Pathak</h2>
          <p className="text-gray-700 text-lg mb-4">
            As the creator of Spell Checker, I'm passionate about technology and communication. This platform was born out of a vision to make writing simpler and smarter for everyone. With experience in full-stack development and AI tools, I wanted to build a product that helps both professionals and students express themselves better.
          </p>
          <p className="text-gray-700 text-base">
            I'm also proud to serve as the PR Executive at MUGDSC and continue learning and building for social impact.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-900">What Makes Spell Checker Great?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Real-Time Correction',
                desc: 'Instant suggestions for spelling and grammar while you type.',
              },
              {
                title: 'Smart Context Detection',
                desc: 'Understands context to avoid false corrections.',
              },
              {
                title: 'Mobile Friendly',
                desc: 'Use it anywhere, on any device, hassle-free.',
              },
              {
                title: 'Secure and Private',
                desc: 'We respect your privacy and never store your data.',
              },
              {
                title: 'Multilingual Support',
                desc: 'Check texts in English, Hindi, and more (coming soon!).',
              },
              {
                title: 'Lightweight & Fast',
                desc: 'No need to download anything – fast and responsive interface.',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To make writing easier, smarter, and more inclusive for every person who wants their ideas to be heard clearly and confidently.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Why Choose Spell Checker?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <ul className="space-y-4 text-gray-700">
                <li>✔️ Built using modern tech stack (React + AI API)</li>
                <li>✔️ Focused on real use cases (students, professionals)</li>
                <li>✔️ Constantly updated with new features</li>
                <li>✔️ User-focused design and accessibility</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-gray-700">
                <li>✔️ Minimalistic, distraction-free interface</li>
                <li>✔️ No ads or spam – clean experience</li>
                <li>✔️ Transparent and community-driven roadmap</li>
                <li>✔️ Built by a passionate developer (that's me!)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to write smarter?</h2>
        <p className="mb-6 text-lg">Join our community and experience the magic of effortless writing with Spell Checker.</p>
        <a href="/registration">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300">
            Create Your Account
          </button>
        </a>
      </section>
    </div>
  );
};

export default About;
