export async function fetchSunData() {
  const resPi = await fetch('http://localhost:8001/sun/pi');
  const piValue = await resPi.json();

  const resCircumference = await fetch('http://localhost:8001/sun/get-circumference');
  const circumference = await resCircumference.json();

  return { piValue, circumference };
}

export async function calculateNextPi() {
  await fetch('http://localhost:8001/sun/calculating-pi');
}