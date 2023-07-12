import dbConnect from "@/utils/connectDb";
import projectModel from "@/models/project";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  await dbConnect();
  const category = request.nextUrl.searchParams.get("category");
  let project;
  if (category == "all") {
    project = await projectModel.find({});
  } else {
    project = await projectModel.find({ category: category });
  }
  return NextResponse.json(
    {
      success: true,
      project,
    },
    { status: 200 }
  );
};

export const POST = async (request) => {
  const {
    title,
    description,
    redirect,
    github,
    category,
    technology,
    signature,
    public_id,
    secure_url,
  } = await request.json();
  try {
    const project = await new projectModel({
      title,
      description,
      redirect,
      github,
      category,
      technology,
      image: {
        public_id,
        secure_url,
        signature,
      },
    }).save();

    return NextResponse.json({
      message: "Project created successfully",
      success: true,
      project,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const DELETE = async (request) => {
  await dbConnect();
  try {
    const id = request.nextUrl.searchParams.get("id");
    const resp = await projectModel.findByIdAndDelete(id);
    return NextResponse.json({
      message: "Project created successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Internal server error",
      success: false,
    });
  }
};
