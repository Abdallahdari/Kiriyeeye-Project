import { supabase } from "../_lib/supabase";

export async function getGuryo() {
  let { data, error } = await supabase.from("Guryo").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
