import Vue from 'vue';

import {
  Actionsheet,
  AddressEdit,
  AddressList,
  Area,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Circle,
  Col,
  Collapse,
  CollapseItem,
  ContactCard,
  ContactEdit,
  ContactList,
  Coupon,
  CouponCell,
  CouponList,
  DatetimePicker,
  Dialog,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  ImagePreview,
  Info,
  List,
  Loading,
  Locale,
  NavBar,
  NoticeBar,
  Notify,
  NumberKeyboard,
  Overlay,
  Pagination,
  Panel,
  PasswordInput,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Rate,
  Row,
  Search,
  Sku,
  Slider,
  Step,
  Stepper,
  Steps,
  SubmitBar,
  Swipe,
  SwipeCell,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast,
  TreeSelect,
  Uploader,
  Waterfall,
} from 'vant';

import * as cusComponent from './components/index';

const keys = Object.keys(cusComponent);
keys.map((item) => Vue.component(item, cusComponent[item]));

Vue.component('vanActionsheet', Actionsheet);
Vue.component('vanAddressEdit', AddressEdit);
Vue.component('vanAddressList', AddressList);
Vue.component('vanArea', Area);
Vue.component('vanBadge', Badge);
Vue.component('vanBadgeGroup', BadgeGroup);
Vue.component('vanButton', Button);
Vue.component('vanCard', Card);
Vue.component('vanCell', Cell);
Vue.component('vanCellGroup', CellGroup);
Vue.component('vanCheckbox', Checkbox);
Vue.component('vanCheckboxGroup', CheckboxGroup);
Vue.component('vanCircle', Circle);
Vue.component('vanCol', Col);
Vue.component('vanCollapse', Collapse);
Vue.component('vanCollapseItem', CollapseItem);
Vue.component('vanContactCard', ContactCard);
Vue.component('vanContactEdit', ContactEdit);
Vue.component('vanContactList', ContactList);
Vue.component('vanCouponCell', CouponCell);
Vue.component('vanStep', Step);
Vue.component('vanCoupon', Coupon);
Vue.component('vanCouponList', CouponList);
Vue.component('vanDatetimePicker', DatetimePicker);
Vue.component('vanDialog', Dialog);
Vue.component('vanField', Field);
Vue.component('vanGoodsAction', GoodsAction);
Vue.component('vanGoodsActionBigBtn', GoodsActionBigBtn);
Vue.component('vanGoodsActionMiniBtn', GoodsActionMiniBtn);
Vue.component('vanIcon', Icon);
Vue.component('vanImagePreview', ImagePreview);
Vue.component('vanInfo', Info);
Vue.component('vanList', List);
Vue.component('vanLoading', Loading);
Vue.component('vanLocale', Locale);
Vue.component('vanNavBar', NavBar);
Vue.component('vanNoticeBar', NoticeBar);
Vue.component('vanNotify', Notify);
Vue.component('vanNumberKeyboard', NumberKeyboard);
Vue.component('vanOverlay', Overlay);
Vue.component('vanPagination', Pagination);
Vue.component('vanPanel', Panel);
Vue.component('vanPasswordInput', PasswordInput);
Vue.component('vanPicker', Picker);
Vue.component('vanPopup', Popup);
Vue.component('vanProgress', Progress);
Vue.component('vanPullRefresh', PullRefresh);
Vue.component('vanRadio', Radio);
Vue.component('vanRadioGroup', RadioGroup);
Vue.component('vanRate', Rate);
Vue.component('vanRow', Row);
Vue.component('vanSearch', Search);
Vue.component('vanSku', Sku);
Vue.component('vanSlider', Slider);
Vue.component('vanStepper', Stepper);
Vue.component('vanSteps', Steps);
Vue.component('vanSubmitBar', SubmitBar);
Vue.component('vanSwipe', Swipe);
Vue.component('vanSwipeCell', SwipeCell);
Vue.component('vanSwipeItem', SwipeItem);
Vue.component('vanSwitch', Switch);
Vue.component('vanSwitchCell', SwitchCell);
Vue.component('vanTab', Tab);
Vue.component('vanTabbar', Tabbar);
Vue.component('vanTabbarItem', TabbarItem);
Vue.component('vanTabs', Tabs);
Vue.component('vanTag', Tag);
Vue.component('vanToast', Toast);
Vue.component('vanTreeSelect', TreeSelect);
Vue.component('vanUploader', Uploader);
Vue.component('vanWaterfall', Waterfall);
