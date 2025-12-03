import "../globals.css";

export const metadata = {
  title: "AuraScan AI",
  description: "See how others really see you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        {/* ░░ TON CONNECT UI — CDN ░░ */}
        <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>

        {children}

      </body>
    </html>
  );
}
