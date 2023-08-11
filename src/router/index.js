// 该文件专门用于创建整个应用的路由器
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index.vue'
import Login from '../views/login/index.vue'
import Home from '../views/home/home.vue'

const Product = () => import('@/views/product/index.vue')
const List = () => import('@/views/product/list/index.vue')
const Category = () => import('@/views/product/category/index.vue')

const Order = () => import('@/views/order/index.vue')
const Collect = () => import('@/views/order/collect/index.vue')
const OrderList = () => import('@/views/order/list/index.vue')
const Contract = () => import('@/views/order/contract/index.vue')

const Advert = () => import('@/views/advert/index.vue')
const AdvertList = () => import('@/views/advert/list/index.vue')

import SystemManage from '@/views/SystemManage'
import department from '@/views/SystemManage/department'
import role from '@/views/SystemManage/role'

Vue.use(VueRouter)



const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/product',
                name: 'product',
                component: Product,
                children: [
                    {
                        path: 'list',//访问路径 /product/list
                        name: 'list',
                        component: List,
                        meta: {
                            title: '产品列表',
                        },
                    },
                    {
                        path: 'category',//访问路径 /product/list
                        name: 'category',
                        component: Category,
                        meta: {
                            title: '产品分类',
                        },
                    },

                ]
            },
            {
                path: '/order',//订单管理
                name: 'order',
                component: Order,
                redirect: '/order/order-list',
                meta: {
                    title: '订单管理',
                },
                children: [
                    {
                        path: 'collect',
                        name: 'collect',
                        component: Collect,
                        meta: {
                            title: '汇总清单',
                        },
                    },
                    {
                        path: 'order-list',
                        name: 'order-list',
                        component: OrderList,
                        meta: {
                            title: '订单列表',
                        },
                    },
                    {
                        path: 'contract',
                        name: 'contract',
                        component: Contract,
                        meta: {
                            title: '订单审核',
                        },
                    }
                ]
            },
            {
                path: '/advert',//广告管理
                name: 'advert',
                component: Advert,
                meta: {
                    title: '广告管理',
                },
                children: [
                    {
                        path: 'advert-list',
                        name: 'advert-list',
                        component: AdvertList,
                        meta: {
                            title: '广告列表',
                        },
                    },
                ]
            },
            {
                path: "/system",
                name: "system",
                component: SystemManage,
                redirect: "/system/role",
                meta: {
                    title: "系统管理",
                },
                children: [
                    {
                        path: "/system/role",
                        name: "role",
                        component: role,
                        meta: {
                            title: "角色管理",
                        },
                    },
                    {
                        path: "/system/department",
                        name: "department",
                        component: department,
                        meta: {
                            title: "部门管理",
                        },
                    },
                ],
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;