
import chalk from "chalk"
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export default async function middleware(req){
    console.log(chalk.bgYellow('hello world from middleware file'))
}

export const config = {
    matcher:["/auth/login","/auth/register"]
}