import "../globals.css";

export const metadata = {
  title: "AuraScan AI",
  description: "See how others really see you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
