'use client'
 
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/v1")
  }, []);
}
