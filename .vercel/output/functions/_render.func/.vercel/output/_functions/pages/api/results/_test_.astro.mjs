import { g as getLeadershipResults } from '../../../chunks/getLeadershipResults_DHpJeQLs.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({
  params,
  request
}) => {
  const { test } = params;
  const { answers } = await request.json();
  const result = getLeadershipResults(answers, test);
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
