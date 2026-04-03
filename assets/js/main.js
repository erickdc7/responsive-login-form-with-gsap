/*=============== GSAP ANIMATION ===============*/
const tl = gsap.timeline({})

/* Animate form in the center */
tl.fromTo(
    '.login__content',
    {
        y: -800,
        scaleX: .2,
        scaleY: .5,
        opacity: 0
    },
    {
        y: 0,
        scaleX: .2,
        scaleY: .5,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out'
    }
)

/* Expand vertically */
tl.to(
    '.login__content',
    {
        scaleY: 1,
        duration: .6,
        ease: 'power3.out'
    }, '-=0.3'
)

/* Expand horizontally */
tl.to(
    '.login__content',
    {
        scaleX: 1,
        duration: .7,
        ease: 'power3.out'
    }, '-=0.2'
)

/* Animate background image */


/* Animate form */
