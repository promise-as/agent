/*代理商 添加经纪商*/
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

    orderData: [
      {
        key: "*用户名：",
        val: ""
      },
      {
        key: "*商户名称：",
        val: ""
      },
      {
        key: "*商户电话：",
        val: ""
      },
      {
        key: "*商户编号：",
        val: ""
      },
      {
        key: "*加密KEY：",
        val: ""
      },
      {
        key: "选择介绍人：",
        val: ""
      }
    ],
  },
  methods: {}
})