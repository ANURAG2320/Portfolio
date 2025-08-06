import { Github, Hexagon, Linkedin } from "lucide-react";
import "./globals.css";
import { Footer } from "./layouts/footer";
import { Navbar } from "./layouts/navbar";

export const metadata = {
  title: "Anurag Patil | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer
          logo={<Hexagon className="h-10 w-10" />}
          brandName={""}
          socialLinks={[
            {
              icon: <Github className="h-5 w-5" />,
              href: "https://github.com/ANURAG2320",
              label: "GitHub",
            },
            {
              icon: <Linkedin className="h-5 w-5" />,
              href: "https://www.linkedin.com/in/anurag-patil-8373a728a/",
              label: "LinkedIn",
            },
          ]}
          mainLinks={[
            { href: "/projects", label: "Projects" },
            { href: "/about", label: "About" },
          ]}
          legalLinks={[]}
          copyright={{
            text: "Functional. Scalable. Beautifully crafted.",
            license: undefined,
          }}
        />
      </body>
    </html>
  );
}
