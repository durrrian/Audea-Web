import Script from 'next/script'

export default function GTag() {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-QZXGV8VFDN' />
      <Script id='google-analytics'>
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
  
           gtag('config', 'G-QZXGV8VFDN');
         `}
      </Script>
    </>
  )
}
