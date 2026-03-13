import { permanentRedirect } from "next/navigation";

/** Old URL; cleaning is now a standard service at /services/cleaning */
export default function CleaningRedirectPage() {
  permanentRedirect("/services/cleaning");
}
