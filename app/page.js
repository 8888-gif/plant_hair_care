import Image from "next/image";

const services = [
  {
    tag: "遮白首选",
    title: "草本遮白染",
    description:
      "适合白发比例明显、想要自然深棕或黑茶色的顾客。颜色均匀，不厚重，不突兀。",
    price: "¥298 起",
  },
  {
    tag: "气色提升",
    title: "植物栗棕染",
    description:
      "为暗沉发色加入柔和棕调，保留亚洲发质的自然感，适合办公室与日常生活。",
    price: "¥368 起",
  },
  {
    tag: "染后养护",
    title: "头皮净养护理",
    description:
      "染前舒缓与染后保湿组合，减少干涩紧绷感，让发根更清爽，发尾更顺滑。",
    price: "¥168 起",
  },
];

const swatches = [
  ["c1", "黑茶棕", "沉稳遮白，干净自然。"],
  ["c2", "栗子棕", "柔和提亮，显气色。"],
  ["c3", "深木棕", "低调耐看，适合通勤。"],
  ["c4", "暖茶棕", "轻盈温暖，减少沉闷。"],
];

const steps = [
  ["01", "头皮评估", "确认敏感情况、白发比例和过往染烫记录。"],
  ["02", "配方调色", "根据目标色与原发色，调整植物染膏比例。"],
  ["03", "分区上色", "细分发根、发中、发尾，让色度更均匀。"],
  ["04", "染后养护", "清洁、舒缓、保湿，并提供居家护理建议。"],
];

const reviews = [
  {
    name: "林女士",
    meta: "草本遮白染 / 2 周前",
    quote:
      "白发遮得很自然，不是那种一眼看出刚染完的黑。头皮没有刺痛，洗了几次颜色也稳。",
  },
  {
    name: "周先生",
    meta: "植物栗棕染 / 1 个月前",
    quote:
      "之前担心颜色太明显，老师按我的发色调得很低调，办公室灯光下看起来精神很多。",
  },
  {
    name: "陈女士",
    meta: "头皮净养护理 / 3 周前",
    quote:
      "染前会先看头皮状态，过程很细。做完头发不毛躁，回家打理也轻松。",
  },
  {
    name: "王女士",
    meta: "暖茶棕调色 / 5 天前",
    quote:
      "颜色有层次但不夸张，拍照也很显气色。预约沟通清楚，没有额外推销。",
  },
  {
    name: "赵女士",
    meta: "深木棕遮白 / 6 周前",
    quote:
      "发根和发尾过渡很顺，白发长出来以后也不会特别突兀，整体很耐看。",
  },
];

export default function Home() {
  const scrollingReviews = [...reviews, ...reviews];

  return (
    <>
      <header className="header">
        <a className="brand" href="#">
          <span className="logo" aria-hidden="true" />
          青禾植染
        </a>
        <nav aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#colors">色卡</a>
          <a href="#process">流程</a>
          <a href="#reviews">评论</a>
          <a className="nav-cta pill" href="#booking">
            预约体验
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <span className="eyebrow">PLANT HAIR COLOR STUDIO</span>
            <h1>植物染发，让发色自然，也让头皮松一口气。</h1>
            <p className="hero-copy">
              青禾植染专注草本染发、遮白染与头皮养护。用更温和的植物配方、发质评估和一对一调色，做出日常耐看的黑茶、栗棕与深木棕。
            </p>
            <div className="hero-actions">
              <a className="pill primary" href="#booking">
                立即预约
              </a>
              <a className="pill secondary" href="#services">
                查看项目
              </a>
            </div>
            <div className="hero-stats" aria-label="门店亮点">
              <div className="stat">
                <strong>0氨</strong>
                <span>低刺激植物染护方案</span>
              </div>
              <div className="stat">
                <strong>1v1</strong>
                <span>发质与头皮评估</span>
              </div>
              <div className="stat">
                <strong>3h</strong>
                <span>完整植染养护体验</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <Image
              src="/assets/plant-hair-salon-hero.png"
              alt="植物染发店内自然棕发护理场景"
              fill
              priority
              sizes="(max-width: 920px) 100vw, 52vw"
            />
            <div className="hero-badge">
              <strong>今日推荐：栗棕养护染</strong>
              <span>自然遮白，温柔提气色，适合通勤与日常造型。</span>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-head">
            <h2>门店项目</h2>
            <p>
              每个项目都包含染前咨询、发丝测试和染后护理建议。我们更在意颜色是否适合你，而不是只追求一眼很浓的效果。
            </p>
          </div>
          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <span className="tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="price">{service.price}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="colors" id="colors">
          <div className="color-layout">
            <div className="color-copy">
              <span className="eyebrow">HERBAL COLOR</span>
              <h2>植物染发的好看，通常很安静。</h2>
              <p>
                我们主打耐看的自然色系。根据原生发色、白发比例、肤色冷暖和日常穿搭，选择不会突兀的颜色方向。
              </p>
            </div>
            <div className="swatches" aria-label="植物染发色卡">
              {swatches.map(([className, title, description]) => (
                <div className="swatch" key={title}>
                  <div className={`swatch-color ${className}`} />
                  <div className="swatch-info">
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process">
          <div className="section-head">
            <h2>一次舒服的植染流程</h2>
            <p>
              颜色做得自然，往往靠的是染前判断、上色节奏和染后养护。慢一点，结果更稳。
            </p>
          </div>
          <div className="steps">
            {steps.map(([number, title, description]) => (
              <div className="step" key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="reviews" id="reviews">
          <div className="section-head">
            <div>
              <span className="eyebrow">REVIEWS</span>
              <h2>顾客说自然，才是真的自然</h2>
            </div>
            <p>
              评论来自近期到店体验，重点关注遮白自然度、头皮感受、褪色过渡和日常打理。
            </p>
          </div>
          <div className="review-marquee" aria-label="顾客评论滚动列表">
            <div className="review-track">
              {scrollingReviews.map((review, index) => (
                <article className="review-card" key={`${review.name}-${index}`}>
                  <div className="stars" aria-label="五星评价">★★★★★</div>
                  <p>{review.quote}</p>
                  <div className="reviewer">
                    <strong>{review.name}</strong>
                    <span>{review.meta}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div>
            <span className="eyebrow">BOOKING</span>
            <h2>预约一次植物染发体验</h2>
            <p>
              留下联系方式后，门店会与你确认发长、白发比例、期望色和可预约时间。首次到店建议预留 2.5 到 3.5 小时。
            </p>
            <div className="contact-list">
              <div className="contact-item">
                <strong>门店地址</strong>
                <span>上海市普陀区宜川路街道陕西北路 1620 号</span>
              </div>
              <div className="contact-item">
                <strong>附近地标</strong>
                <span>靠近陕西北路、昌平路，地图红色标记位置</span>
              </div>
              <div className="contact-item">
                <strong>营业时间</strong>
                <span>周一至周日 10:00 - 21:00</span>
              </div>
              <div className="contact-item">
                <strong>预约电话</strong>
                <span>021-6688-9026</span>
              </div>
            </div>
          </div>
          <div className="booking-side">
            <div className="store-map" aria-label="陕西北路 1620 号门店位置地图">
              <Image
                src="/assets/qinghe-store-map-ai.png"
                alt="青禾植染门店地图，标注上海市普陀区宜川路街道陕西北路 1620 号"
                fill
                sizes="(max-width: 920px) 100vw, 55vw"
              />
              <div className="map-caption">
                <strong>上海市普陀区宜川路街道陕西北路 1620 号</strong>
                <span>AI 生成清新染发风格地图，红色标记为门店位置。</span>
              </div>
            </div>
            <form>
              <input type="text" name="name" placeholder="你的称呼" aria-label="你的称呼" />
              <input type="tel" name="phone" placeholder="手机号" aria-label="手机号" />
              <select name="service" aria-label="想预约的项目" defaultValue="草本遮白染">
                <option>草本遮白染</option>
                <option>植物栗棕染</option>
                <option>头皮净养护理</option>
                <option>到店后再咨询</option>
              </select>
              <textarea
                name="message"
                placeholder="简单说说你的发长、白发比例或想要的颜色"
                aria-label="留言"
              />
              <button type="submit">提交预约信息</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 青禾植染 Plant Hair Color Studio</span>
        <span>温和染护 · 草本色彩 · 头皮养护</span>
      </footer>
    </>
  );
}
