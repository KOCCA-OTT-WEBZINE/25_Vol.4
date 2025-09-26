const spotlightItem = {
  0: {
    title: "방송영상콘텐츠의 다양성, 어디까지 왔는가",
  },
  1: {
    title: "재현과 참여의 확장: 플랫폼 시대에도 다양성이 필요한 이유",
    author: { name: "박채은", affiliation: "독립미디어연구소 공동대표" },
  },
  2: {
    title: "K-영상콘텐츠에 문화 감수성을 담는 4가지 방법",
    author: { name: "이재원", affiliation: "성균관대학교 컬처앤테크놀로지융합전공 초빙교수" },
  },
  3: {
    title: "방송영상콘텐츠의 다양성 확장, 기회인가 위기인가",
    author: { name: "임정수", affiliation: "서울여자대학교 언론영상학부 교수" },
  },
};

const globalItem = {
  0: {
    title: "모두가 팬덤을 원한다: 영상콘텐츠 플랫폼 기업들의 팬 전략",
    author: { name: "차우진", affiliation: "문화평론가" },
  },
  1: {
    title: "글로벌 시장으로 나아가는 동남아시아 영상콘텐츠",
    author: { name: "부경환ㅣ", affiliation: "서울대학교 아시아언어문명학부 강사" },
  },
  2: {
    title: "「영국의 현대 산업 전략」의 특징과 의미",
    author: { name: "정윤경", affiliation: "순천향대학교 미디어커뮤니케이션학과 교수" },
  },
};

const peopleItem = {
  0: {
    title: "세상에 대한 관심으로 다양성을 이야기하다",
    author: { name: "최복희", affiliation: "독립PD" },
  },
  1: {
    title: "새로운 시도를 통해 드라마의 다양성 확장을 꿈꾸다",
    author: { name: "장신애", affiliation: "스튜디오드래곤 CP" },
  },
};

const trendItem = {
  0: {
    title: "사회를 바꾸는 관점의 전환, 글로벌 다양성 포맷 소개",
  },
  1: {
    title: "하반기 국내 OTT 시장 전망: 쿠팡플레이와 티빙의 제휴 멤버십과 스포츠 콘텐츠 전략 양상",
    author: { name: "김규연", affiliation: "미래에셋증권 리서치센터 연구원" },
  },
  2: {
    title: "&lt;케이팝 데몬 헌터스&gt;로 본 K-컬처의 변주와 확장 가능성",
    author: { name: "윤현정", affiliation: "강남대학교 문화콘텐츠학과 조교수" },
  },
};

const dataPointItem = {
  0: {
    title: "국내 방송 드라마 슬롯 변화와 장르별 시청률 현황",
  },
  1: {
    title: "글로벌 권역별 동향 분석: 2025년 상반기 넷플릭스 K-콘텐츠 인기 순위",
  },
  3: {
    title: "글로벌 미디어 사업자의 주가 동향과 M&A: 주요 글로벌 OTT 사업자 중심으로",
  },
};

// 섹션별 정보 통합
const contentMap = [
  { label: "스포트라이트", path: "spotlight", items: spotlightItem },
  { label: "피플 인사이트", path: "people", items: peopleItem },
  { label: "글로벌 마켓 리포트", path: "global", items: globalItem },
  { label: "트렌드 하이라이트", path: "trend", items: trendItem },
  { label: "데이터 포인트", path: "data", items: dataPointItem },
];

// 메뉴 열기 및 렌더링
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const menu = document.getElementById("mobile-menu");
  const content = document.getElementById("menu-content");

  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
    renderMenu();
  });
  
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = "";
  });

  function renderMenu() {
    content.innerHTML = "";

    contentMap.forEach(({ label, path, items }) => {
      const section = document.createElement("div");
      section.innerHTML = `
        <h2 class="section-title">${label}</h2>
        <ul class="section-list">
          ${Object.entries(items)
          .map(([key, item]) => {
            const author = item.author
              ? `<p class="author">${item.author.name} | ${item.author.affiliation}</p>`
              : "";
            return `
                <li class="section-item">
                  <a href="./${path}_${Number(key) + 1}.html" class="menu-link">
                    <p>${stripFootnotesAndTags(item.title)}</p>
                    ${author}
                  </a>
                </li>
              `;
          })
          .join("")}
        </ul>
      `;
      content.appendChild(section);
    });
  }
});