import { createFileRoute } from '@tanstack/react-router'
import {SignUpPage} from "@/pages/auth/SignUpPage.tsx";

export const Route = createFileRoute('/auth/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignUpPage />
}
