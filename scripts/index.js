const nav = document.querySelector("#nav")
const abrir = document.querySelector("#btn-menu")
const cerrar = document.querySelector("#close")
const inicio= document.querySelector("#inicio")
const infoPersonal= document.querySelector("#info-personal")
const redes= document.querySelector("#redes-sociales")
const section = document.querySelectorAll(`.section`)
const main = document.querySelector(".main")
const estudios = document.querySelector("#estudios")
const perfil = document.querySelector("#perfil")
let contenidoOriginal = main.innerHTML;



abrir.addEventListener("click",()=>{
    nav.classList.add("visable")
}
)
cerrar.addEventListener("click",()=>{
    nav.classList.remove("visable")
})




inicio.addEventListener("click", () => {
    section.forEach(section => {
        section.classList.remove("oculto");
    });
    nav.classList.remove("visable")
    main.innerHTML = contenidoOriginal; // Restaurar contenido original de main
});



infoPersonal.addEventListener("click", () => {
    section.forEach((section) => {
        section.classList.add("oculto");
    });
    main.innerHTML=` <section class="section">
    <!--secciopn de proyectos   -->
    <div class="title-section">
        <img class="logo-s" src="/assets/img/senatrans.png" alt="#">
    <h2>informacion Personal</h2>
    </div>
    <hr>
    
    <div class="container">
   
    <div class="people">
    <br><br>
    <p><i class="bi bi-person-badge-fill"></i>cedula: 1139874224</p><br>
    <p><i class="bi bi-envelope"></i><a href="mailto:sarchiandres63@gmail.com?subject=contactame&body=Hola%20Andres!">sarchiandres63@gmail.com</a><br><br>
    </p>
    <p><i class="bi bi-geo-alt-fill"></i>lugar de residencia: Armenia,Quindio </p><br>
    <p><i class="bi bi-person-arms-up"></i>edad: 18 años</p>
    </div>
 </section>`
 nav.classList.remove("visable")
});



redes.addEventListener("click", () => {
    section.forEach((section) => {
        section.classList.add("oculto");
    });
    main.innerHTML=` <section class="section">
    <!--secciopn de proyectos   -->
    <div class="title-section">
        <img class="logo-s" src="/assets/img/senatrans.png" alt="#">
    <h2>Redes sociales</h2>
    </div>
    <hr>
    
    <div class="container">
   
    <div class="people">
    <br><br>
    <ul>
                    <li><i class="bi bi-instagram"></i><a href="https://www.instagram.com/andres_sarchi?igsh=MXRwanVvemEwcXdrOA%3D%3D&utm_source=qr" target="_blank">instagram:  @andres_sarchi</a></li><br>
                    <li><i class="bi bi-facebook"></i><a href="https://www.facebook.com/profile.php?id=100056082040714&mibextid=LQQJ4d" target="_blank">facebook:  Andres Sarchi</a></li><br>
                   <li><a href="tel:+573248590345"><i class="bi bi-phone"></i>+57 3248590345</a></li>
                </ul>
    </div>
 </section>`
 nav.classList.remove("visable")
});
estudios.addEventListener("click", () => {
    section.forEach((section) => {
        section.classList.add("oculto");
    });
    main.innerHTML=` <section class="section">
    <!--secciopn de proyectos   -->
    <div class="title-section">
        <img class="logo-s" src="/assets/img/senatrans.png" alt="#">
    <h2>Estudios</h2>
    </div>
    <hr>
    
    <div class="container">
   
    <div class="people">
    <br><br>
    <ul>
    <li>Tecnico en programacion de software</li><br>
    <li>Basica primaria</li><br>
    <li>Bachiller</li>
</ul>
    </div>
 </section>`
 nav.classList.remove("visable")
});
perfil.addEventListener("click",()=>{
    main.innerHTML=`<section class="section" style=>
    <!--secciopn de proyectos   -->
    <div class="title-section">
        <img class="logo-s" src="/assets/img/senatrans.png" alt="#">
    <h2>Perfil</h2>
    </div>
    <hr>
    
    <div class="container">
   
    <div class="people">
    <br><br>
    <p>Soy un estudiante de Tecnología en Análisis y Desarrollo de Software en el SENA , con formación en Programación de Software y especialización en el uso de tecnologías como HTML, CSS, JavaScript, SQL, Java, TypeScript, Git y GitHub. Actualmente tengo un nivel de programación junior, con habilidades en el desarrollo de aplicaciones web  y control de versiones. Me destaco por mi capacidad para comunicarme de manera efectiva, colaborar en equipos multidisciplinarios y adaptarme rápidamente a nuevos entornos tecnológicos, promoviendo siempre un trabajo organizado y orientado a resultados. Estoy dispuesto a aprender lo que sea necesario para mejorar mis competencias y continuar creciendo en el campo del desarrollo de software</p>

    </div>
 </section>`
    
 nav.classList.remove("visable")
})