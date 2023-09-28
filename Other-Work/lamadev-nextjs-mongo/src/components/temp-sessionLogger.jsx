"use client"
import getSession from '@/utils/getSession';
import React from 'react'

export default function SessionLogger() {
    const session = getSession();
    console.log(session)
    return (
        <></>
    )
}
