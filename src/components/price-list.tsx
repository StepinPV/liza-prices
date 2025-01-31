import Image from "next/image";

export default function PriceList() {
  const services = {
    lipContour: {
      title: "Контурная пластика губ",
      items: [
        { name: "E.p.t.q Корея", price: "9500₽" },
        { name: "Neuramis Корея", price: "9500₽" },
        { name: "Belotero Lips 0,6 Германия", price: "12000₽" },
        { name: "Belotero Balance", price: "15000₽" },
        { name: "Repart Россия", price: "15500₽" },
        { name: "Apriline Щвейцария", price: "15000₽" },
        { name: "Neauvia Италия", price: "15000₽" },
        { name: "Stylage M Франция", price: "15000₽" },
        { name: "Stylage Spesial Lips Франция", price: "15500₽" },
        { name: "Cytosial Франция 1мл", price: "17000₽" },
        { name: "Art Filler Бельгия", price: "20000₽" },
      ],
    },
    faceContour: {
      title: "Контурная пластика лица",
      items: [
        { name: "E.p.t.q Корея", price: "9500₽" },
        { name: "Neuramis Корея", price: "9500₽" },
        { name: "Belotero Soft", price: "15000₽" },
        { name: "Repart Россия", price: "15500₽" },
        { name: "Apriline Щвейцария", price: "15000₽" },
        { name: "Facetem", price: "15000₽" },
        { name: "Stylage L Франция", price: "15000₽" },
        { name: "Neauvia Италия", price: "17000₽" },
        { name: "Cytosial Франция", price: "17000₽" },
        { name: "Art Filler Бельгия", price: "21000₽" },
      ],
    },
    mesoSkinasil: {
      title: "Мезотерапия Skinasil Россия",
      items: [
        {
          name: "PDRN booster - Омоложение, восстановление и глубокое увлажнение на клеточном уровне",
          price: "6000₽",
        },
        {
          name: "BTX lift booster - Альтернатива ботулотоксину. Коррекция мимических морщин. Лифтинг",
          price: "6000₽",
        },
        {
          name: "BTX Eyes 2 мл - Мезобустер для области вокруг глаз с миорелаксирующим эффектом",
          price: "4000₽",
        },
        {
          name: "Succinate Lift Booster - Мезобустер на основе гиалуроновой и янтарной кислоты: снижает чувствительность кожи, уменьшает отечность, обеспечивает увлажнение и сияние",
          price: "6500₽",
        },
        {
          name: "Trehalose Lift Booster - Мезобустер с гиалуроновой кислотой борется с факторами старения, защищает от повреждений, обеспечивает длительное увлажнение, улучшает тонус и упругость кожи",
          price: "5500₽",
        },
        {
          name: "White Lift Booster - Осветляет пигментные пятна, выравнивает тон и рельеф кожи, улучшает упругость и тонус",
          price: "5500₽",
        },
        {
          name: "DMAЕ LIFT GEL - Омолаживающий мезококтейль на основе гиалуроновой кислоты, ДМАЭ, аминокислот с мощным эффектом лифтинга. Увлажняет, выравнивает рельеф кожи",
          price: "8000₽",
        },
        {
          name: "Body Lift - Выраженное лифтинговое, регенерирующее действие",
          price: "6000₽",
        },
        {
          name: "ДМАЭ Комплекс - Интенсивный лифтинг, повышение упругости и тонуса, улучшение кровообращения",
          price: "5500₽",
        },
        {
          name: "Colelast Complex - Увлажнение, питание, повышение на основе коллагена эластичности и упругости кожи",
          price: "5500₽",
        },
        {
          name: "CAVI Lift HA - Регенерирующий омолаживающий мезококтейль с гиалуроновой кислотой, PDRN и экстрактом черной икры",
          price: "5500₽",
        },
        {
          name: "Strong Hair - Рекомендуется при алопеции, диффузном поредении волос, повреждении стержня волос, себорее, раннем поседении волос",
          price: "4500₽",
        },
      ],
    },
    mesoInfini: {
      title: "Мезотерапия Infini Premium Италия",
      items: [
        {
          name: "S - увлажняет, улучшает цвет лица и поддерживает молодость. Подходит для усиления эффектов других процедур. для быстрого восстановления обезвоженной и сухой кожи",
          price: "7500₽",
        },
        {
          name: "M - увлажняет и подтягивает кожу, устраняя первые морщины и признаки старения, восстанавливает цвет лица. Кожа после процедуры выглядит обновленной и сияющей",
          price: "7500₽",
        },
        {
          name: "L - Антивозрастной коктейль с высокой концентрацией гиалуроновой кислоты и аминокислот улучшает тургор, упругость и стимулирует коллаген, обеспечивая лифтинг и омоложение кожи",
          price: "8000₽",
        },
        {
          name: "N - Ревитализация кожи, профилактика морщин и старения: интенсивное увлажнение, улучшение качества, тона, питания и устранение признаков старения",
          price: "7500₽",
        },
        {
          name: "N-HA - Коррекция начальных возрастных изменений, интенсивное увлажнение, лечение дегидратации и подготовка кожи к солнечной активности",
          price: "8000₽",
        },
        {
          name: "C COLLAGEN Stimulate - Редермализация и омоложение кожи: профилактика морщин и старения, активация синтеза коллагена, улучшение качества кожи",
          price: "8000₽",
        },
        {
          name: "A AMBER Stimulate - Редермализация, лифтинг, разглаживание морщин, улучшение оксигенации, увлажнение, стимуляция коллагена и эластина, антиоксидантная защита",
          price: "8500₽",
        },
        {
          name: "A amber + - Антиоксидант, восстанавливает тон кожи, обладает противоотечным и ангиопротекторным действием, улучшает тонус и увлажнение",
          price: "9000₽",
        },
        {
          name: "BTX - Лифтинг кожи, предотвращение морщин и старения, глубокое увлажнение и поддержание результата после лечения ботулотоксином",
          price: "8500₽",
        },
        {
          name: "DNA - Устранение возрастных изменений (потеря тонуса, эластичности, морщины, птоз), подготовка к лазерным шлифовкам и операциям, реабилитация кожи после процедур",
          price: "10000₽",
        },
        {
          name: "H HAIR Max - Ускоряет синтез коллагена и ламинина, стимулирует рост волосяных фолликулов, восстанавливает эпидермис. Лечит различные формы алопеции",
          price: "8500₽",
        },
        {
          name: "W WHITENING - Обладает отбеливающим эффектом, восстанавливает ровный тон, уменьшает гиперпигментацию, поддерживает тонус и увлажнение кожи",
          price: "7500₽",
        },
        {
          name: "L LIPO Max2 - Липолитическое и дренирующее действие (карнитин, кофеин) улучшает микроциркуляцию и отток лимфы, активируя разложение жиров",
          price: "5000₽",
        },
        {
          name: "R REMEDIUM HA+ - Эффекты и механизмы действия: удаление избыточной ГК, неровности, гранулемы, смещение филлера, компрессионно-эмболический синдром",
          price: "8500₽",
        },
      ],
    },
    botox: {
      title: "Ботулотоксин",
      items: [
        { name: "Диспорт Франция", price: "200₽/ед" },
        { name: "Рефайнекс Япония", price: "210₽/ед" },
        { name: "Релатокс Россия", price: "250₽/ед" },
      ],
    },
    lipolytics: {
      title: "Липолитики",
      items: [
        { name: "Biogel Стройность 2мл", price: "8500₽" },
        { name: "LEMON BOTTLE 5мл", price: "5500₽" },
        { name: "LEMON BOTTLE 10мл", price: "7500₽" },
      ],
    },
    consultations: {
      title: "Консультации",
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
              <h2 className="text-2xl font-tenor text-gray-800 tracking-wide mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.items.map((service, serviceIndex) => {
                  // Разделяем название и описание по дефису
                  const [name, description] = service.name.includes(" - ")
                    ? service.name.split(" - ")
                    : [service.name, null];

                  return (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-start mb-4"
                    >
                      <div className="max-w-[70%]">
                        <span className="text-gray-700 font-light">{name}</span>
                        {description && (
                          <p className="text-sm text-gray-400 mt-1 font-light">
                            {description}
                          </p>
                        )}
                      </div>
                      <span className="text-gray-900 font-light ml-4">
                        {service.price}
                      </span>
                    </div>
                  );
                })}
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
