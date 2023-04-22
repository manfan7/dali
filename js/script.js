gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });
  gsap.fromTo(
    ".hero-section",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "200",
        end: "900",

        scrub: true,
      },
    }
  );
  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");
  itemsL.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: -500 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");
  itemsR.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element,
          start: "-850",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}
