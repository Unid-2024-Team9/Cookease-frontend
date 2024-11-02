import colors from "@/styles/color";
import { styled } from "styled-components";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const path = usePathname();

  const isHome = path === "/home";
  const isRecipe = path.startsWith("/recipe");
  const isCommunity = path.startsWith("/community");
  const isScrap = path === "/scrap";
  const isMy = path === "/my";
  const router = useRouter();

  const homeImageSrc = isHome
    ? "/images/ce_home_active.svg"
    : "/images/ce_home_inactive.svg";

  const recipeImageSrc = isRecipe
    ? "/images/ce_recipe_active.svg"
    : "/images/ce_recipe_inactive.svg";

  const communityImageSrc = isCommunity
    ? "/images/ce_community_active.svg"
    : "/images/ce_community_inactive.svg";

  const scrapImageSrc = isScrap
    ? "/images/ce_scrap_active.svg"
    : "/images/ce_scrap_inactive.svg";

  const myImageSrc = isMy
    ? "/images/ce_my_active.svg"
    : "/images/ce_my_inactive.svg";
  return (
    <>
      <Container>
        {(path === "/community" || path === "/recipe") && (
          <FloatingButton onClick={() => router.push("/community/write")}>
            <Image
              src="/images/ce_emoji_pencil.svg"
              alt="write"
              width={32}
              height={32}
            />
          </FloatingButton>
        )}

        <Link href="/home">
          <Image
            src={homeImageSrc}
            alt="home"
            width={72}
            height={64}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Link href="/recipe">
          <Image
            src={recipeImageSrc}
            alt="recipe"
            width={72}
            height={64}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Link href="/community">
          <Image
            src={communityImageSrc}
            alt="community"
            width={72}
            height={64}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Link href="/scrap">
          <Image
            src={scrapImageSrc}
            alt="scrap"
            width={72}
            height={64}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Link href="/my">
          <Image
            src={myImageSrc}
            alt="my"
            width={72}
            height={64}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-top: 1px solid #d9d9d9;
  background-color: white;
  position: sticky;
  bottom: 0;
  padding: 0px 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FloatingButton = styled.div`
  position: absolute;
  bottom: 100px;
  right: 30px; // 오른쪽 하단에 위치하도록 설정
  width: 80px;
  height: 80px;
  background-color: ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background-color: #ff8c00;
  }
  &:active {
    background-color: #e67600;
  }
`;
