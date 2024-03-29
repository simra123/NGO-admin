import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [

  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },

  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },

  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },

  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },

  {
    path: '/services/list',
    component: lazy(() => import('../../views/services/List')),
    meta: {
      navLink: '/services/list'
    }
  },
  {
    path: '/services/form',
    component: lazy(() => import('../../views/services/Form')),
    meta: {
      navLink: '/services/form'
    }
  },
  {
    path: '/customer/list',
    component: lazy(() => import('../../views/customer/List')),
    meta: {
      navLink: '/customer/list'
    }
  },
  {
    path: '/customer/form',
    component: lazy(() => import('../../views/customer/Form')),
    meta: {
      navLink: '/customer/form'
    }
  },
  {
    path: '/employee/list',
    component: lazy(() => import('../../views/employee/List')),
    meta: {
      navLink: '/employee/list'
    }
  },
  {
    path: '/employee/form',
    component: lazy(() => import('../../views/employee/Form')),
    meta: {
      navLink: '/employee/form'
    }
  },
  {
    path: '/category/list',
    component: lazy(() => import('../../views/category/List')),
    meta: {
      navLink: '/category/list'
    }
  },
  {
    path: '/category/form',
    component: lazy(() => import('../../views/category/Form')),
    meta: {
      navLink: '/category/form'
    }
  },
  {
    path: '/product/list',
    component: lazy(() => import('../../views/product/List')),
    meta: {
      navLink: '/product/list'
    }
  },
  {
    path: '/product/form',
    component: lazy(() => import('../../views/product/Form')),
    meta: {
      navLink: '/product/form'
    }
  },
  {
    path: '/attribute/name',
    component: lazy(() => import('../../views/attribute/Name')),
    meta: {
      navLink: '/attribute/name'
    }
  },
  {
    path: '/product/colors',
    component: lazy(() => import('../../views/product/Colors')),
    meta: {
      navLink: '/product/colors'
    }
  },
  {
    path: '/attribute/value',
    component: lazy(() => import('../../views/attribute/Value')),
    meta: {
      navLink: '/attribute/value'
    }
  },
  {
    path: '/sliders/desktop',
    component: lazy(() => import('../../views/sliders/Desktop')),
    meta: {
      navLink: '/sliders/desktop'
    }
  },
  {
    path: '/sliders/mobile',
    component: lazy(() => import('../../views/sliders/Mobile')),
    meta: {
      navLink: '/sliders/mobile'
    }
  },
  {
    path: '/banners',
    component: lazy(() => import('../../views/banners')),
    meta: {
      navLink: '/banners'
    }
  },
  {
    path: '/page-setting',
    component: lazy(() => import('../../views/page')),
    meta: {
      navLink: '/page-setting'
    }
  },
  {
    path: '/edit-page',
    component: lazy(() => import('../../views/page/Edit')),
    meta: {
      navLink: '/edit-page'
    }
  },
  {
    path: '/frontend/header',
    component: lazy(() => import('../../views/front-end/header')),
    meta: {
      navLink: '/frontend/header'
    }
  },
  {
    path: '/frontend/about',
    component: lazy(() => import('../../views/front-end/about/')),
    exact: true,
    meta: {
      navLink: '/frontend/about'
    }
  },
  {
    path: '/frontend/about/form',
    component: lazy(() => import('../../views/front-end/about/Form')),
    exact: true,
    meta: {
      navLink: '/frontend/about/form'
    }
  },
  {
    path: '/faq/list',
    component: lazy(() => import('../../views/faq/List')),
    exact: true,
    meta: {
      navLink: '/faq/list'
    }
  },
  {
    path: '/faq/form',
    component: lazy(() => import('../../views/faq/Form')),
    exact: true,
    meta: {
      navLink: '/faq/form'
    }
  },
  {
    path: '/frontend/work',
    component: lazy(() => import('../../views/front-end/how-it-works')),
    exact: true,
    meta: {
      navLink: '/frontend/work'
    }
  },
  {
    path: '/frontend/work/form',
    component: lazy(() => import('../../views/front-end/how-it-works/Form')),
    exact: true,
    meta: {
      navLink: '/frontend/work/form'
    }
  },

  {
    path: '/frontend/work/edit',
    component: lazy(() => import('../../views/front-end/how-it-works/Form')),
    exact: true,
    meta: {
      navLink: '/frontend/work/edit'
    }
  },
  {
    path: '/frontend/app/customer',
    component: lazy(() => import('../../views/front-end/application/for-customer')),
    exact: true,
    meta: {
      navLink: '/frontend/app/customer'
    }
  },
  {
    path: '/frontend/app/customer/form',
    component: lazy(() => import('../../views/front-end/application/for-customer/Form')),
    exact: true,
    meta: {
      navLink: '/frontend/app/customer/form'
    }
  },
  {
    path: '/frontend/app/employee',
    component: lazy(() => import('../../views/front-end/application/for-employee')),
    exact: true,
    meta: {
      navLink: '/frontend/app/employee'
    }
  },
  {
    path: '/frontend/app/employee/form',
    component: lazy(() => import('../../views/front-end/application/for-employee/Form')),
    exact: true,
    meta: {
      navLink: '/frontend/app/employee/form'
    }
  },
  {
    path: '/marketing/banner',
    component: lazy(() => import('../../views/marketing-banner')),
    exact: true,
    meta: {
      navLink: '/marketing/banner'
    }
  },
  {
    path: '/splash-screens',
    component: lazy(() => import('../../views/splash-screens')),
    exact: true,
    meta: {
      navLink: '/splash-screens'
    }
  },
  {
    path: '/activity/list',
    component: lazy(() => import('../../views/activity/List')),
    exact: true,
    meta: {
      navLink: '/activity/list'
    }
  },
  {
    path: '/activity/form',
    component: lazy(() => import('../../views/activity/Form')),
    exact: true,
    meta: {
      navLink: '/activity/form'
    }
  },
  {
    path: '/cause/list',
    component: lazy(() => import('../../views/new-cause/List')),
    exact: true,
    meta: {
      navLink: '/cause/list'
    }
  },
  {
    path: '/cause/form',
    component: lazy(() => import('../../views/new-cause/Form')),
    exact: true,
    meta: {
      navLink: '/cause/form'
    }
  },
  {
    path: '/news/list',
    component: lazy(() => import('../../views/news-stories/List')),
    exact: true,
    meta: {
      navLink: '/news/list'
    }
  },
  {
    path: '/news/form',
    component: lazy(() => import('../../views/news-stories/Form')),
    exact: true,
    meta: {
      navLink: '/news/form'
    }
  }
]

export default AppRoutes
