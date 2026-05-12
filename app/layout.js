import "./globals.css";

export const metadata = {
  title: "青禾植染 | 植物染发养护空间",
  description:
    "青禾植染专注草本染发、遮白染与头皮养护，提供一对一发质评估和自然耐看的植物染发体验。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
