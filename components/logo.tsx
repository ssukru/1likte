import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/logo-text.svg"
      alt="logo"
      className="w-[68px] h-[24px]"
      width={93}
      height={32}
    />
  );
}
