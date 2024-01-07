"use client"

import * as z from "zod"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// develop ui for title form
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface TitleFormProps {
    initialData: {
        title: string;
    }
    courseId: string;
}

// form schema
const formSchema = z.object({
    title: z.string().min(1,{
        message: "Title is required"
    }),
})


export const TitleForm = ({
    initialData,
    courseId,
}: TitleFormProps) => {
    return (
        <div>
            <h1> Title Form</h1>
        </div>
    )
}