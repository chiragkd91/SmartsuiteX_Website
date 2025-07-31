import { HeroSection } from "@/components/ui/hero-section";
import { ContactForm } from "@/components/ui/contact-form";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Building, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We're here to help you with any questions or inquiries"
        backgroundImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1740"
      />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Building className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      Level 8, Vibgyor Towers<br />
                      G Block BKC, Mumbai<br />
                      Maharashtra 400098, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone Numbers</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Sales:</strong> +91 22 4123 7890
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Support:</strong> +91 22 4123 7891
                    </p>
                    <p className="text-gray-600">
                      <strong>General:</strong> +91 22 4123 7892
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Addresses</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Sales:</strong> sales@smartsuitex.com
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Support:</strong> support@smartsuitex.com
                    </p>
                    <p className="text-gray-600">
                      <strong>General:</strong> info@smartsuitex.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Support Hours</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST
                    </p>
                    <p className="text-gray-600">
                      <strong>Saturday:</strong> 9:00 AM - 1:00 PM IST
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Offices"
            subtitle="Visit us at one of our locations across India"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "Mumbai (HQ)",
                address: "Level 8, Vibgyor Towers, G Block BKC, Mumbai, Maharashtra 400098",
                phone: "+91 22 4123 7890",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1440767490864!2d72.86473317483838!3d19.063465182103006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c739bcc785%3A0x8a61f9fa9f87108b!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690168967980!5m2!1sen!2sin"
              },
              {
                city: "Delhi",
                address: "909 Ashoka Estate, Barakhamba Road, New Delhi, Delhi 110001",
                phone: "+91 11 4123 7890",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8992333350554!2d77.21952107499632!3d28.628808175617766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f5!2sBarakhamba%20Road%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1690168849254!5m2!1sen!2sin"
              },
              {
                city: "Bangalore",
                address: "42, Residency Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025",
                phone: "+91 80 4123 7890",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9945840671996!2d77.59943137464673!3d12.972045414915514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16815b255555%3A0xbba2cd46b9aff78a!2sResidency%20Rd%2C%20Shanthala%20Nagar%2C%20Ashok%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1690168893651!5m2!1sen!2sin"
              }
            ].map((office, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <iframe
                  src={office.mapEmbed}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`${office.city} Office Map`}
                ></iframe>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                  <p className="text-gray-600 mb-2">{office.address}</p>
                  <p className="text-gray-600">{office.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}