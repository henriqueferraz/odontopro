"use client"

import { useProfileForm } from "./profile-form"

export function ProfileContent() {

    const form = useProfileForm()

    return (
        <div>
            <h1>Página do Profile</h1>
        </div>
    )
}