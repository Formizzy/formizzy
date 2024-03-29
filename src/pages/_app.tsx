import AdminLayout from '@/layouts/AdminLayout'
import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import themeConfig from "theme.config";
import { Provider } from 'react-redux'
import { store } from '@/redux/store'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // if current url path includes /dashboard then use Admin layout as parent comp. 
  // or else use page component only.
  const isDashboardRoute = router.pathname.includes("/dashboard")

  return (
    <Provider store={store}>
      <NextUIProvider theme={themeConfig}>
        {isDashboardRoute ? <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout> :
          <Component {...pageProps} />}
      </NextUIProvider>
    </Provider>)
}
