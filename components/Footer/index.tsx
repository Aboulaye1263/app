import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#222221] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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

          {/* Link page Column */}
          <div>
            <h3 className="font-bold mb-4 ">Liens utiles</h3>
           <ul>
            <li  className="hover:translate-x-2 hover:font-medium hover:underline" ><a href='/about'>A propos</a></li>
            <li className="hover:translate-x-2 hover:font-medium hover:underline"><a href='/services'>Services</a></li>
            <li className="hover:translate-x-2 hover:font-medium hover:underline"><a href='/blog'>Actualités</a></li>
            <li className="hover:translate-x-2 hover:font-medium hover:underline"><a href='/why-join-us'>Pourquoi nous rejoindre</a></li>
            <li className="hover:translate-x-2 hover:font-medium hover:underline"><a href='/contact#form'>Contact</a></li>
           </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-bold mb-4 ">TOM S.A</h3>
            {/* <h3 className="font-bold mb-4 ">Siège Social</h3> */}
            <p className="text-sm mb-4">
            <span className='font-bold'>Siège Social : </span>Immeuble MSC – 2ème étage, Route des Hydrocarbures, Hann Bel-Air
            Dakar - Sénégal
            </p>
            <p className="text-sm">
              Tel: (+221) 33 859 06 06
            </p>
            
            <a href="mailto:accueil@tom.sn" className="text-sm" style={{textDecoration: "underline"}}>
              accueil@tom.sn
            </a>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-bold mb-4 ">À PROPOS DE NOUS</h3>
            <p className="text-sm text-justify">
            Acteur de référence en logistique en Afrique de l’Ouest,
             TOM contribue activement au développement économique du Sénégal 
             et de la région en s’appuyant sur des infrastructures modernes, 
             une expertise reconnue et une vision tournée vers l’avenir.
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
            <div className="flex justify-items-center gap-4">
            <h3 className="font-bold mb-4 ">SUIVEZ-NOUS</h3>
              {/* Social Icons */}
              <Link href="#" aria-label="Facebook">
                {/* <svg className="w-24 h-24 fill-current" viewBox="0 0 256 256">
                  <path d="M32,6c-14.358,0 -26,11.642 -26,26c0,13.035 9.603,23.799 22.113,25.679v-18.789h-6.433v-6.834h6.433v-4.548c0,-7.529 3.668,-10.833 9.926,-10.833c2.996,0 4.583,0.223 5.332,0.323v5.965h-4.268c-2.656,0 -3.584,2.52 -3.584,5.358v3.735h7.785l-1.055,6.834h-6.73v18.843c12.69,-1.72 22.481,-12.57 22.481,-25.733c0,-14.358 -11.641,-26 -26,-26z"></path>
                </svg> */}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fff"
                      d="M437 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h151V331h-60v-90h60v-61c0-49.629 40.371-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.352 0 75-33.648 75-75V75c0-41.352-33.648-75-75-75m0 0"
                      data-original-color="#000000ff"
                    ></path>
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
