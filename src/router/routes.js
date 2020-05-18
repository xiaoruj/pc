// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
const Search = () => import("@/pages/Search");

import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupBuy from "@/pages/Center/GroupBuy";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import store from "@/store";
import router from "@/router";
export default [
  {
    path: "/",
    component: () => import("@/pages/Home"),
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    props: (route) => ({
      keyword3: route.params.keyword,
      keyword4: route.query.keyword2,
    }),
  },
  {
    name: "detail",
    path: "/detail/:skuId",
    component: Detail,
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,

    beforeEnter(to, from, next) {
      // const route = router.currentRoute  // route就是from
      const skuNum = to.query.skuNum;
      const skuInfo = JSON.parse(window.sessionStorage.getItem("SKU_INFO_KEY"));
      console.log("---", skuNum, skuInfo);
      if (skuNum && skuInfo) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },

  {
    path: "/trade",
    component: Trade,
    beforeEnter(to, from, next) {
      if (from.path === "/shopcart") {
        next();
      } else {
        next("/shopcart");
      }
    },
  },
  {
    path: "/pay",
    component: Pay,
    props: (route) => ({ orderId: route.query.orderId }),
    beforeEnter(to, from, next) {
      if (from.path === "/trade") {
        next();
      } else {
        next("/trade");
      }
    },
  },

  {
    path: "/paysuccess",
    component: PaySuccess,
    beforeEnter(to, from, next) {
      if (from.path === "/pay") {
        next();
      } else {
        next("/pay");
      }
    },
  },
  {
    path: "/center",
    component: Center,
    children: [
      {
        // path: '/center/myorder',
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "groupbuy",
        component: GroupBuy,
      },

      {
        path: "",
        redirect: "myorder",
      },
    ],
  },

  {
    path: "/register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHideFooter: true,
    },
  },

  {
    path: "/communication",
    component: () => import("@/pages/Communication/Communication"),
    children: [
      {
        path: "event",
        component: () => import("@/pages/Communication/EventTest/EventTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "model",
        component: () => import("@/pages/Communication/ModelTest/ModelTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "sync",
        component: () => import("@/pages/Communication/SyncTest/SyncTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "attrs-listeners",
        component: () =>
          import("@/pages/Communication/AttrsListenersTest/AttrsListenersTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "children-parent",
        component: () =>
          import("@/pages/Communication/ChildrenParentTest/ChildrenParentTest"),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: "scope-slot",
        component: () =>
          import("@/pages/Communication/ScopeSlotTest/ScopeSlotTest"),
        meta: {
          isHideFooter: true,
        },
      },
    ],
  },
];
