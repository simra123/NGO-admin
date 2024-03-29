import mock from './mock'
import './tables/datatables'
import './autoComplete/autoComplete'
import './navbar/navbarSearch'
import './apps/calendar'
import './apps/invoice'
import './apps/eCommerce'
import './pages/account-settings'
import './pages/profile'
import './pages/faq'
import './pages/knowledge-base'
import './pages/pricing-data'
import './pages/blog-data'
import './cards/card-analytics'
import './cards/card-statistics'
import './jwt'

mock.onAny().passThrough()
