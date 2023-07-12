import dbConnect from "@/utils/connectDb";
import { NextResponse } from "next/server";
import projectModel from "@/models/project";

export const GET = async () => {
  await dbConnect();
  try {
    const project = await projectModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json({
      project: project,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Internal server error",
      success: true,
    });
  }
};
