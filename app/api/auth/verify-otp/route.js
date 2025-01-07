import { User } from "@/models/userModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  try {
    const user = await User.findOne({ email: data.email });
    if (!user || !user.otp || user.otp !== data.otp || Date.now() > user.otpExpiry) {
      return NextResponse.json({ success: false, message: "Invalid or expired OTP" });
    }

    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    return NextResponse.json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("Verify OTP Error:", error);
    return NextResponse.json({ success: false, message: "Error verifying OTP" });
  }
}
