// import colors from "@/styles/color";
// import { Body2Regular } from "@/styles/texts";
// import React, { useState, useRef } from "react";
// import styled from "styled-components";
// import Image from "next/image";
// // Tesseract.js 모듈을 가져옵니다.
// import Tesseract from "tesseract.js";

// const CalendarInput = ({
//   margin,
//   isOcr,
// }: {
//   margin: string;
//   isOcr: boolean;
// }) => {
//   const [selectedDate, setSelectedDate] = useState<string | null>(null);
//   const inputCalenderRef = useRef<HTMLInputElement>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null); // file input의 ref 추가

//   const handleContainerClick = () => {
//     if (inputCalenderRef.current) {
//       inputCalenderRef.current.showPicker(); // 날짜 선택창을 강제로 띄우는 메서드
//     }
//   };
//   const handleFileInputClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const dateValue = event.target.value;
//     setSelectedDate(formatDate(dateValue));
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = `0${date.getMonth() + 1}`.slice(-2); // 월은 0부터 시작하므로 +1
//     const day = `0${date.getDate()}`.slice(-2);
//     return `${year} / ${month} / ${day}`;
//   };

//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [progress, setProgress] = useState<number>(0);
//   const [text, setText] = useState<string>("");

//   // 이미지 업로드 시 호출되는 함수
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImageUrl(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//       setSelectedDate("2025/09/28");
//     }
//   };
//   // OCR 버튼 클릭 시 호출되는 함수
//   const handleClick = () => {
//     if (imageUrl) {
//       // Tesseract.js를 사용해 이미지에서 텍스트를 인식
//       Tesseract.recognize(imageUrl, "eng+kor", {
//         logger: (m) => {
//           if (m.status === "recognizing text") {
//             // OCR 진행률을 업데이트
//             const progressValue = (m.progress * 100).toFixed(2);
//             setProgress(parseFloat(progressValue));
//           }
//         },
//       })
//         .then(({ data: { text } }) => {
//           // 인식된 텍스트를 상태에 저장
//           setText(text);
//           setSelectedDate(text);
//           console.log(text);
//         })
//         .catch((error) => {
//           console.error("OCR 처리 중 오류 발생:", error);
//         });
//     }
//   };

//   return (
//     <DateInputContainer $margin={margin}>
//       <div style={{ display: "flex" }}>
//         {isOcr && (
//           <Image
//             src="/images/ce_ocr.svg"
//             alt="ocr"
//             width={14}
//             height={14}
//             style={{ marginRight: "10px" }}
//             onClick={() => {
//               handleClick();
//               handleFileInputClick(); // file input 클릭을 호출하여 파일 선택 창 열기
//             }}
//           />
//         )}
//         {selectedDate ? (
//           <Body2Regular
//             onClick={handleContainerClick}
//             style={{ fontSize: "14px" }}
//           >
//             {selectedDate}
//           </Body2Regular>
//         ) : (
//           <PlaceholderText onClick={handleContainerClick}>
//             YYYY / MM / DD
//           </PlaceholderText>
//         )}
//       </div>
//       <HiddenCalendarInput
//         ref={inputCalenderRef}
//         type="date"
//         onChange={handleDateChange}
//       />
//       {isOcr && (
//         <HiddenFileInput
//           ref={fileInputRef}
//           type="file"
//           onChange={handleImageUpload} // 파일 선택 후 handleImageUpload 호출
//           accept="image/*" // 이미지 파일만 허용
//         />
//       )}
//     </DateInputContainer>
//   );
// };

// const DateInputContainer = styled.div<{ $margin: string }>`
//   width: 200px;
//   height: 30px;
//   background-color: ${colors.grey1};
//   border-radius: 8px;
//   margin: ${(props) => props.$margin};
//   padding: 5px 0 0 5px;
//   cursor: pointer;
//   position: relative;
// `;

// const PlaceholderText = styled.span`
//   color: ${colors.grey4};
//   font-family: Pretendard;
//   font-weight: 600; //Semibold
//   font-size: 14px;
// `;

// const HiddenCalendarInput = styled.input`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   cursor: pointer;
// `;

// const HiddenFileInput = styled.input`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   cursor: pointer;
// `;

// export default CalendarInput;

import colors from "@/styles/color";
import { Body2Regular } from "@/styles/texts";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import Tesseract from "tesseract.js";

const CalendarInput = ({
  margin,
  isOcr,
  extrafunc,
}: {
  margin: string;
  isOcr: boolean;
  extrafunc?: any;
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const inputCalenderRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (inputCalenderRef.current) {
      inputCalenderRef.current.focus(); // 날짜 입력 필드에 포커스를 줍니다.
    }
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setSelectedDate(formatDate(dateValue));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year} / ${month} / ${day}`;
  };

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    setSelectedDate("2025 / 09 / 28");
    extrafunc("2025 / 09 / 28");
  };

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
          setSelectedDate(text);
        })
        .catch((error) => {
          console.error("OCR 처리 중 오류 발생:", error);
        });
    }
  };

  return (
    <DateInputContainer $margin={margin}>
      <div style={{ display: "flex" }}>
        {isOcr && (
          <Image
            src="/images/ce_ocr.svg"
            alt="ocr"
            width={14}
            height={14}
            style={{ marginRight: "10px" }}
            onClick={() => {
              handleClick();
              handleFileInputClick();
            }}
          />
        )}
        {selectedDate ? (
          <Body2Regular
            onClick={handleContainerClick}
            style={{ fontSize: "14px" }}
          >
            {selectedDate}
          </Body2Regular>
        ) : (
          <PlaceholderText onClick={handleContainerClick}>
            YYYY / MM / DD
          </PlaceholderText>
        )}
      </div>
      <HiddenCalendarInput
        ref={inputCalenderRef}
        type="date"
        onChange={handleDateChange}
        onFocus={(e) =>
          e.currentTarget.showPicker && e.currentTarget.showPicker()
        } // 포커스 시 날짜 선택 창 열기 시도
      />
      {isOcr && (
        <HiddenFileInput
          ref={fileInputRef}
          type="file"
          onChange={handleImageUpload}
          accept="image/*"
        />
      )}
    </DateInputContainer>
  );
};

const DateInputContainer = styled.div<{ $margin: string }>`
  width: 150px;
  height: 30px;
  background-color: ${colors.grey1};
  border-radius: 8px;
  margin: ${(props) => props.$margin};
  padding: 5px 0 0 5px;
  cursor: pointer;
  position: relative;
`;

const PlaceholderText = styled.span`
  color: ${colors.grey4};
  font-family: Pretendard;
  font-weight: 600;
  font-size: 14px;
`;

const HiddenCalendarInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const HiddenFileInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export default CalendarInput;
