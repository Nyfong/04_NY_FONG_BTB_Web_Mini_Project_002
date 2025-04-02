import "../../app/globals.css";
import SideBarServer from "@/components/common/SideBarServer";
export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <section className="grid grid-cols-12">
          <div className="col-span-3">
            <SideBarServer />
          </div>
          <div className="col-span-9">{children}</div>
        </section>
      </body>
    </html>
  );
}
