
import React from "react";
import '@styles/globals.css'

// export const metadata = {
//   title: 'portafolio',
//   description: 'portafolio',
// }

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    )
}

export default RootLayout;