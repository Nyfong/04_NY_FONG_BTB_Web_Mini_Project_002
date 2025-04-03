import "../../app/globals.css";
import SideBarServer from "@/components/common/SideBarServer";
import { auth } from "../../../auth";
import { AlertDemo } from "@/components/common/Alert";

export default async function AuthenticationLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className="text-charcoal relative">
        <section className="grid grid-cols-12">
          <div className="col-span-3">
            <SideBarServer />
          </div>
          <div className="col-span-9">{children}</div>
        </section>
        {/* Use the client-side AlertHandler */}
        {/* <div className="absolute bottom-10 right-5">
          <AlertDemo status={session?.status} message={session?.message} />
        </div> */}
      </body>
    </html>
  );
}
