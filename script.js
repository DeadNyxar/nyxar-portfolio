const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.animate([
                {
                    opacity:0,
                    transform:"translateY(60px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0)"
                }
            ],{
                duration:1000,
                fill:"forwards"
            });

        }

    });

});

document.querySelectorAll(".card,.skill-card")
.forEach(el => observer.observe(el));