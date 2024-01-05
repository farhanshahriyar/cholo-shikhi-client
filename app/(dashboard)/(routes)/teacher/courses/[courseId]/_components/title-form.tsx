"use client"

import * as z from "zod"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

interface TitleFormProps {
    initialData: {
        title: string;
    }
    courseId: string;
}

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