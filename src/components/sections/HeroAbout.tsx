/* ------------------------------------------------------------------
   HeroAbout.tsx  ·  Versión Spin + Aura (mayo 2025)
   - Rueda de iconos giratoria
   - Zorro flotante fijo con aura luminosa
   - Fondo de partículas siempre visible
   - Lista de tecnologías actualizada (incluye Vite + Prisma)
   - 100 % TypeScript-safe
------------------------------------------------------------------- */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Mouse,
  ArrowDownNarrowWide as ArrowDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ParticleBackground from '../ui/ParticleBackground';
import CV from '../../assets/CV_Actualizado2025.pdf';
import FoxFormacion from '../../assets/Formacion/fox-avatar-formacion.png';

/* ------------------------- Config ------------------------- */
const TECH_ICONS = [
  'html5','css3','javascript','typescript','react','nextjs','nodejs','tailwindcss',
  'git','docker','postgresql','python','firebase','redux','vite','prisma',
];
const iconSrc = (ic: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${ic}/${ic}-original.svg`;

/* ========================================================== */
interface Props { profileImage: string; }

const HeroAbout: React.FC<Props> = ({ profileImage }) => {
  /* radio dinámico */
  const rOf = (w:number)=> (w<640?120:w<1024?170:215);
  const [radius,setRadius]=useState(rOf(window.innerWidth));

  useEffect(()=>{
    const onResize=()=>setRadius(rOf(window.innerWidth));
    window.addEventListener('resize',onResize);
    return()=>window.removeEventListener('resize',onResize);
  },[]);

  return (
    <div className="relative isolate">
      {/* Fondo de partículas global */}
      <ParticleBackground className="fixed inset-0 -z-30"/>

      {/* ================================================= HERO */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 sm:px-12">
        {/* Orbes de ambiente */}
        <Orb className="top-1/3 -left-28"  color="cyan"   />
        <Orb className="bottom-1/4 -right-28" color="purple" delay />

        {/* Avatar + textos */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="z-10 flex flex-col items-center">
          <Avatar src={profileImage}/>
          <GradientTitle delay={0.4}>Víctor&nbsp;Guerra&nbsp;Zavala</GradientTitle>
          <SubTitle delay={0.6}>-- Analista de Sistemas &amp; Desarrollador Web --</SubTitle>
          <HeroText delay={0.9}/>
        </motion.div>

        {/* Indicador scroll */}
        <motion.a href="#about" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-cyan-300 hover:text-cyan-400">
          <Mouse size={28}/>
          <ArrowDown size={22} className="animate-bounce-fast"/>
        </motion.a>
      </section>

      {/* ================================================= ABOUT */}
      <section id="about" className="relative flex items-center justify-center min-h-screen px-6 pt-36 pb-28">
        <motion.div initial={{opacity:0,y:80}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.15}}
          transition={{duration:0.9}} className="max-w-7xl w-full grid lg:grid-cols-2 gap-16">

          {/* ---------- Timelines ---------- */}
          <div className="space-y-14 lg:pl-14">
            <Timeline title="Formación Académica" color="cyan" items={[
              ['2017 – 2022','Ingeniería Civil Eléctrica (Incompleta)','Universidad de Santiago de Chile'],
              ['2023 – 2024','Técnico Analista de Sistemas (Completo)','Instituto Profesional IPP'],
            ]}/>
            <Timeline title="Experiencia Profesional" color="purple" items={[
              ['Mar 2018 – Dic 2022','Ayudante Dpto. Matemáticas &amp; CSC','Universidad de Santiago de Chile'],
              ['Dic 2024 – Actualidad','Desarrollador Web','Neurona Global Services'],
            ]}/>
          </div>

          {/* ---------- Rueda, zorro y botones ---------- */}
          <div className="relative flex flex-col items-center">

            {/* 1 · Rueda giratoria */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px]"
            >
              {TECH_ICONS.map((ic,i)=>{
                const angle=(2*Math.PI*i)/TECH_ICONS.length;
                const x=radius*Math.cos(angle);
                const y=radius*Math.sin(angle);
                return (
                  <img key={ic} src={iconSrc(ic)} alt={ic}
                    style={{ left:`calc(50% + ${x}px - 20px)`, top:`calc(50% + ${y}px - 20px)` }}
                    className="absolute w-10 h-10 opacity-90 hover:scale-125 transition-transform"/>
                );
              })}
            </motion.div>

            {/* 2 · Zorro flotante con aura (no rota) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Aura doble */}
              <div className="absolute w-60 h-60 rounded-full bg-cyan-400/20 blur-2xl animate-pulse-fast"/>
              <div className="absolute w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl animate-ping"/>
              {/* Zorro */}
              <motion.img
                src={FoxFormacion}
                alt="Fox avatar"
                className="w-56 sm:w-60 drop-shadow-2xl select-none"
                animate={{ y:[0,-12,0] }}
                transition={{ duration:3, repeat:Infinity, ease:'easeInOut' }}
              />
            </div>

            {/* 3 · Botones */}
            <div className="flex flex-col items-center gap-6 mt-14 w-full max-w-xs">
              <GradientButton href={CV} download icon={<Download size={20}/>}>Descargar CV</GradientButton>
              <Link to="/projects" onClick={()=>window.scrollTo(0,0)} className="w-full">
                <GradientButton as="div">Ver Proyectos</GradientButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroAbout;

/* ================================================================
   SUB-COMPONENTES
================================================================ */
const Avatar:React.FC<{src:string}> = ({src})=>(
  <motion.div initial={{opacity:0,scale:0.9,y:20}} animate={{opacity:1,scale:1,y:0}}
    transition={{duration:0.8,delay:0.2}}
    className="group relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden
               border-4 border-cyan-400/70 shadow-[inset_0_0_20px_rgba(8,145,178,0.6)]">
    <img src={src} alt="Foto de perfil"
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"/>
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/40 to-purple-600/40
                    group-hover:opacity-0 transition-opacity duration-700"/>
  </motion.div>
);

const GradientTitle:React.FC<{children:React.ReactNode;delay:number}> = ({children,delay})=>(
  <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay}}
    className="mt-8 text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent
               bg-[length:300%_100%] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-gradient">
    {children}
  </motion.h1>
);

const SubTitle:React.FC<{children:React.ReactNode;delay:number}> = ({children,delay})=>(
  <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay}}
    className="mt-3 text-lg sm:text-xl font-medium text-cyan-300">{children}</motion.p>
);

const HeroText:React.FC<{delay:number}> = ({delay})=>(
  <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay}}
    className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-white/90">
    Transformo ideas en experiencias digitales impactantes mediante
    código limpio, diseño funcional y un enfoque <span className="text-cyan-300 font-semibold">100 % creativo</span>.
  </motion.p>
);

const Orb:React.FC<{className:string;color:'cyan'|'purple';delay?:boolean}> =
  ({className,color,delay})=>(
  <div className={`absolute ${className} w-72 h-72 rounded-full bg-${color}-500/25 blur-3xl
                   ${delay?'animate-pulse-orb-delay':'animate-pulse-orb'}`}/>
);

interface TLProps{title:string;color:'cyan'|'purple';items:[string,string,string][];}
const Timeline:React.FC<TLProps>=({title,color,items})=>(
  <section>
    <h3 className={`text-xl font-bold text-${color}-400 mb-6`}>{title}</h3>
    <div className={`pl-6 border-l-2 border-${color}-400/40 space-y-8`}>
      {items.map(([period,role,place])=>(
        <div key={period} className="relative">
          <span className={`absolute -left-3 top-2 w-3 h-3 rounded-full bg-${color}-400`}/>
          <div className="bg-white/5 p-4 rounded-xl shadow-inner backdrop-blur-md">
            <p className="text-sm text-gray-300">{period}</p>
            <p className="text-white font-semibold" dangerouslySetInnerHTML={{__html:role}}/>
            <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{__html:place}}/>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const GradientButton:React.FC<{children:React.ReactNode;href?:string;download?:boolean;icon?:React.ReactNode;as?:'a'|'div';}> =
({children,href,download,icon,as='a'})=>{
  const C:any=as;
  return(
    <C {...(href&&{href})} {...(download&&{download})}
       className="relative inline-flex items-center justify-center w-full px-8 py-3 font-semibold text-white rounded-full
                  bg-gradient-to-r from-purple-600 via-pink-500 to-red-400
                  shadow-[0_10px_30px_rgba(236,72,153,0.35)]
                  hover:brightness-110 active:scale-95 transition-transform duration-200">
      {icon&&<span className="mr-2">{icon}</span>}
      {children}
    </C>
  );
};

