import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
            rel="stylesheet"
        />
        <title>Anastasia Mitiutneva</title>
      </head>
      <body>
      <Header
          name={"Anastasia Mitiutneva"}
          quote={"Innopolis student who dreams of connecting her life with IT and building a successful career in software engineering and artificial intelligence"}
          socials={[
              {
                  href: "https://t.me/Mituttta",
                  className: "social_icon_img social_icon_img_telegram",
                  icon: "icons/TelegramIcon.svg",
                  alt: "Telegram",
                  id: "tg-link"
              },
              {
                  href: "https://github.com/mituttta051",
                  className: "social_icon_img social_icon_img_git",
                  icon: "icons/GithubIcon.svg",
                  alt: "GitHub",
                  id: "gh-link"
              },
              {
                  href: "mailto:a.mitiutneva@innopolis.university",
                  className: "social_icon_img social_icon_img_email",
                  icon: "icons/EmailIcon.svg",
                  alt: "Email",
                  id: "email"
              }
          ]}
      />
      <div>{children}</div>
      <Footer/>
      </body>
    </html>
  )
}
