import { Resend } from 'resend';
import { jsxs, jsx } from 'react/jsx-runtime';
import { S as SECTIONS, D as DIALOGS, A as AREAS, T as TestType } from '../../../chunks/constants_DaYTNY4p.mjs';
import { g as getLeadershipResults } from '../../../chunks/getLeadershipResults_DHpJeQLs.mjs';
import { B as Button } from '../../../chunks/Button_CqbZWBci.mjs';
import { f as formatNumber, c as cn } from '../../../chunks/utils_Cd7rLyA8.mjs';
import { useMemo } from 'react';
import ReactDOM from 'react-dom/server';
import puppeteer from 'puppeteer';
export { renderers } from '../../../renderers.mjs';

const TRACK_WIDTH = 4;
const COLOR_BY_PERCENTAGE = {
  "0_39": "stroke-red-500",
  "40_69": "stroke-yellow-500",
  "70_100": "stroke-green-500"
};
function CircularProgress({ percentage, size = 92 }) {
  const { center, radius, dashArray, dashOffset } = useMemo(() => {
    const center2 = size / 2;
    const radius2 = center2 - TRACK_WIDTH;
    const dashArray2 = 2 * Math.PI * radius2;
    const dashOffset2 = dashArray2 * ((100 - percentage) / 100);
    return { center: center2, radius: radius2, dashArray: dashArray2, dashOffset: dashOffset2 };
  }, [percentage]);
  const range = Object.keys(COLOR_BY_PERCENTAGE).find((range2) => {
    const [low, high] = range2.split("_").map(Number);
    return percentage >= low && percentage <= high;
  });
  return /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-center relative`, children: [
    /* @__PURE__ */ jsx("span", { className: "absolute text-md text-gray-400 font-semibold", children: formatNumber(percentage / 100, {
      style: "percent",
      maximumFractionDigits: 0
    }) }),
    /* @__PURE__ */ jsxs("svg", { className: "-rotate-90", style: { width: size, height: size }, children: [
      /* @__PURE__ */ jsx(
        "circle",
        {
          className: "stroke-[4px] fill-transparent stroke-gray-400/40",
          cx: center,
          cy: center,
          r: radius
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          className: cn(
            "stroke-[4px] fill-transparent",
            COLOR_BY_PERCENTAGE[range]
          ),
          cx: center,
          cy: center,
          r: radius,
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }
      )
    ] })
  ] });
}

const LeadershipResults = (props) => {
  const { results, htmlTemplate = false } = props;
  const recommendationsByArea = results.reduce((acc, result) => {
    return { ...acc, ...result.recommendationsByArea };
  }, {});
  const handlePaymentDialogForm = () => {
    const dialog = document.getElementById(
      DIALOGS.paymentForm
    );
    dialog?.showModal();
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative max-w-screen-md mx-auto py-10 px-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Tus fortalezas de liderazgo" }),
    /* @__PURE__ */ jsx("p", { className: "font-light text-md my-2 text-gray-600", children: "Terminaste el test de liderazgo LEAD. Estos son tus resultados en porcentajes de 0 a 100%, según tu grado de desarrollo para cada competencia." }),
    /* @__PURE__ */ jsxs("section", { className: "my-10 space-y-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Tus fortalezas para construir" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("grid gap-2", {
            "grid-cols-1 md:grid-cols-2": !htmlTemplate,
            "grid-cols-2": htmlTemplate
          }),
          children: results.sort((a, b) => b.percentage - a.percentage).map((result, index) => {
            const sectiontitle = SECTIONS[Number(result.section)];
            return /* @__PURE__ */ jsxs(
              "article",
              {
                className: "p-4 border border-gray-200 rounded-md",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: sectiontitle }),
                    /* @__PURE__ */ jsx(
                      CircularProgress,
                      {
                        percentage: result.percentage,
                        size: 64
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "font-light text-sm leading-6 text-gray-600", children: result.recommendations })
                ]
              },
              index
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsxs("header", { className: "space-y-2 px-2 pt-4 pb-8 border-b border-primary-100", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Fortalezas para construir" }),
        /* @__PURE__ */ jsx("p", { className: "font-light text-sm my-2 text-gray-600", children: "Utilice estas recomendaciones para desarrollar sus habilidades de liderazgo. céntrese en un área a la vez y establezca objetivos específicos para seguir su progreso" })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 list-none", children: Object.entries(recommendationsByArea).map(
        ([area, recommendations], index) => {
          const title = AREAS[Number(area)];
          return /* @__PURE__ */ jsxs("li", { className: "p-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold", children: title }),
            /* @__PURE__ */ jsx("ul", { className: "list-decimal text-sm flex flex-col gap-y-6 ml-4 mt-4 text-gray-600", children: recommendations.map(
              (recommendation, index2) => /* @__PURE__ */ jsx("li", { className: "leading-5", children: recommendation }, index2)
            ) })
          ] }, index);
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      "footer",
      {
        className: cn(
          "h-40 absolute inset-0 mt-auto top-0 flex justify-center items-center bg-gradient-to-t from-[#f7f5f2] from-40% to-100% to-transparent",
          {
            hidden: htmlTemplate
          }
        ),
        children: /* @__PURE__ */ jsx(Button, { className: "max-w-xs", onClick: handlePaymentDialogForm, children: "Ver más" })
      }
    )
  ] });
};

const renderToHtml = (answers) => {
  const results = getLeadershipResults(answers, TestType.LIDERAZGO, false);
  const body = ReactDOM.renderToStaticMarkup(
    /* @__PURE__ */ jsxs("html", { children: [
      /* @__PURE__ */ jsxs("head", { children: [
        /* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
        /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        /* @__PURE__ */ jsx("script", { src: "https://cdn.tailwindcss.com" })
      ] }),
      /* @__PURE__ */ jsx("body", { children: /* @__PURE__ */ jsx(LeadershipResults, { results, htmlTemplate: true }) })
    ] })
  );
  return body;
};

const resendKey = "re_NF3wqk18_GNrxRiG3VjKSDP4D6gnPT6nu";
const resend = new Resend(resendKey);
const POST = async ({ request }) => {
  const data = await request.formData();
  const values = Object.fromEntries(data.entries());
  const { name, email, results } = values;
  const html = renderToHtml(JSON.parse(results));
  const pdfBuffer = await generatePdf(html);
  await resend.emails.send({
    from: "Aretopolis <no-replay@aretopolis.com>",
    to: [email],
    subject: `Resultados de la encuesta de liderazgo: ${name}.`,
    text: "Gracias por participar en nuestra encuesta, aquí tienes tus resultados",
    attachments: [
      {
        filename: "resultados.pdf",
        content: pdfBuffer
      }
    ],
    tags: [
      {
        name: "test",
        value: TestType.LIDERAZGO
      }
    ]
  });
  return new Response(JSON.stringify({ message: "ok" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
async function generatePdf(htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });
  const pdfBuffer = await page.pdf({
    format: "A4",
    margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" }
  });
  await browser.close();
  return pdfBuffer;
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
