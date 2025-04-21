"use client"



import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchSunData, calculateNextPi } from "@/lib/serverActions";
import { useState, useEffect } from 'react';

export default function Home() {
  const [piValue, setPiValue] = useState(0);
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSunData();
      setPiValue(data.piValue);
      setCircumference(data.circumference);
    };

    fetchData();
  }, []);

  const updateSunData = async () => {
    const data = await fetchSunData();
    setPiValue(data.piValue);
    setCircumference(data.circumference);
  };

  const handleCalculateNextPi = async () => {
    await calculateNextPi();
    updateSunData();
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Card className="w-full md:w-[40rem]">
          <CardHeader>
            <CardTitle>Calculate Circumference of Sun Based on Value of π</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Current Value of π: {piValue}</p>
            <p>Circumference of Sun: {circumference} km</p>
          </CardContent>
          <CardFooter>
            <Button className="cursor-pointer" onClick={handleCalculateNextPi}>Calculate More Accurate Decimal of π (current decimal : {piValue.toString().split('.')[1]?.length || 0})</Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
