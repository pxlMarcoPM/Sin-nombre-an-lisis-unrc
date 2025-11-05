
import React, { useState } from 'react';
import Header from './components/Header';
import SectionCard from './components/SectionCard';
import ImageWithCaption from './components/ImageWithCaption';
import Footer from './components/Footer';
import ConclusionCard from './components/ConclusionCard';
import HeroSection from './components/HeroSection';

// **RUTAS DEFINITIVAS:** Usando un CDN de alta disponibilidad (Postimg) para garantizar la visualización de las imágenes.
const initialVisualContent = [
  {
    src: "https://i.postimg.cc/Vvmt80s2/mi-tren.jpg", // TREN/LA BESTIA
    caption: "El tren, conocido como 'La Bestia', es más que un medio de transporte; es un personaje en sí mismo. Simboliza tanto la esperanza de un futuro mejor como el peligro inminente del viaje."
  },
  {
    src: "https://i.postimg.cc/prRjH5V1/mi-viaje.jpg", // VIAJE/PAISAJES
    caption: "Los paisajes vastos y a menudo hostiles que atraviesan los protagonistas refuerzan su vulnerabilidad y el sentimiento de ser pequeños ante un destino incierto y un mundo indiferente."
  },
  {
    src: "https://i.postimg.cc/0jnw25rt/mis-rostros.jpg", // ROSTROS/MIGRANTES
    caption: "Los rostros de los migrantes, capturados con un realismo documental, transmiten un espectro de emociones: miedo, determinación, cansancio y una frágil esperanza. Cada rostro cuenta una historia de identidad suspendida."
  },
  {
    src: "https://i.postimg.cc/Y0RWq2jR/mi-rio.jpg", // RÍO/CRUCE
    caption: "El cruce del río al final de la película es un poderoso símbolo de transición y sacrificio. Representa la última frontera física y el punto de no retorno en la construcción de una nueva identidad."
  }
];


const App: React.FC = () => {
  const [visualContent, setVisualContent] = useState(initialVisualContent);

  const handleImageChange = (index: number, newSrc: string) => {
    setVisualContent(prevContent => 
      prevContent.map((item, i) => 
        i === index ? { ...item, src: newSrc } : item
      )
    );
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 antialiased">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-24 md:pb-32">
        <div className="space-y-16 md:space-y-24">
          
          <HeroSection />

          <SectionCard 
            id="analisis-textual"
            title="Análisis Textual"
            borderColor="border-pink-500"
            textColor="text-pink-400"
          >
            <p className="mb-4 leading-relaxed">
              En este apartado, se desglosa cómo la <span className="font-semibold">película</span> <span className="italic">Sin Nombre</span> de <span className="font-semibold">Cary Joji Fukunaga</span> articula una <span className="font-semibold">narrativa visual</span> y discursiva sobre la <a href="/detalles-experiencia-migrante.html" className="text-sky-400 hover:underline" aria-label="Más sobre la experiencia migrante">experiencia migrante</a>. La película explora la "<a href="/otredad-construccion-social.html" className="text-sky-400 hover:underline" aria-label="Más sobre la otredad como construcción social">otredad</a>" no solo desde la perspectiva del <span className="font-semibold">migrante</span> que cruza fronteras geográficas, sino también desde las fronteras internas de la <span className="font-semibold">identidad migrante</span>, la pertenencia y la <span className="font-semibold">exclusión social</span>. Para una <a href="https://www.rollingstone.com/movies/movie-reviews/sin-nombre-249567/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Crítica de Sin Nombre en Rolling Stone">crítica de Peter Travers</a>, haz clic aquí.
            </p>
            <p className="mb-4 leading-relaxed">
              El análisis se apoya en textos sobre <a href="https://www.clacso.org/programas/migraciones-y-movilidades/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Estudios Culturales de la Migración de CLACSO">estudios culturales y migratorios</a> que definen la otredad como una <a href="/otredad-construccion-social.html" className="text-sky-400 hover:underline" aria-label="Más sobre la otredad como construcción social">construcción social</a>. Sayra representa al <span className="font-semibold">refugiado</span> que busca una nueva vida, enfrentándose a un mundo que la percibe como "otra", mientras que Willy (El Casper) vive una otredad dentro de su propio entorno, la pandilla, buscando una redención que parece inalcanzable. Sus caminos convergentes en el techo de "<a href="/simbolismo-la-bestia.html" className="text-sky-400 hover:underline" aria-label="Análisis del simbolismo de La Bestia">La Bestia</a>" simbolizan la unión de dos formas de exclusión en una búsqueda compartida de humanidad. Este <span className="font-semibold">cine social</span> de <span className="font-semibold">drama migratorio</span> es fundamental. Lee la <a href="https://www.theguardian.com/film/2009/jun/28/sin-nombre-review" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Reseña de Sin Nombre en The Guardian">reseña en The Guardian</a> para otra perspectiva.
            </p>
            <p className="leading-relaxed">
              La <span className="font-semibold">identidad migrante</span> se presenta como un concepto fluido y en constante negociación. No es una etiqueta estática, sino una <span className="font-semibold">experiencia vivida marcada por el trauma migratorio, la resiliencia migrante y la esperanza</span>. La película evita romantizar el viaje, mostrando su <a href="/documentales-migracion.html" className="text-sky-400 hover:underline" aria-label="Documentales sobre la migración">cruda realidad</a> y, al hacerlo, humaniza a sus protagonistas, permitiendo que la audiencia conecte con su lucha por la identidad en un contexto de <span className="font-semibold">adversidad extrema</span> y <span className="font-semibold">vulnerabilidad</span>. Para explorar más sobre la identidad en la literatura y el cine, consulta <a href="https://www.taylorfrancis.com/chapters/edit/10.4324/9781003058882-10/migrant-identity-construction-olga-gorbunova" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Estudios sobre la Construcción de la Identidad Migrante">estudios sobre la Construcción de la Identidad Migrante</a>.
            </p>
          </SectionCard>

          <SectionCard 
            id="contenido-visual"
            title="Contenido Visual y Simbolismo"
            borderColor="border-sky-500"
            textColor="text-sky-400"
          >
            <p className="mb-8 leading-relaxed">
              El <span className="font-semibold">análisis de la película Sin Nombre</span>, especialmente su <a href="/cinematografia-fukunaga.html" className="text-sky-400 hover:underline" aria-label="Estilo cinematográfico de Cary Joji Fukunaga">cinematografía</a>, utiliza una <span className="font-semibold">paleta de colores</span> mayormente desaturados para reflejar la dureza del viaje y la aridez emocional de los entornos. Sin embargo, momentos clave son acentuados con elementos visuales cargados de simbolismo que enriquecen la narrativa sobre la <span className="font-semibold">migración en Centroamérica</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visualContent.map((item, index) => (
                <ImageWithCaption 
                  key={index}
                  index={index}
                  src={item.src}
                  caption={item.caption}
                  onImageChange={handleImageChange}
                />
              ))}
            </div>
            <p className="mt-8 leading-relaxed text-sm text-slate-400">
              Reportajes como el de <a href="https://www.amnesty.org/es/latest/news/2015/05/mexico-la-bestia-el-horroroso-viaje-de-los-migrantes/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Reportaje de Amnistía Internacional sobre La Bestia">Amnistía Internacional sobre La Bestia</a> documentan la <a href="https://www.hrw.org/es/report/2014/03/17/cruces-peligrosos/secuestros-y-abusos-migrantes-en-mexico" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Reporte de Human Rights Watch sobre la realidad de los migrantes en México">realidad de los migrantes en México</a> y las adversidades que enfrentan en su <span className="font-semibold">viaje peligroso</span>.
            </p>
          </SectionCard>

          <SectionCard 
            id="analisis-guion"
            title="Análisis del Guion Cinematográfico"
            borderColor="border-emerald-500"
            textColor="text-emerald-400"
          >
            <p className="mb-6 leading-relaxed">
              El guion es fundamental para construir la <a href="/desarrollo-personajes-cine.html" className="text-sky-400 hover:underline" aria-label="Técnicas de desarrollo de personajes en el cine">psicología de los personajes</a> y exponer las complejidades de la <span className="font-semibold">identidad migrante</span> y el <span className="font-semibold">sueño americano</span> en <span className="italic">Sin Nombre</span>. A través de diálogos concisos pero potentes, la película revela las motivaciones, los miedos y los lazos humanos que se forjan en circunstancias extremas. Para una <a href="https://www.rogerebert.com/reviews/sin-nombre-2009" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Crítica de Sin Nombre de Roger Ebert">perspectiva de Roger Ebert</a>, lee su crítica. Además, puedes ver <a href="https://www.youtube.com/watch?v=R6u_u9xI1Jc" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Entrevistas con el director Cary Joji Fukunaga">entrevistas con el director</a> para profundizar en su visión. Y para una perspectiva visual, no dejes de ver el <a href="https://www.youtube.com/watch?v=F0mQ_rM0n00" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Tráiler oficial de Sin Nombre">tráiler oficial de la película</a>.
            </p>
            <blockquote className="border-l-4 border-emerald-400 pl-4 py-2 my-6 bg-slate-800 rounded-r-lg">
              <p className="italic text-slate-300">"Esto no es tu vida. Es solo algo que te está pasando."</p>
              <cite className="block text-right mt-2 text-emerald-400">- Sayra a Casper</cite>
            </blockquote>
            <p className="mb-4 leading-relaxed">
              Esta línea de diálogo es crucial. Sayra le ofrece a Casper una perspectiva de <span className="font-semibold">esperanza</span>, sugiriendo que su identidad no está permanentemente definida por su pasado en la pandilla. Le da la posibilidad de reinventarse, un anhelo central en la <span className="font-semibold">realidad migrante Centroamérica</span>. El guion no ofrece respuestas fáciles; en cambio, plantea preguntas sobre si es posible escapar del pasado y forjar una nueva identidad, reflejando el dilema de los <span className="font-semibold">personajes de Sin Nombre</span>.
            </p>
            <p className="leading-relaxed">
              Otro momento clave es la interacción de Casper con su hermano de pandilla, Smiley. El adoctrinamiento de Smiley en la violencia contrasta con el deseo de escape de Casper, mostrando cómo la identidad puede ser tanto impuesta por el grupo como una elección personal de rebelión, aunque con consecuencias fatales. El lenguaje utilizado, una mezcla de español con jerga de la <span className="font-semibold">Mara Salvatrucha</span>, ancla la historia en una realidad específica y subraya la <span className="font-semibold">barrera cultural y social</span> que enfrentan quienes buscan <a href="https://fm4pasolibre.org/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Organizaciones que apoyan a migrantes en tránsito como FM4 Paso Libre">apoyo a migrantes en tránsito</a> y los <span className="font-semibold">derechos humanos migrantes</span>.
            </p>
          </SectionCard>

          <ConclusionCard
            id="conclusion"
            title="Conclusión: La Identidad en Tránsito"
          >
            <p className="mb-4 leading-relaxed">
              <span className="italic">Sin Nombre</span> trasciende el género del thriller de pandillas para ofrecer una meditación profunda sobre la <a href="/teorias-identidad.html" className="text-sky-400 hover:underline" aria-label="Teorías sobre la identidad">identidad</a> en la era de la <a href="https://www.unesco.org/en/articles/reframing-narratives-migration-and-cultural-diversity" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline" aria-label="Artículos sobre Narrativas de Migración y Diversidad Cultural de UNESCO">migración global</a>. La película argumenta que la identidad no es algo fijo, sino un proceso doloroso y continuo de pérdida y reconstrucción, un tema recurrente en el <span className="font-semibold">cine y migración</span>. Los personajes no solo huyen de la violencia física, sino también de las <span className="font-semibold">identidades impuestas</span> que los aprisionan, cruzando <span className="font-semibold">fronteras de identidad</span>. Aborda la difícil situación de los <span className="font-semibold">refugiados</span> en su búsqueda de seguridad.
            </p>
            <p className="leading-relaxed">
              La "<span className="font-semibold">otredad</span>" se manifiesta en múltiples niveles: el migrante es el "otro" para el país de destino, el pandillero es el "otro" para la sociedad civil, y finalmente, el individuo que busca cambiar es el "otro" para su propio pasado. Al final, la película sugiere que encontrar un nombre, una identidad, es un viaje universal, y que en la conexión empática con el "otro" reside la única posibilidad de redención y humanidad. La verdadera frontera no es geográfica, sino la que existe entre el rechazo y la aceptación, un desafío constante en la <span className="font-semibold">frontera México-EEUU</span> y el foco central de la obra de <span className="font-semibold">Cary Joji Fukunaga sobre migración</span>.
            </p>
          </ConclusionCard>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;