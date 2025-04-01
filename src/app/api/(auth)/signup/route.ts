import User from "@/lib/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { send } from "process";
import { sendEmail } from "@/lib/sendMessage";

export const POST = async (req: NextRequest) => {
    try {
        const {searchParams} = new URL(req.url);
        const create = searchParams.get('create');
        const {email,password} = await req.json();

        if(!email || !password) return NextResponse.json({message: "Please fill all the fields"}, {status: 400})

            
        if(create){
            const newUser = new User({
                email: email,
            })

            await newUser.save();
            return NextResponse.json({message: "New user create"},{status: 201});
            
        }

        
        const user = await User.findOne({email: email});
        if(!user) return NextResponse.json({message: "No User found"}, {status: 404})

        const randomNumber = Math.random().toString(36).substring(2,8);

        const hashedPassword = await bcrypt.hash(randomNumber, 10);

        user.tempPassword = hashedPassword;
        user.expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
        await user.save();

        await sendEmail(user.email, hashedPassword); // Send the random number to the user's email

        return NextResponse.json({message: "Login Successful"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Internal Server Error"}, {status: 500})
    }
}

