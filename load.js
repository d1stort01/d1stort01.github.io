var 引流 = [
    "https://space.bilibili.com/672328094",
    "https://www.bilibili.com/video/BV1FZ4y1F7HH",
    "https://www.bilibili.com/video/BV1FX4y1g7u8",
    "https://www.bilibili.com/video/BV1aK4y1P7Cg",
    "https://www.bilibili.com/video/BV17A411V7Uh",
    "https://www.bilibili.com/video/BV1JV411b7Pc",
    "https://www.bilibili.com/video/BV1AV411v7er",
    "https://www.bilibili.com/video/BV1564y1173Q",

    "https://www.bilibili.com/video/BV1MX4y1N75X",
    "https://www.bilibili.com/video/BV17h411U71w",
    "https://www.bilibili.com/video/BV1ry4y1Y71t",
    "https://www.bilibili.com/video/BV1Sy4y1n7c4",
    "https://www.bilibili.com/video/BV15y4y177uk",
    "https://www.bilibili.com/video/BV1PN411X7QW",
    "https://www.bilibili.com/video/BV1Dp4y1H7iB",
    "https://www.bilibili.com/video/BV1bi4y1P7Eh",
    "https://www.bilibili.com/video/BV1vQ4y1Z7C2",
    "https://www.bilibili.com/video/BV1oU4y1h7Sc",
]

const initConfig = {
    mode: "fixed",
    hidden: true,
    content: {
        link: 引流[Math.floor(Math.random() * 引流.length)],
        welcome: ["Hi!"],
        touch: "",
        skin: ["诶，想看看其他团员吗？", "替换后入场文本"],
        custom: [
            { "selector": ".comment-form", "text": "Content Tooltip" },
            { "selector": ".home-social a:last-child", "text": "Blog Tooltip" },
            { "selector": ".list .postname", "type": "read" },
            { "selector": ".post-content a, .page-content a, .post a", "type": "link" }
        ],
    },
    night: "toggleNightMode()",
    model: [
        "https://cdn.jsdelivr.net/gh/journey-ad/blog-img/live2d/Diana/Diana.model3.json",
        "https://cdn.jsdelivr.net/gh/journey-ad/blog-img/live2d/Ava/Ava.model3.json",
    ],
    tips: true,
    onModelLoad: onModelLoad
}

function 加载嘉然() {
    pio_reference = new Paul_Pio(initConfig)

    pio_alignment = "left"

    // Then apply style
    pio_refresh_style()
}

function onModelLoad(model) {
    const container = document.getElementById("pio-container")
    const canvas = document.getElementById("pio")
    const modelNmae = model.internalModel.settings.name
    const coreModel = model.internalModel.coreModel
    const motionManager = model.internalModel.motionManager

    let touchList = [{
            text: "点击展示文本1",
            motion: "Idle"
        },
        {
            text: "点击展示文本2",
            motion: "Idle"
        }
    ]

    function playAction(action) {
        action.text && pio_reference.modules.render(action.text)
        action.motion && pio_reference.model.motion(action.motion)

        if (action.from && action.to) {
            Object.keys(action.from).forEach(id => {
                const hidePartIndex = coreModel._partIds.indexOf(id)
                TweenLite.to(coreModel._partOpacities, 0.6, {
                    [hidePartIndex]: action.from[id]
                });
                // coreModel._partOpacities[hidePartIndex] = action.from[id]
            })

            motionManager.once("motionFinish", (data) => {
                Object.keys(action.to).forEach(id => {
                    const hidePartIndex = coreModel._partIds.indexOf(id)
                    TweenLite.to(coreModel._partOpacities, 0.6, {
                        [hidePartIndex]: action.to[id]
                    });
                    // coreModel._partOpacities[hidePartIndex] = action.to[id]
                })
            })
        }
    }

    canvas.onclick = function() {
        if (motionManager.state.currentGroup !== "Idle") return

        const action = pio_reference.modules.rand(touchList)
        playAction(action)
    }

    if (modelNmae === "Diana") {
        container.dataset.model = "Diana"
        initConfig.content.skin[1] = ["我是吃货担当 嘉然 Diana~"]
        playAction({ motion: "Tap抱阿草-左手" })

        touchList = [{
                text: "嘉心糖屁用没有",
                motion: "Tap生气 -领结"
            },
            {
                text: "有人急了，但我不说是谁~",
                motion: "Tap= =  左蝴蝶结"
            },
            {
                text: "呜呜...呜呜呜....",
                motion: "Tap哭 -眼角"
            },
            {
                text: "想然然了没有呀~",
                motion: "Tap害羞-中间刘海"
            },
            {
                text: "阿草好软呀~",
                motion: "Tap抱阿草-左手"
            },
            {
                text: "不要再戳啦！好痒！",
                motion: "Tap摇头- 身体"
            },
            {
                text: "嗷呜~~~",
                motion: "Tap耳朵-发卡"
            },
            {
                text: "zzZ。。。",
                motion: "Leave"
            },
            {
                text: "哇！好吃的！",
                motion: "Tap右头发"
            },
        ]

    } else if (modelNmae === "Ava") {
        container.dataset.model = "Ava"
        initConfig.content.skin[1] = ["我是<s>拉胯</s>Gamer担当 向晚 AvA~"]
        playAction({
            motion: "Tap左眼",
            from: {
                "Part15": 1
            },
            to: {
                "Part15": 0
            }
        })

        touchList = [{
                text: "水母 水母~ 只是普通的生物",
                motion: "Tap右手"
            },
            {
                text: "可爱的鸽子鸽子~我喜欢你~",
                motion: "Tap胸口项链",
                from: {
                    "Part12": 1
                },
                to: {
                    "Part12": 0
                }
            },
            {
                text: "好...好兄弟之间喜欢很正常啦",
                motion: "Tap中间刘海",
                from: {
                    "Part12": 1
                },
                to: {
                    "Part12": 0
                }
            },
            {
                text: "啊啊啊！怎么推流辣",
                motion: "Tap右眼",
                from: {
                    "Part16": 1
                },
                to: {
                    "Part16": 0
                }
            },
            {
                text: "你怎么老摸我，我的身体是不是可有魅力",
                motion: "Tap嘴"
            },
            {
                text: "AAAAAAAAAAvvvvAAA 向晚！",
                motion: "Tap左眼",
                from: {
                    "Part15": 1
                },
                to: {
                    "Part15": 0
                }
            }
        ]
        canvas.width = model.width * 1.2
        const hideParts = [
            "Part5", // 晕
            "neko", // 喵喵拳
            "game", // 左手游戏手柄
            "Part15", // 墨镜
            "Part21", // 右手小臂
            "Part22", // 左手垂下
            "Part", // 双手抱拳
            "Part16", // 惊讶特效
            "Part12" // 小心心
        ]
        const hidePartsIndex = hideParts.map(id => coreModel._partIds.indexOf(id))
        hidePartsIndex.forEach(idx => {
            coreModel._partOpacities[idx] = 0
        })
    }
}





var Calendar = function(t) {
    this.divId = t.RenderID ? t.RenderID : '[data-render="calendar"]', this.DaysOfWeek = t.DaysOfWeek ? t.DaysOfWeek : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], this.Months = t.Months ? t.Months : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var e = new Date;
    this.CurrentMonth = e.getMonth(), this.CurrentYear = e.getFullYear();
    var r = t.Format;
    this.f = "string" == typeof r ? r.charAt(0).toUpperCase() : "M"
};
Calendar.prototype.nextMonth = function() {
    11 == this.CurrentMonth ? (this.CurrentMonth = 0, this.CurrentYear = this.CurrentYear + 1) : this.CurrentMonth = this.CurrentMonth + 1, this.divId = '[data-active="false"] .render', this.showCurrent()
}, Calendar.prototype.prevMonth = function() {
    0 == this.CurrentMonth ? (this.CurrentMonth = 11, this.CurrentYear = this.CurrentYear - 1) : this.CurrentMonth = this.CurrentMonth - 1, this.divId = '[data-active="false"] .render', this.showCurrent()
}, Calendar.prototype.previousYear = function() {
    this.CurrentYear = this.CurrentYear - 1, this.showCurrent()
}, Calendar.prototype.nextYear = function() {
    this.CurrentYear = this.CurrentYear + 1, this.showCurrent()
}, Calendar.prototype.showCurrent = function() {
    this.Calendar(this.CurrentYear, this.CurrentMonth)
}, Calendar.prototype.checkActive = function() {
    1 == document.querySelector(".months").getAttribute("class").includes("active") ? document.querySelector(".months").setAttribute("class", "months") : document.querySelector(".months").setAttribute("class", "months active"), "true" == document.querySelector(".month-a").getAttribute("data-active") ? (document.querySelector(".month-a").setAttribute("data-active", !1), document.querySelector(".month-b").setAttribute("data-active", !0)) : (document.querySelector(".month-a").setAttribute("data-active", !0), document.querySelector(".month-b").setAttribute("data-active", !1)), setTimeout(function() {
        document.querySelector(".calendar .header").setAttribute("class", "header active")
    }, 200), document.querySelector("body").setAttribute("data-theme", this.Months[document.querySelector('[data-active="true"] .render').getAttribute("data-month")].toLowerCase())
}, Calendar.prototype.Calendar = function(t, e) {
    "number" == typeof t && (this.CurrentYear = t), "number" == typeof t && (this.CurrentMonth = e);
    var r = (new Date).getDate(),
        n = (new Date).getMonth(),
        a = (new Date).getFullYear(),
        o = new Date(t, e, 1).getDay(),
        i = new Date(t, e + 1, 0).getDate(),
        u = 0 == e ? new Date(t - 1, 11, 0).getDate() : new Date(t, e, 0).getDate(),
        s = "<span>" + this.Months[e] + " &nbsp; " + t + "</span>",
        d = '<div class="table">';
    d += '<div class="row head">';
    for (var c = 0; c < 7; c++) d += '<div class="cell">' + this.DaysOfWeek[c] + "</div>";
    d += "</div>";
    for (var h, l = dm = "M" == this.f ? 1 : 0 == o ? -5 : 2, v = (c = 0, 0); v < 6; v++) {
        d += '<div class="row">';
        for (var m = 0; m < 7; m++) {
            if ((h = c + dm - o) < 1) d += '<div class="cell disable">' + (u - o + l++) + "</div>";
            else if (h > i) d += '<div class="cell disable">' + l++ + "</div>";
            else {
                d += '<div class="cell' + (r == h && this.CurrentMonth == n && this.CurrentYear == a ? " active" : "") + '"><span>' + h + "</span></div>", l = 1
            }
            c % 7 == 6 && h >= i && (v = 10), c++
        }
        d += "</div>"
    }
    d += "</div>", document.querySelector('[data-render="month-year"]').innerHTML = s, document.querySelector(this.divId).innerHTML = d, document.querySelector(this.divId).setAttribute("data-date", this.Months[e] + " - " + t), document.querySelector(this.divId).setAttribute("data-month", e)
}, window.onload = function() {
    pio_reference = new Paul_Pio(initConfig)

    pio_alignment = "left"

    // Then apply style
    pio_refresh_style()
    var t = new Calendar({
        RenderID: ".render-a",
        Format: "M"
    });
    t.showCurrent(), t.checkActive();
    var e = document.querySelectorAll(".header [data-action]");
    for (i = 0; i < e.length; i++) e[i].onclick = function() {
        if (document.querySelector(".calendar .header").setAttribute("class", "header"), "true" == document.querySelector(".months").getAttribute("data-loading")) return document.querySelector(".calendar .header").setAttribute("class", "header active"), !1;
        var e;
        document.querySelector(".months").setAttribute("data-loading", "true"), this.getAttribute("data-action").includes("prev") ? (t.prevMonth(), e = "left") : (t.nextMonth(), e = "right"), t.checkActive(), document.querySelector(".months").setAttribute("data-flow", e), document.querySelector('.month[data-active="true"]').addEventListener("webkitTransitionEnd", function() {
            document.querySelector(".months").removeAttribute("data-loading")
        }), document.querySelector('.month[data-active="true"]').addEventListener("transitionend", function() {
            document.querySelector(".months").removeAttribute("data-loading")
        })
    }
};


var pio_reference