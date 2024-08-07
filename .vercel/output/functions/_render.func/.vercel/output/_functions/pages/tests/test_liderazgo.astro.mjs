/* empty css                                             */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, d as renderComponent } from '../../chunks/astro/server_DmAkq9Wm.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DsQJEZp0.mjs';
import 'clsx';
/* empty css                                             */
import { D as DIALOGS } from '../../chunks/constants_DaYTNY4p.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Dialog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dialog;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute(id, "id")}${addAttribute([
    "bg-white rounded-lg w-full max-w-[95%] sm:max-w-md backdrop:bg-gray-400/40 backdrop:blur-md animate-fade-down"
  ], "class:list")} data-astro-cid-y4k53sxr> <button${addAttribute(`${id}-close-button`, "id")} type="button" class="absolute right-2 top-2 z-50 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none" data-astro-cid-y4k53sxr> <span class="sr-only" data-astro-cid-y4k53sxr>Close</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-y4k53sxr> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-y4k53sxr></path> <path d="M18 6l-12 12" data-astro-cid-y4k53sxr></path> <path d="M6 6l12 12" data-astro-cid-y4k53sxr></path> </svg> </button> ${renderSlot($$result, $$slots["default"])} </dialog>  `;
}, "/Users/danielmontes/Desktop/aretopolis/src/components/Dialog.astro", void 0);

const $$TestLiderazgo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Test liderazgo", "description": "Test de liderazgo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full max-w-screen-md mx-auto py-10"> ${renderComponent($$result2, "LeadershipTest", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@components/Tests/LeadershipTest", "client:component-export": "default" })} </section> ${renderComponent($$result2, "Dialog", $$Dialog, { "id": DIALOGS.paymentForm }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SendResultsForm", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@components/Dynamic/SendResultsForm", "client:component-export": "default" })} ` })} ` })}`;
}, "/Users/danielmontes/Desktop/aretopolis/src/pages/tests/test_liderazgo.astro", void 0);

const $$file = "/Users/danielmontes/Desktop/aretopolis/src/pages/tests/test_liderazgo.astro";
const $$url = "/tests/test_liderazgo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestLiderazgo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
