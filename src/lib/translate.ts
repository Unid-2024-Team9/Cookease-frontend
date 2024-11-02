import axios from "axios";

const API_KEY = process.env.NEXT_GOOGLE_API_KEY;
const API_URL = "https://translation.googleapis.com/language/translate/v2";

export const translateText = async (
  text: string,
  targetLang: string = "ko"
) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        q: text,
        target: targetLang,
      },
      {
        params: { key: API_KEY },
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("번역 실패:", error);
    return text; // 오류가 발생하면 원본 텍스트를 반환
  }
};
