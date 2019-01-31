/*代理商 兑出*/
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [
      {
        icon: "icon-match",
        text: "兑入订单管理",
        href: "match.html"
      },
      {
        icon: "icon-cash-out",
        text: "兑出订单管理",
        href: "cash_out.html"
      },
      {
        icon: "icon-gathering",
        text: "收款订单管理",
        href: "gathering.html"
      },
      {
        icon: "icon-bill",
        text: "账单管理",
        href: "bill.html"
      },
      {
        icon: "icon-rebate",
        text: "返佣管理",
        href: "rebate.html"
      },
      {
        icon: "icon-users",
        text: "用户管理",
        href: "users.html"
      },
      {
        icon: "icon-config-manage",
        text: "配置管理",
        href: "config_manage.html"
      }
    ],
    userName: '张三',

    orderIndex: 0,
    orderText: [
      '介绍人管理',
      '经纪商管理',
      '服务商管理',
    ],

    // 添加介绍人
    addIntroducer: {
      userName: '',
      name: '',
      phone: '',
      procedureFee: '',
    },

    introduceOrBroker: [
      '添加介绍人',
      '添加经纪商',
      ''
    ],

    statusText: [
      {
        val1: '名称',
        val2: '电话'
      },
      {
        val1: '介绍人',
        val2: '商户名称'
      }
    ],

    isShowAdd: false,

    // 用户管理
    matchOrderFinishData: [
      {
        title: '经纪商（user1）确认',
        zfk: '2018.08.03',
        hms: '14:20:20',
      },
      {
        title: '服务商（user2）确认打款',
        zfk: '2018.08.03',
        hms: '14:20:20',
      },
      {
        title: '经纪商（user1）创建出金订单',
        zfk: '2018.08.03',
        hms: '14:20:20',
      }
    ],
    finishIndex: 1, // 日志完成的步骤(从0开始)

    // 当前服务商
    currentFacilitator: '服务商组1',


    // 服务商组
    cashOutSet: false,
    setSucceed: false,

    // 服务商组数据
    facilitatorGroupData: [
      {
        title: '服务商组1  服务商数量10',
        RMBCashOut: '6.87',
        RMCashOut: '6.62',
      },
      {
        title: '服务商组2  服务商数量10',
        RMBCashOut: '6.87',
        RMCashOut: '6.62',
      },
      {
        title: '服务商组3  服务商数量10',
        RMBCashOut: '6.87',
        RMCashOut: '6.62',
      },
    ]
  },

  methods: {
    orderTextTab: function (index) {
      this.orderIndex = index
    },

    addIntroduceHandle: function (orderIndex) {
      if(orderIndex === 0){
        this.isShowAdd = true
      }
      if(orderIndex === 1){
        location.href = './add_broker.html'
      }
    },
    closeCashOutSet: function () {
      this.isShowAdd = false

      this.cashOutSet = false
    },

    submitSmsCode: function () {
      axios.post('url')
        .then(function (response) {
          // handle success
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
      this.isShowAdd = false

      this.cashOutSet = false
      this.setSucceed = true
    },

    facilitatorFix: function () {
      this.cashOutSet = true
    },

    facilitatorClose: function () {
      this.cashOutSet = false
    },
  }
})