/* empty css                                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, d as renderComponent } from '../chunks/astro/server_DmAkq9Wm.mjs';
import { $ as $$Layout } from '../chunks/Layout_DsQJEZp0.mjs';
import 'clsx';
import { c as cn } from '../chunks/utils_Cd7rLyA8.mjs';
import { B as Button } from '../chunks/Button_CqbZWBci.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("flex flex-col max-w-screen-lg mx-auto", className), "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/danielmontes/Desktop/aretopolis/src/components/SectionContainer.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6 px-4 py-10 md:gap-8 lg:items-center lg:flex-row"> <img class="w-full aspect-video object-cover rounded-xl h-auto lg:w-[400px]" src="/images/test_liderazgo.webp"> <div class="flex flex-col gap-6 md:gap-8 lg:justify-center flex-1"> <div class="w-full flex flex-col gap-2 text-left"> <h1 class="text-neutral-800 text-4xl font-black leading-tight md:text-5xl md:font-black tracking-tight">
Test de liderazgo
</h1> <h2 class="text-[#1b150e] text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal">
Conocer tus cualidades de liderazgo y lo que te falta por desarrollar
          es indispensable para que alcances la excelencia.
</h2> </div> ${renderComponent($$result2, "Button", Button, { "variant": "primary", "as": "a", "href": "/test_liderazgo", "full": false }, { "default": ($$result3) => renderTemplate`
Empezar
` })} </div> </div> ` })}`;
}, "/Users/danielmontes/Desktop/aretopolis/src/sections/Hero.astro", void 0);

const $$Tests = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SectionContainer", $$SectionContainer, { "className": "w-full flex-1" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-[#1b150e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
Explora nuestros test
</h2> <div class="p-4"> <div class="flex items-stretch justify-between gap-4 rounded-xl bg-[#f8f5f2] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]"> <div class="flex flex-[2_2_0px] flex-col gap-4"> <div class="flex flex-col gap-1"> <p class="text-[#1b150e] text-base font-bold leading-tight">
Caracterograma
</p> <p class="text-[#93754d] text-sm font-normal leading-normal">
Despierta a tu líder interior y alcanza la excelencia mediante este
            test basado en la metáfora del Ferrari.
</p> </div> ${renderComponent($$result2, "Button", Button, { "variant": "secondary", "href": "/caracterograma", "as": "a", "full": false }, { "default": ($$result3) => renderTemplate`
Explorar
` })} </div> <div class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1" style="background-image: url(&quot;https://cdn.usegalileo.ai/sdxl10/49f406d9-cefc-475c-a0f5-6dc30488f5de.png&quot;);"></div> </div> </div> ` })}`;
}, "/Users/danielmontes/Desktop/aretopolis/src/sections/Tests.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section><h1>Footer</h1></section>`;
}, "/Users/danielmontes/Desktop/aretopolis/src/sections/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lead, plataforma de liderazgo etico de alto desempe\xF1o", "description": "Encuentra tus fortalezas y areas de oportunidad para tu liderazgo." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Tests", $$Tests, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/danielmontes/Desktop/aretopolis/src/pages/index.astro", void 0);

const $$file = "/Users/danielmontes/Desktop/aretopolis/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
