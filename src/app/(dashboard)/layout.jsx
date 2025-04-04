import "../../app/globals.css";
import SideBarServer from "@/components/common/SideBarServer";
import { auth } from "../../../auth";
import { Toaster } from "react-hot-toast";
import Prividers from "./provider";
export default async function AuthenticationLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className="text-charcoal relative">
        <Toaster />
        <section className="grid grid-cols-12">
          <div className="col-span-3">
            <SideBarServer />
          </div>
          <div className="col-span-9">
            <Prividers>{children}</Prividers>
          </div>
        </section>
      </body>
    </html>
  );
}
