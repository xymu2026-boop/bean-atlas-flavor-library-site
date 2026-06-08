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
    name: "浏览风味卡",
    desc: "先看到精品咖啡不止苦和酸，而是一套可阅读的风味语言。",
    tab: "flavor"
  },
  {
    step: "02",
    name: "收藏喜欢的味道",
    desc: "用收藏模拟兴趣信号，把喜欢的风味组合沉淀下来。",
    tab: "flavor"
  },
  {
    step: "03",
    name: "生成风味偏好",
    desc: "从收藏里生成偏好画像，展示内容运营和用户分层的可能性。",
    tab: "preference"
  }
];

const topicPreviews = [
  {
    id: "anaerobic",
    label: "NEXT ISSUE",
    name: "厌氧处理的果酒感",
    desc: "从莓果、香槟到白兰地，理解发酵如何把咖啡推向更鲜明的记忆点。",
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
    desc: "用白桃、乌龙和蜂蜜做线索，读懂本土产地里更温柔的一面。",
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
    desc: "为喜欢稳定、圆润、坚果可可调性的人，整理一条更舒服的风味路径。",
    category: "甜感柔和",
    color: "var(--honey)",
    cardNames: ["太妃榛果", "香草坚果", "榛果可可", "杏仁奶油"],
    points: [
      ["味觉偏好", "低酸、甜感、坚果可可是很多用户从商业咖啡进入精品咖啡的舒适路线。"],
      ["推荐逻辑", "这类风味适合承接新手，也适合做复购和日常饮用场景的内容资产。"],
      ["冲煮提醒", "稍低水温和更稳定的萃取，可以保留甜感，减少苦味和木质涩感。"]
    ]
  }
];

let activeFlavorCategory = "全部";

function getPrimaryOrigin(origin) {
  return origin.split("/")[0].trim();
}

function getAvifPath(photo) {
  return photo.replace(/\.(jpe?g|png)$/i, ".avif");
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
        <picture>
          <source srcset="${getAvifPath(c.photo)}" type="image/avif">
          <img src="${c.photo}" alt="${c.name}" loading="lazy">
        </picture>
        <button class="bookmark-button ${isSaved ? 'is-saved' : ''}" data-card="${c.originalIndex}" aria-label="收藏 ${c.name}">
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
      <h3 class="topic-title">下一期可以怎么读</h3>
      <span class="topic-kicker">EDITOR'S ROUTES</span>
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
          <picture>
            <source srcset="${getAvifPath(card.photo)}" type="image/avif">
            <img src="${card.photo}" alt="${card.name}" loading="lazy">
          </picture>
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
      <picture>
        <source srcset="${getAvifPath(s.photo)}" type="image/avif">
        <img src="${s.photo}" alt="${s.name}" loading="lazy">
      </picture>
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
  const profileRoot = document.getElementById("profiles");
  const profileFoot = document.getElementById("profileFoot");
  const savedCards = getCardsByNames(getSavedFlavors());

  if (!savedCards.length) {
    profileRoot.innerHTML = `
      <div class="profile-empty">
        <div class="profile-empty-title">先收藏几张风味卡</div>
        <p>喜欢花香、果汁感，还是温暖的坚果可可？收藏会让这里慢慢长出你的风味小档案。</p>
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
      profileFoot.textContent = "未收藏时展示模拟画像；收藏后会切换为你的动态风味偏好。";
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
    <div class="profile-card">
      <div class="profile-head">
        <span class="profile-name">${topGroup}读者</span>
        <span class="profile-tag">LIVE PROFILE</span>
      </div>
      <p class="profile-note">基于你收藏的 ${total} 张风味卡生成。当前最明显的偏好是「${topFamily}」，常出现的风味线索包括 ${topWords.join("、")}。</p>
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
    profileFoot.textContent = "偏好仅保存在本机浏览器，用于展示风味内容如何被沉淀成用户兴趣资产。";
  }
}

/* ---------- 渲染：索引 ---------- */
function renderIndex() {
  document.getElementById("indexGrid").innerHTML = indexGroups.map(g => {
    const count = flavorCards.filter(card => card.primaryFamily === g.name).length;
    return `
    <div class="index-group" data-family="${g.name}" style="--g-color:${g.color}">
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
    document.getElementById("modalPhotoAvif").srcset = getAvifPath(card.photo);
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
      <h4>继续阅读</h4>
      <span>SIMILAR NOTES</span>
    </div>
    <div class="related-list">
      ${relatedCards.map(card => `
        <article class="related-card" data-card="${card.originalIndex}">
          <picture>
            <source srcset="${getAvifPath(card.photo)}" type="image/avif">
            <img src="${card.photo}" alt="${card.name}" loading="lazy">
          </picture>
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
renderDemoRoute();
renderFlavorCards();
renderTopicPreview();
renderJourney();
renderProfiles();
renderIndex();
setupTabs();
setupCoverEntry();
setupCategoryChips();
setupTopicModal();
initModal();
setupIndexLink();
