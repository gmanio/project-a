import { rest } from "msw";

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get("http://localhost:3000/mock-api/sites", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ sites: mock_sites }));
  }),
];

export const mock_sites = {
  information101: {
    place: [
      {
        id: 101,
        korean: "성수 101",
        title: "SEONGSU 101",
        address: "341 TTUKSEOM-RO,<BR>SEONGDONG-GU,<BR>SEOUL",
        korAddr: "서울특별시 성동구 뚝섬로 341",
        lat: 37.54079316217518,
        lng: 127.04848504539035,
      },
    ],
    movein: [
      {
        phone: "010-4710-2299",
        time: "(10:00~18:00)",
        email: "seongsu101@epsd.co.kr",
      },
    ],
    phone: "1600-6805",
    time: "(10:00~18:00)",
    email: "epsales@epsd.co.kr",
    instagram: "https://www.instagram.com/iam.ep___/",
    youtube:
      "https://www.youtube.com/channel/UCuckuVFP_DA2GQK7IFFDCAw?view_as=subscribe",
    blog: "https://blog.naver.com/our-episode",
    copyright: "COPYRIGHT © 2022 EPISODE INC.<br>ALL RIGHTS RESERVED",
  },
  information121: {
    place: [
      {
        id: 121,
        korean: "성수 121",
        title: "SEONGSU 121",
        address: "22 TTUKSEOM-RO 3-GIL,<BR>SEONGDONG-GU,<BR>SEOUL",
        korAddr: "서울특별시 성동구 뚝섬로3길 22",
        lat: 37.5422608982861,
        lng: 127.04915020654605,
      },
    ],
    movein: [
      {
        phone: "010-4710-2299",
        time: "(10:00~18:00)",
        email: "seongsu101@epsd.co.kr",
      },
    ],
    phone: "1600-6805",
    time: "(10:00~18:00)",
    email: "epsales@epsd.co.kr",
    instagram: "https://www.instagram.com/iam.ep___/",
    youtube:
      "https://www.youtube.com/channel/UCuckuVFP_DA2GQK7IFFDCAw?view_as=subscribe",
    blog: "https://blog.naver.com/our-episode",
    copyright: "COPYRIGHT © 2022 EPISODE INC.<br>ALL RIGHTS RESERVED",
  },
  information393: {
    place: [
      {
        id: 393,
        korean: "서초 393",
        title: "SEOCHO 393",
        address: "1338-5, SEOCHO-DONG,<BR>SEOCHO-GU,<BR>SEOUL",
        korAddr: "서울 서초구 서초동 1338-5",
        lat: 37.4899906006254,
        lng: 127.02941616911077,
      },
    ],
    movein: [
      {
        phone: "010-5470-2299",
        time: "(10:00~18:00)",
        email: "seocho393@epsd.co.kr",
      },
    ],
    phone: "1600-6805",
    time: "(10:00~18:00)",
    email: "epsales@epsd.co.kr",
    instagram: "https://www.instagram.com/iam.ep___/",
    youtube:
      "https://www.youtube.com/channel/UCuckuVFP_DA2GQK7IFFDCAw?view_as=subscribe",
    blog: "https://blog.naver.com/our-episode",
    copyright: "COPYRIGHT © 2022 EPISODE INC.<br>ALL RIGHTS RESERVED",
  },
  information262: {
    place: [
      {
        id: 262,
        korean: "강남 262",
        title: "GANGNAM 262",
        address: "299, GANGNAM-DAERO, <BR>SEOCHO-GU,<BR>SEOUL",
        korAddr: "서울 서초구 강남대로 299",
        lat: 37.489730438082624,
        lng: 127.03046310808261,
      },
    ],
    movein: [
      {
        phone: "010-3182-2299",
        time: "(10:00~18:00)",
        email: "gangnam262@epsd.co.kr",
      },
    ],
    phone: "1600-6805",
    time: "(10:00~18:00)",
    email: "epsales@epsd.co.kr",
    instagram: "https://www.instagram.com/iam.ep___/",
    youtube:
      "https://www.youtube.com/channel/UCuckuVFP_DA2GQK7IFFDCAw?view_as=subscribe",
    blog: "https://blog.naver.com/our-episode",
    copyright: "COPYRIGHT © 2022 EPISODE INC.<br>ALL RIGHTS RESERVED",
  },
  information369: {
    place: [
      {
        id: 369,
        korean: "신촌 369",
        title: "SINCHON 369",
        address: "57-50, NOGOSAN-DONG,<br> MAPO-GU, <br> SEOUL",
        korAddr: "서울 마포구 노고산동 57-50",
        lat: 37.55411659428786,
        lng: 126.93448963723205,
      },
    ],
    movein: [
      {
        phone: "010-3784-2299",
        time: "(10:00~18:00)",
        email: "sinchon369@epsd.co.kr",
      },
    ],
    phone: "1600-6805",
    time: "(10:00~18:00)",
    email: "epsales@epsd.co.kr",
    instagram: "https://www.instagram.com/iam.ep___/",
    youtube:
      "https://www.youtube.com/channel/UCuckuVFP_DA2GQK7IFFDCAw?view_as=subscribe",
    blog: "https://blog.naver.com/our-episode",
    copyright: "COPYRIGHT © 2022 EPISODE INC.<br>ALL RIGHTS RESERVED",
  },
  information838: {
    place: [
      {
        id: 838,
        korean: "수유 838",
        title: "SUYU 838",
        address: "230-4, SUYU-DONG,<br> GANGBUK-GU, <br> SEOUL",
        korAddr: "서울특별시 강북구 수유동 740",
        lat: 37.63695896277097,
        lng: 127.02303288576285,
      },
    ],
    movein: [
      {
        phone: "010-4925-2299",
        phone2: "010-3609-2299",
        time: "(10:00~18:00)",
        email: "suyu838@epsd.co.kr",
      },
    ],
    phone: "1600-6805",
    time: "(10:00~18:00)",
    email: "epsales@epsd.co.kr",
    instagram: "https://www.instagram.com/iam.ep___/",
    youtube:
      "https://www.youtube.com/channel/UCuckuVFP_DA2GQK7IFFDCAw?view_as=subscribe",
    blog: "https://blog.naver.com/our-episode",
    copyright: "COPYRIGHT © 2022 EPISODE INC.<br>ALL RIGHTS RESERVED",
  },
  // information_common: {
  //   phone: "1600-6805",
  //   time: "(10:00~18:00)",
  //   email: "epsales@epsd.co.kr",
  //   youtube:
  //     "https://www.youtube.com/channel/UCuckuVFP_DA2GQK7IFFDCAw?view_as=subscribe",
  //   instagram: "https://www.instagram.com/iam.ep___/",
  //   blog: "https://blog.naver.com/our-episode",
  //   copyright: "COPYRIGHT © 2022 EPISODE INC.<br>ALL RIGHTS RESERVED",
  // },
};

export const mock_places: Array<{ title: string; contents: any[] }> = [
  {
    title: "ep101",
    contents: [
      {
        type: "swipe",
        title: "당신에게 딱!<br>맞춰진 방을 찾아보세요 🔍",
        description:
          "다채로운 주거 타입과 유닛 옵션으로<br>자신의 라이프 스타일에 꼭 맞춘 주거공간을 설계해 보세요.",
        banner: {
          image: "https://www.epsd.co.kr/assets/images/ep101/banner.jpg",
          url: "https://www.epsd.co.kr/booking/#ep101",
        },
        group: [
          {
            name: "3-7F<br>BASIC TYPE",
            title: "BASIC TYPE",
            description:
              "벽면에 설치한 월 패널 시스템을 활용해 각자의 스타일에 맞는 수납공간을 연출해 보세요. 월 패널 시스템은 이케아의 알고트(Agolt) 가구와 모두 호환 가능해요. 벽을 꾸미고 남은 공간은 가구나 소품을 렌털해 채워보는 것도 방법이죠. 이것저것 고민하기 어렵다면 필요한 가구를 모두 갖춰 놓은 풀퍼니시드 (Full- Furnished) 방을 추천할게요!",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_01_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_01_slider_02.jpg",
            ],
          },
          {
            name: "8&10F<br>CURATED TYPE",
            title: "CURATED TYPE",
            description:
              "감도 높은 인테리어와 효율적인 공간 활용을 고민한 큐레이팅 룸. 제품부터 공간, 브랜드까지 다양한 디자인 영역에서 활동하고 있는 최중호 스튜디오가 제안하는 공간입니다. 개방감을 높인 오픈형 화장실(세면대 분리형) 타입과 층고가 높은 복층 타입도 있으니 취향에 맞게 선택해보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_02_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_02_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_02_slider_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_02_slider_04.jpg",
            ],
          },
          {
            name: "9F<br>IKEA TYPE",
            title: "IKEA TYPE",
            description:
              "75년간 집을 고민해 온 이케아(IKEA)와의 특별한 컬래버레이션.이케아의 감각적인 가구로 가득한 풀 퍼니시드(Full-Furnished) 타입에서 더 나은 생활을 위한 6가지 컨셉의 공간을 만나보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_03_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_03_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_03_slider_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_03_slider_04.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_03_slider_05.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_room_03_slider_06.jpg",
            ],
          },
        ],
      },
      {
        type: "column",
        title: "나만을 위한 맞춤 <br>하우스",
        column: "3",
        row_height: "1",
        list: [
          {
            title: "한정된 공간을 효율적으로<br>월패널 시스템",
            description:
              "효율적인 공간 활용을 위한 월패널 시스템을 설치했어요. 월패널에 원하는 선반 유닛을 조합하면 맞춤형 수납 연출이 가능해요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_house_img_01.jpg",
          },
          {
            title: "좁은 공간을 넓어 보이게<br>오픈형 화장실",
            description:
              "세면대를 외부로 분리한 오픈형 화장실을 옵션으로 준비했어요. 시각적 개방감을 높여 좁은 공간이 한층 여유롭게 느껴질 거에요! ( 8 & 10F only )",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_house_img_02.jpg",
          },
          {
            title: "나의 스타일을 표현할 수 있는<br>가구& 가전 렌털 서비스",
            description:
              "살면서 필요한 또는 사용해 보고 싶은 가구 & 가전을 빌려드려요. 에피소드가 선별한 감각적인 리빙 아이템을 합리적인 가격으로 이용해 보세요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_house_img_03.jpg",
          },
        ],
      },
      {
        type: "swipe",
        title: "이케아에서 <br>사는 법",
        description: "",
        group: [
          {
            name: "SMART<br>FUN",
            title: "SMART & FUN",
            description:
              "가구 자체로 유니크함과 재미를 주는 스마트&펀 룸에서 상상력을 마구 펼쳐보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_01_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_01_slider_02.jpg",
            ],
          },
          {
            name: "FUNCTIONAL<br>PRACTICAL",
            title: "FUNCTIONAL & PRACTICAL",
            description:
              "짐이 많아 고민인가요? 수납을 특화 한 펑셔널&프랙티컬 룸에서 좁은 공간을 효율적으로 사용할 수 있습니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_02_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_02_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_02_slider_03.jpg",
            ],
          },
          {
            name: "HOME<br>OFFICE",
            title: "HOME & OFFICE",
            description:
              "집에서 열일하는 엣피를 위해 오피스와 침실을 분리! 기능성이 돋보이는 홈 오피스룸입니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_03_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_03_slider_02.jpg",
            ],
          },
          {
            name: "SLEEPING<br>SOLUTION",
            title: "SLEEPING & SOLUTION",
            description:
              "꿀잠을 위해 매트리스, 향, 조명, 사운드, 온도를 최적화 한 슬리핑 솔루션룸에선 매일이 상쾌해요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_04_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_04_slider_02.jpg",
            ],
          },
          {
            name: "BEAUTY<br>BATH",
            title: "BEAUTY & BATH",
            description:
              "집이라면 모름지기 편한게 최고! 휴식과 스트레스 완화를 위한 뷰티 & 바스 룸입니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_05_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_05_slider_02.jpg",
            ],
          },
          {
            name: "PET<br>OWNER",
            title: "PET & OWNER",
            description:
              "반려동물과 생활하기에 최적인 펫 오너룸은 둘만의 아늑한 아지트가 되어 줄 거에요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_06_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_06_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_live_06_slider_03.jpg",
            ],
          },
        ],
      },
      {
        type: "column",
        title: "1인 가구<br>컨시어지 서비스",
        column: "3",
        row_height: "1",
        list: [
          {
            title: "룸클리닝",
            description:
              "룸 클리닝 서비스를 만나보세요. 기본 청소는 물론, 쓰레기 처리까지 해드려요. 에피소드 앱으로 쉽게 예약 가능합니다. ( 월 1회무료 / 예약제 )",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_service_01.jpg",
          },
          {
            title: "홈퍼니싱 구독",
            description:
              "취향에 꼭 맞는 가구, 가전, 소품으로 어디서도 볼 수 없는 나만의 홈 스타일링에 도전하세요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_service_02.jpg",
          },
          {
            title: "24시 세이프 홈 시스템",
            description:
              "집 안에서 캡스텍을 호출할 수 있는 보안 시스템을 전 세대에 제공합니다. 더 안전하게 생활하세요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_service_03.jpg",
          },
        ],
      },
      {
        type: "column",
        title: "함께해서<br>더 좋은 생활공간",
        column: "4",
        row_height: "3",
        list: [
          {
            title: "피트니스 룸",
            description:
              "1:1 맞춤 운동 프로그램인 버추얼 메이트와 소도구를 비치해 두었어요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_living_img_01.jpg",
          },
          {
            title: "개인 창고",
            description: "세대 내 부족한 수납공간을 해결해 줄 창고 룸 입니다.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_living_img_02.jpg",
          },
          {
            title: "공유 주방",
            description:
              "함께 요리하고 나누는 공용 주방! 각종 설비 및 주방 가전을 구비해 두었어요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_living_img_03.jpg",
          },
          {
            title: "세탁 룸",
            description:
              "이불 빨래하러 멀지 가지 마세요. 대형 세탁기 및 건조기를 마련해 두었습니다. ",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_living_img_04.jpg",
          },
          {
            title: "토킹 룸",
            description:
              "소모임이 가능한 토킹룸에서 크리에이티브한 아이디어를 나눠보세요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_living_img_05.jpg",
          },
          {
            title: "무인마켓",
            description:
              "24시간 운영하는 무인 마켓을 1층에서 만나세요. 심심한 입을 달래줄 군것질 거리와 간단한 식사류 까지!",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_living_img_06.jpg",
          },
          {
            title: "루프탑 바",
            description:
              "다양한 이벤트가 열리는 루프탑 공간 로맨틱한 야외 공연과 프레시한 모닝요가 등 이색적인 에피소드가 펼쳐질 거예요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_living_img_07.jpg",
          },
          {
            title: "펫 동반 가능",
            description:
              "에피소드의 모든 공간은 반려동물과 함께 이용할 수 있어요. 물론 동반 입주도 가능해요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_living_img_08.jpg",
          },
        ],
      },
      {
        type: "swipe",
        title: "우리 모두의 모임터<br>제로 라운지",
        description: "",
        group: [
          {
            name: "COOKING STUDIO",
            title: "COOKING<br>STUDIO",
            description:
              "쿠킹 스튜디오에서 요리를 배우고, 완성한 음식을 나눠먹는 즐거운 시간을 상상해 보세요. 주말엔 스페셜 브런치가 찾아 올 거에요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_lounge_01_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_lounge_01_slider_02.jpg",
            ],
          },
          {
            name: "CAFE & BAR",
            title: "CAFE & BAR",
            description:
              "여유가 별거 있나요? 낮에는 커피 한 잔의 사색을, 저녁엔 칵테일 잔을 기울이며 마음을 달래보는 거죠. 이곳에서라면 하루가 빠르게 지나갈 거예요",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_lounge_02_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_lounge_02_slider_02.jpg",
            ],
          },
          {
            name: "MUSIC STAGE",
            title: "MUSIC STAGE",
            description:
              "음악을 듣고, 연주하며 즐기는 이곳에선 당신이 주인공! 멋진 공연이 준비된 날엔 미리 출석 도장 찍어 놓기, 늦으면 손해!",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_lounge_03_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_lounge_03_slider_02.jpg",
            ],
          },
          {
            name: "WORK SPACE",
            title: "WORK SPACE",
            description:
              "방에만 있기 답답하다면 라운지로 나와 넓은 공간에서 시간을 보내는 것도 좋아요.새로운 엣피를 만나고 친해질 수 있는 기회!",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_lounge_04_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_lounge_04_slider_02.jpg",
            ],
          },
        ],
      },
      {
        type: "column",
        title: "먹고 마시고<br>느끼고",
        column: "3",
        row_height: "1",
        list: [
          {
            title: "지식 공유",
            description:
              "새로운 주제에 대해 고민하고 이야기 나누는 시간이 당신의 지적 욕구를 채워줄 거에요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_fun_img_01.jpg",
          },
          {
            title: "문화 ・ 예술",
            description:
              "눈 앞에서 만나는 뮤지션의 공연! 문화・예술 컨텐츠로 풍요로운 일상을 즐겨보세요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_fun_img_02.jpg",
          },
          {
            title: "푸드",
            description:
              "음식을 함께 만들어 먹고 즐기는 것 만큼 좋은 소통방법은 없죠. 보다 전문적인 시간을 위해 셰프를 초청할게요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_fun_img_03.jpg",
          },
        ],
      },
      {
        type: "column",
        title: "성수동<br>200% 즐기기",
        column: "2",
        row_height: "2",
        list: [
          {
            title: "로컬 브랜드 & 상권 제휴 및 콜라보레이션",
            description:
              "성수에 자리한 로컬 브랜드 & 문화예술 스폿과의 제휴 및 콜라보레이션을 통해 성수를 200% 즐겨보세요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_seongsu_img_01.jpg",
          },
          {
            title: "모빌리티 서비스",
            description:
              "자전거, 킥보드 등 공유 모빌리티 서비스로 보다 편리한 일상을 누리세요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep101/ep101_seongsu_img_02.jpg",
          },
        ],
      },
      {
        type: "swipe",
        title: "에피소드 성수 101<br>갤러리",
        description: "",
        group: [
          {
            name: "B1F<br>EP 0",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_01_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_01_slider_02.jpg",
            ],
          },
          {
            name: "1F<br>FOYER",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_02_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_02_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_02_slider_03.jpg",
            ],
          },
          {
            name: "2F<br>FACILITY",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_03_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_03_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_03_slider_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_03_slider_04.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_03_slider_05.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_03_slider_06.jpg",
            ],
          },
          {
            name: "9F<br>ROOF BAR",
            list: [
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_04_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_04_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep101/ep101_gallery_04_slider_03.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "ep121",
    contents: [
      {
        type: "swipe",
        title: "같은 집,<br>다른 층의 매력 👀",
        description: "에피소드 성수 121에서 다채로운 복층 유닛을 만나 보세요!",
        banner: {
          image: "https://www.epsd.co.kr/assets/images/ep121/banner.jpg",
          url: "https://www.epsd.co.kr/booking/#ep121",
        },
        group: [
          {
            name: "BASIC",
            title: "BASIC TYPE",
            description:
              "복층 로망 실현, 준비 완료! 짜임새 있는 수납공간으로 효율성을 높인 베이식 타입을 만나보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_01_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_01_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_01_slider_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_01_slider_04.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_01_slider_05.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_01_slider_06.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_01_slider_07.jpg",
            ],
          },
          {
            name: "CURATED",
            title: "CURATED",
            description:
              "뻔한 오피스텔 구조가 지겹나요? 더 넓게, 더 세련된 디자인으로 꾸민 복층 유닛을 만난다면 생각이 달라질 거에요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_02_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_02_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_02_slider_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_02_slider_04.jpg",
            ],
          },
          {
            name: "PLATFORM",
            title: "PLATFORM",
            description:
              "함께 거주할 가족이나 친구, 연인이 있으신가요? 에피소드 성수 121에는 2인 가구를 위한 유닛을 마련했어요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_03_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_03_slider_02.jpg",
            ],
          },
          {
            name: "BOOKSHELF",
            title: "BOOKSHELF",
            description:
              "책과 함께 숨 쉬는 아늑한 라이프스타일을 원한다면 주목! 답답한 조망은 가리고, 크고 넓은 책장으로 벽면을 가득 채운 이색적인 타입을 추천할게요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_04_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_room_04_slider_02.jpg",
            ],
          },
        ],
      },
      {
        type: "swipe",
        title: "테마가 있는<br>성수 121 🌈",
        description: "때로는 특별하고, 때로는 아늑한 공간을 마주해 보세요.",
        group: [
          {
            name: "LOBBY & FOYER",
            title: "LOBBY & FOYER",
            description:
              "모름지기 첫인상이 중요한 법. 이국적인 분위기가 시선을 사로잡는 이곳은 에피소드 성수 121의 로비랍니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_01_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_01_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_01_slider_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_01_slider_04.jpg",
            ],
          },
          {
            name: "CORRIDOR",
            title: "CORRIDOR",
            description:
              "각자의 방으로 이어지는 복도 공간도 소홀히 할 수 없죠. 마룻바닥이 주는 따뜻한 감성과 플랜테리어의 싱그러움! 영감을 불어넣는 아트워크는 덤이에요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_02_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_02_slider_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_02_slider_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_02_slider_04.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_02_slider_05.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_02_slider_06.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_02_slider_07.jpg",
            ],
          },
          {
            name: "ROOFTOP",
            title: "ROOFTOP",
            description:
              "산책하러 집 밖으로 나갈 필요 없어요.루프탑에서 반려동물과 신나게 뛰어놀 수 있으니까요!",
            list: [
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_03_slider_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_theme_03_slider_02.jpg",
            ],
          },
        ],
      },
      {
        type: "swipe",
        title: "함께하는<br>에피소드 성수 101 🙌",
        description:
          "성수 101의 경험 공간이 엣피의 삶을 더 풍족하게 할 거에요.",
        group: [
          {
            name: "모두의 제로 라운지",
            title: "모두의 제로 라운지",
            description:
              "도보 3분 거리에 위치한 에피소드 성수 101에서 또 다른 주거 생활을 경험해 보세요. 하루의 여가를 함께 할 널찍한 라운지가 준비 되어있죠. Café & Bar에서는 엣피를 위한 할인혜택도 만날 수 있어요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep121/ep121_together_img_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_together_img_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_together_img_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep121/ep121_together_img_04.jpg",
            ],
          },
        ],
      },
      {
        type: "column",
        title: "성수 121에 숨겨진<br>또 하나의 집 🌟",
        description: "함께 머물고 이야기 나누는 공용공간을 소개합니다.",
        column: "4",
        row_height: "3",
        list: [
          {
            title: "책 읽는 공용 거실",
            description:
              "집 안에 도서관이 있는 삶은 어떤 모습일까요? 느긋하게 책 한 권 읽을 수 있는 여유가 에피소드에 있어요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep121/ep121_house_img_01.jpg",
          },
          {
            title: "모두의 주방",
            description:
              "공유 주방에서 그간 갈고 닦은 요리 실력을 뽐내 보는 건 어때요? 이웃과 함께 먹고 떠들다 보면 하루가 짧게 느껴질 거에요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep121/ep121_house_img_02.jpg",
          },
          {
            title: "에피소드 세탁소",
            description:
              "밀린 빨래는 런드리 룸에서, 결제는 관리비로 한 번에 청구 하세요! 친환경 세제를 기본으로 탑재해 민감한 피부도 안심이에요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep121/ep121_house_img_03.jpg",
          },
          {
            title: "세컨드 스토리지",
            description:
              "집 안에 보관할 장소가 부족하다면 이곳으로 오세요. 넉넉한 공간! 든든한 보안으로 안전 보장!",
            image:
              "https://www.epsd.co.kr/assets/images/ep121/ep121_house_img_04.jpg",
          },
        ],
      },
      {
        type: "column",
        title: "1인 엣피들을 위한<br>에피소드의 특별한 서비스 💁",
        description:
          "더 나은 도시 생활을 위한 에피소드만의 경험을 누려 보세요.",
        column: "2",
        row_height: "2",
        list: [
          {
            title: "주거의 기본은 보안",
            description:
              "얼굴 인식 기능으로 보안을 업그레이드한 에피소드 성수 121! 보다 안전한 주거 생활을 위해 에피소드가 앞장설게요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep121/ep121_service_img_01.jpg",
          },
          {
            title: "홈 스타일링 도전하기",
            description:
              "가구, 소품, 가전으로 구성한 렌털 서비스를 이용해보세요. 꿈꿔 왔던 인테리어 로망을 실현해 줄 거에요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep121/ep121_service_img_02.jpg",
          },
          {
            title: "매달 깨끗해지는 집",
            description:
              "에피소드와 함께 귀차니즘 극복! 한 달에 한 번 룸클리닝 서비스를 제공해드려요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep121/ep121_service_img_03.jpg",
          },
          {
            title: "편리한 공유 차량",
            description:
              "어디론가 훌쩍 떠나고 싶나요? 렌털 가능한 친환경 전기차를 주차장에 마련해 두었어요.",
            image:
              "https://www.epsd.co.kr/assets/images/ep121/ep121_service_img_04.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "ep393",
    contents: [
      {
        type: "swipe",
        title: "혼자여도, 함께여도<br>누구에게나 편한 공간 🌿",
        description:
          "온전히 나를 위한 따뜻한 집. <br class=hidden-pc> 반려동물과 함께 살아도 충분한 집.<br>에피소드 서초 393에서 나에게 꼭 맞는 공간을 만나보세요.",
        group: [
          {
            name: "B TYPE",
            title: "B TYPE",
            description:
              "내구성이 강한 마감재를 사용해 반려동물로 인한 긁힘이나 오염의 소지를 최소화했어요. <br class=hidden-mo> 미끄럼을 방지한 논슬립 바닥, 소음을 차단하는 중문, 반려동물 전용 출입문과 가구 등 당신의 소울메이트를 위한 세심한 배려를 느껴보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep393/Soulmate_01.png",
              "https://www.epsd.co.kr/assets/images/ep393/Soulmate_02.png",
              "https://www.epsd.co.kr/assets/images/ep393/Soulmate_03.png",
              "https://www.epsd.co.kr/assets/images/ep393/Soulmate_04.png",
            ],
            iframe: "https://bit.ly/_meta_393_B",
          },
          {
            name: "A TYPE",
            title: "A TYPE",
            description:
              "따뜻한 색감의 가구와 마감재로 아늑한 분위기가 느껴지는 A TYPE. <br class=hidden-mo> 개방감 있는 노출형 화장실을 적용해 집이 보다 넓어 보이는 효과가 있어요.<br>벽에 설치된 월패널 가구까지 활용한다면 한정된 공간을 더 넓고 효율적으로 사용할 수 있을거예요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep393/Homemate_01.png",
              "https://www.epsd.co.kr/assets/images/ep393/Homemate_02.png",
              "https://www.epsd.co.kr/assets/images/ep393/Homemate_03.png",
              "https://www.epsd.co.kr/assets/images/ep393/Homemate_04.png",
            ],
            iframe: "https://bit.ly/_meta_393_A",
          },
          {
            name: "C TYPE",
            title: "C TYPE",
            description:
              "눈이 편한 그린톤 인테리어로 꾸며진 C TYPE은 이동식 유리 도어를 설치해 용도에 따라 공간을 구분하기 용이 해요. 침실 안쪽에는 자투리 공간을 백분 활용한 알파룸이 위치한답니다. 드레스룸이나 파우더룸, 미니바 등 취향에 맞는 아지트로 꾸며보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep393/Greenmate_01.png",
              "https://www.epsd.co.kr/assets/images/ep393/Greenmate_02.png",
            ],
            iframe: "https://bit.ly/_meta_393_C",
          },
          {
            name: "D TYPE",
            title: "D TYPE",
            description:
              "가장 넓은 면적을 자랑하는 D TYPE은 두 사람이 각자의 방에서 프라이버시를 누릴 수 있도록 구성했어요. 슬라이딩 도어를 펼쳐 공간을 나누면 프라이빗한 개인 방이, 도어를 접으면 한층 넓어진 거실을 누릴 수 있죠. ‘ㄷ자’형으로 구성한 소파는 여럿이 모여 보내는 단란한 시간을 완성해줍니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep393/Intimate_02.png",
              "https://www.epsd.co.kr/assets/images/ep393/Intimate_03.png",
              "https://www.epsd.co.kr/assets/images/ep393/Intimate_04.png",
              "https://www.epsd.co.kr/assets/images/ep393/Intimate_05.png",
            ],
            iframe: "https://bit.ly/_meta_393_D",
          },
        ],
      },
      {
        type: "column",
        title: "다재 다능한 집 🎨",
        column: "2",
        row_height: "2",
        list: [
          {
            title: "RELAXING",
            description:
              "프라이빗룸과 안마의자, 사색의 공간과 미디어룸까지. 오롯한 휴식을 원한다면, 우리 모두의 거실 릴렉싱 존에서 꼭 필요한 쉼을 누리세요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/relaxing.png",
          },
          {
            title: "COOKING",
            description:
              "조용하게 식사할 수 있는 개별 다이닝 룸, 쿠킹 클래스와 콘텐츠 제작에 최적화된 주방까지. 푸드 크리에이터도 만족할 공유주방을 만나보세요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/cooking.png",
          },
          {
            title: "TRAINING",
            description:
              "프라이빗한 운동을 위한 개인룸부터, 이웃 엣피들과 함께하는 GX프로그램까지! 에피소드에는 다양한 운동을 위한 공간과 전문 기기들이 준비되어있어요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/training.png",
          },
          {
            title: "393 ROOFTOP",
            description:
              "창 밖으로 보는 하늘이 좁게만 느껴진다면 루프톱에 올라와 탁 트인 전경을 만끽하세요. 날 좋은 저녁엔 이웃들과 함께 바비큐 파티를 즐겨도 좋아요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/rooftop.png",
          },
        ],
      },
      {
        type: "swipe",
        title: "댕댕이가<br>더 좋아하는 집 🐶",
        group: [
          {
            name: "PET <br class=hidden-pc> PLAYING",
            title: "PET PLAYING",
            description:
              "댕댕이 전용 플레이 라운지에 방문하세요. 펫 전용 키친에서 수제 간식도 만들고, 산책 후 펫 스파룸에서 개운하게 목욕하고 뽀송해진 몸과 마음으로 집으로 돌아가는 걸음. 상상만으로도 미소지어지지 않나요?",
            list: [
              {
                img: "https://www.epsd.co.kr/assets/images/ep393/pet_playing_01.png",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep393/pet_playing_02.png",
              },
            ],
          },
          {
            name: "PET <br class=hidden-pc> ROOFTOP",
            title: "PET ROOFTOP",
            description:
              "산책을 좋아하는 반려동물과의 전용 공간도 마련했으니, 집 밖으로 나갈 여유가 없을 땐 루프톱에 올라와 함께 시간을 보내세요.",
            list: [
              {
                img: "https://www.epsd.co.kr/assets/images/ep393/pet_rooftop_01.png",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep393/pet_rooftop_02.png",
              },
            ],
          },
          {
            name: "PET <br class=hidden-pc> SERVICE",
            title: "PET SERVICE",
            description:
              "반려동물을 위한 종합 플래그쉽 스토어 브랜드, 프랑소와펫과의 만남을 통해 준비한 특별한 혜택을 만나세요. 펫 전용 세대를 위한 1:1 방문 교육을 비롯해 애견미용과 애견 용품, 애견 유치원, 호텔 등 토탈 케어를 할인된 금액으로 이용할 수 있어요.",
            list: [
              {
                img: "https://www.epsd.co.kr/assets/images/ep393/pet_membership_01.png",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep393/pet_membership_02.png",
              },
            ],
          },
        ],
      },
      {
        type: "column",
        title: "손가락 하나로 이뤄지는<br>편리미엄 서비스  👆",
        column: "4",
        row_height: "3",
        list: [
          {
            title: "전자 계약",
            description:
              "복잡하고 번거로운 대면 계약은 이제 그만. 클릭 몇 번으로 쉽고 빠르게 계약하세요. ",
            image: "https://www.epsd.co.kr/assets/images/ep393/service_01.jpg",
          },
          {
            title: "원격제어",
            description:
              "집에 도착하기 전 세대 내 적정 온도와 조명을 간편하게 작동하세요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/service_02.png",
          },
          {
            title: "홈퍼니싱 구독",
            description:
              "취향에 꼭 맞는 가구, 가전, 소품으로 어디서도 볼 수 없는 나만의 홈 스타일링에 도전하세요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/service_03.jpg",
          },
          {
            title: "룸 클리닝",
            description:
              "월 1회 무료로 제공되는 기본 청소와 쓰레기 처리 서비스도 앱 하나로 쉽게 이용할 수 있어요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/service_04.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "ep262",
    contents: [
      {
        type: "swipe",
        title: "일도 내 삶이니까,<br> 오피스를 담은 우리집 🏢",
        description:
          "서울의 중심 강남 일대에서 함께 살아가며 일하는<br> 에피소드의 홈 오피스 공간을 만나보세요.",
        group: [
          {
            name: "PLATFORM TYPE",
            title: "PLATFORM TYPE",
            description:
              "마치 무대처럼 구성된 스테이지 위에서 펼쳐지는 아늑한 생활.<br class=hidden-mo> 벽에 설치된 월패널 가구와 개방감 있는 노출형 화장실로 방이 좀 더 넓어 보이는 효과가 있어요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep262/stage_01.png",
              "https://www.epsd.co.kr/assets/images/ep262/stage_02.png",
              "https://www.epsd.co.kr/assets/images/ep262/stage_03.png",
              "https://www.epsd.co.kr/assets/images/ep262/stage_04.png",
            ],
            iframe: "https://bit.ly/_meta_262_flat",
          },
          {
            name: "ALPHA TYPE",
            title: "ALPHA TYPE",
            description:
              "어릴 적 자꾸만 숨어 들어가고 싶었던 나만의 아지트가 있었나요?<br class=hidden-mo> 수납과 아늑함 모두를 챙긴 벙커형 가구는 온전한 나만의 방공호가 되어줄 거예요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep262/alpha_01.png",
              "https://www.epsd.co.kr/assets/images/ep262/alpha_02.png",
              "https://www.epsd.co.kr/assets/images/ep262/alpha_03.png",
              "https://www.epsd.co.kr/assets/images/ep262/alpha_04.png",
            ],
            iframe: "https://bit.ly/__meta_262_alpha",
          },
          {
            name: "LOFT A TYPE",
            title: "LOFT A TYPE",
            description:
              "함께 거주할 가족이나 친구, 연인이 있다면, 복층 구조의 룸 타입을 선택해 보는 건 어때요?<br class=hidden-mo> 조금 더 넓고 쾌적한 공간에서 ‘우리’만의 에피소드를 쌓아가세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep262/loft_a_01.png",
              "https://www.epsd.co.kr/assets/images/ep262/loft_a_02.png",
              "https://www.epsd.co.kr/assets/images/ep262/loft_a_03.png",
              "https://www.epsd.co.kr/assets/images/ep262/loft_a_04.png",
            ],
            iframe: "https://bit.ly/__meta_262_lofta",
          },
          {
            name: "LOFT B TYPE",
            title: "LOFT B TYPE",
            description:
              "컬러감이 돋보이는 또 다른 복층형 타입은 나만의 개성을 마음껏 드러내고 싶은 방입니다.<br class=hidden-mo> 커다란 창문, 높은 층고로 조금 더 넓은 공간감을 즐기세요. 기분 좋은 하루가 매일 매일 쌓일거예요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep262/loft_b_01.png",
              "https://www.epsd.co.kr/assets/images/ep262/loft_b_02.png",
              "https://www.epsd.co.kr/assets/images/ep262/loft_b_03.png",
              "https://www.epsd.co.kr/assets/images/ep262/loft_b_04.png",
            ],
            iframe: "https://bit.ly/__meta_262_loftb",
          },
          {
            name: "CORNER TYPE",
            title: "CORNER TYPE",
            description:
              "강남의 눈부신 야경을 조망할 수 있는 코너 타입에서 남다른 여유와 행복을 누리세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep262/corner_01.png",
              "https://www.epsd.co.kr/assets/images/ep262/corner_02.png",
              "https://www.epsd.co.kr/assets/images/ep262/corner_03.png",
            ],
            iframe: "https://bit.ly/__meta_262_corner",
          },
        ],
      },
      {
        type: "column",
        title: "일에 진심인, 집 👩🏻‍💻",
        description:
          "개인화된 업무 공간부터 회의실까지. 에피소드 스마트 오피스에서<br class=hidden-mo> 워라블(Work & Life Blending) 생활을 시작해볼까요?",
        column: "2",
        row_height: "2",
        list: [
          {
            title: "1인 집중석",
            description:
              "높은 파티션, 개인 조절이 가능한 스마트 조명이 갖춰진 공간. 조용한 집중이 필요할 땐 찾아주세요.",
            image: "https://www.epsd.co.kr/assets/images/ep262/house_01.png",
          },
          {
            title: "큐브 회의실",
            description:
              "미팅이 필요할 땐, 다양한 규모로 마련된 회의실을 이용하세요. 화상 미팅에 필요한 장비까지 모두 준비되어 있답니다.",
            image: "https://www.epsd.co.kr/assets/images/ep262/house_02.png",
          },
          {
            title: "핫 데스크",
            description:
              "스탠드형 좌석부터 바이크형 테이블까지 다양한 형태로 고르는 재미가 있는 곳에서 일하는 즐거움을 느껴보세요.",
            image: "https://www.epsd.co.kr/assets/images/ep262/house_03.png",
          },
          {
            title: "릴렉싱 체어 & 룸",
            description: "편안히 휴식할 수 있는 공간에서 여유를 즐겨보세요.",
            image: "https://www.epsd.co.kr/assets/images/ep262/house_04.png",
          },
          {
            title: "공유 주방",
            description:
              "간단한 요리를 하고, 때론 파티도 할 수 있는 공간이 준비되어 있어요.",
            image: "https://www.epsd.co.kr/assets/images/ep262/house_05.png",
          },
          {
            title: "컨퍼런스 홀",
            description:
              "내가 좋아하는 강연들이 우리집에서 열린다면, 얼마나 좋을까요? 컨퍼런스 홀에서 다양한 프로그램을 만나보세요.",
            image: "https://www.epsd.co.kr/assets/images/ep262/house_06.png",
          },
        ],
      },
      {
        type: "swipe",
        title: "먹고, 일하고, 노는<br> 일상을 위한 공간 🥂",
        group: [
          {
            name: "에피소드 웍스",
            title: "에피소드 웍스",
            description:
              "프라이빗한 큐브 미팅 룸, 개인 좌석, 코워킹 공간, 개인 방송 부스, 공유 주방, 커뮤니티 등<br>  도시생활자를 위한 Live & Work 복합 커뮤니티 공간",
            list: [
              "https://www.epsd.co.kr/assets/images/ep262/works_01.jpg",
              "https://www.epsd.co.kr/assets/images/ep262/works_02.jpg",
              "https://www.epsd.co.kr/assets/images/ep262/works_03.jpg",
              "https://www.epsd.co.kr/assets/images/ep262/works_04.jpg",
            ],
            iframe: "https://bit.ly/__meta_262_works",
          },
          {
            name: "릴렉싱 라운지",
            title: "릴렉싱 라운지",
            description:
              "잠깐의 쉼표가 필요할 땐, 라운지에 들르세요. 릴렉싱 체어와 보드게임, 간단한 스낵이 기다리고 있답니다.<br> 안마 의자에서 쉬고 티타임을 즐겨보세요",
            list: ["https://www.epsd.co.kr/assets/images/ep262/rounge_01.jpg"],
            iframe: "https://bit.ly/_meta_262_relaxing",
          },
          {
            name: "시크릿 룸",
            title: "시크릿 룸",
            description:
              "숨겨진 문을 열면 나오는 프라이빗한 룸에서 영화, 음악감상, 보드게임 등 다양한 취미를 즐겨요.",
            list: ["https://www.epsd.co.kr/assets/images/ep262/secret_01.jpg"],
            iframe: "https://bit.ly/_meta_262_secret",
          },
          {
            name: "루프탑",
            title: "루프탑",
            description:
              "도심 한복판에서 강남을 두루 굽어볼 수 있는 뷰,<br> 내가 좋아하는 영상 콘텐츠와 시원한 맥주 한 잔을 함께 들이킬 수 있는 야외 공간을 즐겨보세요.",
            list: [
              {
                img: "https://www.epsd.co.kr/assets/images/ep262/rooftop_01.jpg",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep262/rooftop_02.jpg",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep262/rooftop_03.jpg",
              },
            ],
          },
          {
            name: "함께하는 에피소드 서초 393",
            title: "함께하는 에피소드 서초 393",
            description:
              "강남 262의 엣피라면 도보 2분 거리에 위치한 에피소드 서초 393의 모든 공용시설을 함께 누릴 수 있어요.<br> 프라이빗 피트니스 공간부터 쿠킹룸과 멋진 라운지까지. 우리집 거실이 어디까지 넓어질 지 기대하세요.",
            list: [
              {
                img: "https://www.epsd.co.kr/assets/images/ep262/seocho_01.png",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep262/seocho_02.png",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep262/seocho_03.png",
              },
            ],
          },
        ],
      },
      {
        type: "column",
        title: "당신의 시간을<br> 아껴줄 서비스 📱",
        description: "에피소드 전용 앱을 이용해 시간을 절약하세요.",
        column: "4",
        row_height: "3",
        list: [
          {
            title: "기계식 주차 발렛",
            description:
              "내가 원하는 시간에 맞춰 기다리지 않고, 차량을 이용하세요.",
            image: "https://www.epsd.co.kr/assets/images/ep262/service_01.png",
          },
          {
            title: "시설 예약",
            description:
              "프라이빗한 공간 사용을 원할 땐, 앱 예약으로 편리하게 이용하세요.",
            image: "https://www.epsd.co.kr/assets/images/ep262/service_02.png",
          },
          {
            title: "홈퍼니싱 구독",
            description:
              "취향에 꼭 맞는 가구, 가전, 소품으로 어디서도 볼 수 없는 나만의 홈 스타일링에 도전하세요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/service_03.jpg",
          },
          {
            title: "룸 클리닝",
            description:
              "월 1회 무료로 제공되는 기본 청소와 쓰레기 처리 서비스도 앱 하나로 쉽게 이용할 수 있어요.",
            image: "https://www.epsd.co.kr/assets/images/ep393/service_04.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "ep369",
    contents: [
      {
        type: "swipe",
        title: "분리된 공간만큼<br> 늘어나는 여유 🌿",
        description:
          "높은 층고와 넓은 개방감을 가진 복층 구조로<br> 한 뼘 더 넓어진 나만의 우주를 만나세요.",
        group: [
          {
            name: "LOFT A TYPE",
            title: "LOFT A TYPE",
            description:
              "단차를 없애 복도에서부터 방까지 모두가 하나로 이어지는 느낌으로 문 앞의 아뜨리움 공간들도 모두가 내 거실처럼 느껴질 거예요. 양쪽으로 문이 열리는 오픈형 화장실은 건식으로 만들어 쾌적함을 챙겨 두었어요. 수건과 거울, 칫솔 치약은 물론 고운 피부를 유지해줄 다양한 화장품들은 따로 분리된 세면대 옆의 테이블에 올려두고 편리하게 사용하세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep369/nomad-01.png",
              "https://www.epsd.co.kr/assets/images/ep369/nomad-02.png",
              "https://www.epsd.co.kr/assets/images/ep369/nomad-03.png",
              "https://www.epsd.co.kr/assets/images/ep369/nomad-04.png",
            ],
          },
          {
            name: "LOFT B TYPE",
            title: "LOFT B TYPE",
            description:
              "많은 것을 사랑하는 맥시멀리스트라면, 시스템 가구와 커튼을 활용해서 내가 원하는 만큼의 수납공간을 자유롭게 만들어 보는 건 어떨까요? 침실을 복층 위로 올려 생활 공간을 더 넓게 사용하는 것도 방법이 되어 줄거예요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep369/balanced-01.png",
              "https://www.epsd.co.kr/assets/images/ep369/balanced-02.png",
              "https://www.epsd.co.kr/assets/images/ep369/balanced-03.png",
              "https://www.epsd.co.kr/assets/images/ep369/balanced-04.png",
            ],
          },
          {
            name: "LOFT C TYPE",
            title: "LOFT C TYPE",
            description:
              "생활과 분리된 창작 공간이 필요한 크리에이터부터 워라밸이 필요한 일잘러, 두 명의 사이 좋은 공간이 필요한 2인 가구까지. LOFT C TYPE은 좀 더 넓고 분리된 생활 공간을 원하는 모든 이들을 위한 방입니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep369/creative-01.png",
              "https://www.epsd.co.kr/assets/images/ep369/creative-02.png",
              "https://www.epsd.co.kr/assets/images/ep369/creative-03.png",
              "https://www.epsd.co.kr/assets/images/ep369/creative-04.png",
            ],
          },
          {
            name: "MUJI TYPE",
            title: "MUJI TYPE",
            description:
              "에피소드에서 가장 먼저 선보이는 ‘무인양품’의 주거 공간! 무인양품이 제안하는 주거 경험을 직접 만나보세요. 하루 이틀, 짧게 머무는 곳이 아닌 나만의 생활 공간을 제공합니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep369/muji-01.png",
              "https://www.epsd.co.kr/assets/images/ep369/muji-02.png",
              "https://www.epsd.co.kr/assets/images/ep369/muji-03.png",
              "https://www.epsd.co.kr/assets/images/ep369/muji-04.png",
              "https://www.epsd.co.kr/assets/images/ep369/muji-05.png",
              "https://www.epsd.co.kr/assets/images/ep369/muji-06.png",
            ],
          },
        ],
      },
      {
        type: "column",
        title: "매일의 영감을<br> 충전하는 집 💡",
        description:
          "신촌 369의 슬세권은 매 층마다 마련된 모두의 모임터, 라운지까지 이어집니다.<br> 엣피들과의 우연한 만남, 다양한 문화와 예술이 기다리는 라운지를 충분히 누리세요.",
        column: "2",
        row_height: "2",
        list: [
          {
            title: "EP LOUNGE",
            description:
              "아티스트와의 팝업 전시, 스크린을 통해 만나는 콘텐츠까지. 엣피와 방문객 모두가 함께 즐길 수 있는 엔터테인먼트 라운지에서 일하고, 대화하고, 파티를 즐기세요.",
            image: "https://www.epsd.co.kr/assets/images/ep369/house_01.png",
          },
          {
            title: "TALKING",
            description:
              "소규모 커뮤니티 활동과 업무 미팅이 가능한 공간이예요. Flip TV , 이동형 보드와 스툴, 간단한 다과류도 구비되어 있으니 자유로운 브레인 스토밍을 펼쳐보세요.",
            image: "https://www.epsd.co.kr/assets/images/ep369/house_02.png",
          },
          {
            title: "COOKING & DINING",
            description:
              "탁 트인 신촌 전경을 배경으로 맛있는 음식을 즐기세요. 연결된 계단을 오르면 친구들과 프라이빗하게 음식과 파티를 즐길 수 있는 다이닝 공간도 마련되어 있답니다.",
            image: "https://www.epsd.co.kr/assets/images/ep369/house_03.png",
          },
          {
            title: "WORKING",
            description:
              "조용하고 편안하게 일에 집중할 수 있는 공간도 준비했어요. 잠시 쉬고 싶을 땐, 구비된 서적들과 함께 마음 충전의 시간도 가져 보는 건 어떨까요?",
            image: "https://www.epsd.co.kr/assets/images/ep369/house_04.png",
          },
        ],
      },
      {
        type: "swipe",
        title: "함께라서 <br> 더 좋은 생활 공간 👫",
        group: [
          {
            name: "TRAINING",
            title: "TRAINING",
            description:
              "높은 층고로 신촌 시내가 한 눈에 내려다 보이는 곳에서 운동을 즐기세요. 여럿이 함께 즐길 수 있는 클라이밍 월과 프라이빗한 룸 안에 갖춰진 유산소 운동 장비까지 내가 원하는 방법에 맞춰 체력을 단련할 수 있어요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep369/space_01.png",
              "https://www.epsd.co.kr/assets/images/ep369/space_02.png",
            ],
          },
          {
            name: "CAFÉ NEIGHBORHOOD",
            title: "CAFÉ NEIGHBORHOOD",
            description:
              "커피 사러 멀리 가지 마세요! 1층에 위치한 에피소드 네이버후드에서 모닝 커피로 하루를 시작할 수 있어요. 맛있는 샌드위치와 핫도그도 함께요~",
            list: ["https://www.epsd.co.kr/assets/images/ep369/space_03.png"],
          },
          {
            name: "GATHERING",
            title: "GATHERING",
            description:
              "이웃들과 보드게임, 영화, 음악 감상 등 다양한 커뮤니티를 즐겨보세요",
            list: ["https://www.epsd.co.kr/assets/images/ep369/space_04.png"],
          },
          {
            name: "WASHING",
            title: "WASHING",
            description:
              "최대 20kg까지 수용 가능한 대형 세탁기가 워싱룸에 자리하고 있습니다. 하늘이 흐린 날엔 건조기를 사용하세요. 꿉꿉한 기분까지 보송하게 말려줄거에요",
            list: ["https://www.epsd.co.kr/assets/images/ep369/space_05.png"],
          },
        ],
      },
      {
        type: "column",
        title: "당신의 시간을 소중히<br> 아껴줄 서비스 📱",
        description: "에피소드 전용 앱을 이용해 시간을 절약하세요.",
        column: "4",
        row_height: "3",
        list: [
          {
            title: "카페 스마트 오더",
            description:
              "1층 네이버후드 카페는 앱을 통해 미리 메뉴를 주문할 수 있어요.기다리지 마세요.",
            image: "https://www.epsd.co.kr/assets/images/ep369/service_01.png",
          },
          {
            title: "시설 예약",
            description:
              "프라이빗한 공간 사용을 원할 땐, 앱 예약으로 편리하게 이용하세요.",
            image: "https://www.epsd.co.kr/assets/images/ep369/service_02.png",
          },
          {
            title: "홈퍼니싱 구독",
            description:
              "취향에 꼭 맞는 가구, 가전, 소품을 사지 말고 빌려 쓰세요. 양질의 무인양품 가구도 함께요!",
            image: "https://www.epsd.co.kr/assets/images/ep369/service_03.png",
          },
          {
            title: "룸 클리닝",
            description:
              "월 1회 무료로 제공되는 기본 청소와 쓰레기 처리 서비스도 앱 하나로 쉽게 이용할 수 있어요.",
            image: "https://www.epsd.co.kr/assets/images/ep369/service_04.png",
          },
        ],
      },
    ],
  },
  {
    title: "ep838",
    contents: [
      {
        type: "swipe",
        title: "따로 또 같이<br> 함께하면 더 좋은 집 👫",
        description:
          "838개의 이야기가 담길 공간 중<br> 나에게 가장 잘 어울리는 방을 미리 둘러 보세요.",
        group: [
          {
            name: "SHARED TYPE",
            title: "SHARED TYPE",
            description:
              "두 개의 문, 하나의 주방. 함께 살지만 개인의 공간은 유지하고 공동의 공간도 마련해 두고 싶은 사람들을 위한 공간.<br class=hidden-mo> 가운데 위치한 하나의 부엌과 다이닝 공간에 두 개의 독립된 방과 화장실이 마련되어 있어요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep838/suyu-02-01.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-02-02.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-02-03.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-02-04.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-02-05.png",
            ],
            iframe: "https://bit.ly/_meta_838_shared",
          },
          {
            name: "TERRACE TYPE",
            title: "TERRACE TYPE",
            description:
              "나만의 프라이빗 테라스가 있는 스페셜한 분리된 복층 공간을 활용하여 홈 오피스, 드레스 룸, 침실 등 나만의 방을 꾸며 보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep838/suyu-06-01.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-06-02.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-06-03.png",
            ],
            iframe: [
              "https://bit.ly/3a0XvLU",
              "https://bit.ly/3a0XvLU",
              "https://bit.ly/_meta_838_terrace",
            ],
          },
          {
            name: "ALPHA B TYPE",
            title: "ALPHA B TYPE",
            description:
              "독립된 방과 넓은 거실, 드레스룸을 갖춘 ALPHA B TYPE은 수유 838에서 가장 넓은 평수를 자랑합니다.<br class=hidden-mo> 분리된 생활 공간이 필요한 1인 가구부터 함께 생활하는 2인까지 혼자여도, 둘 이어도 누구에게나 편안한 공간을 제공합니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep838/suyu-05-01.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-05-02.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-05-03.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-05-04.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-05-05.png",
            ],
            iframe: "https://bit.ly/_meta_838_alphab",
          },
          {
            name: "ALPHA A TYPE",
            title: "ALPHA A TYPE",
            description:
              "커튼을 활용한 공간 분리로 나만의 작업실과 아늑한 침실이 함께 공존할 수 있는 방입니다.<br class=hidden-mo> 일과 취미, 생활 모드를 자유롭게 넘나드는 나만의 즐거운 공간을 마련해 보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep838/suyu-01-01.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-01-02.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-01-03.png",
            ],
            iframe: "https://bit.ly/_meta_838_alphaa",
          },
          {
            name: "FLAT A TYPE",
            title: "FLAT A TYPE",
            description:
              "알찬 공간 활용을 위해 수납과 침대 모두 오픈형 가구들을 활용했어요.<br class=hidden-mo> 미니멀리스트라면, 공간은 좀 더 넓어 보이고 나의 라이프스타일을 살릴 수 있는 공간을 선택해보세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep838/suyu-04-01.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-04-02.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-04-03.png",
            ],
            iframe: "https://bit.ly/_meta_838_flata",
          },
          {
            name: "FLAT B TYPE",
            title: "FLAT B TYPE",
            description:
              "개방감을 높인 오픈형 화장실은 공간을 더 넓고 더 효율적으로 활용할 수 있게 해줍니다.<br class=hidden-mo> 바쁜 일상 속에서 효율적인 삶을 추구하는 입주민을 위한 공간입니다.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep838/suyu-03-01.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-03-02.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-03-03.png",
              "https://www.epsd.co.kr/assets/images/ep838/suyu-03-04.png",
            ],
            iframe: "https://bit.ly/_meta_838_flatb",
          },
        ],
      },
      {
        type: "swipe",
        title: "우리 집 거실은<br> 어디까지 일까요? 🏟",
        description:
          "복도 공유화로 더 넓어진 우리 집의 크기를 직접 느껴보세요.",
        group: [
          {
            name: "SHARED LIVING",
            title: "SHARED LIVING",
            description:
              "층마다 다른 테마를 가진 공유 거실 세대를 만날 수 있어요. <br class=hidden-mo> 19층은 콜렉티브비와 20층부터 23층은 IKEA와 함께 주거 공간을 디자인했어요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep838/03-01-suyu-1.png",
              "https://www.epsd.co.kr/assets/images/ep838/03-01-suyu-2.png",
              "https://www.epsd.co.kr/assets/images/ep838/03-01-suyu-3.png",
              "https://www.epsd.co.kr/assets/images/ep838/03-01-suyu-4.png",
              "https://www.epsd.co.kr/assets/images/ep838/03-01-suyu-5.png",
              "https://www.epsd.co.kr/assets/images/ep838/03-01-suyu-6.png",
            ],
            iframe: "https://bit.ly/_meta_838_sharedliving",
          },
          {
            name: "EP LOUNGE",
            title: "EP LOUNGE",
            description:
              "자유로운 분위기의 라운지에서 책을 보거나, 재택근무를 해도 좋아요 <br class=hidden-mo> 쉴 때는 북한산을 보며 커피 한 잔 어때요.",
            list: [
              {
                img: "https://www.epsd.co.kr/assets/images/ep838/03-02-suyu-1.png",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep838/03-02-suyu-2.png",
              },
              {
                img: "https://www.epsd.co.kr/assets/images/ep838/03-02-suyu-3.png",
              },
            ],
          },
          {
            name: "SHARED COOKING & LOUNGE",
            title: "SHARED COOKING & LOUNGE",
            description:
              "공용 공간에 마련된 주방과 세탁 시설을 자유롭게 이용하고, 대신 좀 더 넓어진 나만의 공간을 만끽하세요.",
            list: [
              "https://www.epsd.co.kr/assets/images/ep838/03-03-suyu-1.png",
              "https://www.epsd.co.kr/assets/images/ep838/03-03-suyu-2.png",
            ],
            iframe: "https://bit.ly/_meta_838_cookinglounge",
          },
        ],
      },
      {
        type: "column",
        title: "우리 마을을<br> 소개합니다 🏘",
        description: "집을 구했더니 마을이 따라왔어요.",
        column: "2",
        row_height: "2",
        list: [
          {
            title: "GROUND",
            description:
              "누구에게나 개방된 수유 838의 웰컴 공간. 다양한 F&B 시설과 너른 앞마당이 마련되어 있어요.",
            image: "https://www.epsd.co.kr/assets/images/ep838/village_01.png",
          },
          {
            title: "EP NEIGHBORHOOD CAFÉ & LOUNGE",
            description:
              "강연, 북 토크, 전시, 팝업 마켓 등 다양한 행사가 이루어지는 수유의 잇 플레이스.",
            image: "https://www.epsd.co.kr/assets/images/ep838/village_02.png",
          },
          {
            title: "WORKING",
            description:
              "녹색 식물과 함께 방해 없는 곳에서 집중해서 일하고 싶을 땐 들러주세요.",
            image: "https://www.epsd.co.kr/assets/images/ep838/village_03.png",
            iframe: "https://bit.ly/_meta_838_working",
          },
          {
            title: "TRAINING",
            description:
              "운치 있는 산 뷰, 호텔 피트니스 못지 않은 시설과 함께 몸과 마음을 가꾸세요.",
            image: "https://www.epsd.co.kr/assets/images/ep838/village_04.png",
          },
          {
            title: "ROOFTOP",
            description:
              "친환경 자재로 만든 벤치, 플랜트 박스와 함께 사방을 둘러싼 뷰를 즐기세요.",
            image: "https://www.epsd.co.kr/assets/images/ep838/village_05.png",
          },
          {
            title: "WASHING",
            description:
              "최대 20kg까지 수용 가능한 대형 세탁기가 워싱룸에 자리하고 있어요.",
            image: "https://www.epsd.co.kr/assets/images/ep838/village_06.png",
          },
        ],
      },
    ],
  },
];
