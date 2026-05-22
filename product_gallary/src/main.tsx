import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Cart from "./components/shared/Cart";
import NotFound from "./components/shared/NotFound";
import ProductDetails from "./components/shared/ProductDetails";
import ProductsList from "./components/shared/ProductsList";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { LanguageProvider } from "./context/LanguageContext";
import { useEffect } from "react";
import { useThemeStore } from "./store/useThemeStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductsList />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const App = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>
);
