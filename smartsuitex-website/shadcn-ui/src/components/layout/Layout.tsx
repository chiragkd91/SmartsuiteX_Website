import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FloatingDemoButton } from "@/components/ui/floating-demo-button";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <FloatingDemoButton />
    </div>
  );
}