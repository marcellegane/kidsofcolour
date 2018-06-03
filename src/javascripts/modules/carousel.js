import 'owl.carousel';

const carousel = {
  init() {
    $(`.js-carousel`).owlCarousel({
      items: 1
    });
  }
};

export { carousel };