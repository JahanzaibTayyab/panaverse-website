import { Suspense } from "react";
import ChakraWrapper from "@/components/chakraWrapper";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Loading from "./loading";

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
          <Suspense fallback={<Loading />}>
            <NavBar />
            {children}
            <Footer />
          </Suspense>
        </ChakraWrapper>
      </body>
    </html>
  );
}
