"use client";

import React, { useEffect, useState } from "react";
import { translateText } from "@/lib/translate";

interface AutoTranslateTextProps {
  text: string;
}

const AutoTranslateText: React.FC<AutoTranslateTextProps> = ({ text }) => {
  const [translatedText, setTranslatedText] = useState<string>(text);

  useEffect(() => {
    const fetchTranslation = async () => {
      const translated = await translateText(text, "ko");
      setTranslatedText(translated);
    };
    fetchTranslation();
  }, [text]);

  return <div>{translatedText}</div>;
};

export default AutoTranslateText;
