import Image from "next/image";

export default function PriceList() {
  const services = {
    facialCare: {
      title: "Эстетическая косметология",
      titleEn: "Aesthetic cosmetology",
      items: [
        { name: "Механическая чистка лица", price: "1800₽" },
        { name: "Ультразвуковая чистка лица", price: "2500₽" },
        {
          name: "Комбинированная чистка лица (10-этапная чистка: ультразвуковая+механическая, проводится на косметике Christina)",
          price: "4000₽",
        },
        { name: "Уход по типу кожи", price: "3500₽" },
        { name: "Массаж лица", price: "1500₽" },
      ],
    },
    peeling: {
      title: "Пилинги",
      titleEn: "Peels",
      items: [
        { name: "ANTI AGENING PEEL", price: "3500₽" },
        { name: "MESO PEEL", price: "3500₽" },
        { name: "MIAMI SHINE PEEL", price: "4000₽" },
        { name: "RENOVA", price: "3500₽" },
        { name: "CNRONO", price: "4500₽" },
        { name: "PEACH PEEL", price: "4000₽" },
        { name: "PRX-T33", price: "4500₽" },
        { name: "BARBIE PEEL", price: "4000₽" },
      ],
    },
    lipContour: {
      title: "Контурная пластика губ",
      titleEn: "Lip contouring",
      items: [
        { name: "SARDENYA (Корея)", price: "10000₽" },
        { name: "REVOLAX (Корея)", price: "10000₽" },
        { name: "HYAFILIA (Корея)", price: "10000₽" },
        { name: "NEURAMIS (Корея)", price: "10000₽" },
        { name: "BIOHYALUX LIPS (Корея)", price: "12000₽" },
        { name: "STYLEAGE M (Франция)", price: "15000₽" },
        { name: "BELOTERO LIPS (Германия)", price: "14000₽" },
        { name: "BELOTERO LIPS KONTUR", price: "14000₽" },
        { name: "ART FILLER LIPS (Бельгия)", price: "18500₽" },
        { name: "REPART (Россия)", price: "15000₽" },
        { name: "PRINCESS VOLUME (Австрия)", price: "13000₽" },
        { name: "NEUAVIA LIPS (Италия)", price: "16000₽" },
      ],
    },
    consultations: {
      title: "Консультации",
      titleEn: "Consultations",
      items: [
        { name: "Офлайн с последующей записью", price: "0₽" },
        { name: "Офлайн без последующей записи", price: "1000₽" },
        {
          name: "Офлайн с подбором домашнего ухода (без записи)",
          price: "1500₽",
        },
        {
          name: "Онлайн консультация (с подбором домашнего ухода)",
          price: "1000₽",
        },
        { name: "Разбор анализов", price: "1500₽" },
      ],
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Hero Section with Image */}
      <div className="relative h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liza.jpg-OiXJbppWTPk7SLr9s4CetumodmPAiR.jpeg"
          alt="Основатель ESTETICA"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
          <h1 className="text-5xl font-tenor tracking-widest mb-2">ESTETICA</h1>
          <div className="w-16 h-px bg-black/70 mx-auto mb-4" />
          <h2 className="text-2xl font-tenor tracking-wider mb-3">
            ПРАЙС ЛИСТ
          </h2>
          <p className="text-sm tracking-wide font-light">
            ул. Конституции СССР, 24А
          </p>
        </div>
      </div>

      {/* Price List */}
      <div className="relative bg-white overflow-hidden mx-4 -mt-8">
        {/* Фоновое изображение силуэта */}
        <div className="absolute inset-0 opacity-[0.02]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/silhouette-black-and-white-white-profile-portrait-black-monochrome-women-cap-head-latin-monochrome-photography-1201807.jpg-yborrvOXcq7s8k0LHK6cZjjW3Lm6XC.jpeg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Дополнительный градиентный слой */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent mix-blend-overlay" />

        {/* Контент */}
        <div className="relative p-8">
          {/* Services Sections */}
          {Object.values(services).map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-tenor mb-1 text-gray-800 tracking-wide">
                {section.titleEn}
              </h2>
              <h3 className="text-sm text-gray-500 mb-6 font-light tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.items.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-700 font-light max-w-[70%]">
                      {service.name}
                    </span>
                    <span className="text-gray-900 font-light">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
              {index < Object.values(services).length - 1 && (
                <div className="my-8 w-full h-px bg-gray-200" />
              )}
            </div>
          ))}

          {/* Footer */}
          <div className="text-center text-gray-400 text-sm mt-12">
            <p>@li.estett</p>
          </div>
        </div>
      </div>
    </div>
  );
}
