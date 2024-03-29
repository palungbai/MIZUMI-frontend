export interface ImageResponse {
  id: string;
  sunscreenImgUrl: string;
  noSunscreenImgUrl: string;
  status: "pending" | "succeeded";
}
