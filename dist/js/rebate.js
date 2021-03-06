"use strict";

/*代理商 */
var app = new Vue({
  el: '#app',
  data: {
    sidebarNavList: [{
      icon: "icon-match",
      text: "兑入订单管理",
      href: "match.html"
    }, {
      icon: "icon-cash-out",
      text: "兑出订单管理",
      href: "cash_out.html"
    }, {
      icon: "icon-gathering",
      text: "收款订单管理",
      href: "gathering.html"
    }, {
      icon: "icon-bill",
      text: "账单管理",
      href: "bill.html"
    }, {
      icon: "icon-rebate",
      text: "返佣管理",
      href: "rebate.html"
    }, {
      icon: "icon-users",
      text: "用户管理",
      href: "users.html"
    }, {
      icon: "icon-config-manage",
      text: "配置管理",
      href: "config_manage.html"
    }],
    userName: '张三',

    // 兑入订单
    matchOrderFinishData: [{
      title: '经纪商（user1）确认',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '服务商（user2）确认打款',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }, {
      title: '经纪商（user1）创建出金订单',
      zfk: '2018.08.03',
      hms: '14:20:20'
    }],
    finishIndex: 1 // 日志完成的步骤(从0开始)
  }
});