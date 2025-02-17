import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/logo-text.svg"
      alt="logo"
      width={68}
      height={24}
    />
  );
}
