import Link from 'next/link';

export default function SubFooter() {
  return (
    <div className="flex flex-wrap justify-center gap-x-8 pt-12 text-center">
      <p className="text-white">©{new Date().getFullYear()} Website</p>
      <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
      <Link href="/privacyverklaring">Privacyverklaring</Link>
      <Link href="/cookies">Cookies</Link>
    </div>
  );
}
