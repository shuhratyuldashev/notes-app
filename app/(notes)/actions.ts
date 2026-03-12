"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createNote(formData: FormData) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
        redirect("/login")
    }

    const { error } = await supabase.from("notes").insert({
        user_id: user.id,
        title: formData.get("title"),
        content: formData.get("content"),
    })

    if (error) {
        throw error
    }

    revalidatePath("/dashboard")
}


export async function updateNote(formData: FormData) {
    const supabase = await createClient()
    const { data: user } = await supabase.auth.getUser()

    if(!user) {
        redirect("/login")
    }

    if(!formData.get("id")) {
        throw new Error("Note ID is required")
    }

    const { error } = await supabase.from("notes").update({
        title: formData.get("title"),
        content: formData.get("content"),
    }).eq("id", formData.get("id")).eq("user_id", user.user?.id)
    
    if (error) {
        throw error
    }

    revalidatePath("/dashboard")
    revalidatePath(`/notes/${formData.get("id")}`)

}


export async function deleteNote(formData: FormData) {
  const noteId = String(formData.get("id") || "");
  if (!noteId) throw new Error("Note ID is required");

  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", noteId)
    .eq("user_id", user.user?.id);

  if (error) throw error;

  revalidatePath("/dashboard");
}