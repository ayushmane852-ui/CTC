import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { navLinks, contactInfo } from "../../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gold/20 camo-pattern">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-10 w-10 text-gold" />
              <div>
                <h3 className="font-heading text-2xl text-white tracking-wider">CTC</h3>
                <p className="text-xs text-gold/70 uppercase tracking-widest">Commando Training Center</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Maharashtra&apos;s pioneering military and para-military style training institution for
              students aged 6 to 21 years.
            </p>
            <p className="mt-4 font-heading text-gold tracking-widest text-sm">
              Strength • Control • Command
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl text-gold mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl text-gold mb-4 tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {contactInfo.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gold transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl text-gold mb-4 tracking-wider">Established</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Founded on 15th August 2018 under the Commando Training Foundation. Building disciplined,
              confident, and patriotic leaders for tomorrow.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {year} Commando Training Center. All rights reserved.</p>
          <p className="text-gold/60">Commando Training Foundation</p>
        </div>
      </div>
    </footer>
  );
}
