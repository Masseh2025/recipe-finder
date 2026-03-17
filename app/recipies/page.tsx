import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function RecipesPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: recipes, error } = await supabase.from("recipes").select();
  console.log(recipes);
  if (error) {
    console.error(error);
    return <div>Failed to load recipes</div>;
  }

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes?.map((recipe) => (
          <li key={recipe.id}>{recipe.name ?? recipe.title ?? recipe.id}</li>
        ))}
      </ul>
    </div>
  );
}
