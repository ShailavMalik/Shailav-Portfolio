"use strict";(self.webpackChunkreact_tailwindcss_portfolio=self.webpackChunkreact_tailwindcss_portfolio||[]).push([[232],{448:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(43),l=r(254),i=r(605),o=r(579);const s=e=>{let{title:t,category:r,image:a,deployUrl:l,codeUrl:s}=e;return(0,o.jsx)(i.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,o.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:a,className:"rounded-t-xl project-img border-none object-cover",alt:"Single Project"}),(0,o.jsxs)("div",{className:"flex justify-center space-x-4 mt-2",children:[(0,o.jsx)("a",{className:"flex text-red items-center justify-center  hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full",href:s,children:(0,o.jsx)("span",{className:"relative z-10",children:"View Code"})}),(0,o.jsxs)("a",{className:"group relative min-h-[50px] w-40 overflow-hidden border border-purple-500 bg-white text-purple-500 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full",href:l,children:[(0,o.jsx)("span",{className:"top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"}),(0,o.jsx)("span",{className:"absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white",children:"View Live"})]})]})]}),(0,o.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,o.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,o.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})};var c=r(582);const d=["Full-Stack Application","Web Application","Frontend Application"],n=e=>{let{setSelectProject:t}=e;return(0,o.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[(0,o.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((e=>(0,o.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})},p=e=>{let{projectsToDisplay:t}=e;const{projects:r,searchProject:i,setSearchProject:d,searchProjectsByTitle:p,selectProject:m,setSelectProject:h,selectProjectsByCategory:g}=(0,a.useContext)(c.Y);return(0,o.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,o.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,o.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),(0,o.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[(0,o.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,o.jsx)("span",{className:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer",children:(0,o.jsx)(l.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,o.jsx)("input",{onChange:e=>{d(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,o.jsx)(n,{setSelectProject:h})]})]}),(0,o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:m?g.map((e=>(0,o.jsx)(s,{title:e.title,category:e.category,image:e.img,deployUrl:e.deployUrl,codeUrl:e.codeUrl},e.id))):i?p.map((e=>(0,o.jsx)(s,{title:e.title,category:e.category,image:e.img,deployUrl:e.deployUrl,codeUrl:e.codeUrl},e.id))):r.slice(0,t).map((e=>(0,o.jsx)(s,{title:e.title,category:e.category,image:e.img,deployUrl:e.deployUrl,codeUrl:e.codeUrl},e.id)))})]})}},582:(e,t,r)=>{r.d(t,{Y:()=>o,S:()=>s});var a=r(43);const l=[{id:1,title:"Chatty - A realtime chat application",category:"Full-Stack Application",img:r.p+"static/media/project1.5ab06a7b3fbf5740d0f8.png",codeUrl:"https://github.com/ShailavMalik/Chatty",deployUrl:"https://chatty-m3ui.onrender.com/"},{id:2,title:"Weather Forecast WebApp",category:"Web Application",img:r.p+"static/media/project2.f5279412fe6fea4b2b1b.png",codeUrl:"https://github.com/ShailavMalik/Weather-Forcasting",deployUrl:"https://weather-forcasting-zeta.vercel.app/"},{id:3,title:"Dice-Roll",category:"Frontend Application",img:r.p+"static/media/project3.e5808f9491c479308f85.png",codeUrl:"hhttps://github.com/ShailavMalik/Dice_Roll",deployUrl:"https://dice-roll-ashen.vercel.app/"},{id:4,title:"Drum-kit",category:"Frontend Application",img:r.p+"static/media/project4.51ecb32e740c26b8ea05.png",codeUrl:"https://github.com/ShailavMalik/Drum-Kit",deployUrl:"https://drum-kit-fawn-omega.vercel.app/"},{id:5,title:"Flipkart UI Clone",category:"Frontend Application",img:r.p+"static/media/project5.227eee0483244a999f8c.png",codeUrl:"https://github.com/ShailavMalik/Flipkart_Clone",deployUrl:"https://shailavmalik.github.io/Flipkart_Clone/"},{id:6,title:"Blog-Website",category:"Frontend Application",img:r.p+"static/media/project6.a9664847dc996d0ecc36.png",codeUrl:"https://github.com/ShailavMalik/Blog-Website",deployUrl:"https://shailavmalik.github.io/Blog-Website/"},{id:7,title:"Microsoft Homepage Clone",category:"Frontend Application",img:r.p+"static/media/project7.2544cd97cc615aa4ef61.png",codeUrl:"https://github.com/ShailavMalik/Microsoft_frontend-clone",deployUrl:"https://shailavmalik.github.io/Microsoft_frontend-clone/"},{id:8,title:"Facebook Login Clone",category:"Frontend Application",img:r.p+"static/media/project8.2d95fb835534f588ddb9.png",codeUrl:"https://github.com/ShailavMalik/facebook-login-page",deployUrl:"https://shailavmalik.github.io/facebook-login-page/"},{id:9,title:"Personal Site",category:"Frontend Application",img:r.p+"static/media/project9.04126e4ea9198dde5b0c.png",codeUrl:"https://github.com/ShailavMalik/Personal-Site",deployUrl:"https://personal-site-shailav-maliks-projects.vercel.app/"}];var i=r(579);const o=(0,a.createContext)(),s=e=>{const[t,r]=(0,a.useState)(l),[s,c]=(0,a.useState)(""),[d,n]=(0,a.useState)(""),p=t.filter((e=>e.title.toLowerCase().includes(s.toLowerCase())||""===s?e:"")),m=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(d)));return(0,i.jsx)(o.Provider,{value:{projects:t,setProjects:r,searchProject:s,setSearchProject:c,searchProjectsByTitle:p,selectProject:d,setSelectProject:n,selectProjectsByCategory:m},children:e.children})}},42:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(318),l=r(364),i=r(254);r(43);const o=r.p+"static/media/developer.2f084608158c1db6dcc0b2c76a2806f7.svg";const s=r.p+"static/media/developer-dark.aa2700b57c0b14ead116acc39d478609.svg";var c=r(605),d=r(579);const n=()=>{const[e]=(0,l.A)();return(0,d.jsxs)(c.P.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,d.jsx)(c.P.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Shailav"}),(0,d.jsx)(c.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Full-Stack Developer & Design Enthusiast"}),(0,d.jsx)(c.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,d.jsxs)("a",{download:"Shailav-CV.pdf",href:"/files/Shailav CV.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,d.jsx)(i.Z25,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),(0,d.jsx)(c.P.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,d.jsx)("img",{src:"dark"===e?o:s,alt:"Developer"})})]})};var p=r(448),m=r(582),h=r(89);const g=()=>(0,d.jsxs)("div",{className:"container mx-auto",children:[(0,d.jsx)(n,{}),(0,d.jsx)(m.S,{children:(0,d.jsx)(p.A,{projectsToDisplay:6})}),(0,d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,d.jsx)(a.N_,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,d.jsx)(h.A,{title:"More Projects"})})})]})}}]);
//# sourceMappingURL=232.6133939b.chunk.js.map