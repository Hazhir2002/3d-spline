import Spline from "@splinetool/react-spline/next";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense>
        <Spline scene="https://prod.spline.design/tnPRRQl4ftuFHiez/scene.splinecode" />
      </Suspense>
    </div>
  );
}
