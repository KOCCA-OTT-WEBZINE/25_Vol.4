document.addEventListener("DOMContentLoaded", () => {
  const contents = [
    {
      sectionName: "스포트라이트",
      theme: "방송영상콘텐츠와 다양성 확대",
      item: "방송영상콘텐츠의 다양성, 어디까지 왔는가",
      img: "./img/manuscript1/banner.png",
      imgMobile: "./img/manuscript1/banner-m.png",
      bgPosition: "center center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "피플 인사이트",
      theme: "방송영상콘텐츠 다양성을 실천하는 제작자를 만나다!",
      item: "EBS <세상을 비집고> 최복희 PD<br>tvN <미지의 서울> 장신애 CP",
      img: "./img/manuscript5/banner.png",
      imgMobile: "./img/manuscript5/banner-m.png",
      bgPosition: "right center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "글로벌 마켓 리포트",
      theme: "",
      item: "모두가 팬덤을 원한다:<br>영상콘텐츠 플랫폼 기업들의 팬 전략",
      img: "./img/manuscript7/banner.png",
      imgMobile: "./img/manuscript7/banner-m.png",
      bgPosition: "right center",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "트렌드 하이라이트",
      theme: "",
      item: "사회를 바꾸는 관점의 전환, 글로벌 다양성 포맷 소개",
      img: "./img/manuscript10/banner.png",
      imgMobile: "./img/manuscript10/banner-m.png",
      bgPosition: "center top",
      bgPositionMobile: "center center",
    },
    {
      sectionName: "데이터 포인트",
      theme: "",
      item: "국내 방송 드라마 슬롯 변화와 장르별 시청률 현황",
      img: "./img/manuscript13/banner.png",
      imgMobile: "./img/manuscript13/banner-m.png",
      bgPosition: "left center",
      bgPositionMobile: "left center",
    },
  ];

  // === 메인 배너 슬라이드 렌더링 ===
  const swiperWrapper = document.getElementById("swiper-slides");
  contents.forEach((content) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
  <div class="banner">
    <div class="banner-bg pc-bg" 
         style="background-image: url('${content.img}'); background-position: ${
      content.bgPosition || "center center"
    };"></div>
    <div class="banner-bg mobile-bg" 
         style="background-image: url('${
           content.imgMobile || content.img
         }'); background-position: ${
      content.bgPositionMobile || content.bgPosition || "center center"
    };"></div>
    <div class="overlay"></div>
    <div class="content">
      <div class="theme-wrapper">
        <div class="label">${content.sectionName}</div>
        ${content.theme ? `<p class="theme">${content.theme}</p>` : ""}
      </div>
      <p class="item">${content.item}</p>
    </div>
  </div>
`;
    swiperWrapper.appendChild(slide);
  });

  new Swiper(".main-banner-swiper", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: {
      el: ".main-banner-swiper .swiper-pagination",
      clickable: true,
    },
  });

  const swiperStates = {
    spotlight: null,
    global: null,
    people: null,
    trend: null,
    data: null,
  };

  // === Swiper 초기화/해제 함수 ===
  function toggleSwiper(key, selector, nextEl, prevEl) {
    const initialized = !!swiperStates[key];

    if (!initialized) {
      const slideCount = document.querySelectorAll(
        `${selector} .swiper-slide`
      ).length;

      swiperStates[key] = new Swiper(selector, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 16,
        slideToClickedSlide: false,
        grabCursor: true,
        loop: slideCount >= 3,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl,
          prevEl,
        },
        breakpoints: {
          1440: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
        },
      });
    }
  }

  // === 전체 Swiper 초기화 실행 함수 ===
  function initAllSwipers() {
    toggleSwiper(
      "spotlight",
      ".spotlight-swiper",
      ".spotlight-button-next",
      ".spotlight-button-prev"
    );
    toggleSwiper(
      "global",
      ".global-swiper",
      ".global-button-next",
      ".global-button-prev"
    );
    toggleSwiper(
      "people",
      ".people-swiper",
      ".people-button-next",
      ".people-button-prev"
    );
    toggleSwiper(
      "trend",
      ".trend-swiper",
      ".trend-button-next",
      ".trend-button-prev"
    );
    toggleSwiper(
      "data",
      ".data-swiper",
      ".data-button-next",
      ".data-button-prev"
    );
  }

  // 최초 실행 및 리사이즈 대응
  initAllSwipers();
  window.addEventListener("resize", () => {
    setTimeout(initAllSwipers, 100);
  });
});
