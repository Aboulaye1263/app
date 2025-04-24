import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#222221] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo Column */}
          <div>
            <Image
              src="/images/logo TOM white.png"
              alt="TOM MEDLOG"
              width={150}
              height={60}
              className="mb-4"
            />
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-bold mb-4 ">TOM S.A.</h3>
            <p className="text-sm mb-4">
              Immeuble MSC Hann Bel Air, Route Des Hydrocarbures
            </p>
            <p className="text-sm">
              Tel: (+221) 77 573 78 47
            </p>
            <p className="text-sm">
              accueil@tom.sn
            </p>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-bold mb-4 ">À PROPOS DE NOUS</h3>
            <p className="text-sm text-justify">
              En tant que l&apos;un des fournisseurs de logistique et de chaîne d&apos;approvisionnement les plus étendus géographiquement au monde, TOM est présent dans plus de 80 pays et offre de multiples services, avec le soutien d&apos;équipes locales dans le monde entier.
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Links */}
            <div className="flex flex-wrap gap-4 text-sm mb-4 md:mb-0">
              {/* <Link href="#" className="text-[var(--primary)] hover:text-yellow-400">Paramètre des cookies</Link>
              <Link href="#" className="text-[var(--primary)] hover:text-yellow-400">Code de conduite</Link>
              <Link href="#" className="text-[var(--primary)] hover:text-yellow-400">Cookies policy</Link>
              <Link href="#" className="text-[var(--primary)] hover:text-yellow-400">Privacy policy</Link> */}
            </div>

            {/* Social Media & Back to Top */}
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <Link href="#" aria-label="Twitter">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm mt-8 text-gray-400">
            Copyright © 2024, TOM
            <br />
            2024. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
