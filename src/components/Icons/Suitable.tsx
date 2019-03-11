import * as React from "react";

const Suitable: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <g fillRule="evenodd" clipPath="url(#clip0)" clipRule="evenodd">
      <path d="M12 7.667v.667h3.667a.333.333 0 0 0 0-.667H12zm-8 .666v-.667H.333a.333.333 0 0 0 0 .667H4zM8 5c-.418 0-.808.079-1.17.236a2.92 2.92 0 0 0-.957.64c-.27.272-.485.59-.643.951A3.01 3.01 0 0 0 5 7.997a2.965 2.965 0 0 0 .873 2.124c.27.27.59.485.956.643.363.157.753.236 1.171.236.418 0 .808-.079 1.17-.236.367-.158.686-.372.957-.643A2.965 2.965 0 0 0 11 7.996c0-.412-.077-.802-.23-1.169a3.086 3.086 0 0 0-.643-.952 2.92 2.92 0 0 0-.956-.639A2.904 2.904 0 0 0 8 5zm1.397 1.922a.337.337 0 0 0-.233.093L7.537 8.646l-.698-.703-.003-.003a.337.337 0 0 0-.233-.093.337.337 0 0 0-.234.093l-.002.003a.327.327 0 0 0 0 .472l.937.943.002.002c.032.027.064.05.099.065.04.019.086.026.132.026a.316.316 0 0 0 .231-.09l.003-.003L9.633 7.49a.327.327 0 0 0 0-.473l-.002-.002a.337.337 0 0 0-.234-.093z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

Suitable.displayName = "IconSuitable";

export default Suitable;