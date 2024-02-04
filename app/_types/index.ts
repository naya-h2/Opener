import { ReactElement, ReactNode } from "react";

export interface ModalBaseType {
  closeModal: () => void;
}
export interface MapType {
  name: string;
  address: string;
}

export type SignupStepNameType = "계정 정보" | "프로필 정보" | "아티스트 선택";

export type PostStepNameType = "행사 대상" | "행사 정보" | "특전 정보" | "상세 설명";

export interface StepType<T> {
  name: T;
  children: ReactNode;
}

export interface FunnelType<T> {
  children: Array<ReactElement<StepType<T>>>;
}

export interface ProfileSetupType<T> {
  steps: SignupStepNameType[];
  handleNextClick: (nextStep: SignupStepNameType) => void;
  Funnel: React.ComponentType<FunnelType<T>>;
  Step: React.ComponentType<StepType<T>>;
}

export interface SignUpFormType {
  email: string;
  password: string;
  passwordCh: string;
  profileImg: string;
  nickName: string;
  myArtists: string[] | [];
}

export type EventType = "카페" | "나눔" | "팬광고" | "팝업스토어" | "상영회" | "기타";
export type GiftType = "컵홀더" | "포스터" | "스티커" | "티켓" | "포토카드" | "엽서" | "굿즈" | "기타";
export type SnsType = "트위터" | "인스타그램" | "유튜브" | "기타";

export interface EventInfoType {
  placeName: string;
  eventType: EventType;
  groupId?: string;
  artists: string[];
  startDate: string;
  endDate: string;
  address: string;
  addressDetail: string;
  userId: string;
  eventImages?: string[];
  description?: string;
  eventUrl?: string;
  organizerSns?: string;
  snsType?: SnsType;
  tags?: GiftType[];
}

export interface ReviewType {
  userId: string;
  eventId: string;
  isPublic?: boolean;
  rating: boolean;
  description: string;
  reviewImages?: string[];
  like: number;
}

export type ArtistType = {
  name: string;
  group?: string[];
  profileImage: string;
};
