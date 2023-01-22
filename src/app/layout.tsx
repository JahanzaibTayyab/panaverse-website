import ChakraWrapper from "@/components/chakraWrapper";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper>
          <NavBar />
          {children}
          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
