import * as React from "react";
import { PageProps, withPrefix } from "gatsby";
import { NotFound } from "../components/pages";

const APP_ORIGIN = "https://app.trackdechets.beta.gouv.fr";
const APP_PATHS = [
  "/oauth2",
  "/login",
  "/signup",
  "/reset-password",
  "/wasteTree",
  "/invite",
  "/dashboard",
  "/form",
  "/account",
  "/company",
];

export default function Page404({ location }: PageProps) {
  // we keep the page blank on page load to avoid flashing a 404 page
  // when the user actually needs to be redirected
  // if the user doesn't have to be redirected, the page 404 is shown
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    if (
      APP_PATHS.some((path) => location.pathname.startsWith(withPrefix(path)))
    ) {
      const currentOriginWithPrefix = new URL(withPrefix("/"), location.origin)
        .href;
      const currentPathWithoutPrefix = location.href.replace(
        currentOriginWithPrefix,
        ""
      );

      // redirect to the application by preserving the path (query parameters and hash included)
      const redirectURL = new URL(currentPathWithoutPrefix, APP_ORIGIN).href;
      window.location.href = redirectURL;
      return;
    }

    setShouldRender(true);
  }, []);

  if (shouldRender) {
    return <NotFound />;
  }

  return null;
}
