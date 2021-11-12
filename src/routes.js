import React from 'react';
//custom
const HeaderForm = React.lazy(()=> import('./views/pages/top-header/Form'))
const HeaderList = React.lazy(()=> import('./views/pages/top-header/List'))
const TextEditors = React.lazy(() => import('./reusable/text-editors/TextEditors'));
const BannerList = React.lazy(() => import('./views/pages/banner/List'));
const BannerForm = React.lazy(() => import('./views/pages/banner/Form'));
const AboutUsList = React.lazy(() => import('./views/pages/about-us/List'));
const AboutUsForm = React.lazy(() => import('./views/pages/about-us/Form'));
const ServicesList = React.lazy(() => import('./views/pages/services/List'));
const ServicesForm = React.lazy(() => import('./views/pages/services/Form'));
const ContactUsList = React.lazy(() => import('./views/pages/contact-us/List'));
const ContactUsForm = React.lazy(() => import('./views/pages/contact-us/Form'));
const HowItWorksList = React.lazy(() => import('./views/pages/how-it-works/List'));
const HowItWorksForm = React.lazy(() => import('./views/pages/how-it-works/Form'));
const ForEmployeeList = React.lazy(() => import('./views/pages/mobile-app/for-employee/List'));
const ForEmployeeForm = React.lazy(() => import('./views/pages/mobile-app/for-employee/Form'));
const ForCustomerList = React.lazy(() => import('./views/pages/mobile-app/for-customer/List'));
const ForCustomerForm = React.lazy(() => import('./views/pages/mobile-app/for-customer/Form'));
const FAQList = React.lazy(() => import('./views/pages/faq/List'));
const FAQForm = React.lazy(() => import('./views/pages/faq/Form'));
const WebSetting = React.lazy(() => import('./views/pages/ecommerce-functionality/WebSetting'));
const ContactInformation = React.lazy(() => import('./views/pages/ecommerce-functionality/ContactInformation'))
const Footer = React.lazy(() => import('./views/pages/ecommerce-functionality/FooterSetting'));

const AdvancedForms = React.lazy(() => import('./views/forms/advanced-forms/AdvancedForms'));
const BasicForms = React.lazy(() => import('./views/forms/basic-forms/BasicForms'));
const ValidationForms = React.lazy(() => import('./views/forms/validation-forms/ValidationForms'));
const GoogleMaps = React.lazy(() => import('./views/google-maps/GoogleMaps'));
const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const AdvancedTables = React.lazy(() => import('./views/tables/advanced-tables/AdvancedTables'));
const Tables = React.lazy(() => import('./views/tables/tables/Tables'));
//const LoadingButtons = React.lazy(() => import('./views/buttons/loading-buttons'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard',exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/header/list',exact: true, name: 'Top Header', component: HeaderList },
  { path: '/header/form',exact: true, name: 'Top Header', component: HeaderForm },
  { path: '/banner/list', exact: true,name: 'Banner', component: BannerList },
  { path: '/banner/form', exact: true, name: 'Banner', component: BannerForm },
  { path: '/about/list',exact: true, name: 'About Us', component: AboutUsList },
  { path: '/about/form',exact: true, name: 'About Us', component: AboutUsForm },
  { path: '/services/list',exact: true, name: 'services', component: ServicesList },
  { path: '/services/form',exact: true, name: 'services', component: ServicesForm },
  { path: '/works/list', exact: true, name: 'How It Works', component: HowItWorksList },
  { path: '/works/form', exact: true, name: 'How It Works', component: HowItWorksForm },
  { path: '/employee/list',exact: true, name: 'Mobile App for employee', component: ForEmployeeList },
  { path: '/employee/form',exact: true, name: 'Mobile App for employee', component: ForEmployeeForm },
  { path: '/customer/list',exact: true, name: 'Mobile App for customer', component: ForCustomerList },
  { path: '/customer/form',exact: true, name: 'Mobile App for customer', component: ForCustomerForm },
  { path: '/faq/list', name: 'FAQ', exact: true, component: FAQList},
  { path: '/faq/form', name: 'FAQ', exact: true, component: FAQForm},
  { path: '/contact/list', exact: true, name: 'Contact US', exact: true, component: ContactUsList},
  { path: '/contact/form', exact: true, name: 'Contact US', exact: true, component: ContactUsForm},
  { path: '/footer',  exact: true, name: 'Footer', exact: true,component: Footer },
  { path: '/web/setting', name: 'Web Settings', component: WebSetting },
  { path: '/contact/info', name: 'Contact Info',exact: true,  component: ContactInformation },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/editors/text-editors', name: 'Text Editors', component: TextEditors },
  { path: '/forms', name: 'Forms', component: BasicForms, exact: true },
  { path: '/forms/advanced-forms', name: 'Advanced Forms', component: AdvancedForms },
  { path: '/forms/basic-forms', name: 'Basic Forms', component: BasicForms },
  { path: '/forms/validation-forms', name: 'Form Validation', component: ValidationForms },
  { path: '/google-maps', name: 'Google Maps', component: GoogleMaps },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/tables', name: 'Tables', component: Tables, exact: true },
  { path: '/tables/advanced-tables', name: 'Advanced Tables', component: AdvancedTables },
  { path: '/tables/tables', name: 'Tables', component: Tables },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/apps/email/inbox', exact: true, name: 'Inbox' },
  { path: '/apps/email/compose', exact: true, name: 'Compose' },
  { path: '/apps/email/message', exact: true, name: 'Message' }
]

export default routes;
