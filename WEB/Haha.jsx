'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import { Instagram, Phone, MessageCircle } from 'lucide-react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-4">
            <li><Link href="#about" className="text-gray-700 hover:text-blue-500 transition duration-300">About Me</Link></li>
            <li><Link href="#experience" className="text-gray-700 hover:text-blue-500 transition duration-300">Experience</Link></li>
            <li><Link href="#achievements" className="text-gray-700 hover:text-blue-500 transition duration-300">Achievements</Link></li>
            <li><Link href="#contact" className="text-gray-700 hover:text-blue-500 transition duration-300">Contact Me</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8 mt-16">
        <section className="mb-12">
          <Slider {...carouselSettings}>
            <div className="focus:outline-none">
              <Image src="/images/landscape1.jpg" alt="Landscape 1" width={800} height={400} className="w-full rounded-lg" />
            </div>
            <div className="focus:outline-none">
              <Image src="/images/landscape2.jpg" alt="Landscape 2" width={800} height={400} className="w-full rounded-lg" />
            </div>
            <div className="focus:outline-none">
              <Image src="/images/landscape3.jpg" alt="Landscape 3" width={800} height={400} className="w-full rounded-lg" />
            </div>
          </Slider>
        </section>

        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image src="/images/about-me.jpg" alt="About Me" width={600} height={400} className="rounded-lg shadow-lg" />
            <div>
              <p className="text-gray-600">
                Hello! I'm a passionate web developer with a keen interest in creating beautiful and functional websites.
                I love to learn new technologies and apply them to solve real-world problems. With a strong foundation in
                front-end technologies and a growing expertise in back-end development, I strive to create seamless,
                user-friendly experiences that make a positive impact.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Experience</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image src="/images/experience.jpg" alt="Experience illustration" width={400} height={300} className="rounded-lg shadow-md" />
            <div>
              <ul className="list-disc list-inside text-gray-600">
                <li>Senior Web Developer at XYZ Company (2018-2021)
                  <ul className="list-none pl-5 mt-2">
                    <li>Led a team of 5 developers in creating responsive web applications</li>
                    <li>Implemented CI/CD pipelines, improving deployment efficiency by 40%</li>
                    <li>Mentored junior developers, focusing on best practices and code quality</li>
                  </ul>
                </li>
                <li className="mt-4">Frontend Team Lead at ABC Corp (2021-Present)
                  <ul className="list-none pl-5 mt-2">
                    <li>Spearheading the development of a next-generation SaaS platform</li>
                    <li>Introduced React and Next.js, resulting in a 30% increase in performance</li>
                    <li>Collaborating with UX team to enhance user engagement and satisfaction</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="achievements" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Achievements</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image src="/images/achievements.jpg" alt="Achievements illustration" width={400} height={300} className="rounded-lg shadow-md" />
            <div>
              <ul className="list-disc list-inside text-gray-600">
                <li>Best Developer Award 2020 - XYZ Company
                  <p className="pl-5 mt-2">Recognized for outstanding contributions to project success and team collaboration.</p>
                </li>
                <li className="mt-4">1st Place in National Coding Competition 2019
                  <p className="pl-5 mt-2">Led a team of three to victory, showcasing innovative solutions to real-world problems.</p>
                </li>
                <li className="mt-4">Speaker at Web Dev Conference 2022
                  <p className="pl-5 mt-2">Presented on "The Future of Frontend Development" to an audience of 500+ developers.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image src="/images/contact.jpg" alt="Contact illustration" width={400} height={300} className="rounded-lg shadow-md" />
            <div>
              <p className="text-gray-600 mb-4">Feel free to reach out to me through any of the following platforms:</p>
              <div className="flex space-x-4">
                <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition duration-300 transform hover:scale-110">
                  <Instagram className="w-8 h-8 text-pink-500 hover:text-pink-600" />
                </Link>
                <Link href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="transition duration-300 transform hover:scale-110">
                  <Phone className="w-8 h-8 text-green-500 hover:text-green-600" />
                </Link>
                <Link href="https://line.me/ti/p/~yourusername" target="_blank" rel="noopener noreferrer" className="transition duration-300 transform hover:scale-110">
                  <MessageCircle className="w-8 h-8 text-green-500 hover:text-green-600" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          &copy; 2023 Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}