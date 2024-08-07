/* empty css                                          */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_DmAkq9Wm.mjs';
import { B as Button } from '../chunks/Button_CqbZWBci.mjs';
import { $ as $$Layout } from '../chunks/Layout_DsQJEZp0.mjs';
export { renderers } from '../renderers.mjs';

const $$Caracterograma = createComponent(($$result, $$props, $$slots) => {
  const REPRESENTATIONS = [
    {
      description: "El volante representa la voluntad del l\xEDder.",
      image: "volante.webp"
    },
    {
      description: "Los faros equivalen a la inteligencia del l\xEDder.",
      image: "faros.webp"
    },
    {
      description: "El motor es semejante a las pasiones relacionadas con la fortaleza.",
      image: "motor.webp"
    },
    {
      description: "Los frenos simbolizan las pasiones relacionadas con el auto-control.",
      image: "frenos.webp"
    }
  ];
  const DESCRIPTIONS = [
    {
      description: "El buen uso de tu direcci\xF3n, faros, motor y frenos, te transformar\xE1 en un gran piloto en la carrera de la vida, para conducir hacia tus retos con m\xE1s \xE9xito y alegr\xEDa.",
      image: "direccion.webp",
      link: {
        label: "Para saber m\xE1s sobre la met\xE1fora del Ferrari, escucha este podcast.",
        href: "#"
      }
    },
    {
      description: " El encarreramiento se sostiene en la sabidur\xEDa de grandes pensadores cl\xE1sicos, griegos y romanos, cuyas ideas dan lugar a la estrategia, ciencia de la excelencia y aporte filos\xF3fico de LEAD.",
      image: "carrera.webp",
      link: {
        label: "Para m\xE1s informaci\xF3n, visita la p\xE1gina AprendoLeads.",
        href: "#"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Caracterograma, descubre tu perfil caracterol\xF3gico y grado de desarrollo en un banco de 20 h\xE1bitos de alto desempe\xF1o", "description": "Despierta a tu l\xEDder interior y alcanza la excelencia mediante este test basado en la met\xE1fora del Ferrari." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col max-w-[960px] mx-auto flex-1"> <div class="flex flex-col gap-6 px-4 py-10 lg:gap-8 lg:flex-row"> <img src="/images/caracterograma/header.webp" class="w-full aspect-video object-cover rounded-xl h-auto sm:w-[400px]"> <div class="flex flex-col min-w-[400px] gap-8 justify-center"> <div class="flex flex-col gap-2 text-left"> <h1 class="text-neutral-800 text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
Despierta a tu líder interior y alcanza la excelencia mediante este
            test basado en la metáfora del Ferrari.
</h1> <h2 class="text-neutral-800 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
Explora veinte hábitos de alto desempeño, descubre tus fortalezas y
            debilidades de carácter.
</h2> </div> ${renderComponent($$result2, "Button", Button, { "disabled": true }, { "default": ($$result3) => renderTemplate` <span class="truncate">PROXIMAMENTE</span> ` })} </div> </div> <h2 class="text-neutral-800 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
No hay líder sin carácter
</h2> <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"> ${REPRESENTATIONS.map((item) => renderTemplate`<div class="flex flex-col gap-3 pb-3"> <img${addAttribute(`/images/caracterograma/${item.image}`, "src")} class="w-full aspect-square bg-cover rounded-xl"> <p class="text-neutral-800 text-base font-medium leading-normal"> ${item.description} </p> </div>`)} </div> <h1 class="text-neutral-800 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
Eres un poderoso Ferrari
</h1> <p class="text-neutral-800 text-base font-normal leading-normal pt-1 px-4">
LEAD es un modelo único de liderazgo y una aventura que te prepara para
      responder cuatro preguntas fundamentales:
</p> <ul class="sm:px-4 leading-7 list-disc py-4 ml-6"> <li>¿Quién eres?</li> <li>¿Qué importa y tiene sentido?</li> <li>¿Dónde dejas tu huella?</li> <li>¿Cómo lo consigues?</li> </ul> <div class="sm:px-4 space-y-4 mt-2"> <p class="font-semibold">Esto afirmó Peter Drucker:</p> <blockquote class="italic border-l-4 border-gray-400 text-gray-600 p-2">
Todos los libros de management, incluyendo los míos, se enfocan en
        administrar lo que hacen los demás, pero no puedes dirigir a otros sin
        dirigirte primero a ti mismo.
</blockquote> </div> <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 py-4"> ${DESCRIPTIONS.map((item) => renderTemplate`<div class="flex flex-col gap-3 pb-3"> <img${addAttribute(`/images/caracterograma/${item.image}`, "src")} class="w-full aspect-square object-cover rounded-xl"> <div> <p class="text-[#1C160C] text-base font-medium leading-normal"> ${item.description} </p> ${renderComponent($$result2, "Button", Button, { "as": "a", "href": item.link.href, "variant": "link" }, { "default": ($$result3) => renderTemplate`${item.link.label}` })} </div> </div>`)} </div> </div> ` })}`;
}, "/Users/danielmontes/Desktop/aretopolis/src/pages/caracterograma.astro", void 0);

const $$file = "/Users/danielmontes/Desktop/aretopolis/src/pages/caracterograma.astro";
const $$url = "/caracterograma";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Caracterograma,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
