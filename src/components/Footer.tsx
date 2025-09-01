import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Residential Design", href: "#" },
      { name: "Commercial Spaces", href: "#" },
      { name: "Furniture Curation", href: "#" },
      { name: "Design Consultation", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Process", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    resources: [
      { name: "Portfolio", href: "#portfolio" },
      { name: "Blog", href: "#" },
      { name: "Design Guide", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };

  return (
    <footer className="bg-warm-light border-t border-warm-medium">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xl md:text-2xl font-light text-primary mb-4 md:mb-6 tracking-tight">
              Aura Interiors
            </h3>
            <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
              Crafting spaces of timeless elegance through sophisticated design and unparalleled craftsmanship.
            </p>
            <div className="font-serif text-xs md:text-sm text-muted-foreground">
              <p>123 Design District</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base md:text-lg font-medium text-primary mb-4 md:mb-6 tracking-tight">
              Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-serif text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-base md:text-lg font-medium text-primary mb-4 md:mb-6 tracking-tight">
              Company
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-serif text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-base md:text-lg font-medium text-primary mb-4 md:mb-6 tracking-tight">
              Resources
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-serif text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-warm-medium" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 space-y-4 md:space-y-0">
          <p className="font-serif text-xs md:text-sm text-muted-foreground">
            © {currentYear} Aura Interiors. All rights reserved.
          </p>
          
          <div className="flex space-x-6 md:space-x-8">
            <a
              href="#"
              className="font-serif text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-serif text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;