// app/oauth/callback/kakao/page.tsx
"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

export default function KakaoCallback() {
  const [progress, setProgress] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // 이미지 업로드 시 호출되는 함수
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // OCR 버튼 클릭 시 호출되는 함수
  const handleClick = () => {
    if (imageUrl) {
      Tesseract.recognize(imageUrl, "eng+kor", {
        logger: (m) => {
          if (m.status === "recognizing text") {
            const progressValue = (m.progress * 100).toFixed(2);
            setProgress(parseFloat(progressValue));
          }
        },
      })
        .then(({ data: { text } }) => {
          setText(text);
          console.log(text);
        })
        .catch((error) => {
          console.error("OCR 처리 중 오류 발생:", error);
        });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
      <progress value={progress} max="100">
        {progress}%
      </progress>
      <button onClick={handleClick} disabled={!imageUrl}>
        Recognize Text
      </button>
      <p>Recognized Text: {text}</p>
    </div>
  );
}
