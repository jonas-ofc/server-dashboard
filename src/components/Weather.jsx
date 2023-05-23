 import React, { useEffect, useState } from "react";

 export default function Weather(){
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = "https://srv2.weatherwidget.org/js/?id=ww_93705570411b1";
        script.async = true;
        document.body.appendChild(script);
        return ()=>{
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div id="ww_93705570411b1" v='1.20' loc='id' a='{"t":"horizontal","lang":"en","ids":["wl1596"],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_sot":"celsius","sl_ics":"one_a","font":"Arial","el_phw":3}'>Weather Data Source: <a href="https://wetterlabs.de/wetter_kopenhagen/" id="ww_93705570411b1_u" target="_blank">Wetter Kopenhagen</a></div>
    )
 }
