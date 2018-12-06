import * as React from "react";

const Facebook: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M11.97 4.36c.22 0 .4-.06.53-.2a.7.7 0 0 0 .2-.53V.73a.7.7 0 0 0-.2-.53.73.73 0 0 0-.53-.2H9.8a4.38 4.38 0 0 0-4.36 4.36v1.45H3.98a.7.7 0 0 0-.53.2.73.73 0 0 0-.2.53v2.92c0 .21.07.39.2.52s.3.2.53.2h1.45v5.09c0 .21.07.39.2.53.13.13.3.2.53.2h2.9a.7.7 0 0 0 .54-.2c.13-.14.2-.32.2-.53v-5.1h1.44c.18 0 .34-.05.48-.15.13-.1.22-.25.25-.43l.74-2.9a.6.6 0 0 0 0-.33.991.991 0 0 0-.16-.33.41.41 0 0 0-.25-.19c-.1-.02-.21-.03-.33-.03H9.8V4.36h2.18zM9.06 7.28h1.98l-.38 1.44h-1.6a.7.7 0 0 0-.52.2.73.73 0 0 0-.2.54v5.07H6.88V9.46c0-.23-.07-.4-.2-.54a.7.7 0 0 0-.52-.2H4.7V7.28h1.46c.22 0 .4-.07.52-.2.13-.14.2-.32.2-.54V4.36c0-.8.29-1.48.86-2.05a2.8 2.8 0 0 1 2.05-.86h1.45V2.9H9.8c-.4 0-.74.15-1.02.43a1.4 1.4 0 0 0-.43 1.02v2.18c0 .22.07.4.2.53.13.14.3.2.52.2z" />
  </svg>
);

Facebook.displayName = "IconFacebook";

export default Facebook;
