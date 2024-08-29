"use client"
import { useEffect, useState } from "react";
import HomeContent from "./home-content";
import PageLoader from "@/components/page-loader";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  },[])
  return loading ? <PageLoader /> : <HomeContent />;
}
