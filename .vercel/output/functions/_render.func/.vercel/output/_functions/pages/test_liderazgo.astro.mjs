/* empty css                                          */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DmAkq9Wm.mjs';
import { B as Button } from '../chunks/Button_CqbZWBci.mjs';
import { $ as $$Layout } from '../chunks/Layout_DsQJEZp0.mjs';
export { renderers } from '../renderers.mjs';

const $$TestLiderazgo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Test de liderazgo", "description": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto max-w-screen-md py-8 leading-7"> <h1 class="text-4xl font-bold">Test de liderazgo</h1> <p class="text-primary-300 text-sm py-2">
Conocer tus cualidades de liderazgo y lo que te falta por desarrollar es
      indispensable para que alcances la excelencia.
</p> <p class="py-4">
Ningún test te dará la profundidad y alcance de esta herramienta. La
      información que obtendrás es muy completa y podrás profundizar tanto como
      quieras.
</p> <h2 class="text-2xl font-semibold">INSTRUCCIONES</h2> <p class="py-4">Sólo contesta "sí" o "no" (me identifico con la frase).</p> <h2 class="text-2xl font-semibold mt-4">Toma en cuenta lo siguiente:</h2> <ul class="list-decimal ml-8 py-4"> <li>Contesta lo que te describa mejor, no lo que te haría ver bien.</li> <li>
Si tienes dudas entre "sí" y "no", elige hacia dónde se inclina la
        balanza.
</li> <li>
Si interrumpes el test, cada vez que entres continuarás en donde te
        quedaste.
</li> </ul> <div class="flex-1 flex justify-center"> ${renderComponent($$result2, "Button", Button, { "as": "a", "href": "/tests/test_liderazgo", "className": "mt-10 w-[50%]" }, { "default": ($$result3) => renderTemplate`Empezar` })} </div> </main> ` })}`;
}, "/Users/danielmontes/Desktop/aretopolis/src/pages/test_liderazgo.astro", void 0);

const $$file = "/Users/danielmontes/Desktop/aretopolis/src/pages/test_liderazgo.astro";
const $$url = "/test_liderazgo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestLiderazgo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
