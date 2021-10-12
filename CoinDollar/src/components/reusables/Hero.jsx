import React from "react";

export default function Hero({
  image,
  title,
  desc,
  children,
  highlight,
  intro,
  style,
}) {
  return (
    <div className={`relative w-full h-3/5 flex ${style}   overflow-hidden`}>
      <div className="w-5/12 h-full flex flex-col items-center justify-center gap-y-3 p-9">
        {highlight ? (
          <h1 className="text-4xl font-bold text-secondary">
            {" "}
            {intro}
            <span className="text-white">{highlight}</span> {title}
          </h1>
        ) : (
          <h1 className="text-3xl font-bold text-primary"> {title}</h1>
        )}

        <p className={highlight ? "text-white":null}>{desc}</p>
        <div className="flex w-full justify-center items-center gap-x-4">
          {children}
        </div>
      </div>
      <div className="flex-1 ">
        <img src={image} alt={image} className="w-4/5" />
      </div>

 <div className="w-full absolute -bottom-7">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,256L80,229.3C160,203,320,149,480,160C640,171,800,245,960,272C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
</div>
    
          
    </div>
  );
}
