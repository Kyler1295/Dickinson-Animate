// Gets all of the elements that need to be animated.
var scrollAnimation = document.querySelectorAll('.scroll-animate');

// Filters the animations to the proper class
scrollAnimation.forEach(element => {
    if(element.classList.contains('animate-fade-left')){
        FadeInAnimations(element, 'left');
    } else if (element.classList.contains('animate-fade-right')) {
        FadeInAnimations(element, 'right');
    } else if (element.classList.contains('animate-fade-top')) {
        FadeInAnimations(element, 'top');
    } else if (element.classList.contains('animate-fade-bottom')) {
        FadeInAnimations(element, 'bottom');
    }
});

// Handles the animation and when it fires.
function FadeInAnimations(element, direction) {
    let screenHeight = screen.height;
    let screenOffSet = screenHeight * .80;
    let bounding = element.getBoundingClientRect();
    let positionFromTop = bounding.top;
    console.log(screenOffSet, positionFromTop);
    if (positionFromTop <= screenHeight) {
        switchFade(element, direction);
    } else {
        window.addEventListener('scroll', function() {
            let bounding = element.getBoundingClientRect();
            let positionFromTop = bounding.top;
            if (positionFromTop < screenOffSet) {
                switchFade(element, direction);
            }
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                if(element.classList.contains('animate-fade-left')){
                    switchFade(element, direction);
                }
            }
        });
    }
}

// Handles removing and adding the animation class
function switchFade(element, direction) {
    element.classList.remove('animate-fade-' + direction);
    element.classList.add('animate-js-fadein-' + direction);
}