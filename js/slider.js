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
			1200: {
				perPage: 3,
            },
            1024: {
                perPage:2,
            },
            840:{
                perPage:1,
            }
		}
	} ).mount();
} );