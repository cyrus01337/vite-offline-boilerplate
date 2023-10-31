import { Helmet as Head } from "react-helmet";
import capitalise from "lodash/capitalize";

import favicon from "/favicon.ico";

export default function Layout({
  children,
  title,
  className = "h-full w-full",
}) {
  const formattedTitle = capitalise(title);

  return (
    <>
      <Head>
        <link href={favicon} rel="shortcut icon" type="image/x-icon" />
        <title>{formattedTitle}</title>
      </Head>

      <main className={className}>{children}</main>
    </>
  );
}
