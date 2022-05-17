window.addEventListener('load', (event) => {
    document.getElementById("search").addEventListener("click",function ()
    { console.log(document.querySelector(".search_container"));
        document.querySelector(".search_container").classList.toggle("hidden");

    })
});

window.addEventListener('load', (event) => {
    document.getElementById("more-menu-parent").addEventListener("click",function ()
    { console.log(document.querySelector(".down-box"));
        document.querySelector(".down-box").classList.toggle("hidden");
this.classList.toggle("bg_red");
    })
});
