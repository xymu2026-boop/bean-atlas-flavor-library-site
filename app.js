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
    filterGroup: "花香茶感",
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
    filterGroup: "明亮柑橘",
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
    filterGroup: "莓果酒感",
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
    filterGroup: "热带果汁",
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
    filterGroup: "花香茶感",
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
    filterGroup: "坚果可可",
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
    photo: "assets/card-rose.jpg",
    accent: "#d45d79",
    primaryFamily: "发酵酒感",
    filterGroup: "花香茶感",
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
    photo: "assets/card-apple.jpg",
    accent: "#c05c3b",
    primaryFamily: "茶感草本",
    filterGroup: "产地代表",
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
    photo: "assets/card-rum.jpg",
    accent: "#5e3b2b",
    primaryFamily: "发酵酒感",
    filterGroup: "莓果酒感",
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
    photo: "assets/card-vanilla.jpg",
    accent: "#ccaa77",
    primaryFamily: "坚果可可",
    filterGroup: "甜感柔和",
    detail: {
      story: "柔顺、甜润，如同享用一份高档的香草坚果布丁。干香散发着浓郁的夏威夷果仁与焦糖布丁甜香。入口后展现出成熟夏威夷果的丰腴油脂感，同时伴随着丝丝优雅的天然香草风味。口感圆润饱满，回甘带有焦糖奶油太妃糖的持久香甜。",
      temp: "90℃ - 91℃",
      ratio: "1:15",
      brew: "中度研磨，使用蛋糕滤杯。冲煮时可多段注水，拉大甜感与醇厚度的比重，适合喜欢甜品感强、温和顺滑咖啡的爱好者。"
    }
  },
  {
    name: "白桃乌龙",
    flavorWords: ["白桃", "乌龙", "蜂蜜"],
    origin: "云南 / 普洱、保山",
    process: "水洗 / 蜜处理",
    description: "像一杯有果香的冷泡乌龙，白桃的柔软甜感落在茶汤后段。",
    photo: "assets/card-white-peach.jpg",
    accent: "#f4a29e",
    primaryFamily: "茶感草本",
    filterGroup: "花香茶感",
    detail: {
      story: "结合了云南咖啡的醇厚底色与精致的核果香气。磨粉时有着诱人的成熟水蜜桃干甜香。注水后，清新的白桃汁感在口中铺开，伴随清凉的乌龙茶韵。整体酸质温和，如同一杯果甜明显的冰镇高山乌龙茶，十分温润消暑。",
      temp: "90℃ - 92℃",
      ratio: "1:15",
      brew: "中研磨，推荐 V60 或 Origami 滤杯。注水手法保持温柔慢速，避免过度搅拌，以最大化呈现茶感和白桃甜的细腻层次。"
    }
  },
  {
    name: "柚子晨光",
    flavorWords: ["葡萄柚", "白花", "绿茶"],
    origin: "巴拿马 / 波奎特",
    process: "水洗",
    description: "入口像清晨切开的葡萄柚，酸质明亮，尾段有白花和绿茶的清凉感。",
    photo: "assets/card-grapefruit-morning.jpg",
    accent: "#f0b85d",
    primaryFamily: "柑橘明亮",
    filterGroup: "明亮柑橘",
    detail: {
      story: "充满了清晨生机的惊艳咖啡。干香带有白色野茉莉与柠檬皮的清香。入口是葡萄柚般酸甜、充满张力的明亮酸质，迅速带来生津感。中后段绿茶般的干净茶感显现，并伴随着清幽的橙花香气，口感清爽剔透。",
      temp: "91℃ - 93℃",
      ratio: "1:16",
      brew: "中细研磨，V60 滤杯。高温快速萃取，中段稍微加大注水，减少尾段浸泡时间，以保持杯中酸质的明亮与白花的纯净度。"
    }
  },
  {
    name: "紫罗兰蓝莓",
    flavorWords: ["蓝莓", "紫罗兰", "红茶"],
    origin: "埃塞俄比亚 / 古吉",
    process: "日晒",
    description: "蓝莓的深色果香先出现，随后是轻盈花香和一层红茶般的尾韵。",
    photo: "assets/card-blueberry-violet.jpg",
    accent: "#6c5ea3",
    primaryFamily: "莓果红果",
    filterGroup: "莓果酒感",
    detail: {
      story: "经典的古吉日晒豆，将紫色风味表达得淋漓尽致。干香散发着浓郁的蓝莓果酱与紫色花朵香气。入口后，蓝莓的成熟酸甜多汁，伴随着紫罗兰的优雅花香在鼻腔中回荡。尾韵转为红茶般的温润与蔗糖甜，极富层次感。",
      temp: "90℃ - 91℃",
      ratio: "1:15",
      brew: "中研磨，建议使用 Kalita Wave 蛋糕滤杯。水温控制在 90℃，分段注水以平衡蓝莓的果酸与后段日晒豆的蔗糖甜，避免过度发酵味。"
    }
  },
  {
    name: "黑加仑红茶",
    flavorWords: ["黑加仑", "红茶", "蔗糖"],
    origin: "肯尼亚 / 涅里、奇安布",
    process: "水洗",
    description: "酸质像黑加仑一样清亮有张力，中后段转向红茶和蔗糖甜。",
    photo: "assets/card-blackcurrant-tea.jpg",
    accent: "#87325c",
    primaryFamily: "茶感草本",
    filterGroup: "产地代表",
    detail: {
      story: "肯尼亚极致双重水洗代表。干香是标志性的黑加仑、红浆果与少许香草气味。入口时，高亢、清脆的黑加仑酸质带来极强的冲击力，紧接着在口中化为浓郁的红糖和蔗糖甜。尾韵是锡兰红茶般的清爽与扎实，结构感非常强。",
      temp: "92℃ - 94℃",
      ratio: "1:15",
      brew: "中细研磨，采用较高水温（93℃）。大水流中心注水，加快过滤速度，重点突出肯尼亚极具代表性的高活性果酸与干净茶感。"
    }
  },
  {
    name: "黄桃香槟",
    flavorWords: ["黄桃", "香槟", "花蜜"],
    origin: "哥伦比亚 / 蕙兰",
    process: "厌氧水洗",
    description: "像黄桃罐头与香槟气泡的结合，明亮、甜润，有轻微发酵香。",
    photo: "assets/card-peach-champagne.jpg",
    accent: "#db9f7b",
    primaryFamily: "发酵酒感",
    filterGroup: "莓果酒感",
    detail: {
      story: "精致厌氧工艺的典范之作。磨粉即能闻到如同打开黄桃罐头般的浓郁果蜜香。入口带有一丝类似气泡酒的明快果酸刺激感，随后释放出成熟黄桃的软糯蜜甜，尾韵泛起淡淡的花蜜余香，整体风格明亮、甜润而深邃。",
      temp: "89℃ - 91℃",
      ratio: "1:15",
      brew: "中度研磨，选择 Origami 滤杯或 V60。水温不宜太高，中段以温柔的中心细水流萃取，避免过快带出后段可能存在的过重木质醇感。"
    }
  },
  {
    name: "芭乐百香果",
    flavorWords: ["番石榴", "百香果", "热带果汁"],
    origin: "哥斯达黎加 / 塔拉珠",
    process: "蜜处理 / 厌氧",
    description: "热带水果的香气很直接，像一杯酸甜明亮的果汁。",
    photo: "assets/card-guava-passionfruit.jpg",
    accent: "#b5b038",
    primaryFamily: "热带水果",
    filterGroup: "热带果汁",
    detail: {
      story: "仿佛一杯新鲜榨取的夏日热带综合果汁。干香散发出浓烈的成熟粉芭乐（番石榴）与百香果干香。入口后，芭乐的香甜与百香果的清亮酸质完美融合，口感饱满粘稠，尾段回甘中带有一丝菠萝硬糖的清甜，极其多汁。",
      temp: "89℃ - 91℃",
      ratio: "1:15",
      brew: "中粗研磨，推荐使用 Kalita Wave 蛋糕滤杯以增强萃取均匀度。使用 90℃ 左右的水进行分段缓慢注水，拉长冲煮时间，充分提取热带水果的油脂与黏稠质感。"
    }
  },
  {
    name: "樱桃白兰地",
    flavorWords: ["樱桃", "白兰地", "可可"],
    origin: "哥伦比亚 / 考卡",
    process: "厌氧日晒",
    description: "像咬开一颗酒心樱桃，果香、酒感和可可尾韵层层展开。",
    photo: "assets/card-cherry-brandy.jpg",
    accent: "#782333",
    primaryFamily: "发酵酒感",
    filterGroup: "莓果酒感",
    detail: {
      story: "令人迷醉的深色发酵酒香。干香带有黑车厘子、白兰地酒心巧克力以及香草的幽香。入口是成熟黑樱桃的醇厚果甜，伴随着白兰地酒般微醺的喉感与可可豆碎的微苦余韵，醇厚度极高，是一杯适合静静品饮的慢热咖啡。",
      temp: "89℃ - 90℃",
      ratio: "1:14",
      brew: "中度研磨，选用聪明滤杯或爱乐压。使用较低水温进行浸泡萃取，过滤后能够最大化保留白兰地香气与高浓度黑巧可可的滑润，降低杂涩味道。"
    }
  },
  {
    name: "太妃榛果",
    flavorWords: ["太妃糖", "榛果", "奶油"],
    origin: "巴西 / 米纳斯吉拉斯",
    process: "日晒",
    description: "温暖、圆润，有烤榛果和太妃糖的甜香，像一杯不用解释的舒服咖啡。",
    photo: "assets/card-toffee-hazelnut.jpg",
    accent: "#c48c5a",
    primaryFamily: "蜂蜜甜感",
    filterGroup: "甜感柔和",
    detail: {
      story: "温暖经典、如同冬日暖阳般的极度舒适体验。干香带有太妃糖与烘烤榛果的醇香。入口温润厚实，充盈着融化太妃糖的细腻乳脂甜感，随后展现出烤榛果的奶油般香气。酸度极低，回甘如同一杯焦糖玛奇朵，饱满安定。",
      temp: "88℃ - 90℃",
      ratio: "1:15",
      brew: "中粗研磨，平板滤杯（如 Kalita）。较低水温（89℃），分段焖蒸，利用多段浸透手法提取出更饱满的甜感和圆润的口触，口感温厚。"
    }
  },
  {
    name: "杏仁奶油",
    flavorWords: ["杏仁", "奶油", "焦糖"],
    origin: "危地马拉 / 安提瓜",
    process: "水洗",
    description: "像烤杏仁与奶油焦糖，干净、稳定，适合喜欢低酸甜感的人。",
    photo: "assets/card-almond-cream.jpg",
    accent: "#ccad8a",
    primaryFamily: "坚果可可",
    filterGroup: "坚果可可",
    detail: {
      story: "极致丝滑与平衡的下午茶首选。干香展现烤杏仁、坚果碎与红糖的香气。入口是非常柔滑的杏仁奶甜，伴随着焦糖的柔和包裹感。酸质极其柔顺温和，尾韵干净，呈现出焦糖奶油饼干的醇香余味。",
      temp: "90℃ - 92℃",
      ratio: "1:15",
      brew: "中研磨，建议使用 V60。第一段快速闷蒸后，采用中心绕圈方式稳定注水，冲煮时间控制在 2 分 15 秒内，以保留其温润甜滑而避免出现坚果木质涩味。"
    }
  },
  {
    name: "黑糖可可",
    flavorWords: ["黑糖", "可可", "烘烤坚果"],
    origin: "巴西 / 哥伦比亚",
    process: "日晒 / 水洗",
    description: "深色甜感很稳，像黑糖、可可和烤坚果在杯中慢慢变厚。",
    photo: "assets/card-brown-sugar-cocoa.jpg",
    accent: "#5e3e2b",
    primaryFamily: "坚果可可",
    filterGroup: "坚果可可",
    detail: {
      story: "沉稳厚重、极具安全感的一杯经典之作。干香是黑糖、黑巧克力与熟烤坚果的深邃香气。入口没有突出的酸质，而是非常扎实的黑糖甜与高纯度黑巧克力的醇苦，中后段展现出烤焦糖坚果的香气，口触极其饱满，越往后越甜润。",
      temp: "88℃ - 90℃",
      ratio: "1:14",
      brew: "中粗研磨，较低水温。推荐使用聪明滤杯或爱乐压。使用 1:14 较紧凑的粉水比，凸显黑糖与黑巧克力的醇厚 Body 与持久的深层甜度。"
    }
  },
  {
    name: "柠檬草青苹果",
    flavorWords: ["青苹果", "柠檬草", "清茶"],
    origin: "卢旺达 / 西部高地",
    process: "水洗",
    description: "很清爽的一杯，青苹果酸质和柠檬草香气让尾段变得轻盈。",
    photo: "assets/card-green-apple-lemongrass.jpg",
    accent: "#8cba82",
    primaryFamily: "柑橘明亮",
    filterGroup: "明亮柑橘",
    detail: {
      story: "带来夏日清风般凉爽的一款杰作。干香是新鲜青苹果切片与淡淡柠檬草药草的清新气味。入口是脆爽、多汁的青苹果酸甜，伴随着柠檬草精油的特有清香，尾韵如同一杯干净的冷萃绿茶，生津止渴，空灵而轻盈。",
      temp: "91℃ - 92℃",
      ratio: "1:16",
      brew: "中细研磨，V60 滤杯。1:16 的略宽粉水比，冲煮时水流要稳定温柔，重点突显其轻盈透澈的茶感与青苹果脆爽的酸质。"
    }
  },
  {
    name: "香料黑巧",
    flavorWords: ["黑巧", "肉桂", "烟熏木质"],
    origin: "印尼 / 苏门答腊",
    process: "湿刨",
    description: "更低沉、更有木质感，像黑巧、肉桂和湿润森林的气息。",
    photo: "assets/card-spice-dark-chocolate.jpg",
    accent: "#453225",
    primaryFamily: "坚果可可",
    filterGroup: "产地代表",
    detail: {
      story: "苏门答腊传统湿刨法所带来的厚重与神秘。干香散发着草药、肉桂、雪松木与浓郁黑巧克力的奇特香气。入口口感极其厚实、醇滑，带有些许烟熏木质感，中段展开可可的苦甜与肉桂的微辛，风味低沉而极具深度。",
      temp: "88℃ - 90℃",
      ratio: "1:14",
      brew: "中粗研磨，水温较低（88℃）。推荐使用聪明杯或法压壶以全身浸泡方式萃取，能够完美包容其厚重的木质和可可油脂感，表现其狂野而平稳的醇厚感。"
    }
  }
];

const magazineLines = {
  "花香清茶": "像一杯被晨光照亮的花茶。",
  "柑橘白花": "橙皮先亮起来，白花随后落进红茶里。",
  "莓果酒香": "像一口没有酒精的莓果微醺。",
  "热带果汁": "把芒果、菠萝和百香果压进同一口酸甜里。",
  "蜂蜜乌龙": "一杯带着果甜的温润乌龙。",
  "榛果可可": "像烤榛果和黑巧在杯中慢慢变厚。",
  "玫瑰荔枝": "花香先抵达，荔枝的甜随后铺开。",
  "红苹果枫糖": "清脆红苹果之后，是枫糖一样的回甘。",
  "酒香朗姆": "像咬开一颗深色酒心巧克力。",
  "香草坚果": "温柔、圆润，像一勺香草坚果奶油。",
  "白桃乌龙": "白桃的甜，落在一杯冷泡乌龙的尾段。",
  "柚子晨光": "像清晨切开的葡萄柚，酸质明亮而干净。",
  "紫罗兰蓝莓": "蓝莓的深色果香里，藏着一层紫色花香。",
  "黑加仑红茶": "黑加仑的酸质很亮，红茶的尾韵很稳。",
  "黄桃香槟": "黄桃的蜜甜，带着一点气泡酒的轻盈。",
  "芭乐百香果": "像一杯热带果汁，酸甜直接、香气外放。",
  "樱桃白兰地": "樱桃、白兰地和可可，在口中分三层展开。",
  "太妃榛果": "一杯不用解释的舒服咖啡。",
  "杏仁奶油": "低酸、柔滑，像烤杏仁和奶油焦糖。",
  "黑糖可可": "深色甜感慢慢变厚，像黑糖融进可可。",
  "柠檬草青苹果": "青苹果很脆，柠檬草让尾段变轻。",
  "香料黑巧": "低沉、木质，像黑巧和肉桂的暗面。"
};

const tasteScenes = {
  "花香清茶": ["茉莉和佛手柑先出现，像热水刚碰到花茶。", "茶感变得清澈，酸质柔和而干净。", "尾段留下淡淡蜂蜜甜。"],
  "柑橘白花": ["柠檬皮和橙花先把香气打开。", "酸质明亮，随后落到红茶一样的顺滑感里。", "尾韵像冰糖和白花，干净、细长。"],
  "莓果酒香": ["草莓和红葡萄带来第一层果甜。", "轻微发酵感让中段像果酒一样饱满。", "尾段留下莓果果酱般的甜。"],
  "热带果汁": ["百香果和菠萝先带来明亮酸甜。", "芒果肉感让口感变得饱满。", "回甘像一口热带水果茶。"],
  "蜂蜜乌龙": ["黄桃的温柔果甜先出现。", "蜂蜜感让茶汤变得圆润。", "尾段有乌龙茶一样的清幽。"],
  "榛果可可": ["烤榛果和焦糖先铺底。", "中段变得圆润、低酸，像坚果奶油。", "黑巧的苦甜慢慢留在尾韵里。"],
  "玫瑰荔枝": ["玫瑰花香先抵达鼻腔。", "荔枝果肉和酒酿甜在中段铺开。", "尾段清甜，像一口花果起泡酒。"],
  "红苹果枫糖": ["红苹果酸质清脆地先亮起来。", "枫糖和红茶让结构变得厚实。", "尾段干净，生津感很强。"],
  "酒香朗姆": ["朗姆酒和葡萄干先给出深色香气。", "中段像酒心巧克力，甜感和木质感交织。", "黑巧余韵让整杯变得沉稳。"],
  "香草坚果": ["香草和夏威夷果先带来柔和甜香。", "焦糖让中段变得圆润饱满。", "尾段像一勺温热的坚果奶油。"],
  "白桃乌龙": ["白桃的轻甜先落在舌面。", "乌龙茶感让中段变得清凉。", "蜂蜜甜在尾段慢慢浮出来。"],
  "柚子晨光": ["葡萄柚酸质像清晨一样亮。", "白花和绿茶让中段变得透澈。", "尾段清爽，有干净的生津感。"],
  "紫罗兰蓝莓": ["蓝莓的深色果香先出现。", "紫罗兰花香让中段变得轻盈。", "红茶和蔗糖甜收住尾韵。"],
  "黑加仑红茶": ["黑加仑酸质清亮、有张力。", "中段转向红茶和蔗糖甜。", "尾段扎实而清爽，结构很清楚。"],
  "黄桃香槟": ["黄桃蜜甜先把香气打开。", "气泡酒般的轻盈酸感托住中段。", "尾韵带一点花蜜和发酵甜。"],
  "芭乐百香果": ["芭乐和百香果直接扑出来。", "热带果汁感让中段饱满黏稠。", "尾段有菠萝硬糖一样的甜。"],
  "樱桃白兰地": ["黑樱桃和白兰地先给出微醺感。", "可可和果甜在中段层层叠加。", "尾段像深色巧克力，慢慢收紧。"],
  "太妃榛果": ["太妃糖和烤榛果先让香气变暖。", "奶油感让中段变得厚实、顺滑。", "尾段低酸，舒服而安定。"],
  "杏仁奶油": ["烤杏仁和焦糖先带来温柔甜香。", "奶油感让中段变得柔滑。", "尾韵像焦糖饼干，干净稳定。"],
  "黑糖可可": ["黑糖和可可先给出深色甜感。", "烘烤坚果让中段慢慢变厚。", "尾段是黑巧般的醇苦与回甘。"],
  "柠檬草青苹果": ["青苹果酸质脆爽地先出现。", "柠檬草香气让中段更轻。", "尾韵像冷萃绿茶，清爽生津。"],
  "香料黑巧": ["黑巧和肉桂先带来低沉香气。", "木质与烟熏感让中段更深。", "尾韵厚实，像可可和香料慢慢落下。"]
};

const replacementPhotos = {
  "花香清茶": "assets/card-scene-floral-brew.jpg",
  "柑橘白花": "assets/card-scene-citrus-grind.jpg",
  "莓果酒香": "assets/card-scene-berry-cupping.jpg",
  "热带果汁": "assets/card-scene-tropical-iced.jpg",
  "蜂蜜乌龙": "assets/card-scene-honey-oolong.jpg",
  "榛果可可": "assets/card-outdoor-forest.jpg",
  "白桃乌龙": "assets/card-outdoor-terrace.jpg",
  "黑加仑红茶": "assets/card-outdoor-lake.jpg",
  "太妃榛果": "assets/card-outdoor-valley.jpg",
  "香料黑巧": "assets/card-outdoor-mountain.jpg"
};

flavorCards.forEach(card => {
  if (replacementPhotos[card.name]) {
    card.photo = replacementPhotos[card.name];
  }
  card.magazineLine = magazineLines[card.name] || card.description;
  card.detail.tasteScene = tasteScenes[card.name] || [
    card.flavorWords[0] ? `${card.flavorWords[0]}先成为第一层记忆。` : card.description,
    card.flavorWords[1] ? `${card.flavorWords[1]}让中段变得更有层次。` : card.description,
    card.flavorWords[2] ? `尾段留下${card.flavorWords[2]}的线索。` : "尾段干净，留下清楚的风味轮廓。"
  ];
});

const journeySteps = [
  { label: "ORIGIN", name: "产地", desc: "海拔、土壤与气候，先决定这杯咖啡会偏花香、果酸，还是坚果可可。", photo: "assets/step-origin.jpg" },
  { label: "PROCESS", name: "处理法", desc: "水洗让风味更清澈，日晒让果感更饱满，蜜处理把甜感留下来。", photo: "assets/step-process.jpg" },
  { label: "ROAST", name: "烘焙", desc: "烘得浅，花果更亮；烘得深，焦糖、可可和坚果会慢慢出现。", photo: "assets/step-roast.jpg" },
  { label: "BREW", name: "冲泡", desc: "水温、研磨和时间，是把这些潜在风味真正带进杯里的最后一步。", photo: "assets/step-brew.jpg" }
];

const processes = [
  { name: "水洗", desc: "更清澈，像把风味边缘擦亮。", color: "var(--tea)" },
  { name: "日晒", desc: "更饱满，果香和发酵甜会被放大。", color: "var(--cherry)" },
  { name: "蜜处理", desc: "更柔软，甜感像被留在杯底。", color: "var(--honey)" },
  { name: "厌氧", desc: "更外放，容易出现酒感、热带水果和强记忆点。", color: "var(--cocoa)" }
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
  },
  {
    name: "甜感型安定派",
    tag: "PROFILE C",
    note: "偏爱舒适、温暖、伴随高甜度与浓郁坚果可可香的咖啡。",
    bars: [
      { label: "蜂蜜甜感", pct: 32, color: "var(--honey)" },
      { label: "坚果可可", pct: 28, color: "var(--cocoa)" },
      { label: "茶感草本", pct: 20, color: "#9bb07d" },
      { label: "柑橘明亮", pct: 20, color: "var(--citrus)" }
    ],
    rec: ["蜂蜜乌龙", "香草坚果", "枫糖布丁"]
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

const demoRoutes = [
  {
    step: "01",
    name: "翻开风味卡",
    desc: "先从 22 张卡里，看见咖啡不止苦和酸，而是一套可阅读的风味语言。",
    tab: "flavor"
  },
  {
    step: "02",
    name: "收起喜欢的味道",
    desc: "把想喝的组合放进书架，让味觉偏好开始留下痕迹。",
    tab: "flavor"
  },
  {
    step: "03",
    name: "读出风味签名",
    desc: "从收藏里生成一份味觉签名，让内容资产和用户兴趣真正连起来。",
    tab: "preference"
  }
];

const topicPreviews = [
  {
    id: "anaerobic",
    label: "NEXT ISSUE",
    name: "厌氧处理的果酒感",
    desc: "从莓果到香槟，再到白兰地：厌氧处理让咖啡出现近似果酒的明亮和微醺。",
    category: "莓果酒感",
    color: "var(--cherry)",
    cardNames: ["莓果酒香", "黄桃香槟", "樱桃白兰地", "酒香朗姆"],
    points: [
      ["处理法", "厌氧会放大果香、酒感与发酵甜，让一杯咖啡更像果酒或甜点。"],
      ["适合人群", "适合喜欢强记忆点、香气外放、想要惊喜感的精品咖啡用户。"],
      ["冲煮提醒", "水温不宜过高，保留前中段果香，避免尾段发酵感过重。"]
    ]
  },
  {
    id: "yunnan",
    label: "ORIGIN NOTE",
    name: "云南的茶感与甜感",
    desc: "从白桃、乌龙到蜂蜜，云南咖啡可以不只稳定，也可以很细腻。",
    category: "花香茶感",
    color: "var(--tea)",
    cardNames: ["蜂蜜乌龙", "白桃乌龙", "花香清茶", "玫瑰荔枝"],
    points: [
      ["产地表达", "云南咖啡不只适合做稳定口粮，也能表达温润茶感、核果甜与蜂蜜感。"],
      ["内容价值", "本土产地更容易形成长期栏目，适合做产地故事和风味教育。"],
      ["风味入口", "茶感、白桃、蜂蜜这些词更容易降低精品咖啡的理解门槛。"]
    ]
  },
  {
    id: "comfort",
    label: "TASTE ROUTE",
    name: "低酸甜感路线",
    desc: "不追求强酸，而是把太妃、榛果、奶油和可可慢慢喝清楚。",
    category: "甜感柔和",
    color: "var(--honey)",
    cardNames: ["太妃榛果", "香草坚果", "榛果可可", "杏仁奶油"],
    points: [
      ["味觉偏好", "低酸、甜感、坚果可可是很多用户从商业咖啡进入精品咖啡的舒适路线。"],
      ["推荐逻辑", "这类风味适合承接新手，也适合做复购和日常饮用场景的内容资产。"],
      ["冲煮提醒", "稍低水温和更稳定的萃取，可以保留甜感，减少苦味和木质涩感。"]
    ]
  },
  {
    id: "washed-clean",
    label: "PROCESS NOTE",
    name: "水洗咖啡的干净感",
    desc: "如果你喜欢茶感、花香和清晰酸质，水洗是最容易读懂的一条路线。",
    category: "明亮柑橘",
    color: "var(--citrus)",
    cardNames: ["花香清茶", "柑橘白花", "黑加仑红茶", "柠檬草青苹果"],
    points: [
      ["处理法", "水洗会减少果肉发酵带来的厚重感，更容易呈现清晰酸质、花香和茶感。"],
      ["适合人群", "适合喜欢干净、明亮、层次清楚的人，也适合做精品咖啡入门教育。"],
      ["运营线索", "水洗专题能自然连接产地、品种和冲煮变量，是长期科普栏目里最稳的一类。"]
    ]
  },
  {
    id: "kenya-bright",
    label: "ORIGIN NOTE",
    name: "肯尼亚的明亮酸质",
    desc: "红苹果、黑加仑、红茶，是肯尼亚咖啡最容易被记住的三条线索。",
    category: "产地代表",
    color: "#c05c3b",
    cardNames: ["红苹果枫糖", "黑加仑红茶", "柠檬草青苹果", "柑橘白花"],
    points: [
      ["产地表达", "肯尼亚常见明亮、多汁、有张力的酸质，容易形成非常清楚的风味记忆点。"],
      ["风味词", "红苹果、黑加仑、红茶这类词，比抽象酸度更容易被用户理解和收藏。"],
      ["演示价值", "产地专题能证明风味图书馆不只是卡片集合，而可以持续生长为产地内容资产。"]
    ]
  }
];

let activeFlavorCategory = "全部";
let activeCoverSlide = 0;
let coverSlideTimer;

const coverSlides = [
  {
    photo: "assets/cover-hero.jpg",
    alt: "山间咖啡产区里的一杯精品咖啡",
    issue: "ISSUE 01 · THE BRIGHT NOTES",
    title: "一杯咖啡里<br>明亮的那一部分",
    sub: "在苦味之外，咖啡也会出现茉莉、柑橘、红茶、蜂蜜与热带水果。那些轻盈的香气，会在入口前先抵达。",
    label: "FEATURED FLAVOR",
    chips: ["茉莉", "佛手柑", "清茶"],
    note: "从一杯像花茶一样干净的咖啡开始，重新认识“好喝”这件事。它不急着给你答案，只把花香、酸质和茶感，一层一层翻开。",
    editorial: "本期像一本明亮风味的薄册。我们不从产区参数开始，而是从你真正喝到的味道开始：一口清茶感，一点柑橘香，和尾段慢慢留下的甜。"
  },
  {
    photo: "assets/cover-alternative-1.png",
    alt: "窗边手冲咖啡与铜壶蒸汽",
    issue: "ISSUE 02 · BREWING MOMENTS",
    title: "风味落进杯中<br>只差一次注水",
    sub: "水温、研磨、时间和手势，会把同一支豆子带向不同的方向。有些香气，是在水流穿过滤纸的那一刻才被打开的。",
    label: "FEATURED ROUTE",
    chips: ["研磨", "注水", "萃取"],
    note: "手冲不是复杂仪式，而是一种温柔的放大镜。它把花香放轻，把甜感拉长，也让一杯咖啡的性格慢慢显影。",
    editorial: "这一页写给冲泡。同样的豆子，水流快一点，果酸会更明亮；萃取慢一点，甜感会更厚。风味不是固定答案，而是一次次微小选择的结果。"
  },
  {
    photo: "assets/cover-alternative-2.png",
    alt: "咖啡杯、豆子与植物手账静物",
    issue: "ISSUE 03 · FLAVOR NOTEBOOK",
    title: "把喝到的味道<br>收进一座图书馆",
    sub: "茉莉、黑加仑、榛果、可可，不只是咖啡袋上的形容词。当它们被记录、归档、收藏，就会慢慢变成一个人的味觉地图。",
    label: "FEATURED LIBRARY",
    chips: ["风味词", "收藏", "偏好"],
    note: "每一次收藏，都是一次很轻的自我表达。你以为只是喜欢某一杯咖啡，其实也在留下自己的风味线索。",
    editorial: "风味图书馆不急着把咖啡讲成知识。它更像一本可以翻阅的手账：先记住喜欢的味道，再慢慢看见自己偏爱的酸质、甜感、茶感和余韵。"
  }
];

function getPrimaryOrigin(origin) {
  return origin.split("/")[0].trim();
}

function getFlavorAssetStats() {
  return {
    cardCount: flavorCards.length,
    familyCount: new Set(flavorCards.map(card => card.primaryFamily)).size,
    originCount: new Set(flavorCards.map(card => getPrimaryOrigin(card.origin))).size
  };
}

function renderAssetStats() {
  const assetStats = document.getElementById("assetStats");
  if (!assetStats) return;

  const stats = getFlavorAssetStats();
  assetStats.innerHTML = `
    <div class="cover-stat">
      <strong>${stats.cardCount}</strong>
      <span>风味卡</span>
    </div>
    <div class="cover-stat">
      <strong>${stats.familyCount}</strong>
      <span>风味家族</span>
    </div>
    <div class="cover-stat">
      <strong>${stats.originCount}</strong>
      <span>产地线索</span>
    </div>`;
}

function renderCoverSlide(index = activeCoverSlide) {
  const slide = coverSlides[index];
  if (!slide) return;

  const heroPhoto = document.getElementById("heroPhoto");
  const heroIssue = document.getElementById("heroIssue");
  const heroTitle = document.getElementById("heroTitle");
  const heroSub = document.getElementById("heroSub");
  const featuredLabel = document.getElementById("featuredLabel");
  const featuredChips = document.getElementById("featuredChips");
  const featuredNote = document.getElementById("featuredNote");
  const coverEditorial = document.getElementById("coverEditorial");

  if (heroPhoto) {
    heroPhoto.src = slide.photo;
    heroPhoto.alt = slide.alt;
  }
  if (heroIssue) heroIssue.textContent = slide.issue;
  if (heroTitle) heroTitle.innerHTML = slide.title;
  if (heroSub) heroSub.textContent = slide.sub;
  if (featuredLabel) featuredLabel.textContent = slide.label;
  if (featuredChips) {
    featuredChips.innerHTML = slide.chips.map(chip => `<span class="chip">${chip}</span>`).join("");
  }
  if (featuredNote) featuredNote.textContent = slide.note;
  if (coverEditorial) coverEditorial.textContent = slide.editorial;

  document.querySelectorAll(".hero-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
}

function setCoverSlide(index, options = {}) {
  activeCoverSlide = (index + coverSlides.length) % coverSlides.length;
  renderCoverSlide(activeCoverSlide);

  if (options.restartTimer !== false) {
    startCoverSlideTimer();
  }
}

function startCoverSlideTimer() {
  clearInterval(coverSlideTimer);
  coverSlideTimer = setInterval(() => {
    setCoverSlide(activeCoverSlide + 1, { restartTimer: false });
  }, 5600);
}

function setupCoverCarousel() {
  const dotsRoot = document.getElementById("heroDots");
  if (!dotsRoot) return;

  dotsRoot.innerHTML = coverSlides.map((slide, index) => `
    <button class="hero-dot" type="button" aria-label="查看封面 ${index + 1}"></button>
  `).join("");

  dotsRoot.querySelectorAll(".hero-dot").forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setCoverSlide(index);
    });
  });

  renderCoverSlide(0);
  startCoverSlideTimer();
}

function getFamilyColor(familyName) {
  return indexGroups.find(group => group.name === familyName)?.color || "var(--coffee)";
}

function countBy(items, getKey) {
  return items.reduce((acc, item) => {
    const key = getKey(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function sortCounts(counts) {
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function getCardsByNames(names) {
  return names
    .map(name => flavorCards.find(card => card.name === name))
    .filter(Boolean);
}

function getSimilarityReason(source, candidate) {
  if (source.primaryFamily === candidate.primaryFamily) return `同属${source.primaryFamily}`;
  if (source.filterGroup === candidate.filterGroup) return `都在${source.filterGroup}路线里`;
  if (getPrimaryOrigin(source.origin) === getPrimaryOrigin(candidate.origin)) return `同样来自${getPrimaryOrigin(source.origin)}`;

  const sharedWord = candidate.flavorWords.find(word => source.flavorWords.includes(word));
  return sharedWord ? `都带有${sharedWord}线索` : "相近的阅读路径";
}

function getSimilarFlavorCards(sourceIndex, limit = 3) {
  const source = flavorCards[sourceIndex];
  if (!source) return [];

  return flavorCards
    .map((card, index) => {
      if (index === sourceIndex) return null;
      const sharedWords = card.flavorWords.filter(word => source.flavorWords.includes(word)).length;
      const sameOrigin = getPrimaryOrigin(card.origin) === getPrimaryOrigin(source.origin) ? 1 : 0;
      const score =
        (card.primaryFamily === source.primaryFamily ? 6 : 0) +
        (card.filterGroup === source.filterGroup ? 4 : 0) +
        (sameOrigin ? 2 : 0) +
        sharedWords * 2;

      return {
        ...card,
        originalIndex: index,
        score,
        reason: getSimilarityReason(source, card)
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex)
    .slice(0, limit);
}

function getFlavorCoordinates(card) {
  const familyDefaults = {
    "花香": { bright: 82, sweet: 56, body: 34 },
    "柑橘明亮": { bright: 90, sweet: 50, body: 36 },
    "莓果红果": { bright: 76, sweet: 68, body: 58 },
    "热带水果": { bright: 82, sweet: 74, body: 62 },
    "茶感草本": { bright: 72, sweet: 48, body: 38 },
    "蜂蜜甜感": { bright: 48, sweet: 86, body: 64 },
    "坚果可可": { bright: 28, sweet: 66, body: 84 },
    "发酵酒感": { bright: 66, sweet: 72, body: 74 }
  };

  const base = familyDefaults[card.primaryFamily] || { bright: 60, sweet: 60, body: 60 };
  const words = card.flavorWords.join("");
  const process = card.process;

  return {
    bright: Math.min(96, base.bright + (/柠檬|柚|苹果|黑加仑|清茶|绿茶/.test(words) ? 6 : 0)),
    sweet: Math.min(96, base.sweet + (/蜂蜜|焦糖|太妃|香草|黄桃|白桃|黑糖/.test(words) ? 8 : 0)),
    body: Math.min(96, base.body + (/可可|黑巧|榛果|奶油|朗姆|白兰地/.test(words) ? 8 : 0) + (/厌氧|日晒|湿刨/.test(process) ? 4 : 0))
  };
}

let toastTimer;

function showSaveToast(message) {
  const toast = document.getElementById("saveToast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-active");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-active");
  }, 1600);
}

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

function getSaveToastMessage(card, savedCount, isSaved) {
  if (!isSaved) {
    return `已移出「${card.name}」：这条风味线索暂时收起。`;
  }

  if (savedCount === 1) {
    return `第一条风味线索已出现：${card.flavorWords.join(" / ")}。`;
  }

  if (savedCount === 3) {
    return "你的风味签名开始变清楚。";
  }

  if (savedCount > 3) {
    return `已收藏「${card.name}」：风味书架更像你了。`;
  }

  return `已收藏「${card.name}」：你的书架多了一点${card.flavorWords.slice(0, 2).join("和")}。`;
}

const signatureProfiles = {
  "花香茶感": {
    name: "清茶花香型",
    phrase: "明亮、干净，喜欢带空气感的花香和茶感。",
    stamp: "BOTANICAL READER"
  },
  "明亮柑橘": {
    name: "明亮酸质型",
    phrase: "容易被清晰酸质、柑橘香和干净尾韵吸引。",
    stamp: "BRIGHT ACIDITY"
  },
  "莓果酒感": {
    name: "果酒记忆型",
    phrase: "偏爱有记忆点的莓果、发酵甜和轻微微醺感。",
    stamp: "FERMENTED FRUIT"
  },
  "热带果汁": {
    name: "热带果汁型",
    phrase: "喜欢香气外放、酸甜直接、像果汁一样饱满的咖啡。",
    stamp: "JUICY ROUTE"
  },
  "甜感柔和": {
    name: "温柔甜感型",
    phrase: "更在意柔软甜感、圆润口感和不用解释的舒服。",
    stamp: "SOFT SWEETNESS"
  },
  "坚果可可": {
    name: "深色安定型",
    phrase: "偏爱低酸、黑巧、坚果和更沉稳的深色甜感。",
    stamp: "DARK COMFORT"
  },
  "产地代表": {
    name: "产地探索型",
    phrase: "会被产地个性、结构感和清楚的风味标识吸引。",
    stamp: "ORIGIN SEEKER"
  }
};

function getFlavorSignature(topGroup, topFamily, topWords, total) {
  const profile = signatureProfiles[topGroup] || {
    name: `${topFamily}读者`,
    phrase: `更容易被「${topFamily}」吸引。`,
    stamp: "LIVE PROFILE"
  };

  return {
    ...profile,
    note: `基于你收藏的 ${total} 张风味卡，我们读到一条清晰线索：你更容易被「${topFamily}」吸引。${topWords.join("、")} 是你目前最常选择的味觉关键词。`
  };
}

/* ---------- 渲染：风味卡 ---------- */
function renderFlavorCards(filterCategory = activeFlavorCategory) {
  activeFlavorCategory = filterCategory;
  const savedFlavors = getSavedFlavors();
  const rail = document.getElementById("flavorRail");

  const filteredCards = flavorCards.map((c, i) => ({ ...c, originalIndex: i }))
    .filter(c => {
      if (filterCategory === "全部") return true;
      return c.filterGroup === filterCategory;
    });

  if (filteredCards.length === 0) {
    rail.innerHTML = `<p class="rail-empty" style="text-align:center;width:100%;color:var(--muted);padding:40px 0;font-family:var(--sans);font-size:14px;">暂无相关风味卡片</p>`;
    return;
  }

  rail.innerHTML = filteredCards.map(c => {
    const isSaved = savedFlavors.includes(c.name);
    return `
    <article class="flavor-card" data-index="${c.originalIndex}">
      <div class="fc-photo">
        <span class="fc-accent" style="background:${c.accent}"></span>
        <img src="${c.photo}" alt="${c.name}" loading="eager" decoding="async">
        <button class="bookmark-button ${isSaved ? 'is-saved' : ''}" data-card="${c.originalIndex}" aria-label="收藏 ${c.name}">
          ${isSaved ? '★' : '⌖'}
        </button>
      </div>
      <div class="fc-body">
        <h3 class="fc-name">${c.name}</h3>
        <p class="fc-line">${c.magazineLine}</p>
        <div class="fc-words">${c.flavorWords.map(w => `<span class="flavor-chip">${w}</span>`).join("")}</div>
        <p class="fc-meta"><b>产地</b> ${c.origin}<br><b>处理</b> ${c.process}</p>
        <p class="fc-desc">${c.description}</p>
      </div>
    </article>`;
  }).join("");

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
      showSaveToast(getSaveToastMessage(card, savedFlavors.length, isSaved));
      renderFlavorShelf();
      renderProfiles();

      if (document.querySelector('.tab-panel[data-panel="preference"]').classList.contains("is-active")) {
        document.querySelectorAll('.pb-fill').forEach(el => el.style.width = "0");
        requestAnimationFrame(() => requestAnimationFrame(animateBars));
      }
    });
  });

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

function setActiveFlavorCategory(category, options = {}) {
  activeFlavorCategory = category;
  document.querySelectorAll(".category-chip").forEach(chip => {
    chip.classList.toggle("is-active", chip.dataset.category === category);
  });
  renderFlavorCards(category);

  const rail = document.getElementById("flavorRail");
  if (rail && options.scrollToStart !== false) {
    rail.scrollTo({ left: 0, behavior: options.behavior || "smooth" });
  }
}

function setupCategoryChips() {
  const categoryChips = document.getElementById("categoryChips");
  if (!categoryChips) return;

  categoryChips.querySelectorAll(".category-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      setActiveFlavorCategory(chip.dataset.category || "全部");
    });
  });
}

function renderDemoRoute() {
  const routeRoot = document.getElementById("demoRoute");
  if (!routeRoot) return;

  routeRoot.innerHTML = `
    <div class="route-head">
      <span class="route-title">本期阅读路线</span>
      <span class="route-label">DEMO PATH</span>
    </div>
    <div class="route-steps">
      ${demoRoutes.map(route => `
        <button class="route-step" data-tab="${route.tab}" type="button">
          <span class="route-num">${route.step}</span>
          <span>
            <span class="route-name">${route.name}</span>
            <span class="route-desc">${route.desc}</span>
          </span>
        </button>`).join("")}
    </div>`;

  routeRoot.querySelectorAll(".route-step").forEach(step => {
    step.addEventListener("click", () => {
      const target = step.dataset.tab;
      const tabButton = document.querySelector(`.tab-btn[data-tab="${target}"]`);
      if (tabButton) tabButton.click();
    });
  });
}

function renderTopicPreview() {
  const topicRoot = document.getElementById("topicPreview");
  if (!topicRoot) return;

  topicRoot.innerHTML = `
    <div class="topic-head">
      <h3 class="topic-title">编辑选题</h3>
      <span class="topic-kicker">CURATED ROUTES</span>
    </div>
    <div class="topic-list">
      ${topicPreviews.map(topic => `
        <article class="topic-card" data-topic="${topic.id}" data-category="${topic.category}" style="--topic-color:${topic.color}">
          <span class="topic-meta">${topic.label}</span>
          <h4 class="topic-name">${topic.name}</h4>
          <p class="topic-desc">${topic.desc}</p>
          <span class="topic-link">打开专题阅读</span>
        </article>`).join("")}
    </div>`;

  topicRoot.querySelectorAll(".topic-card").forEach(card => {
    card.addEventListener("click", () => {
      openTopicIssue(card.dataset.topic);
    });
  });
}

function setupTopicModal() {
  const modal = document.getElementById("topicModal");
  const overlay = document.getElementById("topicModalOverlay");
  const closeButton = document.getElementById("topicModalClose");

  if (!modal || !overlay || !closeButton) return;

  const close = () => closeTopicIssue();
  overlay.addEventListener("click", close);
  closeButton.addEventListener("click", close);
}

function openTopicIssue(topicId) {
  const topic = topicPreviews.find(item => item.id === topicId);
  const modal = document.getElementById("topicModal");
  const body = document.getElementById("topicModalBody");
  const screen = document.getElementById("screen");
  if (!topic || !modal || !body) return;

  const cards = topic.cardNames
    .map(name => {
      const index = flavorCards.findIndex(card => card.name === name);
      return index >= 0 ? { ...flavorCards[index], originalIndex: index } : null;
    })
    .filter(Boolean);

  body.innerHTML = `
    <span class="issue-label">${topic.label}</span>
    <h3 class="issue-title">${topic.name}</h3>
    <p class="issue-lead">${topic.desc}</p>
    <div class="issue-points">
      ${topic.points.map(point => `
        <div class="issue-point">
          <strong>${point[0]}</strong>
          <span>${point[1]}</span>
        </div>`).join("")}
    </div>
    <h4 class="issue-section-title">本专题风味卡</h4>
    <div class="issue-card-list">
      ${cards.map(card => `
        <article class="issue-card" data-card="${card.originalIndex}">
          <img src="${card.photo}" alt="${card.name}" loading="eager" decoding="async">
          <div class="issue-card-body">
            <div class="issue-card-name">${card.name}</div>
            <div class="issue-card-meta">${card.flavorWords.join(" / ")}<br>${getPrimaryOrigin(card.origin)} · ${card.process}</div>
          </div>
        </article>`).join("")}
    </div>
    <div class="issue-action-row">
      <button class="issue-filter-btn" data-category="${topic.category}" type="button">查看这条风味路线</button>
    </div>`;

  body.querySelectorAll(".issue-card").forEach(card => {
    card.addEventListener("click", () => {
      const cardIndex = parseInt(card.dataset.card);
      closeTopicIssue();
      if (typeof window.openFlavorDetail === "function") {
        window.openFlavorDetail(cardIndex);
      }
    });
  });

  body.querySelector(".issue-filter-btn")?.addEventListener("click", () => {
    closeTopicIssue();
    setActiveFlavorCategory(topic.category);
    document.getElementById("flavorRail")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  modal.classList.add("is-active");
  if (screen) screen.style.overflowY = "hidden";
}

function closeTopicIssue() {
  const modal = document.getElementById("topicModal");
  const screen = document.getElementById("screen");
  if (!modal) return;

  modal.classList.remove("is-active");
  if (screen && !document.getElementById("detailModal")?.classList.contains("is-active")) {
    screen.style.overflowY = "auto";
  }
}

/* ---------- 渲染：链路 ---------- */
function renderJourney() {
  document.getElementById("journeySteps").innerHTML = journeySteps.map(s => `
    <div class="journey-step">
      <img src="${s.photo}" alt="${s.name}" loading="eager" decoding="async">
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
function renderFlavorShelf() {
  const shelfRoot = document.getElementById("flavorShelf");
  if (!shelfRoot) return;

  const savedCards = getCardsByNames(getSavedFlavors()).map(card => ({
    ...card,
    originalIndex: flavorCards.findIndex(item => item.name === card.name)
  }));

  shelfRoot.innerHTML = `
    <div class="shelf-card">
      <div class="shelf-head">
        <span class="shelf-title">我的风味书架</span>
        <span class="shelf-count">${savedCards.length} SAVED</span>
      </div>
      ${savedCards.length ? `
        <div class="shelf-list">
          ${savedCards.map(card => `
            <article class="shelf-item" data-card="${card.originalIndex}">
              <img src="${card.photo}" alt="${card.name}" loading="eager" decoding="async">
              <div class="shelf-item-name">${card.name}</div>
              <div class="shelf-item-note">${card.flavorWords.slice(0, 2).join(" / ")}</div>
            </article>`).join("")}
        </div>` : `
        <p class="shelf-empty">收藏一张风味卡后，这里会变成你的私人风味书架。</p>`}
    </div>`;

  shelfRoot.querySelectorAll(".shelf-item").forEach(item => {
    item.addEventListener("click", () => {
      const cardIndex = parseInt(item.dataset.card);
      if (typeof window.openFlavorDetail === "function") {
        window.openFlavorDetail(cardIndex);
      }
    });
  });
}

function renderProfiles() {
  const profileRoot = document.getElementById("profiles");
  const profileFoot = document.getElementById("profileFoot");
  const savedCards = getCardsByNames(getSavedFlavors());

  if (!savedCards.length) {
    profileRoot.innerHTML = `
      <div class="profile-empty">
        <div class="profile-empty-title">先选几杯你想喝的</div>
        <p>不用做测试。只要收藏几张想喝的风味卡，这里就会长出你的第一份味觉签名。</p>
      </div>
      ${profiles.map(p => `
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
    </div>`).join("")}`;

    if (profileFoot) {
      profileFoot.textContent = "未收藏时展示模拟画像；收藏后会切换为你的动态风味签名。";
    }
    return;
  }

  const familyCounts = sortCounts(countBy(savedCards, card => card.primaryFamily));
  const groupCounts = sortCounts(countBy(savedCards, card => card.filterGroup));
  const wordCounts = sortCounts(savedCards.reduce((acc, card) => {
    card.flavorWords.forEach(word => {
      acc[word] = (acc[word] || 0) + 1;
    });
    return acc;
  }, {}));

  const total = savedCards.length;
  const topFamily = familyCounts[0][0];
  const topGroup = groupCounts[0][0];
  const topWords = wordCounts.slice(0, 4).map(([word]) => word);
  const signature = getFlavorSignature(topGroup, topFamily, topWords, total);
  const bars = familyCounts.slice(0, 4).map(([family, count]) => ({
    label: family,
    pct: Math.round(count / total * 100),
    color: getFamilyColor(family)
  }));

  const recommended = flavorCards
    .map((card, index) => ({ ...card, originalIndex: index }))
    .filter(card => !savedCards.some(saved => saved.name === card.name))
    .map(card => ({
      ...card,
      score:
        (card.primaryFamily === topFamily ? 5 : 0) +
        (card.filterGroup === topGroup ? 3 : 0) +
        card.flavorWords.filter(word => topWords.includes(word)).length * 2
    }))
    .sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex)
    .slice(0, 3);

  profileRoot.innerHTML = `
    <div class="profile-card live-signature-card">
      <div class="profile-head">
        <span class="profile-name">${signature.name}</span>
        <span class="profile-tag">${signature.stamp}</span>
      </div>
      <div class="signature-line">你的风味签名：${signature.phrase}</div>
      <p class="profile-note">${signature.note}</p>
      ${bars.map(b => `
        <div class="preference-bar">
          <div class="pb-top"><span>${b.label}</span><span class="pb-pct">${b.pct}%</span></div>
          <div class="pb-track"><div class="pb-fill" data-pct="${b.pct}" style="background:${b.color}"></div></div>
        </div>`).join("")}
      <div class="profile-rec">
        <span class="rec-label">继续读</span>
        ${recommended.map(card => `<button class="rec-chip rec-button" data-card="${card.originalIndex}" type="button">${card.name}</button>`).join("")}
      </div>
      <div class="profile-saved-note">已收藏：${savedCards.map(card => card.name).join("、")}</div>
    </div>`;

  profileRoot.querySelectorAll(".rec-button").forEach(button => {
    button.addEventListener("click", () => {
      const cardIndex = parseInt(button.dataset.card);
      if (typeof window.openFlavorDetail === "function") {
        window.openFlavorDetail(cardIndex);
      }
    });
  });

  if (profileFoot) {
    profileFoot.textContent = "风味签名仅保存在本机浏览器，用于展示风味内容如何被沉淀成用户兴趣资产。";
  }
}

function renderFlavorCompass(card) {
  const compassRoot = document.getElementById("modalCompass");
  if (!compassRoot) return;

  const coordinates = getFlavorCoordinates(card);
  const axes = [
    { label: "明亮度", value: coordinates.bright, color: "var(--citrus)" },
    { label: "甜感", value: coordinates.sweet, color: "var(--honey)" },
    { label: "醇厚度", value: coordinates.body, color: "var(--cocoa)" }
  ];

  compassRoot.innerHTML = `
    <div class="compass-head">
      <span class="compass-title">这杯的味觉重心</span>
      <span class="compass-label">TASTE AXIS</span>
    </div>
    ${axes.map(axis => `
      <div class="compass-axis">
        <div class="axis-top"><span>${axis.label}</span><span class="axis-value">${axis.value}</span></div>
        <div class="axis-track"><div class="axis-fill" style="width:${axis.value}%; --axis-color:${axis.color}"></div></div>
      </div>`).join("")}`;
}

function renderTasteScene(card) {
  const sceneRoot = document.getElementById("modalTasteScene");
  if (!sceneRoot) return;

  const scene = card.detail.tasteScene || [];
  const labels = ["第一口", "中段", "尾韵"];
  sceneRoot.innerHTML = `
    <div class="taste-scene-head">
      <span>三幕品鉴</span>
      <small>FIRST / MIDDLE / FINISH</small>
    </div>
    <div class="taste-scene-grid">
      ${labels.map((label, index) => `
        <div class="taste-scene-item">
          <strong>${label}</strong>
          <p>${scene[index] || card.description}</p>
        </div>`).join("")}
    </div>`;
}

/* ---------- 渲染：索引 ---------- */
function renderIndex() {
  document.getElementById("indexGrid").innerHTML = indexGroups.map((g, index) => {
    const count = flavorCards.filter(card => card.primaryFamily === g.name).length;
    return `
    <div class="index-group" data-family="${g.name}" style="--g-color:${g.color}">
      <div class="ig-shelf">SHELF ${String(index + 1).padStart(2, "0")}</div>
      <div class="ig-name"><span>${g.name}</span><span class="ig-count">${count}</span></div>
      <div class="ig-words">${g.words.map(w => `<span class="ig-word">${w}</span>`).join("")}</div>
    </div>`;
  }).join("");
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

      const topicModal = document.getElementById("topicModal");
      if (topicModal && topicModal.classList.contains("is-active")) {
        topicModal.classList.remove("is-active");
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
  const modalContent = modal.querySelector(".modal-content");

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
    document.getElementById("modalLine").textContent = card.magazineLine;
    document.getElementById("modalWords").innerHTML = card.flavorWords.map(w => `<span class="flavor-chip">${w}</span>`).join("");
    document.getElementById("modalOrigin").textContent = card.origin;
    document.getElementById("modalProcess").textContent = card.process;
    document.getElementById("modalTemp").textContent = card.detail.temp;
    document.getElementById("modalRatio").textContent = card.detail.ratio;
    document.getElementById("modalStory").textContent = card.detail.story;
    document.getElementById("modalBrew").textContent = card.detail.brew;
    renderFlavorCompass(card);
    renderTasteScene(card);
    renderRelatedFlavors(index);

    modal.classList.add("is-active");
    document.getElementById("screen").style.overflowY = "hidden";
    if (modalContent) modalContent.scrollTop = 0;
  };
}

function renderRelatedFlavors(index) {
  const relatedRoot = document.getElementById("modalRelated");
  if (!relatedRoot) return;

  const relatedCards = getSimilarFlavorCards(index, 3);
  relatedRoot.innerHTML = `
    <div class="modal-divider"></div>
    <div class="related-head">
      <h4>如果你喜欢这一杯</h4>
      <span>SIMILAR NOTES</span>
    </div>
    <div class="related-list">
      ${relatedCards.map(card => `
        <article class="related-card" data-card="${card.originalIndex}">
          <img src="${card.photo}" alt="${card.name}" loading="eager" decoding="async">
          <div>
            <div class="related-name">${card.name}</div>
            <div class="related-reason">${card.reason}</div>
            <div class="related-words">${card.flavorWords.slice(0, 3).map(word => `<span>${word}</span>`).join("")}</div>
          </div>
        </article>`).join("")}
    </div>`;

  relatedRoot.querySelectorAll(".related-card").forEach(card => {
    card.addEventListener("click", () => {
      const nextIndex = parseInt(card.dataset.card);
      if (typeof window.openFlavorDetail === "function") {
        window.openFlavorDetail(nextIndex);
      }
    });
  });
}

function setupCoverEntry() {
  const startExplore = document.getElementById("startExplore");
  const flavorTabBtn = document.querySelector('.tab-btn[data-tab="flavor"]');

  if (!startExplore || !flavorTabBtn) return;

  startExplore.addEventListener("click", () => {
    flavorTabBtn.click();
    showSaveToast("本期从 22 张风味卡开始。");
  });
}

/* ---------- 索引与风味联动 ---------- */
function setupIndexLink() {
  const indexGrid = document.getElementById("indexGrid");
  indexGrid.querySelectorAll(".index-group").forEach(group => {
    group.addEventListener("click", () => {
      const familyName = group.dataset.family;
      const cardIndex = flavorCards.findIndex(c => c.primaryFamily === familyName);
      if (cardIndex !== -1) {
        // 1. 切换到风味 Tab
        const flavorTabBtn = document.querySelector('.tab-btn[data-tab="flavor"]');
        if (flavorTabBtn) {
          flavorTabBtn.click();
        }

        setActiveFlavorCategory("全部", { scrollToStart: false, behavior: "auto" });

        // 2. 平滑滚动到对应卡片
        setTimeout(() => {
          const rail = document.getElementById("flavorRail");
          const targetCard = rail.querySelector(`.flavor-card[data-index="${cardIndex}"]`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            showSaveToast(`已定位到「${familyName}」家族的第一张卡。`);

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
renderAssetStats();
setupCoverCarousel();
renderDemoRoute();
renderFlavorCards();
renderTopicPreview();
renderJourney();
renderFlavorShelf();
renderProfiles();
renderIndex();
setupTabs();
setupCoverEntry();
setupCategoryChips();
setupTopicModal();
initModal();
setupIndexLink();
