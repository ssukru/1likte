import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-white", className)}>
      <div className="container flex flex-col items-center gap-[50px]">
        <Link
          href={"https://1likte.com"}
          className="flex items-center gap-[5px]"
          target="_blank"
        >
          <Image
            src="/assets/logo.svg"
            alt="footer logo"
            width={30}
            height={32}
            className="hidden md:block"
          />
          <Image
            src="/assets/logo-text.svg"
            alt="footer logo"
            width={91.6}
            height={32}
          />
        </Link>
        <div className="flex flex-col gap-5 items-center">
          <div className="hidden md:flex gap-5 text-[#6B7280] text-base">
            <Link
              href="#"
              className="hover:text-primary transition-all duration-300"
            >
              Görüşlerini Bildir
            </Link>
            <Link
              href="#"
              className="hover:text-primary transition-all duration-300"
            >
              Hata Bildir
            </Link>
          </div>
          <div className="flex items-center gap-5">
            {SOCIAL_MEDIA_ACCOUNTS.map((account) => (
              <Link
                className="flex hover:opacity-70 transition-opacity duration-300"
                href={account.href}
                key={account.id}
                target="_blank"
              >
                <Image
                  src={account.iconURL}
                  alt={`footer social icon ${account.id}`}
                  width={16}
                  height={16}
                  className="transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const SOCIAL_MEDIA_ACCOUNTS = [
  {
    id: "footer-social-x",
    iconURL: "/assets/icons/social-icon-x.svg",
    href: "https://twitter.com/1likteapp",
  },
  {
    id: "footer-social-instagram",
    iconURL: "/assets/icons/social-icon-instagram.svg",
    href: "https://www.instagram.com/1likteapp",
  },
  {
    id: "footer-social-linkedin",
    iconURL: "/assets/icons/social-icon-linkedin.svg",
    href: "https://www.linkedin.com/company/1liktecom",
  },
];
