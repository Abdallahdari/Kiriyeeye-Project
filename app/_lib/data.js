import { supabase } from "../_lib/supabase";

export async function getGuryo() {
  let { data, error } = await supabase.from("Guryo").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function getGuryoById(id) {
  try {
    const { data, error } = await supabase
      .from("Guryo")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(`Failed to fetch house {error.message}`);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error in getGuryoById:", err);
    throw new Error(`Failed to load house data: ${err.message}`);
  }
}
