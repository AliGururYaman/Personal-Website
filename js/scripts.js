

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

let btn1 = document.querySelector('#btn1');

btn1.addEventListener("click", open1)

function open1() {
    window.location.href='https://github.com/AliGururYaman'
}
let btn2 = document.querySelector('#btn2');

btn2.addEventListener("click", open2)

function open2() {
    window.location.href="https://twitter.com/aligururDotJs"
}
let btn3 = document.querySelector('#btn3');

btn3.addEventListener("click", open3)

function open3() {
    window.location.href="https://instagram.com/AliGururYaman"
}


fetch("https://api.github.com/users/AliGururYaman/repos").then(
    response => response.json()
).then(reposJson =>{
    let addProje1 = document.querySelector("#addProje1")
    addProje1.innerHTML = reposJson[0].name
    let addDesc1 = document.querySelector("#addDesc1")
    addDesc1.innerHTML = `Bu Proğram ${reposJson[0].language} dili ile yazıldı. Repoya ulaşmak için <a href="${reposJson[0].html_url}"target="_blank">tıklayın<a>`
    let addProje2 = document.querySelector("#addProje2")
    addProje2.innerHTML = reposJson[1].name
    let addDesc2 = document.querySelector("#addDesc2")
    addDesc2.innerHTML = `Bu Proğram ${reposJson[1].language} dili ile yazıldı. Repoya ulaşmak için <a href="${reposJson[1].html_url}"target="_blank">tıklayın<a>`
    let addProje3 = document.querySelector("#addProje3")
    addProje3.innerHTML = reposJson[2].name
    let addDesc3 = document.querySelector("#addDesc3")
    addDesc3.innerHTML = `Bu Proğram ${reposJson[2].language} dili ile yazıldı. Repoya ulaşmak için <a href="${reposJson[2].html_url}"target="_blank">tıklayın<a>`
    let addProje4 = document.querySelector("#addProje4")
    addProje4.innerHTML = reposJson[3].name
    let addDesc4 = document.querySelector("#addDesc4")
    addDesc4.innerHTML = `Bu Proğram ${reposJson[3].language} dili ile yazıldı. Repoya ulaşmak için <a href="${reposJson[3].html_url}"target="_blank">tıklayın<a>`
    let addProje5 = document.querySelector("#addProje5")
    addProje5.innerHTML = reposJson[4].name
    let addDesc5 = document.querySelector("#addDesc5")
    addDesc5.innerHTML = `Bu Proğram ${reposJson[4].language} dili ile yazıldı. Repoya ulaşmak için <a href="${reposJson[4].html_url}"target="_blank">tıklayın<a>`
    let addProje6 = document.querySelector("#addProje6")
    addProje6.innerHTML = reposJson[5].name
    let addDesc6 = document.querySelector("#addDesc6")
    addDesc6.innerHTML = `Bu Proğram ${reposJson[5].language} dili ile yazıldı. Repoya ulaşmak için <a href="${reposJson[5].html_url}"target="_blank">tıklayın<a>`
})

