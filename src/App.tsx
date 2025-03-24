import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sun, Moon, Github, Linkedin, FileText, ExternalLink, Mail, Download } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize AOS once when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav
          className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4 px-6 border-b border-gray-200 dark:border-gray-800"
          data-aos="fade-down"
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Shamanth Guduru
            </a>
            <div className="flex items-center gap-6">
              <a
                href="#home"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#certifications"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Certifications
              </a>
              <a
                href="#resume"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Resume
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen flex items-center pt-20"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                  Data Analytics
                  <span className="text-blue-600 dark:text-blue-400"> Professional</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Master's student in Business Analytics with a passion for transforming data into
                  actionable insights. Specializing in predictive modeling, data visualization, and
                  business intelligence.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="relative" data-aos="fade-left">
                <img
                  src="/my-photo.jpeg"
                  alt="Shamanth Guduru"
                  className="rounded-full w-64 h-64 object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 bg-gray-50 dark:bg-gray-800/50"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 dark:text-white">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Airbnb Project */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-right"
              >
                <img
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&q=80&w=800"
                  alt="Airbnb Analysis"
                  className="rounded-lg mb-6 w-full"
                />
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  Airbnb Data Analysis & Price Prediction
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developed a machine learning model to predict Airbnb prices using historical data
                  and market trends.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Pandas
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Tableau
                  </span>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>

              {/* Car Sales Project */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-left"
              >
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800"
                  alt="Car Sales Analysis"
                  className="rounded-lg mb-6 w-full"
                />
                <h3 className="text-xl font-bold mb-3 dark:text-white">Car Sales Prediction in India</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built a predictive model for car sales trends across different segments including
                  Sedan, SUV, and EVs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    Tableau
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                    ML
                  </span>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section
          id="certifications"
          className="py-20"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 dark:text-white">Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Python Data Structures Certificate */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="zoom-in"
              >
                <img
                  src="/python-cert.jpg"
                  alt="Python Data Structures Certificate"
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="text-lg font-bold dark:text-white">Python Data Structures</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Coursera - Feb 24, 2022</p>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/YZPY2YQCKL7Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
              </div>

              {/* Machine Learning for All */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                data-aos="zoom-in"
              >
                <img
                  src="/machine-cert.jpg"
                  alt="Machine Learning for All Certificate"
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="text-lg font-bold dark:text-white">Machine Learning for All</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Coursera - Sep 2, 2021</p>
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/CXBYPJP3X6VW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section
          id="resume"
          className="py-20 bg-gray-50 dark:bg-gray-800/50"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 dark:text-white text-center">My Resume</h2>

            {/* Education */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold mb-6 dark:text-white flex items-center gap-2">
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold dark:text-white">
                    Master's in Business Analytics
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Kent State University, OH
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Expected December 2025
                  </p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    <li>Focus on Advanced Data Analytics and Machine Learning</li>
                    <li>GPA: 3.8/4.0</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold dark:text-white">
                    B.Tech in Electronics and communication Enginerring
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">SRM University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Graduated 2023</p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    <li>GPA: 3.1/4.0</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold mb-6 dark:text-white">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Programming</h4>
                  <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside">
                    <li>Python</li>
                    <li>R</li>
                    <li>SQL</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Tools & Technologies</h4>
                  <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside">
                    <li>Tableau</li>
                    <li>Power BI</li>
                    <li>AWS</li>
                    <li>Git</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold mb-6 dark:text-white">Leadership & Activities</h3>
              <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-3">
                <li>President, Data Analytics Club (2023-Present)</li>
                <li>Volunteer Data Analyst, Local Non-profit Organization</li>
                <li>Mentor, University's Data Science Boot Camp</li>
              </ul>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <a
                href="/Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-20"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:shamanthguduru@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-8 border-t border-gray-200 dark:border-gray-800"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            © 2024 Data Analytics Portfolio. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;