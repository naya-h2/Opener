"use client";

import FadingDot from "@/(route)/(bottom-nav)/signin/_components/FadingDot";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { instance } from "@/api/api";
import { deleteCookies, getCookies, setSession } from "@/store/session/cookies";
import Logo from "@/public/icon/logo.svg";
import KakaoLogo from "@/public/icon/logo_kakao.svg";
import NaverLogo from "@/public/icon/logo_naver.svg";

const OAuth = () => {
  const router = useRouter();
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code")!;
  const signinMethod = url.pathname.split("/").pop()!;

  const handleOAuth = async () => {
    const pathname = getCookies("pathname");
    try {
      const res = await instance.post(`/auth`, { code, signinMethod, email: "", password: "" });
      setSession({ isAuth: true, user: res });
      toast(`${signinMethod} 계정으로 연동 되었습니다. ${res.nickName}님`, {
        className: "text-16 font-600",
      });

      deleteCookies("pathname", { path: "/" });

      if (pathname === "/signin") {
        router.replace("/");
        router.refresh();
        return;
      }

      router.push(pathname);
      router.refresh();
    } catch (e) {
      toast.error("이미 가입한 이메일입니다.", {
        className: "text-16 font-600",
      });
      router.push("/signin");
    }
  };

  useEffect(() => {
    handleOAuth();
  }, []);

  const SocialLogo = () => {
    if (signinMethod === "kakao") {
      return <KakaoLogo />;
    }
    if (signinMethod === "naver") {
      return <NaverLogo fill="black" />;
    }
  };

  return (
    <div className="flex-center fixed bottom-0 left-0 right-0 top-0 z-floating gap-12 bg-white-black">
      <SocialLogo />
      <FadingDot />
      <Logo />
    </div>
  );
};

export default OAuth;
