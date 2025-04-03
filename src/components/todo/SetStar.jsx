"use client";
import { Star } from "lucide-react";
import { PatchWorkSpaceAction } from "@/actions/workspace-action";

function FavoriteStar({ workSpaceById }) {
  const toggleFavorite = async () => {
    const newFavoriteState = !workSpaceById?.isFavorite;
    console.log("Toggling favorite:", workSpaceById?.id, newFavoriteState);
    // Call  PATCH action
    await PatchWorkSpaceAction(workSpaceById?.workspaceId, newFavoriteState);
  };

  return (
    <div className="flex justify-between gap-2 mb-5">
      <p className="text-xl font-bold">{workSpaceById?.workspaceName}</p>
      <button
        onClick={toggleFavorite}
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
    </div>
  );
}

export default FavoriteStar;
