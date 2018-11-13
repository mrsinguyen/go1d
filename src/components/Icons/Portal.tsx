import * as React from "react";

const Portal: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M15.209 11.333v1.904H13.29v-1.904h1.918zm0-3.763v1.86H13.29V7.57h1.918zm1.918 7.526v-9.43H9.5V7.57h1.918v1.86H9.5v1.903h1.918v1.904H9.5v1.86h7.627zM7.582 3.763v-1.86H5.71v1.86h1.873zm0 3.807V5.667H5.71V7.57h1.873zm0 3.763V9.43H5.71v1.903h1.873zm0 3.763v-1.859H5.71v1.86h1.873zM3.792 3.763v-1.86h-1.92v1.86H3.79zm0 3.807V5.667h-1.92V7.57H3.79zm0 3.763V9.43h-1.92v1.903H3.79zm0 3.763v-1.859h-1.92v1.86H3.79zM9.5 3.763H19V17H0V0h9.5v3.763z" />
  </svg>
);

Portal.displayName = "IconPortal";

export default Portal;
