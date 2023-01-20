import ChakraWrapper from "@/components/chakraWrapper";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
