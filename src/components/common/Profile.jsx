import React from "react";
import { getCurrentUser } from "../../../service/profile-service";

export default async function Profile() {
  const user = await getCurrentUser();
  console.log("----------user", user);
  return (
    <div>
      {/* notification */}
      <div className="text-sm leading-6">
        <figure className="relative flex flex-col-reverse rounded-lg p-2 ">
          <figcaption className="flex items-center space-x-4">
            <img
              src={
                user?.profile
                  ? user.profile
                  : "https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg"
              }
              alt=""
              className="flex-none w-14 h-14 rounded-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-auto">
              <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                {user?.username ? user.username : "a"}
              </div>
              <div className="mt-0.5 dark:text-slate-300">
                {user?.email ? user.email : "Kdet@gmail.com"}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
