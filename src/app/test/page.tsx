"use client";

import KakaoLogin from "@/components/common/KakaoLogin";
import { useState } from "react";
// Tesseract.js 모듈을 가져옵니다.
import Tesseract from "tesseract.js";

export default function Test() {
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
      // Tesseract.js를 사용해 이미지에서 텍스트를 인식
      Tesseract.recognize(imageUrl, "eng+kor", {
        logger: (m) => {
          if (m.status === "recognizing text") {
            // OCR 진행률을 업데이트
            const progressValue = (m.progress * 100).toFixed(2);
            setProgress(parseFloat(progressValue));
          }
        },
      })
        .then(({ data: { text } }) => {
          // 인식된 텍스트를 상태에 저장
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
      <KakaoLogin />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
      <progress value={progress} max="100">
        {progress}%
      </progress>
      {/* OCR을 시작하는 버튼, 이미지가 없을 경우 비활성화 */}
      <button onClick={handleClick} disabled={!imageUrl}>
        Recognize Text
      </button>
      <p>Recognized Text: {text}</p>
    </div>
  );
}
