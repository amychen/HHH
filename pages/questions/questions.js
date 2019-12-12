// pages/questions/questions.js
Page({
  data: {
    currentQuestion: 0,
    englishQuestions: [
      {
        question: 'WHICH APPLIES TO YOU THE MOST?',
        options: ['Analytical', 'Creative', 'Extroverted']
      }, 
      {
        question: 'WHAT WOULD YOU RATHER WATCH?',
        options: ['Star Wars', 'Stranger Things', 'Suits']
      }, 
      {
        question: 'WHAT WOULD YOU WANT THE MOST?',
        options: ['Gaming PC', 'iPad Pro with Pencil', 'Latest iPhone']
      },
      {
        question: 'WHICH IS MORE IMPORTANT WHEN BUILDING DIGITAL PRODUCTS？',
        options: ['No bugs and many features', 'Solid business plan', 'Intuitive design']
      },
      {
        question: 'WHAT HOBBIES WOULD YOU PICK UP?',
        options: ['Lego / Woodwork', 'A Competitive Sport', 'Painting / Graphic Design']
      },
      {
        question: 'WHAT DESCRIBES YOU THE MOST?',
        options: ['Focused', 'Go-getter', 'Empathetic']
      },
      {
        question: 'SEE RESULTS?',
        options: ['Submit']
      }
    ],
    chineseQuestions: [
      {
        question: '哪个词形容你最合适？',
        options: ['分析', '创造', '外向']
      },
      {
        question: '你更喜欢看哪个？',
        options: ['星球大战', '奇葩说', '权利的游戏']
      },
      {
        question: '这几个礼物里你最喜欢哪个?',
        options: ['带苹果铅笔的iPad Pro', '游戏机', '最新的苹果手机']
      },
      {
        question: '构建一款熟悉产品时最重要的是？',
        options: ['直观美观的设计', '实际稳固的业务和营销计划', '没有Bug,功能强']
      },
      {
        question: '你会尝试下列那种爱好？',
        options: ['竞技体育', '乐高积木或者木匠活', '绘画和平面设计']
      },
      {
        question: '哪个词形容你最合适？',
        options: ['行动者', '专注', '善解人意']
      },
      {
        question: '查看结果',
        options: ['提交']
      }
    ],
    answers: [0, 0, 0, 0, 0, 0],
    language: "",
  },

  bindViewTap: function () {
    let hacker = 0;
    let hipster = 0;
    let hustler = 0;
    for (var i = 0; i < this.data.answers.length; i++) {
      if (this.data.answers[i] === 0) {
        hacker += 1;
      } else if (this.data.answers[i] === 1) {
        hipster += 1;
      } else {
        hustler += 1;
      }
    }
    const total = hacker + hipster + hustler;
    wx.navigateTo({
      url: '../result/result?hacker=' + hacker/total
      + '&hipster=' + hipster/total 
      + '&hustler=' + hustler/total 
    })
  },

  onLoad: function (options) {
    this.setData({language: options.language});
  },

  onReady: function() {
    wx.loadFontFace({
      family: "Circular Black",
      source: 'url("https://cloud-minapp-13908.cloud.ifanrusercontent.com/1gqb9L1kfJbwLQAt.ttf")',
    });
  },

  goToNextQues: function(event) {
    const quesNum = event.currentTarget.dataset.variable + 1;
    this.setData({ currentQuestion: quesNum});
    
    let answer = event.currentTarget.dataset.option;
    if (answer !== "Submit" && answer !== "提交") {
      const options = this.data.englishQuestions[quesNum - 1].options;
      this.data.answers[quesNum - 1] = options.indexOf(answer);
    } else {
      this.bindViewTap();
    }
  }
})