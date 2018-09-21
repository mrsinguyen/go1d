import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const DeleteUser: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M8 9H3.32812C2.86979 9 2.4375 9.08333 2.03125 9.25C1.625 9.42708 1.27083 9.66406 0.96875 9.96094C0.666665 10.2578 0.432292 10.6094 0.265625 11.0156C0.0885408 11.4219 0 11.8594 0 12.3281V13.6562C0 13.8646 0.0598952 14.0286 0.179688 14.1484C0.29948 14.2682 0.463541 14.3281 0.671875 14.3281C0.869793 14.3281 1.02865 14.2682 1.14844 14.1484C1.26823 14.0286 1.32812 13.8646 1.32812 13.6562V12.3281C1.32812 11.7656 1.52083 11.2917 1.90625 10.9062C2.29167 10.5208 2.76562 10.3281 3.32812 10.3281H8C8.5625 10.3281 9.03646 10.5208 9.42188 10.9062C9.80729 11.2917 10 11.7656 10 12.3281V13.6562C10 13.8646 10.0599 14.0286 10.1797 14.1484C10.2995 14.2682 10.4635 14.3281 10.6719 14.3281C10.8698 14.3281 11.0286 14.2682 11.1484 14.1484C11.2682 14.0286 11.3281 13.8646 11.3281 13.6562V12.3281C11.3281 11.8594 11.2448 11.4219 11.0781 11.0156C10.901 10.6094 10.6641 10.2578 10.3672 9.96094C10.0703 9.66406 9.71875 9.42708 9.3125 9.25C8.90625 9.08333 8.46875 9 8 9ZM5.67188 7.65625C6.13021 7.65625 6.5625 7.57292 6.96875 7.40625C7.375 7.22917 7.72917 6.99219 8.03125 6.69531C8.33333 6.39844 8.56771 6.04688 8.73438 5.64062C8.91146 5.23437 9 4.79688 9 4.32812C9 3.85937 8.91146 3.42188 8.73438 3.01562C8.56771 2.60937 8.33333 2.25781 8.03125 1.96094C7.72917 1.66406 7.375 1.42708 6.96875 1.25C6.5625 1.08333 6.13021 1 5.67188 1C5.20312 1 4.76563 1.08333 4.35938 1.25C3.95312 1.42708 3.59896 1.66406 3.29688 1.96094C2.99479 2.25781 2.76042 2.60937 2.59375 3.01562C2.41667 3.42188 2.32812 3.85937 2.32812 4.32812C2.32812 4.79688 2.41667 5.23437 2.59375 5.64062C2.76042 6.04688 2.99479 6.39844 3.29688 6.69531C3.59896 6.99219 3.95312 7.22917 4.35938 7.40625C4.76563 7.57292 5.20312 7.65625 5.67188 7.65625ZM5.67188 2.32812C6.23438 2.32812 6.70833 2.52083 7.09375 2.90625C7.47917 3.29167 7.67188 3.76562 7.67188 4.32812C7.67188 4.89063 7.47917 5.36458 7.09375 5.75C6.70833 6.13542 6.23438 6.32812 5.67188 6.32812C5.09896 6.32812 4.6224 6.13542 4.24219 5.75C3.86198 5.36458 3.67188 4.89063 3.67188 4.32812C3.67188 3.76562 3.86198 3.29167 4.24219 2.90625C4.6224 2.52083 5.09896 2.32812 5.67188 2.32812ZM14.5938 6.65625L15.7969 5.46875C15.9323 5.33333 16 5.17708 16 5C16 4.82292 15.9323 4.66667 15.7969 4.53125C15.6615 4.39583 15.5052 4.32812 15.3281 4.32812C15.151 4.32812 14.9948 4.39583 14.8594 4.53125L13.6719 5.73438L12.4688 4.53125C12.3333 4.39583 12.1771 4.32812 12 4.32812C11.8229 4.32812 11.6667 4.39583 11.5312 4.53125C11.3958 4.66667 11.3281 4.82292 11.3281 5C11.3281 5.17708 11.3958 5.33333 11.5312 5.46875L12.7344 6.65625L11.5312 7.85938C11.3958 7.99479 11.3281 8.15104 11.3281 8.32812C11.3281 8.50521 11.3958 8.66146 11.5312 8.79688C11.6042 8.85938 11.6849 8.90885 11.7734 8.94531C11.862 8.98177 11.9375 9 12 9C12.0625 9 12.138 8.98177 12.2266 8.94531C12.3151 8.90885 12.3958 8.85938 12.4688 8.79688L13.6719 7.59375L14.8594 8.79688C14.9323 8.85938 15.013 8.90885 15.1016 8.94531C15.1901 8.98177 15.2656 9 15.3281 9C15.401 9 15.4818 8.98177 15.5703 8.94531C15.6589 8.90885 15.7344 8.85938 15.7969 8.79688C15.9323 8.66146 16 8.50521 16 8.32812C16 8.15104 15.9323 7.99479 15.7969 7.85938L14.5938 6.65625Z M8 9H3.32812C2.86979 9 2.4375 9.08333 2.03125 9.25C1.625 9.42708 1.27083 9.66406 0.96875 9.96094C0.666665 10.2578 0.432292 10.6094 0.265625 11.0156C0.0885408 11.4219 0 11.8594 0 12.3281V13.6562C0 13.8646 0.0598952 14.0286 0.179688 14.1484C0.29948 14.2682 0.463541 14.3281 0.671875 14.3281C0.869793 14.3281 1.02865 14.2682 1.14844 14.1484C1.26823 14.0286 1.32812 13.8646 1.32812 13.6562V12.3281C1.32812 11.7656 1.52083 11.2917 1.90625 10.9062C2.29167 10.5208 2.76562 10.3281 3.32812 10.3281H8C8.5625 10.3281 9.03646 10.5208 9.42188 10.9062C9.80729 11.2917 10 11.7656 10 12.3281V13.6562C10 13.8646 10.0599 14.0286 10.1797 14.1484C10.2995 14.2682 10.4635 14.3281 10.6719 14.3281C10.8698 14.3281 11.0286 14.2682 11.1484 14.1484C11.2682 14.0286 11.3281 13.8646 11.3281 13.6562V12.3281C11.3281 11.8594 11.2448 11.4219 11.0781 11.0156C10.901 10.6094 10.6641 10.2578 10.3672 9.96094C10.0703 9.66406 9.71875 9.42708 9.3125 9.25C8.90625 9.08333 8.46875 9 8 9ZM5.67188 7.65625C6.13021 7.65625 6.5625 7.57292 6.96875 7.40625C7.375 7.22917 7.72917 6.99219 8.03125 6.69531C8.33333 6.39844 8.56771 6.04688 8.73438 5.64062C8.91146 5.23437 9 4.79688 9 4.32812C9 3.85937 8.91146 3.42188 8.73438 3.01562C8.56771 2.60937 8.33333 2.25781 8.03125 1.96094C7.72917 1.66406 7.375 1.42708 6.96875 1.25C6.5625 1.08333 6.13021 1 5.67188 1C5.20312 1 4.76563 1.08333 4.35938 1.25C3.95312 1.42708 3.59896 1.66406 3.29688 1.96094C2.99479 2.25781 2.76042 2.60937 2.59375 3.01562C2.41667 3.42188 2.32812 3.85937 2.32812 4.32812C2.32812 4.79688 2.41667 5.23437 2.59375 5.64062C2.76042 6.04688 2.99479 6.39844 3.29688 6.69531C3.59896 6.99219 3.95312 7.22917 4.35938 7.40625C4.76563 7.57292 5.20312 7.65625 5.67188 7.65625ZM5.67188 2.32812C6.23438 2.32812 6.70833 2.52083 7.09375 2.90625C7.47917 3.29167 7.67188 3.76562 7.67188 4.32812C7.67188 4.89063 7.47917 5.36458 7.09375 5.75C6.70833 6.13542 6.23438 6.32812 5.67188 6.32812C5.09896 6.32812 4.6224 6.13542 4.24219 5.75C3.86198 5.36458 3.67188 4.89063 3.67188 4.32812C3.67188 3.76562 3.86198 3.29167 4.24219 2.90625C4.6224 2.52083 5.09896 2.32812 5.67188 2.32812ZM14.5938 6.65625L15.7969 5.46875C15.9323 5.33333 16 5.17708 16 5C16 4.82292 15.9323 4.66667 15.7969 4.53125C15.6615 4.39583 15.5052 4.32812 15.3281 4.32812C15.151 4.32812 14.9948 4.39583 14.8594 4.53125L13.6719 5.73438L12.4688 4.53125C12.3333 4.39583 12.1771 4.32812 12 4.32812C11.8229 4.32812 11.6667 4.39583 11.5312 4.53125C11.3958 4.66667 11.3281 4.82292 11.3281 5C11.3281 5.17708 11.3958 5.33333 11.5312 5.46875L12.7344 6.65625L11.5312 7.85938C11.3958 7.99479 11.3281 8.15104 11.3281 8.32812C11.3281 8.50521 11.3958 8.66146 11.5312 8.79688C11.6042 8.85938 11.6849 8.90885 11.7734 8.94531C11.862 8.98177 11.9375 9 12 9C12.0625 9 12.138 8.98177 12.2266 8.94531C12.3151 8.90885 12.3958 8.85938 12.4688 8.79688L13.6719 7.59375L14.8594 8.79688C14.9323 8.85938 15.013 8.90885 15.1016 8.94531C15.1901 8.98177 15.2656 9 15.3281 9C15.401 9 15.4818 8.98177 15.5703 8.94531C15.6589 8.90885 15.7344 8.85938 15.7969 8.79688C15.9323 8.66146 16 8.50521 16 8.32812C16 8.15104 15.9323 7.99479 15.7969 7.85938L14.5938 6.65625Z" />
  </svg>
);

DeleteUser.displayName = "DeleteUser";

export default DeleteUser;