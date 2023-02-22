import { GiSpikedFence, GiSolarPower, GiPowerLightning, GiCctvCamera, GiShop, GiSoccerField, GiWaveSurfer, GiPoolDive, GiOffshorePlatform } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import { MdLandscape } from "react-icons/md";
import { TbBeachOff } from "react-icons/tb";
import { OpenScheduleModal } from "../features/scheduleSlice";

export const ACTIONBUTTONS = [
  { id: 1, action: "access brochure" },
  { id: 1, action: "subscription form", link: "/subscriptionForm" },
  { id: 1, action: "schedule inspection", fn: OpenScheduleModal() },
  { id: 1, action: "payment plans" },
];

export const FEATURESARRAY = [
  { id: 1, text: "protective fencings", icon: <GiSpikedFence /> },
  { id: 2, text: "Every Minute Power", icon: <GiSolarPower /> },
  { id: 3, text: "Electricity", icon: <GiPowerLightning /> },
  { id: 4, text: "CCTV Monitoring", icon: <GiCctvCamera /> },
  { id: 5, text: "Kids Arena", icon: <FaChild /> },
  { id: 6, text: "Landscape", icon: <MdLandscape /> },
  { id: 7, text: "Shopping Malls", icon: <GiShop /> },
  { id: 8, text: "Soccer Pitch", icon: <GiSoccerField /> },
  { id: 9, text: "Surfing", icon: <GiWaveSurfer /> },
  { id: 10, text: "Beach", icon: <TbBeachOff /> },
  { id: 11, text: "Swimming Pool", icon: <GiPoolDive /> },
  { id: 12, text: "Resort", icon: <GiOffshorePlatform /> },
];
