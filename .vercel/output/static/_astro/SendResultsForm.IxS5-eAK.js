import{j as e,g as d,T as c,B as m}from"./localStorage.DZHSJ0tP.js";import{r as u}from"./index.DhYZZe0J.js";const l=({label:s,...t})=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:s}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{className:"h-11 text-lg block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",...t})})]}),f=()=>{const s=d(`${c.LIDERAZGO}:answers`),[t,a]=u.useState(!1),o=async r=>{r.preventDefault(),a(!0);const i=new FormData(r.target),n=await fetch("/api/results/sendEmail",{method:"POST",body:i});if(!n.ok){alert(`Error al enviar los resultados ${n.statusText}`),a(!1);return}alert("Resultados enviados correctamente")};return e.jsxs("form",{onSubmit:o,className:"px-8 py-6",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{label:"Nombre *",type:"text",name:"name",required:!0}),e.jsx(l,{label:"Correo Electronico *",type:"text",name:"email",required:!0}),e.jsx("input",{type:"hidden",name:"results",defaultValue:JSON.stringify(s)})]}),e.jsx("div",{className:"mt-10",children:e.jsx(m,{disabled:t,children:t?"Enviando":"Enviar resultados"})}),e.jsx("p",{className:"text-center text-xs text-gray-400 mt-4",children:"Verifica que tus datos sean correctos antes de enviar tu solicitud."})]})};export{f as default};
