import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, f as renderHead, e as renderSlot, b as createAstro } from './astro/server_DmAkq9Wm.mjs';
import { B as Button } from './Button_CqbZWBci.mjs';
/* empty css                                  */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#efe9e1] px-10 py-3"> <a href="/" class="flex items-center gap-4 text-[#1b150e]"> <div class="size-4"> <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg> </div> <h2 class="text-primary-500 text-lg font-bold leading-tight tracking-tight">
LEAD
</h2> </a> <div class="flex gap-2"> ${renderComponent($$result, "Button", Button, {}, { "default": ($$result2) => renderTemplate` Sign In ` })} ${renderComponent($$result, "Button", Button, { "variant": "secondary" }, { "default": ($$result2) => renderTemplate` Register ` })} </div> </header>`;
}, "/Users/danielmontes/Desktop/aretopolis/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Lead, plataforma de liderzago de alto desempe\xF1o"
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><title>${title}</title><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/danielmontes/Desktop/aretopolis/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
