import { Metadata } from 'next'

const meta: Metadata = {
  metadataBase: new URL('https://app.audea.id'),

  title: 'Audea',

  description: 'Transform your messy thoughts into structured notes.',

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  themeColor: '#030711',

  generator: 'Audea',
  applicationName: 'Audea',
  referrer: 'origin-when-cross-origin',
  keywords: ['Audea', 'Audea Web', 'Audea Web App'],
  authors: [{ name: 'Durrrian', url: 'https://durrrian.com' }],
  creator: 'Durrrian',
  publisher: 'Durrrian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  appleWebApp: {
    title: 'Audea',
    statusBarStyle: 'black-translucent',
    startupImage: [
      {
        url: '/splash_screens/iPhone_14_Pro_Max_landscape.png',
        media:
          'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
      },

      {
        media:
          'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: '/splash_screens/iPhone_14_Pro_landscape.png',
      },

      {
        media:
          'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: '/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png',
      },

      {
        media:
          'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: '/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png',
      },

      {
        media:
          'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: '/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png',
      },

      {
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: '/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png',
      },

      {
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/iPhone_11__iPhone_XR_landscape.png',
      },

      {
        media:
          'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
        url: '/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png',
      },

      {
        media:
          'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png',
      },

      {
        media:
          'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png',
      },

      {
        media:
          'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/12.9__iPad_Pro_landscape.png',
      },

      {
        media:
          'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png',
      },

      {
        media:
          'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/10.9__iPad_Air_landscape.png',
      },

      {
        media:
          'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/10.5__iPad_Air_landscape.png',
      },

      {
        media:
          'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/10.2__iPad_landscape.png',
      },

      {
        media:
          'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png',
      },

      {
        media:
          'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
        url: '/splash_screens/8.3__iPad_Mini_landscape.png',
      },

      {
        media:
          'screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/splash_screens/iPhone_14_Pro_Max_portrait.png',
      },

      {
        media:
          'screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/splash_screens/iPhone_14_Pro_portrait.png',
      },

      {
        media:
          'screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png',
      },

      {
        media:
          'screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
      },

      {
        media:
          'screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png',
      },

      {
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png',
      },

      {
        media:
          'screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/iPhone_11__iPhone_XR_portrait.png',
      },

      {
        media:
          'screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
        url: '/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png',
      },

      {
        media:
          'screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png',
      },

      {
        media:
          'screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png',
      },

      {
        media:
          'screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/12.9__iPad_Pro_portrait.png',
      },

      {
        media:
          'screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png',
      },

      {
        media:
          'screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/10.9__iPad_Air_portrait.png',
      },

      {
        media:
          'screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/10.5__iPad_Air_portrait.png',
      },

      {
        media:
          'screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/10.2__iPad_portrait.png',
      },

      {
        media:
          'screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png',
      },

      {
        media:
          'screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
        url: '/splash_screens/8.3__iPad_Mini_portrait.png',
      },
    ],
  },

  openGraph: {
    title: 'Audea',
    description: 'Transform your messy thoughts into structured notes.',
    url: 'https://app.audea.id',
    siteName: 'Audea',
    images: [
      {
        url: '/meta.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Audea',
    description: 'Transform your messy thoughts into structured notes.',
    siteId: '1467726470533754880',
    creator: '@Audea_app',
    creatorId: '1467726470533754880',
    images: ['/meta.jpg'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/manifest/icons/180x180.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/manifest/icons/180x180.png',
    },
  },
}

export default meta
