// app/api/ocr/route.ts
import { NextResponse } from "next/server";
import Tesseract from "tesseract.js";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("image");

  // 파일이 없거나 File 타입이 아닌 경우 에러 반환
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "Invalid file upload" }, { status: 400 });
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const {
      data: { text },
    } = await Tesseract.recognize(buffer, "kor", {
      logger: (m) => console.log(m),
    });

    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
