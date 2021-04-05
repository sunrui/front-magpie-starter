export default [
    {
        "id": 1,
        "title": "Dashboard",
        "path": "/admin",
        "icon": "el-icon-discount",
        "children": [
            {
                "id": 1,
                "path": "/admin/dashboard",
                "title": "工作台",
                "icon": "el-icon-suitcase"
            }
        ]
    },
    {
        "id": 2,
        "title": "订单管理",
        "path": "/admin/order",
        "icon": "el-icon-tickets",
        "children": [
            {
                "id": 1,
                "path": "/admin/order/paystack",
                "title": "paystack",
                "icon": "el-icon-tickets"
            },
            {
                "id": 2,
                "path": "/admin/order/alipay",
                "title": "支付宝",
                "icon": "el-icon-tickets"
            }
        ]
    },
    {
        "id": 3,
        "title": "通道管理",
        "path": "/admin/config",
        "icon": "el-icon-money",
        "children": [
            {
                "id": 1,
                "path": "/admin/config/paystack",
                "title": "paystack",
                "icon": "el-icon-money"
            },
            {
                "id": 2,
                "path": "/admin/config/alipay",
                "title": "支付宝",
                "icon": "el-icon-postcard"
            }
        ]
    },
    {
        "id": 4,
        "title": "用户管理",
        "path": "/admin/developer",
        "icon": "el-icon-user",
        "children": [
            {
                "id": 1,
                "path": "/admin/developer/user",
                "title": "登录管理",
                "icon": "el-icon-user"
            },
            {
                "id": 2,
                "path": "/admin/developer/account",
                "title": "账户管理",
                "icon": "el-icon-user"
            },
            {
                "id": 3,
                "path": "/admin/developer/app",
                "title": "开发者管理",
                "icon": "el-icon-postcard"
            },
        ]
    },
    {
        "id": 5,
        "title": "系统管理",
        "path": "admin/system",
        "icon": "el-icon-setting",
        "children": [
            {
                "id": 1,
                "path": "admin/system/password",
                "title": "修改密码",
                "icon": "el-icon-film"
            }
        ]
    }
]