import { createFileRoute } from "@tanstack/react-router";
import MenuPage from "../pages/menu-page";
export const Route = createFileRoute("/menu-page")({
  component: RouteComponent,
});

function RouteComponent() {
  //   return <MenuPage />;
}
