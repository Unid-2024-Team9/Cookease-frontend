import colors from "@/styles/color";
import { styled } from "styled-components";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const path = usePathname();

  const isHome = path === "/home";
  const isRecipe = path === "/recipe";
  const isCommunity = path === "/community";
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
    <Container>
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
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-top: 1px solid #d9d9d9;

  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 100;

  padding: 0px 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
