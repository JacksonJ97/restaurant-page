(()=>{"use strict";const e=()=>{const e=document.getElementById("main");e.textContent="";const t=(()=>{const e=document.createElement("section"),t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("p"),c=document.createElement("img");return t.classList.add("container"),e.classList.add("home-section"),c.src="images/tea.jpg",c.alt="Cup of tea",n.textContent="Tea Shop",a.textContent="Crafted with wholesome organic ingredients. No artificial colouring or flavours.",t.append(n),t.append(a),e.append(c),e.append(t),e})();e.append(t)},t=()=>{const e=document.getElementById("main");e.textContent="";const t=(()=>{const e=document.createElement("section"),t=(()=>{const e=document.createElement("div"),t=(()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");e.classList.add("menu-item"),t.classList.add("menu-item"),n.classList.add("menu-item"),a.classList.add("menu-item");const c=document.createElement("img"),d=document.createElement("img"),o=document.createElement("img"),m=document.createElement("img");c.src="images/green-tea.jpg",c.alt="Green Tea",d.src="images/black-tea.jpg",d.alt="Black Tea",o.src="images/earl-grey-tea.jpg",o.alt="Earl Grey Tea",m.src="images/milk-tea.jpg",m.alt="Milk Tea";const s=document.createElement("p"),p=document.createElement("p"),l=document.createElement("p"),r=document.createElement("p");s.textContent="Green Tea",p.textContent="Black Tea",l.textContent="Earl Grey Tea",r.textContent="Milk Tea";const i=document.createElement("p"),u=document.createElement("p"),E=document.createElement("p"),g=document.createElement("p");return i.textContent="$10",u.textContent="$10",E.textContent="$10",g.textContent="$10",e.append(c),e.append(s),e.append(i),t.append(d),t.append(p),t.append(u),n.append(o),n.append(l),n.append(E),a.append(m),a.append(r),a.append(g),[e,t,n,a]})();return e.classList.add("menu-card"),e.append(t[0]),e.append(t[1]),e.append(t[2]),e.append(t[3]),e})(),n=document.createElement("h2");return e.classList.add("menu-section"),n.textContent="Menu",e.append(n),e.append(t),e})();e.append(t)},n=()=>{const e=document.getElementById("main");e.textContent="";const t=(()=>{const e=document.createElement("section"),t=(()=>{const e=document.createElement("div"),t=document.createElement("p"),n=document.createElement("p"),a=document.createElement("img");return e.classList.add("contact-card"),t.textContent="123-456-789",n.textContent="123 Hollywood Blvd",a.src="images/map.jpg",a.alt="Map",e.append(t),e.append(n),e.append(a),e})(),n=document.createElement("h2");return e.classList.add("contact-section"),n.textContent="Contact Us",e.append(n),e.append(t),e})();e.append(t)},a=e=>{document.querySelectorAll(".nav-button").forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),e.classList.add("active")};(()=>{const c=document.getElementById("content"),d=(()=>{const c=document.createElement("header"),d=document.createElement("div"),o=document.createElement("div"),m=document.createElement("p"),s=document.createElement("p"),p=(()=>{const c=document.createElement("nav"),d=document.createElement("ul"),o=document.createElement("li"),m=document.createElement("li"),s=document.createElement("li");return o.textContent="Home",m.textContent="Menu",s.textContent="Contact",o.classList.add("nav-button"),m.classList.add("nav-button"),s.classList.add("nav-button"),o.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(o),e())})),m.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(m),t())})),s.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(s),n())})),d.append(o),d.append(m),d.append(s),c.append(d),c})();return m.textContent="Jack's Cafe",s.textContent="One sip at a time",o.classList.add("company-logo"),m.classList.add("company-text"),s.classList.add("company-slogan"),d.classList.add("container"),o.append(m),o.append(s),d.append(o),d.append(p),c.append(d),c})(),o=document.createElement("main");o.id="main",c.append(d),c.append(o),a(document.querySelector(".nav-button")),e()})()})();