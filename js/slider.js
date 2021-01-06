document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
type   : 'loop',
autoplay:'true',
} ).mount();
} );


document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
		perPage    : 4,
		breakpoints: {
			1024: {
				perPage: 3,
            },
            768: {
                perPage:2,
            },
            640:{
                perPage:1,
            }
		}
	} ).mount();
} );