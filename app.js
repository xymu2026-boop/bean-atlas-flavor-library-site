/* ============ 风味图书馆 V1 Demo · 数据与交互 ============ */

const flavorCards = [
  {
    name: "花香清茶",
    flavorWords: ["茉莉", "佛手柑", "清茶"],
    origin: "埃塞俄比亚 / 耶加雪菲、古吉",
    process: "水洗",
    description: "像一杯被晨光照亮的花茶，干净、轻盈，尾段有柑橘的明亮感。",
    photo: "assets/card-floral.jpg",
    accent: "var(--tea)",
    primaryFamily: "花香",
    detail: {
      story: "干香是极其优雅、高亢的茉莉花香与橙皮精油的清香。注入热水后，茉莉花的清甜如潮水般涌现，夹带着佛手柑的酸甜感。入口感觉非常像一杯刚刚冲泡好的高山绿茶或茉莉花茶，酸质非常干净柔和，尾韵持久，带有清淡的蜂蜜甜感。",
      temp: "92℃ - 93℃",
      ratio: "1:15",
      brew: "使用 V60 滤杯，中细研磨。采用三段式注水：先用 30g 水闷蒸 30 秒，再稳定注水至 120g，最后一段注水至 225g。总冲煮时间控制在 2 分钟至 2 分 15 秒之间，能最大化萃取出花香和干净度。"
    }
  },
  {
    name: "柑橘白花",
    flavorWords: ["柠檬", "橙花", "红茶"],
    origin: "巴拿马 / 波奎特、瑰夏产区",
    process: "水洗 / 日晒",
    description: "香气先打开，像橙皮和白花落在红茶上，甜感很细。",
    photo: "assets/card-citrus.jpg",
    accent: "var(--citrus)",
    primaryFamily: "柑橘明亮",
    detail: {
      story: "这款咖啡展现了极其精致的水洗瑰夏特征。干香带有橙花与新鲜柠檬皮的清新香气。入口后，明亮的柠檬、红葡萄柚酸质迅速占领味蕾，紧接着转化为优雅的白色花香。中后段展现出红茶般润滑的茶感与细致的冰糖甜，极其优雅平衡。",
      temp: "91℃ - 92℃",
      ratio: "1:16",
      brew: "中研磨，建议使用 Origami 折纸滤杯配合蛋糕滤纸。注水手法偏向温柔，避免过度搅拌，以呈现瑰夏标志性的多层次柑橘酸与清澈的茶感。"
    }
  },
  {
    name: "莓果酒香",
    flavorWords: ["草莓", "红葡萄", "发酵感"],
    origin: "哥伦比亚 / 蕙兰、考卡",
    process: "厌氧 / 日晒",
    description: "更像一口果酒，甜、亮、轻微发酵，适合喜欢强记忆点的人。",
    photo: "assets/card-berry.jpg",
    accent: "var(--cherry)",
    primaryFamily: "莓果红果",
    detail: {
      story: "通过控温厌氧发酵，将莓果的甜美发挥到了极致。干香带有成熟草莓酱与黑樱桃的甜香。冲泡后，草莓、覆盆子的酸甜饱满丰沛，并带有些许成熟红葡萄酒的微醺发酵感。口感稠度高，像是品尝一杯现榨的莓果果汁，尾韵甜感极其持久。",
      temp: "90℃ - 91℃",
      ratio: "1:15",
      brew: "中度研磨，使用三洋梯形滤杯以增加浸泡时间。水温不宜过高，冲煮时中间段注水可稍微加大水流，以带出更多中段的莓果酸甜和饱满的口触（Body）。"
    }
  },
  {
    name: "热带果汁",
    flavorWords: ["芒果", "菠萝", "百香果"],
    origin: "哥斯达黎加 / 哥伦比亚 / 巴拿马",
    process: "蜜处理 / 厌氧",
    description: "果汁感很强，入口像热带水果被压成明亮的酸甜。",
    photo: "assets/card-tropical.jpg",
    accent: "#e7872b",
    primaryFamily: "热带水果",
    detail: {
      story: "极其奔放的热带水果交响乐。磨粉后即能闻到强烈的芒果泥与熟菠萝的甜香。入口是非常鲜明、充满活力的百香果、菠萝酸质，伴随着芒果肉的软糯甜感。整杯咖啡口感如果汁般饱满黏稠，回甘中带着发酵水果茶的甜润。",
      temp: "89℃ - 91℃",
      ratio: "1:15",
      brew: "中粗研磨，推荐使用 Kalita Wave 蛋糕滤杯，水温控制在 90℃ 上下。采用慢速分段萃取，拉长萃取时间，能够使热带水果的发酵甜感和果汁般的醇厚度更加突出。"
    }
  },
  {
    name: "蜂蜜乌龙",
    flavorWords: ["蜂蜜", "黄桃", "乌龙茶"],
    origin: "云南 / 普洱、保山",
    process: "蜜处理 / 水洗",
    description: "不是张扬的香气，而是柔软、温润，像一杯带果甜的茶。",
    photo: "assets/card-honey.jpg",
    accent: "var(--honey)",
    primaryFamily: "蜂蜜甜感",
    detail: {
      story: "温润舒缓、极具东方韵味的一杯咖啡。干香有着黄桃干与烤坚果的气息。入口后是熟透黄桃的温和酸甜，随后化为极高纯度的椴树蜜般的黏稠甜感。尾韵带有乌龙茶的清幽与丝丝茶涩，口感极具润泽感，温暖舒适。",
      temp: "91℃ - 92℃",
      ratio: "1:15",
      brew: "中研磨，建议使用 Hario V60 滤杯。第一段闷蒸 40 秒以充分释放甜感。第二段稳定中心注水，尾段可微量绕圈。总时间控制在 2 分 10 秒左右，凸显蜂蜜般的清甜与黄桃茶感。"
    }
  },
  {
    name: "榛果可可",
    flavorWords: ["榛果", "焦糖", "黑巧"],
    origin: "巴西 / 哥伦比亚 / 危地马拉",
    process: "日晒 / 水洗",
    description: "低调、圆润、稳定，像烤坚果和黑巧在杯中慢慢展开。",
    photo: "assets/card-cocoa.jpg",
    accent: "var(--cocoa)",
    primaryFamily: "坚果可可",
    detail: {
      story: "温暖、踏实而经典的纯粹风味。干香是浓郁的烤榛果与烤杏仁香气。入口后，坚果的奶油感与焦糖的甜度交织，伴随着如丝绸般平滑的质感。尾段是黑巧克力的醇厚苦甜，没有张扬的果酸，是冬日清晨或配奶的上佳选择。",
      temp: "88℃ - 90℃",
      ratio: "1:15",
      brew: "中粗研磨，水温略低（89℃）。可选择平板滤杯（如 Kalita）或者聪明杯，以浸泡手法萃取，更易获得坚果可可的高醇厚度和饱满回甘，降低杂苦的产生。"
    }
  },
  {
    name: "玫瑰荔枝",
    flavorWords: ["玫瑰", "荔枝", "酒酿"],
    origin: "哥伦比亚 / 蕙兰",
    process: "厌氧日晒",
    description: "宛如一杯盛夏的玫瑰起泡酒，浓郁的花香伴随着鲜甜的荔枝果肉感。",
    photo: "assets/card-rose.png",
    accent: "#d45d79",
    primaryFamily: "发酵酒感",
    detail: {
      story: "这是一杯让人惊艳的艺术品。干香充盈着成熟红玫瑰与糖渍荔枝的香气。入口瞬间，高雅的玫瑰花香混合着荔枝多汁的果肉甜席卷口腔，中段带有一层细腻的糯米酒酿甜发酵风味。质感如果冻般丝滑，清甜醉人。",
      temp: "90℃ - 92℃",
      ratio: "1:16",
      brew: "使用中细研磨，V60 滤杯。冲煮时使用分段大水流冲刷，减少浸泡时间，重点提取前中段的花香与清凉果甜，尾段可提早断流，以防厌氧发酵可能带来的木质杂味。"
    }
  },
  {
    name: "红苹果枫糖",
    flavorWords: ["红苹果", "枫糖", "红茶"],
    origin: "肯尼亚 / 涅里",
    process: "72小时水洗",
    description: "入口是明亮清脆的红苹果酸甜，中段逐渐转化为枫糖的厚重甜感，尾韵干净。",
    photo: "assets/card-apple.png",
    accent: "#c05c3b",
    primaryFamily: "茶感草本",
    detail: {
      story: "肯尼亚优质水洗带来的多汁酸质与扎实甜感。干香是明显的红苹果与红醋栗的香气。入口即是清脆多汁的红苹果酸质，随后是饱满的红糖、枫糖浆甜感。尾韵转为斯里兰卡红茶般的干净温润，生津感极强，令人垂涎。",
      temp: "92℃ - 93℃",
      ratio: "1:15",
      brew: "建议使用中细研磨，高温冲煮。采用经典的 V60 滤杯以大水流冲刷，可快速提取肯尼亚标志性的清脆果酸，并在中段大水流闷蒸出厚实的枫糖回甘。"
    }
  },
  {
    name: "酒香朗姆",
    flavorWords: ["朗姆酒", "提子干", "黑巧"],
    origin: "洪都拉斯 / 马萨拉",
    process: "雪莉桶精致水洗",
    description: "仿佛品尝一颗酒心巧克力，浓郁的朗姆酒与发酵提子干的香气在口中弥散。",
    photo: "assets/card-rum.png",
    accent: "#5e3b2b",
    primaryFamily: "发酵酒感",
    detail: {
      story: "雪莉酒桶陈化工艺赋予了咖啡极其迷人的酒香。研磨时，朗姆酒、香草和葡萄干的香气扑鼻而来。入口有着熟透的黑提子干甜感，伴随着雪莉朗姆酒的微醺木质香气。尾段则是黑巧克力与可可豆碎的醇厚余韵，香气复合持久。",
      temp: "89℃ - 90℃",
      ratio: "1:14",
      brew: "中研磨，建议使用较低水温。推荐使用聪明滤杯或爱乐压以浸泡手法萃取，能够极好地把雪莉桶带来的烈酒香气、提子甜与黑可可风味牢牢锁入杯中，口触更显圆润。"
    }
  },
  {
    name: "香草坚果",
    flavorWords: ["香草", "夏威夷果", "焦糖"],
    origin: "萨尔瓦多 / 圣安娜",
    process: "蜜处理",
    description: "丝滑的夏威夷果仁香气，夹杂着一丝高雅的天然香草荚气息，口感圆润饱满。",
    photo: "assets/card-vanilla.png",
    accent: "#ccaa77",
    primaryFamily: "坚果可可",
    detail: {
      story: "柔顺、甜润，如同享用一份高档的香草坚果布丁。干香散发着浓郁的夏威夷果仁与焦糖布丁甜香。入口后展现出成熟夏威夷果的丰腴油脂感，同时伴随着丝丝优雅的天然香草风味。口感圆润饱满，回甘带有焦糖奶油太妃糖的持久香甜。",
      temp: "90℃ - 91℃",
      ratio: "1:15",
      brew: "中度研磨，使用蛋糕滤杯。冲煮时可多段注水，拉大甜感与醇厚度的比重，适合喜欢甜品感强、温和顺滑咖啡的爱好者。"
    }
  }
];

const journeySteps = [
  { label: "ORIGIN", name: "产地", desc: "海拔、土壤与气候，决定风味的底色。", photo: "assets/step-origin.jpg" },
  { label: "PROCESS", name: "处理法", desc: "水洗、日晒、蜜处理，塑造干净或果感。", photo: "assets/step-process.jpg" },
  { label: "ROAST", name: "烘焙", desc: "深浅之间，是酸甜、花果与焦糖的平衡。", photo: "assets/step-roast.jpg" },
  { label: "BREW", name: "冲泡", desc: "水温、研磨与时间，让风味最终落进杯中。", photo: "assets/step-brew.jpg" }
];

const processes = [
  { name: "水洗", desc: "干净、明亮、茶感、花香。", color: "var(--tea)" },
  { name: "日晒", desc: "果感、酒香、厚度。", color: "var(--cherry)" },
  { name: "蜜处理", desc: "甜感、圆润、糖浆感。", color: "var(--honey)" },
  { name: "厌氧", desc: "强烈、复杂、实验感。", color: "var(--cocoa)" }
];

const profiles = [
  {
    name: "明亮型探索者",
    tag: "PROFILE A",
    note: "偏爱干净、清亮、带花香和茶感的咖啡。",
    bars: [
      { label: "花香", pct: 38, color: "var(--tea)" },
      { label: "柑橘", pct: 31, color: "var(--citrus)" },
      { label: "茶感", pct: 21, color: "#9bb07d" },
      { label: "甜感", pct: 10, color: "var(--honey)" }
    ],
    rec: ["花香清茶", "柑橘白花"]
  },
  {
    name: "果香型收藏者",
    tag: "PROFILE B",
    note: "偏爱记忆点强、果感饱满、带轻微发酵感的咖啡。",
    bars: [
      { label: "莓果", pct: 34, color: "var(--cherry)" },
      { label: "热带水果", pct: 28, color: "#e7872b" },
      { label: "发酵酒感", pct: 22, color: "var(--cocoa)" },
      { label: "甜感", pct: 16, color: "var(--honey)" }
    ],
    rec: ["莓果酒香", "热带果汁"]
  }
];

const indexGroups = [
  { name: "花香",     words: ["茉莉", "玫瑰", "橙花", "咖啡花"],        color: "var(--tea)" },
  { name: "柑橘明亮", words: ["柠檬", "橙皮", "佛手柑", "葡萄柚"],      color: "var(--citrus)" },
  { name: "莓果红果", words: ["草莓", "覆盆子", "樱桃", "红葡萄"],      color: "var(--cherry)" },
  { name: "热带水果", words: ["芒果", "菠萝", "百香果", "番石榴"],      color: "#e7872b" },
  { name: "茶感草本", words: ["红茶", "乌龙", "清茶", "草本"],          color: "#9bb07d" },
  { name: "蜂蜜甜感", words: ["蜂蜜", "焦糖", "蔗糖", "枫糖"],          color: "var(--honey)" },
  { name: "坚果可可", words: ["榛果", "杏仁", "可可", "黑巧"],          color: "var(--cocoa)" },
  { name: "发酵酒感", words: ["葡萄酒", "白兰地", "酒酿", "发酵水果"],  color: "#7a4f6b" }
];

/* ---------- 本地存储逻辑 ---------- */
function getSavedFlavors() {
  try {
    const data = localStorage.getItem("bean_atlas_saved_flavors");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveFlavors(savedList) {
  try {
    localStorage.setItem("bean_atlas_saved_flavors", JSON.stringify(savedList));
  } catch (e) {
    console.error(e);
  }
}

/* ---------- 渲染：风味卡 ---------- */
function renderFlavorCards() {
  const savedFlavors = getSavedFlavors();
  const rail = document.getElementById("flavorRail");

  rail.innerHTML = flavorCards.map((c, i) => {
    const isSaved = savedFlavors.includes(c.name);
    return `
    <article class="flavor-card" data-index="${i}">
      <div class="fc-photo">
        <span class="fc-accent" style="background:${c.accent}"></span>
        <img src="${c.photo}" alt="${c.name}" loading="lazy">
        <button class="bookmark-button ${isSaved ? 'is-saved' : ''}" data-card="${i}" aria-label="收藏 ${c.name}">
          ${isSaved ? '★' : '⌖'}
        </button>
      </div>
      <div class="fc-body">
        <h3 class="fc-name">${c.name}</h3>
        <div class="fc-words">${c.flavorWords.map(w => `<span class="flavor-chip">${w}</span>`).join("")}</div>
        <p class="fc-meta"><b>产地</b> ${c.origin}<br><b>处理</b> ${c.process}</p>
        <p class="fc-desc">${c.description}</p>
      </div>
    </article>`;
  }).join("");

  // 收藏事件
  rail.querySelectorAll(".bookmark-button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const cardIndex = parseInt(btn.dataset.card);
      const card = flavorCards[cardIndex];
      let savedFlavors = getSavedFlavors();

      const isSaved = btn.classList.toggle("is-saved");
      if (isSaved) {
        btn.textContent = "★";
        if (!savedFlavors.includes(card.name)) {
          savedFlavors.push(card.name);
        }
      } else {
        btn.textContent = "⌖";
        savedFlavors = savedFlavors.filter(name => name !== card.name);
      }
      saveFlavors(savedFlavors);
    });
  });

  // 点击卡片进入详情态
  rail.querySelectorAll(".flavor-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".bookmark-button")) return;
      const index = parseInt(card.dataset.index);
      if (typeof window.openFlavorDetail === "function") {
        window.openFlavorDetail(index);
      }
    });
  });
}

/* ---------- 渲染：链路 ---------- */
function renderJourney() {
  document.getElementById("journeySteps").innerHTML = journeySteps.map(s => `
    <div class="journey-step">
      <img src="${s.photo}" alt="${s.name}" loading="lazy">
      <div class="js-body">
        <div class="js-label">${s.label}</div>
        <div class="js-name">${s.name}</div>
        <div class="js-desc">${s.desc}</div>
      </div>
    </div>`).join("");

  document.getElementById("processList").innerHTML = processes.map(p => `
    <div class="process-row">
      <div class="process-name">${p.name}</div>
      <div class="process-bar" style="background:${p.color}"></div>
      <div class="process-desc">${p.desc}</div>
    </div>`).join("");
}

/* ---------- 渲染：偏好 ---------- */
function renderProfiles() {
  document.getElementById("profiles").innerHTML = profiles.map(p => `
    <div class="profile-card">
      <div class="profile-head">
        <span class="profile-name">${p.name}</span>
        <span class="profile-tag">${p.tag}</span>
      </div>
      <p class="profile-note">${p.note}</p>
      ${p.bars.map(b => `
        <div class="preference-bar">
          <div class="pb-top"><span>${b.label}</span><span class="pb-pct">${b.pct}%</span></div>
          <div class="pb-track"><div class="pb-fill" data-pct="${b.pct}" style="background:${b.color}"></div></div>
        </div>`).join("")}
      <div class="profile-rec">
        <span class="rec-label">推荐</span>
        ${p.rec.map(r => `<span class="rec-chip">${r}</span>`).join("")}
      </div>
    </div>`).join("");
}

/* ---------- 渲染：索引 ---------- */
function renderIndex() {
  document.getElementById("indexGrid").innerHTML = indexGroups.map(g => `
    <div class="index-group" style="--g-color:${g.color}">
      <div class="ig-name">${g.name}</div>
      <div class="ig-words">${g.words.map(w => `<span class="ig-word">${w}</span>`).join("")}</div>
    </div>`).join("");
}

/* ---------- 偏好比例条入场动画 ---------- */
function animateBars() {
  document.querySelectorAll('.tab-panel[data-panel="preference"] .pb-fill')
    .forEach(el => { el.style.width = el.dataset.pct + "%"; });
}

/* ---------- Tab 切换 ---------- */
function setupTabs() {
  const screen = document.getElementById("screen");
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      buttons.forEach(b => b.classList.toggle("is-active", b === btn));
      panels.forEach(p => p.classList.toggle("is-active", p.dataset.panel === target));
      screen.scrollTop = 0;

      // 切换Tab时自动关闭打开的详情弹层
      const modal = document.getElementById("detailModal");
      if (modal && modal.classList.contains("is-active")) {
        modal.classList.remove("is-active");
        screen.style.overflowY = "auto";
      }

      if (target === "preference") {
        // reset then animate
        document.querySelectorAll('.pb-fill').forEach(el => el.style.width = "0");
        requestAnimationFrame(() => requestAnimationFrame(animateBars));
      }
    });
  });
}

/* ---------- 模态框逻辑 ---------- */
function initModal() {
  const modal = document.getElementById("detailModal");
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");

  function closeModal() {
    modal.classList.remove("is-active");
    document.getElementById("screen").style.overflowY = "auto";
  }

  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);

  window.openFlavorDetail = function(index) {
    const card = flavorCards[index];
    if (!card) return;

    document.getElementById("modalAccent").style.background = card.accent;
    document.getElementById("modalPhoto").src = card.photo;
    document.getElementById("modalPhoto").alt = card.name;
    document.getElementById("modalName").textContent = card.name;
    document.getElementById("modalWords").innerHTML = card.flavorWords.map(w => `<span class="flavor-chip">${w}</span>`).join("");
    document.getElementById("modalOrigin").textContent = card.origin;
    document.getElementById("modalProcess").textContent = card.process;
    document.getElementById("modalTemp").textContent = card.detail.temp;
    document.getElementById("modalRatio").textContent = card.detail.ratio;
    document.getElementById("modalStory").textContent = card.detail.story;
    document.getElementById("modalBrew").textContent = card.detail.brew;

    modal.classList.add("is-active");
    document.getElementById("screen").style.overflowY = "hidden";
  };
}

/* ---------- 索引与风味联动 ---------- */
function setupIndexLink() {
  const indexGrid = document.getElementById("indexGrid");
  indexGrid.querySelectorAll(".index-group").forEach(group => {
    group.addEventListener("click", () => {
      const familyName = group.querySelector(".ig-name").textContent.trim();
      const cardIndex = flavorCards.findIndex(c => c.primaryFamily === familyName);
      if (cardIndex !== -1) {
        // 1. 切换到风味 Tab
        const flavorTabBtn = document.querySelector('.tab-btn[data-tab="flavor"]');
        if (flavorTabBtn) {
          flavorTabBtn.click();
        }

        // 2. 平滑滚动到对应卡片
        setTimeout(() => {
          const rail = document.getElementById("flavorRail");
          const cards = rail.querySelectorAll(".flavor-card");
          const targetCard = cards[cardIndex];
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });

            // 3. 高亮闪烁动画
            targetCard.classList.add("highlight-pulse");
            setTimeout(() => {
              targetCard.classList.remove("highlight-pulse");
            }, 1200);
          }
        }, 150);
      }
    });
  });
}

/* ---------- init ---------- */
renderFlavorCards();
renderJourney();
renderProfiles();
renderIndex();
setupTabs();
initModal();
setupIndexLink();
