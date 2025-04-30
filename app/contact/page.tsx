"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/Header/HeaderMenu";
import { Card } from "flowbite-react";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <HeaderMenu isScrolledAndImmutable />

      {/* Contact Section */}
      <div 
      className=" pt-48 pb-32"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('/images/contact-banner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <h1 className="text-4xl md:text-5xl text-[var(--primary)] font-normal text-center mb-16 ">
          Contactez-nous
        </h1>

        {/* <div className="flex max-w-5xl mx-auto px-4 mb-16 gap-20">
          <Image 
              src="/icons/tom-telephone.png"
              alt="TOM"
              width={80}
              height={80}
              className="absolute left-[42vh] top-[305px] mx-auto flex-col z-20"
            />
          <Card className="dark:bg-[var(--primary)] w-full flex-col gap-8 items-center rounded-3xl hover:animate-pulse">
            
            <p className="text-2xl font-medium flex">Tel : (+221) 77 573 78 47</p>
          </Card>
          <Image 
              src="/icons/tom-mail.png"
              alt="TOM"
              width={80}
              height={80}
              className="absolute left-[97vh] top-[305px] mx-auto flex-col z-20"
            />
          <Card className="dark:bg-[var(--primary)] w-full flex-col gap-8 items-center rounded-3xl hover:animate-pulse">
          
            <p className="text-2xl font-medium">E-mail : accueil@tom.sn</p>
          </Card>
        

        </div> */}
        <div className="max-w-5xl mx-auto px-4 mb-16">
  <div className="flex flex-col md:flex-row gap-20 relative items-center justify-center">
    {/* Bloc téléphone */}
    <div className="flex flex-col items-center relative">
      <Image 
        src="/icons/tom-telephone.png"
        alt="TOM"
        width={80}
        height={80}
        className="mb-4 md:mb-0 md:absolute md:-top-0 md:-left-10"
      />
      <Card className="dark:bg-[var(--primary)] w-full md:w-[350px] flex flex-col items-center gap-4 rounded-3xl hover:animate-pulse">
        <p className="text-xl md:text-2xl font-medium">Tel : (+221) 77 573 78 47</p>
      </Card>
    </div>

    {/* Bloc e-mail */}
    <div className="flex flex-col items-center relative">
      <Image 
        src="/icons/tom-mail.png"
        alt="TOM"
        width={80}
        height={80}
        className="mb-4 md:mb-0 md:absolute md:-top-0 md:-left-10"
      />
      <Card className="dark:bg-[var(--primary)] w-full md:w-[350px] flex flex-col items-center gap-4 rounded-3xl hover:animate-pulse">
        <p className="text-xl md:text-2xl font-medium">E-mail : accueil@tom.sn</p>
      </Card>
    </div>
  </div>
</div>


        {/* World Map */}
        <div className="max-w-5xl mx-auto px-4 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.166894568351!2d-17.432954533743622!3d14.703152153435221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1736212991e8d%3A0x4778e579a34a2b6b!2sTom%20-%20plateforme%20de%20distribution%20-%20Facturation!5e0!3m2!1sfr!2ssn!4v1742868443306!5m2!1sfr!2ssn"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
       
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-4 -mt-20 mb-32">
        <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-8">
            Remplissez le formulaire ci-dessous
          </h2>

          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="exemple@gmail.com"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Country/Region Select */}
            <div>
              <select
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionnez (Pays/région)
                </option>
                <option value="senegal">Sénégal</option>
                <option value="mali">Mali</option>
                <option value="ivory-coast">Côte d&apos;Ivoire</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                placeholder="Votre message"
                rows={6}
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#F3DFA2] px-8 py-2 rounded font-semibold hover:bg-yellow-400 transition-colors"
              >
                ENVOYER
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
