import "../globals.css";
import Logo from "@/components/logo";
import Sidebar from "@/components/common/Sidebar";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <section className="grid grid-cols-12">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9 ">{children}</div>
        </section>
      </body>
    </html>
  );
}
