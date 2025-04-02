import User from "@/lib/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connect } from "@/lib/db";

export const POST = async (req: NextRequest) => {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: "Please fill all the fields" }, 
                { status: 400 }
            );
        }
        
        await connect();
        const user = await User.findOne({
            email: email,
            expiresAt: { $gt: new Date() }
        });

        if (!user) {
            return NextResponse.json(
                { message: "No user found or token expired" },
                { status: 404 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.tempPassword);
        if (!isPasswordValid) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        const payload = { 
            id: user._id, 
            role: user.role, 
            email: user.email 
        };
    
        const jwtToken = jwt.sign(payload, process.env.JWT_SECRET!, { 
            expiresIn: "1d" 
        });
    
        const response = NextResponse.json(
            { message: "Login successful" }, 
            { status: 200 }
        );
        
        response.cookies.set("token", jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { message: "Internal server error" }, 
            { status: 500 }
        );
    }
}


export const GET = async (req: NextRequest) => {
    try {
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json(
                { message: "No token provided" }, 
                { status: 401 }
            );
        }

        const decoded =  jwt.verify(token, process.env.JWT_SECRET!);

        const id = (typeof decoded !== "string" && "id" in decoded) ? decoded.id : null;

        if (!id) {
            return NextResponse.json(
                { message: "Invalid token payload" },
                { status: 401 }
            );
        }

        await connect();
        const user = await User.findById(id);

        if(!user) return NextResponse.json({message: "No user found"}, {status: 404})

        return NextResponse.json(
            { data: user }, 
            { status: 200 }
        );
    } catch (error) {
        console.error("Token verification error:", error);
        return NextResponse.json(
            { message: "Invalid token" }, 
            { status: 401 }
        );
    }
}