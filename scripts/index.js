const nav = document.querySelector("#nav")
const abrir = document.querySelector("#btn-menu")
const cerrar = document.querySelector("#close")
const inicio= document.querySelector("#inicio")
const infoPersonal= document.querySelector("#info-personal")
const redes= document.querySelector("#redes-sociales")
const section = document.querySelectorAll(`.section`)
const main = document.querySelector(".main")
const estudios = document.querySelector("#estudios")
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
    <p><i class="bi bi-envelope"></i>correo: sarchiandres63@gmail.com</p><br>
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
                    <li><i class="bi bi-instagram"></i><a href="https://www.instagram.com/andres_sarchi?igsh=MXRwanVvemEwcXdrOA%3D%3D&utm_source=qr" target="_blank">instagram:  @adres_sarchi</a></li><br>
                    <li><i class="bi bi-facebook"></i><a href="https://www.facebook.com/profile.php?id=100056082040714&mibextid=LQQJ4d" target="_blank">facebook:  Andres Sarchi</a></li><br>
                    <li><i class="bi bi-phone"></i>whatsapp:   +57 3248590345</a></li>
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