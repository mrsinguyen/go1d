import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Warning: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M15.64 11.973L9.776 2.048a2.017 2.017 0 0 0-.565-.614 2.4 2.4 0 0 0-.761-.368 2.412 2.412 0 0 0-.836-.05c-.273.033-.53.12-.77.262a1.887 1.887 0 0 0-.409.303c-.131.126-.23.26-.295.402l-5.863 9.99c-.284.492-.35 1.021-.197 1.59.153.567.475.993.967 1.277.13.109.28.183.45.22.17.039.341.058.516.058h11.89c.274 0 .541-.052.803-.155.262-.104.48-.26.655-.467.208-.219.366-.448.475-.688.11-.24.164-.502.164-.786a27.148 27.148 0 0 1-.131-.549 1.272 1.272 0 0 0-.23-.5zm-1.245 1.54a.933.933 0 0 1-.254.156.644.644 0 0 1-.237.057H2.013a1.7 1.7 0 0 1-.172-.008.407.407 0 0 1-.172-.074.615.615 0 0 1-.32-.426.959.959 0 0 1 .042-.54l5.945-9.86a.68.68 0 0 0 .098-.131c.033-.055.066-.082.098-.082a.717.717 0 0 1 .55-.074c.19.05.335.145.433.287l5.945 9.86a.228.228 0 0 1 .058.147c.005.066.008.131.008.197.033.109.027.199-.016.27a1.697 1.697 0 0 0-.115.221zM7.958 5.34a.704.704 0 0 0-.507.189.66.66 0 0 0-.197.5v2.8c0 .207.065.377.197.508.13.13.3.196.507.196a.687.687 0 0 0 .508-.196.687.687 0 0 0 .197-.508v-2.8a.66.66 0 0 0-.197-.5.703.703 0 0 0-.508-.189zm-.491 5.798a.82.82 0 0 0-.156.213.618.618 0 0 0-.057.278c0 .099.02.186.057.263.039.076.09.152.156.229.076.065.15.114.221.147.071.033.161.05.27.05.11 0 .2-.017.27-.05a.974.974 0 0 0 .222-.147.934.934 0 0 0 .155-.254.645.645 0 0 0 .057-.238.673.673 0 0 0-.057-.253.718.718 0 0 0-.155-.238.675.675 0 0 0-.983 0z" />
  </svg>
);

Warning.displayName = "IconWarning";

export default Warning;