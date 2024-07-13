// RootLayout.tsx
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { Inter, Noto_Sans } from "next/font/google";
import AuthProvider from "@/providers/AuthProvider";
import { ProgressProvider } from "@/context/ProgressContext"; // Import ProgressProvider

const notoSan = Noto_Sans({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"], // Chỉ định các trọng lượng font mong muốn ở đây
});

export const metadata = {
  title: "Thủ thuật | rimdasilva",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSan.className} custom-font`}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <ProgressProvider>
                {" "}
                {/* Bọc ứng dụng với ProgressProvider */}
                <div className="container">
                  <div className="wrapper">
                    <Navbar />
                    {children}
                    <Footer />
                  </div>
                </div>
              </ProgressProvider>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
