import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const AddUser: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M8 9H3.32812C2.86979 9 2.4375 9.08333 2.03125 9.25C1.625 9.42708 1.27083 9.66406 0.96875 9.96094C0.666665 10.2578 0.432292 10.6094 0.265625 11.0156C0.0885408 11.4219 0 11.8594 0 12.3281V13.6562C0 13.8646 0.0598952 14.0286 0.179688 14.1484C0.29948 14.2682 0.463541 14.3281 0.671875 14.3281C0.869793 14.3281 1.02865 14.2682 1.14844 14.1484C1.26823 14.0286 1.32812 13.8646 1.32812 13.6562V12.3281C1.32812 11.7656 1.52083 11.2917 1.90625 10.9062C2.29167 10.5208 2.76562 10.3281 3.32812 10.3281H8C8.5625 10.3281 9.03646 10.5208 9.42188 10.9062C9.80729 11.2917 10 11.7656 10 12.3281V13.6562C10 13.8646 10.0599 14.0286 10.1797 14.1484C10.2995 14.2682 10.4635 14.3281 10.6719 14.3281C10.8698 14.3281 11.0286 14.2682 11.1484 14.1484C11.2682 14.0286 11.3281 13.8646 11.3281 13.6562V12.3281C11.3281 11.8594 11.2448 11.4219 11.0781 11.0156C10.901 10.6094 10.6641 10.2578 10.3672 9.96094C10.0703 9.66406 9.71875 9.42708 9.3125 9.25C8.90625 9.08333 8.46875 9 8 9ZM5.67188 7.65625C6.13021 7.65625 6.5625 7.57292 6.96875 7.40625C7.375 7.22917 7.72917 6.99219 8.03125 6.69531C8.33333 6.39844 8.56771 6.04688 8.73438 5.64062C8.91146 5.23437 9 4.79688 9 4.32812C9 3.85937 8.91146 3.42188 8.73438 3.01562C8.56771 2.60937 8.33333 2.25781 8.03125 1.96094C7.72917 1.66406 7.375 1.42708 6.96875 1.25C6.5625 1.08333 6.13021 1 5.67188 1C5.20312 1 4.76563 1.08333 4.35938 1.25C3.95312 1.42708 3.59896 1.66406 3.29688 1.96094C2.99479 2.25781 2.76042 2.60937 2.59375 3.01562C2.41667 3.42188 2.32812 3.85937 2.32812 4.32812C2.32812 4.79688 2.41667 5.23437 2.59375 5.64062C2.76042 6.04688 2.99479 6.39844 3.29688 6.69531C3.59896 6.99219 3.95312 7.22917 4.35938 7.40625C4.76563 7.57292 5.20312 7.65625 5.67188 7.65625ZM5.67188 2.32812C6.23438 2.32812 6.70833 2.52083 7.09375 2.90625C7.47917 3.29167 7.67188 3.76562 7.67188 4.32812C7.67188 4.89063 7.47917 5.36458 7.09375 5.75C6.70833 6.13542 6.23438 6.32812 5.67188 6.32812C5.09896 6.32812 4.6224 6.13542 4.24219 5.75C3.86198 5.36458 3.67188 4.89063 3.67188 4.32812C3.67188 3.76562 3.86198 3.29167 4.24219 2.90625C4.6224 2.52083 5.09896 2.32812 5.67188 2.32812ZM15.3281 6.32812H14V5C14 4.79167 13.9401 4.6276 13.8203 4.50781C13.7005 4.38802 13.5365 4.32812 13.3281 4.32812C13.1302 4.32812 12.9714 4.38802 12.8516 4.50781C12.7318 4.6276 12.6719 4.79167 12.6719 5V6.32812H11.3281C11.1302 6.32812 10.9714 6.38802 10.8516 6.50781C10.7318 6.6276 10.6719 6.79167 10.6719 7C10.6719 7.19792 10.7318 7.35677 10.8516 7.47656C10.9714 7.59635 11.1302 7.65625 11.3281 7.65625H12.6719V9C12.6719 9.19792 12.7318 9.35677 12.8516 9.47656C12.9714 9.59636 13.1302 9.65625 13.3281 9.65625C13.5365 9.65625 13.7005 9.59636 13.8203 9.47656C13.9401 9.35677 14 9.19792 14 9V7.65625H15.3281C15.5365 7.65625 15.7005 7.59635 15.8203 7.47656C15.9401 7.35677 16 7.19792 16 7C16 6.79167 15.9401 6.6276 15.8203 6.50781C15.7005 6.38802 15.5365 6.32812 15.3281 6.32812Z M8 9H3.32812C2.86979 9 2.4375 9.08333 2.03125 9.25C1.625 9.42708 1.27083 9.66406 0.96875 9.96094C0.666665 10.2578 0.432292 10.6094 0.265625 11.0156C0.0885408 11.4219 0 11.8594 0 12.3281V13.6562C0 13.8646 0.0598952 14.0286 0.179688 14.1484C0.29948 14.2682 0.463541 14.3281 0.671875 14.3281C0.869793 14.3281 1.02865 14.2682 1.14844 14.1484C1.26823 14.0286 1.32812 13.8646 1.32812 13.6562V12.3281C1.32812 11.7656 1.52083 11.2917 1.90625 10.9062C2.29167 10.5208 2.76562 10.3281 3.32812 10.3281H8C8.5625 10.3281 9.03646 10.5208 9.42188 10.9062C9.80729 11.2917 10 11.7656 10 12.3281V13.6562C10 13.8646 10.0599 14.0286 10.1797 14.1484C10.2995 14.2682 10.4635 14.3281 10.6719 14.3281C10.8698 14.3281 11.0286 14.2682 11.1484 14.1484C11.2682 14.0286 11.3281 13.8646 11.3281 13.6562V12.3281C11.3281 11.8594 11.2448 11.4219 11.0781 11.0156C10.901 10.6094 10.6641 10.2578 10.3672 9.96094C10.0703 9.66406 9.71875 9.42708 9.3125 9.25C8.90625 9.08333 8.46875 9 8 9ZM5.67188 7.65625C6.13021 7.65625 6.5625 7.57292 6.96875 7.40625C7.375 7.22917 7.72917 6.99219 8.03125 6.69531C8.33333 6.39844 8.56771 6.04688 8.73438 5.64062C8.91146 5.23437 9 4.79688 9 4.32812C9 3.85937 8.91146 3.42188 8.73438 3.01562C8.56771 2.60937 8.33333 2.25781 8.03125 1.96094C7.72917 1.66406 7.375 1.42708 6.96875 1.25C6.5625 1.08333 6.13021 1 5.67188 1C5.20312 1 4.76563 1.08333 4.35938 1.25C3.95312 1.42708 3.59896 1.66406 3.29688 1.96094C2.99479 2.25781 2.76042 2.60937 2.59375 3.01562C2.41667 3.42188 2.32812 3.85937 2.32812 4.32812C2.32812 4.79688 2.41667 5.23437 2.59375 5.64062C2.76042 6.04688 2.99479 6.39844 3.29688 6.69531C3.59896 6.99219 3.95312 7.22917 4.35938 7.40625C4.76563 7.57292 5.20312 7.65625 5.67188 7.65625ZM5.67188 2.32812C6.23438 2.32812 6.70833 2.52083 7.09375 2.90625C7.47917 3.29167 7.67188 3.76562 7.67188 4.32812C7.67188 4.89063 7.47917 5.36458 7.09375 5.75C6.70833 6.13542 6.23438 6.32812 5.67188 6.32812C5.09896 6.32812 4.6224 6.13542 4.24219 5.75C3.86198 5.36458 3.67188 4.89063 3.67188 4.32812C3.67188 3.76562 3.86198 3.29167 4.24219 2.90625C4.6224 2.52083 5.09896 2.32812 5.67188 2.32812ZM15.3281 6.32812H14V5C14 4.79167 13.9401 4.6276 13.8203 4.50781C13.7005 4.38802 13.5365 4.32812 13.3281 4.32812C13.1302 4.32812 12.9714 4.38802 12.8516 4.50781C12.7318 4.6276 12.6719 4.79167 12.6719 5V6.32812H11.3281C11.1302 6.32812 10.9714 6.38802 10.8516 6.50781C10.7318 6.6276 10.6719 6.79167 10.6719 7C10.6719 7.19792 10.7318 7.35677 10.8516 7.47656C10.9714 7.59635 11.1302 7.65625 11.3281 7.65625H12.6719V9C12.6719 9.19792 12.7318 9.35677 12.8516 9.47656C12.9714 9.59636 13.1302 9.65625 13.3281 9.65625C13.5365 9.65625 13.7005 9.59636 13.8203 9.47656C13.9401 9.35677 14 9.19792 14 9V7.65625H15.3281C15.5365 7.65625 15.7005 7.59635 15.8203 7.47656C15.9401 7.35677 16 7.19792 16 7C16 6.79167 15.9401 6.6276 15.8203 6.50781C15.7005 6.38802 15.5365 6.32812 15.3281 6.32812Z" />
  </svg>
);

AddUser.displayName = "AddUser";

export default AddUser;
