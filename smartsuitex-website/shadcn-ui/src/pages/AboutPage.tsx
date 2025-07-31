import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About SmartsuiteX"
        subtitle="Building the future of business management software for India"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1740"
      />

      {/* Company Story */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2018, SmartsuiteX began with a simple mission: to create an integrated business management solution specifically designed for the Indian market.
                </p>
                <p>
                  Our founders, with over 30 years of combined experience in enterprise software, recognized that existing solutions failed to address the unique challenges faced by Indian businesses - from GST compliance to local business practices.
                </p>
                <p>
                  Today, SmartsuiteX serves thousands of businesses across India, from startups to large enterprises, helping them streamline operations, improve productivity, and drive growth through our comprehensive suite of tools.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1740"
                alt="Company Office"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-4xl font-bold">5+</p>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower Indian businesses of all sizes with affordable, integrated, and locally-relevant software solutions that drive efficiency, compliance, and growth.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become India's leading business management platform, recognized for innovation, reliability, and genuine understanding of local business needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at SmartsuiteX"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customer First",
                description: "We put our customers' needs at the center of all our decisions and product development."
              },
              {
                title: "Local Relevance",
                description: "We deeply understand the Indian business landscape and build solutions that address local challenges."
              },
              {
                title: "Innovation",
                description: "We continuously innovate to stay ahead of evolving business needs and technological advancements."
              },
              {
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical business practices in all our dealings."
              },
            ].map((value, index) => (
              <Card key={index} className="p-6 flex flex-col h-full">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700 flex-grow">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Leadership Team"
            subtitle="Meet the experienced professionals leading SmartsuiteX"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amit Sharma",
                title: "Chief Executive Officer",
                bio: "With 15+ years in enterprise software, Amit leads our company vision and strategy.",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Priya Desai",
                title: "Chief Technology Officer",
                bio: "Former Google engineer leading our product innovation and technical excellence.",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Rajiv Mehta",
                title: "Chief Financial Officer",
                bio: "Seasoned financial expert ensuring our sustainable growth and fiscal responsibility.",
                image: "https://randomuser.me/api/portraits/men/68.jpg"
              },
              {
                name: "Anjali Patel",
                title: "VP of Customer Success",
                bio: "Dedicated to ensuring our customers achieve their business objectives with our platform.",
                image: "https://randomuser.me/api/portraits/women/65.jpg"
              },
              {
                name: "Nikhil Verma",
                title: "VP of Sales",
                bio: "Driving our market growth with deep industry knowledge and customer-focused approach.",
                image: "https://randomuser.me/api/portraits/men/75.jpg"
              },
              {
                name: "Sneha Gupta",
                title: "VP of Product",
                bio: "Translating market needs into innovative features that solve real business challenges.",
                image: "https://randomuser.me/api/portraits/women/63.jpg"
              }
            ].map((person, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={person.image} alt={person.name} />
                    <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold">{person.name}</h3>
                  <p className="text-sm text-blue-600 mb-2">{person.title}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in the SmartsuiteX story"
          />

          <div className="space-y-12 max-w-3xl mx-auto">
            {[
              {
                year: "2018",
                title: "Company Founded",
                description: "SmartsuiteX was established with a vision to create integrated business solutions for Indian companies."
              },
              {
                year: "2019",
                title: "First Product Launch",
                description: "Released our core ERP and HR management modules to the market, gaining our first 100 customers."
              },
              {
                year: "2020",
                title: "Series A Funding",
                description: "Secured ₹25 crore in funding to accelerate product development and market expansion."
              },
              {
                year: "2021",
                title: "GST Compliance Module",
                description: "Launched our specialized GST compliance tools, becoming a market leader in this segment."
              },
              {
                year: "2022",
                title: "1,000 Customer Milestone",
                description: "Celebrated reaching 1,000 active business customers across India."
              },
              {
                year: "2023",
                title: "Business Intelligence Launch",
                description: "Expanded our offering with advanced analytics and business intelligence capabilities."
              },
              {
                year: "2024",
                title: "National Expansion",
                description: "Opened offices in Mumbai, Bangalore, and Delhi to better serve customers nationwide."
              }
            ].map((milestone, index) => (
              <div key={index} className="relative pl-12 md:pl-0">
                <div className="md:grid md:grid-cols-12">
                  <div className="md:col-span-3">
                    <div className="md:flex md:justify-end md:pr-8">
                      <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold md:mt-0">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-9 md:pl-4">
                    <div className="absolute top-0 left-0 md:static">
                      <span className="text-xl font-bold text-blue-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                    {index < 6 && (
                      <div className="absolute top-12 bottom-0 left-5 w-0.5 bg-gray-200 hidden md:block"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Awards & Recognition"
            subtitle="Industry acknowledgment of our innovation and excellence"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              "Best HR Technology Solution 2023",
              "Top 10 ERP Providers in India 2022",
              "Innovation Award for GST Compliance 2021",
              "Startup of the Year 2020",
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <p className="font-bold text-gray-900">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Offices"
            subtitle="Visit us at our locations across India"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "Mumbai",
                address: "Level 8, Vibgyor Towers, G Block BKC, Mumbai, Maharashtra 400098",
                phone: "+91 22 4123 7890",
                email: "mumbai@smartsuitex.com"
              },
              {
                city: "Delhi",
                address: "909 Ashoka Estate, Barakhamba Road, New Delhi, Delhi 110001",
                phone: "+91 11 4123 7890",
                email: "delhi@smartsuitex.com"
              },
              {
                city: "Bangalore",
                address: "42, Residency Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025",
                phone: "+91 80 4123 7890",
                email: "bangalore@smartsuitex.com"
              },
            ].map((office, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                <div className="space-y-2 text-gray-700">
                  <p>{office.address}</p>
                  <p>Phone: {office.phone}</p>
                  <p>Email: {office.email}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Our Team"
        description="We're always looking for talented individuals to help us build the future of business software"
        bgColor="accent"
      >
        <Button size="lg" variant="secondary" asChild>
          <a href="mailto:careers@smartsuitex.com">View Career Opportunities</a>
        </Button>
      </CTASection>
    </>
  );
}