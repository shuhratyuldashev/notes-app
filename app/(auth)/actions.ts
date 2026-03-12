"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function logOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
}


export async function login(formData: FormData) {
    const supabase = await createClient()
    const email = String(formData.get("email"))
    const password = String(formData.get("password"))
    
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    
    if (error) {
        redirect("/login?error=invalid_credentials")
    }
    
    redirect("/dashboard")
}


export async function signup(formData: FormData) {
    const supabase = await createClient()
    const email = String(formData.get("email"))
    const password = String(formData.get("password"))
    
    const { error } = await supabase.auth.signUp({
        email,
        password,
    })
    
    if (error) {
        redirect("/signup?error=invalid_credentials")
    }
    
    redirect("/dashboard")
}