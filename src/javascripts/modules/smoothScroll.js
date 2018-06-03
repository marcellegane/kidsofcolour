import { TweenMax } from 'gsap';
import 'gsap/ScrollToPlugin';

const smoothScroll = {
  scrollTo(e) {
    const hash = $(e.currentTarget).attr(`href`);
    const target = $(hash);

    e.preventDefault();

    TweenMax.to(window, 1, {
      scrollTo: target.offset().top,
      ease: Power3.easeInOut
    });
  },

  init() {
    $(`.js-scroll-to`).on(`click`, this.scrollTo.bind(this));
  }
};

export { smoothScroll };