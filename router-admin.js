export default [
  {
    "id": 1,
    "title":"Dashboard",
    "path": "/admin/admin",
    "icon":"el-icon-discount",
    "children": [
      {
        "id": 1,
        "path": "dashboard",
        "title":"工作台",
        "icon":"el-icon-suitcase"
      }
    ]
  },
  {
    "id": 2,
    "title":"客户管理",
    "path": "/admin/user",
    "icon":"el-icon-setting",
    "children": [
      {
        "id": 1,
        "path": "/admin/customer/user",
        "title":"后台用户管理",
        "icon":"el-icon-user"
      },
      {
        "id": 2,
        "path": "/admin/customer/app",
        "title":"开发账号管理",
        "icon":"el-icon-postcard"
      }
    ]
  },
  {
    "id": 2,
    "title":"通道管理",
    "path": "/admin/user",
    "icon":"el-icon-setting",
    "children": [
      {
        "id": 1,
        "path": "/admin/customer/user",
        "title":"paystack",
        "icon":"el-icon-user"
      },
      {
        "id": 2,
        "path": "/admin/customer/app",
        "title":"other",
        "icon":"el-icon-postcard"
      }
    ]
  },
  {
    "id": 3,
    "title":"表单页面",
    "path": "/admin/form",
    "icon":"el-icon-tickets",
    "children": [
      {
        "id": 1,
        "path": "/admin/form/basic",
        "title":"基础表单",
        "icon":"el-icon-document-copy"
      },
      {
        "id": 2,
        "path": "/admin/form/advanced",
        "title":"复杂表单",
        "icon":"el-icon-collection"
      },
      {
        "id": 3,
        "path": "/admin/form/step",
        "title":"分布表单",
        "icon":"el-icon-c-scale-to-original"
      }
    ]
  },
  {
    "id": 3,
    "title":"列表页面",
    "path": "/admin/list",
    "icon":"el-icon-money",
    "children": [
      {
        "id": 1,
        "path": "/admin/list/basic",
        "title":"基础列表",
        "icon":"el-icon-film"
      },
      {
        "id": 2,
        "path": "/admin/list/advanced",
        "title":"复杂列表",
        "icon":"el-icon-notebook-2"
      },
      {
        "id": 3,
        "path": "/admin/list/card",
        "title":"卡片列表",
        "icon":"el-icon-menu"
      }
    ]
  },
  {
    "id": 3,
    "title":"结果页面",
    "path": "/admin/result",
    "icon":"el-icon-circle-check",
    "children": [
      {
        "id": 1,
        "path": "/admin/result/success",
        "title":"成功页",
        "icon":"el-icon-circle-check"
      },
      {
        "id": 2,
        "path": "/admin/result/fail",
        "title":"失败页",
        "icon":"el-icon-circle-close"
      }
    ]
  }
]