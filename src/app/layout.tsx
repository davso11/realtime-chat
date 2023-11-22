import Providers from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "Bienvenue sur Chatty",
  description: "Restez en contact avec vos proches.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
