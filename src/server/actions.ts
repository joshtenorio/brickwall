'use server'

import { redirect } from "next/navigation"
import { db } from "./db"
import { chats } from "./db/schema"

export async function createChat() {
    console.log("server function!")
    const res: any = await db.insert(chats).values({}).returning({ insertedId: chats.id })
    console.log(res)
    console.log("server asdfasdfasdfasf!")

    redirect(`/chat/${res[0]?.insertedId}`)
}

export async function getChats() {
    console.log("retrieving chats")
    const res = await db.select().from(chats)
    console.log(res)
    return res
}

/*
export async function renameChat(formData: FormData) {

}

export async function deleteChat(formData: FormData) {
    // delete messages and files
}

export async function createMessage(formData: FormData) {
    console.log(formData)
}
*/