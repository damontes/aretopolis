/* empty css                                             */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DmAkq9Wm.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Caracterograma = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section>Here it goes the test</section>`;
}, "/Users/danielmontes/Desktop/aretopolis/src/pages/tests/caracterograma.astro", void 0);

const $$file = "/Users/danielmontes/Desktop/aretopolis/src/pages/tests/caracterograma.astro";
const $$url = "/tests/caracterograma";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Caracterograma,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
