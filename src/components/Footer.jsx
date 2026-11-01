import React from "react";
import Animate from "./Animate";
import { quickLinks, sitemapLinks, socialLinks } from "../data/data";
import { animate } from "motion/react";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-auto relative mt-44 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* row */}

        <div className="flex flex-wrap justify-between pb-8">
          {/* column 1- brand and socials */}
          <div className="flex flex-col items-start text-left">
            <Animate>
              <img src="/assets/logo.svg" alt="logo" />
            </Animate>
            <Animate delay={0.2}>
              <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25">
                Serving freshly prepared dishes with authentic flavors, premium
                ingredients and exceptional hospitality every day.
              </p>
            </Animate>
            <div className="flex items-center gap-1.5 mt-6">
              {socialLinks.map((item, index) => (
                <Animate key={index} delay={index * 0.05}>
                  <a
                    href={item.href}
                    className="size-7.5 rounded-full border border-slate-300 grid place-content-center"
                  >
                    {item.icon}
                  </a>
                </Animate>
              ))}
            </div>
          </div>
          {/* column 2- quick links */}
          <div>
            <p className="font-medium mb-5">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <Animate key={link.name} delay={0.05}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-500"
                  >
                    {link.name}
                  </a>
                </Animate>
              ))}
            </div>
          </div>
          {/* column 3- Get in Touch */}

          <div>
            <p className="font-medium mb-5">Get in Touch</p>
            <div className="space-y-2">
              <Animate>
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <Mail size={16} className="shrink-0" />
                  hello@example.com
                </a>
              </Animate>
              <Animate>
                <a
                  href="tel:987-654-3210"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <Phone size={16} className="shrink-0" />
                  987-654-3210
                </a>
              </Animate>
            </div>
          </div>

          {/* column 4- Sitemap */}
          <div>
            <p className="font-medium mb-5">Sitemap</p>
            <div className="flex flex-col gap-2.5">
              {sitemapLinks.map((link, index) => (
                <Animate key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-500"
                  >
                    {link.name}
                  </a>
                </Animate>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t text-zinc-500 border-slate-200 py-4.5 flex justify-center items-center">
             <p>© 2026. All Rights Reserved.</p>

        </div>
      </div>

      <div className="absolute inset-0 text-center select-none -z-1 pointer-events-none">
        <span className="text-[300px] tracking-wide font-urbanist font-semibold text-zinc-100/70  " >
        Resteer
        </span>

      </div>
    </footer>
  );
};

export default Footer;
