import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-luxury-fade">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Start Your Journey
          </h2>
          <p className="font-serif text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Let's discuss your vision and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 bg-background/95 shadow-luxury">
            <CardContent className="p-10">
              <h3 className="font-display text-2xl font-medium text-primary mb-8 tracking-tight">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-warm-medium focus:border-accent h-14 text-lg font-serif"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-warm-medium focus:border-accent h-14 text-lg font-serif"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-warm-medium focus:border-accent text-lg font-serif resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-gold hover:shadow-gold text-gold-foreground h-14 text-lg font-display tracking-wide transition-all duration-500"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-12">
            <div className="animate-luxury-fade">
              <h3 className="font-display text-2xl font-medium mb-8 tracking-tight">
                Get in Touch
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium mb-1">Phone</p>
                    <p className="font-serif text-primary-foreground/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium mb-1">Email</p>
                    <p className="font-serif text-primary-foreground/80">hello@aurainteriors.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-medium mb-1">Studio</p>
                    <p className="font-serif text-primary-foreground/80">
                      123 Design District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-display text-xl font-medium mb-6 tracking-tight">
                Follow Our Journey
              </h4>
              
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gold/20 hover:bg-gold text-gold hover:text-gold-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold hover:scale-110"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;