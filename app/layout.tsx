/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT miễn phí cho người Việt Nam",
  description: "ChatGPT miễn phí cho người Việt Nam - một công cụ trò chuyện AI tiên tiến, hiểu biết sâu rộng về nhiều lĩnh vực. ChatGPT giúp giải đáp thắc mắc, hỗ trợ học tập, nâng cao khả năng tiếng Anh và mở rộng kiến thức một cách thoải mái và dễ dàng. Trải nghiệm ngay hôm nay!",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "HiChatGPT",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>

        <script src="/serviceWorkerRegister.js" defer></script>

      </head>

      <body>
       {children}
      </body>

    </html>
  );
}
