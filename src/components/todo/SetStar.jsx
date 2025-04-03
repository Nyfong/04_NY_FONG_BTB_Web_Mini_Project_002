// "use client";
// import { Star } from "lucide-react";
// import { PatchWorkSpaceAction } from "@/actions/workspace-action";

// function FavoriteStar({ workSpaceById }) {
//   const toggleFavorite = async () => {
//     const newFavoriteState = !workSpaceById?.isFavorite;
//     console.log("Toggling favorite:", workSpaceById?.id, newFavoriteState);
//     // Call  PATCH action
//     await PatchWorkSpaceAction(workSpaceById?.workspaceId, newFavoriteState);
//   };

//   return (
//     <div className="flex justify-between gap-2 mb-5">
//       <button
//         onClick={toggleFavorite}
//         className={`focus:outline-none transition-colors ${
//           workSpaceById?.isFavorite
//             ? "text-yellow-500"
//             : "text-gray-400 hover:text-yellow-500"
//         }`}
//         aria-label={
//           workSpaceById?.isFavorite
//             ? "Remove from favorites"
//             : "Add to favorites"
//         }
//       >
//         <Star
//           size={24}
//           fill={workSpaceById?.isFavorite ? "currentColor" : "none"}
//           strokeWidth={workSpaceById?.isFavorite ? 1.5 : 2}
//         />
//       </button>
//     </div>
//   );
// }
import { Star } from "lucide-react";
import { revalidatePath } from "next/cache";
import { PatchWorkSpaceAction } from "@/actions/workspace-action";

export default async function FavoriteStar({ workSpaceById }) {
  async function toggleFavorite() {
    "use server"; // Mark this function as a server action
    const newFavoriteState = !workSpaceById?.isFavorite;
    await PatchWorkSpaceAction(workSpaceById?.workspaceId, newFavoriteState);
    revalidatePath(`/workspace/${workSpaceById?.workspaceId}`); // Refresh UI
  }

  return (
    <form action={toggleFavorite} className="flex justify-between gap-2 mb-5">
      <button
        type="submit"
        className={`focus:outline-none transition-colors ${
          workSpaceById?.isFavorite
            ? "text-yellow-500"
            : "text-gray-400 hover:text-yellow-500"
        }`}
        aria-label={
          workSpaceById?.isFavorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        <Star
          size={24}
          fill={workSpaceById?.isFavorite ? "currentColor" : "none"}
          strokeWidth={workSpaceById?.isFavorite ? 1.5 : 2}
        />
      </button>
    </form>
  );
}
