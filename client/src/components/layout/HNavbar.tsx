import { HNavLinks } from "../../constants/index";
import Link from "next/link";
export default function HNavbar() {
  return (
    <div className=" flex items-center justify-center">
      <div className="flex w-[90vw] justify-between font-afacad text-lg font-medium md:w-[60vw]">
        {HNavLinks.map((link, index) => (
          <div key={index}>
            <Link
              href={link.url}
              className="hover:text-it-teal-300 hover:brightness-90"
            >
              <p>{link.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
