import AdminLayout from '@/layouts/AdminLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <AdminLayout>
    <Component {...pageProps} />
  </AdminLayout>
}
