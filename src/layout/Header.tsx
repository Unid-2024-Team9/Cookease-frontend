import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { styled } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getProfileImageState } from "@/redux/slice/authSlice";
import { Heading3 } from "@/styles/texts";
import { isAbsolute } from "path";
import RecipeSearchBar from "@/components/common/RecipeSearchBar";
import CommunitySearchBar from "@/components/common/CommunitySearchBar";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const profileImage = useSelector(getProfileImageState);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  return (
    <>
      {pathname == "/home" && <Header_Title title="나의 냉장고" />}
      {pathname == "/recipe" && <Header_Search searchType="recipe" />}
      {pathname == "/community" && <Header_Search searchType="community" />}
      {pathname == "/my" && <Header_Title title="마이페이지" />}
    </>
  );
};

export default Header;

function Header_Title({ title }: { title: string }) {
  return (
    <Container_Header_Title>
      <Heading3>{title}</Heading3>
      <Notification
        src="/images/ce_notification.svg"
        alt="notification"
        width={30}
        height={30}
        isAbsolute={true}
      />
    </Container_Header_Title>
  );
}

type SearchType = "recipe" | "community";

function Header_Search({ searchType }: { searchType: SearchType }) {
  return (
    <Container_Header_Search>
      {searchType == "recipe" ? <RecipeSearchBar /> : <CommunitySearchBar />}
      <Notification
        src="/images/ce_notification.svg"
        alt="notification"
        width={30}
        height={30}
        isAbsolute={true}
      />
    </Container_Header_Search>
  );
}

const Container_Header_Title = styled.div`
  width: 100%;
  height: 80px;

  position: fixed;
  z-index: 10;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
`;

const Container_Header_Search = styled.div`
  width: 100%;
  height: 80px;

  position: fixed;
  z-index: 10;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
`;

const Notification = styled(Image)<{ isAbsolute?: boolean }>`
  cursor: pointer;
  position: ${(props) => props.isAbsolute == true && "absolute"};
  top: 26px;
  right: 39px;
`;
