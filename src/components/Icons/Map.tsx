import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Map: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M15.6719 1.09375C15.5677 1.03125 15.4557 1 15.3359 1C15.2161 1 15.1042 1.03125 15 1.09375L10.6719 3.625L5.59375 1.09375C5.59375 1.09375 5.59115 1.09375 5.58594 1.09375C5.58073 1.09375 5.5625 1.09375 5.53125 1.09375C5.5 1.0625 5.46875 1.04427 5.4375 1.03906C5.40625 1.03385 5.36979 1.03125 5.32812 1.03125C5.29688 1.03125 5.26302 1.03385 5.22656 1.03906C5.1901 1.04427 5.13542 1.0625 5.0625 1.09375C5.0625 1.09375 5.0599 1.09375 5.05469 1.09375C5.04948 1.09375 5.03125 1.09375 5 1.09375C5 1.09375 4.98958 1.09375 4.96875 1.09375C4.94792 1.09375 4.9375 1.09375 4.9375 1.09375L0.265625 3.76562C0.203125 3.82813 0.143229 3.91146 0.0859376 4.01562C0.0286456 4.11979 0 4.23437 0 4.35937V15.0312C0 15.1667 0.0312496 15.2839 0.09375 15.3828C0.15625 15.4818 0.234375 15.5625 0.328125 15.625C0.432292 15.6979 0.54427 15.7344 0.664062 15.7344C0.783855 15.7344 0.895833 15.6979 1 15.625L5.32812 13.0937L10.3281 15.625C10.401 15.6667 10.4583 15.6901 10.5 15.6953C10.5417 15.7005 10.599 15.7031 10.6719 15.7031C10.7031 15.7031 10.7344 15.7005 10.7656 15.6953C10.7969 15.6901 10.8281 15.6667 10.8594 15.625C10.8594 15.625 10.8724 15.625 10.8984 15.625C10.9245 15.625 10.9375 15.625 10.9375 15.625C10.9375 15.625 10.9401 15.625 10.9453 15.625C10.9505 15.625 10.9688 15.625 11 15.625L15.6719 12.9687C15.7656 12.8958 15.8438 12.8099 15.9062 12.7109C15.9688 12.612 16 12.4948 16 12.3594V1.70312C16 1.56771 15.9688 1.45052 15.9062 1.35156C15.8438 1.2526 15.7656 1.16667 15.6719 1.09375ZM6 2.76562L10 4.76562V13.9687L6 11.9687V2.76562ZM1.32812 4.76562L4.67188 2.82812V11.9687L1.32812 13.8906V4.76562ZM14.6719 11.9687L11.3281 13.8906V4.76562L14.6719 2.82812V11.9687Z M15.6719 1.09375C15.5677 1.03125 15.4557 1 15.3359 1C15.2161 1 15.1042 1.03125 15 1.09375L10.6719 3.625L5.59375 1.09375C5.59375 1.09375 5.59115 1.09375 5.58594 1.09375C5.58073 1.09375 5.5625 1.09375 5.53125 1.09375C5.5 1.0625 5.46875 1.04427 5.4375 1.03906C5.40625 1.03385 5.36979 1.03125 5.32812 1.03125C5.29688 1.03125 5.26302 1.03385 5.22656 1.03906C5.1901 1.04427 5.13542 1.0625 5.0625 1.09375C5.0625 1.09375 5.0599 1.09375 5.05469 1.09375C5.04948 1.09375 5.03125 1.09375 5 1.09375C5 1.09375 4.98958 1.09375 4.96875 1.09375C4.94792 1.09375 4.9375 1.09375 4.9375 1.09375L0.265625 3.76562C0.203125 3.82813 0.143229 3.91146 0.0859376 4.01562C0.0286456 4.11979 0 4.23437 0 4.35937V15.0312C0 15.1667 0.0312496 15.2839 0.09375 15.3828C0.15625 15.4818 0.234375 15.5625 0.328125 15.625C0.432292 15.6979 0.54427 15.7344 0.664062 15.7344C0.783855 15.7344 0.895833 15.6979 1 15.625L5.32812 13.0937L10.3281 15.625C10.401 15.6667 10.4583 15.6901 10.5 15.6953C10.5417 15.7005 10.599 15.7031 10.6719 15.7031C10.7031 15.7031 10.7344 15.7005 10.7656 15.6953C10.7969 15.6901 10.8281 15.6667 10.8594 15.625C10.8594 15.625 10.8724 15.625 10.8984 15.625C10.9245 15.625 10.9375 15.625 10.9375 15.625C10.9375 15.625 10.9401 15.625 10.9453 15.625C10.9505 15.625 10.9688 15.625 11 15.625L15.6719 12.9687C15.7656 12.8958 15.8438 12.8099 15.9062 12.7109C15.9688 12.612 16 12.4948 16 12.3594V1.70312C16 1.56771 15.9688 1.45052 15.9062 1.35156C15.8438 1.2526 15.7656 1.16667 15.6719 1.09375ZM6 2.76562L10 4.76562V13.9687L6 11.9687V2.76562ZM1.32812 4.76562L4.67188 2.82812V11.9687L1.32812 13.8906V4.76562ZM14.6719 11.9687L11.3281 13.8906V4.76562L14.6719 2.82812V11.9687Z" />
  </svg>
);

Map.displayName = "Map";

export default Map;