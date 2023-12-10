import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("pages/main-page/MainPage"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}