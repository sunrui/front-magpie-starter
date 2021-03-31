// element-ui 配置文件
import Vue from 'vue'
import {
  Button,
  ButtonGroup,
  Input,
  Message,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Col,
  Row,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Tabs,
  TabPane,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Timeline,
  TimelineItem,
  Scrollbar,
  Avatar,
  Table,
  TableColumn,
  Progress,
  Tag,
  Link,
  Container,
  Main,
  Aside,
  Header,
  Switch,
  Pagination,
  Form,
  FormItem,
  Select,
  Option,
  DatePicker,
  Radio,
  RadioGroup,
  InputNumber,
  TimePicker,
  Step,
  Steps,
  Alert,
  Divider
} from 'element-ui'
// 自定义主题文件
import '@/assets/css/theme/element-variables.scss'
// 安装组件
Vue.use(Divider)
Vue.use(Alert)
Vue.use(Step)
Vue.use(Steps)
Vue.use(TimePicker)
Vue.use(InputNumber)
Vue.use(DatePicker)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Option)
Vue.use(Select)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Tag)
Vue.use(Link)
Vue.use(Progress)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Avatar)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Scrollbar)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Button)
Vue.use(Input)
Vue.use(ButtonGroup)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Col)
Vue.use(Row)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.prototype.$message = Message