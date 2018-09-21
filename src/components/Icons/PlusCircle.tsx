import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const PlusCircle: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M8 0C6.88557 0 5.84507 0.210151 4.87846 0.630458C3.90049 1.03941 3.05047 1.60738 2.32836 2.3344C1.60625 3.06142 1.03483 3.9077 0.614073 4.87327C0.204689 5.8502 0 6.88959 0 7.99148C0 9.10473 0.204689 10.1441 0.614073 11.1097C1.03483 12.0866 1.60625 12.9357 2.32836 13.6571C3.05047 14.3784 3.90049 14.9492 4.87846 15.3695C5.84507 15.7898 6.88557 16 8 16C9.11443 16 10.1549 15.7898 11.1215 15.3695C12.0995 14.9492 12.9495 14.3784 13.6716 13.6571C14.3937 12.9357 14.9652 12.0866 15.3859 11.1097C15.7953 10.1441 16 9.10473 16 7.99148C16 6.88959 15.7953 5.8502 15.3859 4.87327C14.9652 3.9077 14.3937 3.06142 13.6716 2.3344C12.9495 1.60738 12.0995 1.03941 11.1215 0.630458C10.1549 0.210151 9.11443 0 8 0ZM8 14.5346C7.09026 14.5346 6.23739 14.3642 5.44136 14.0234C4.64534 13.6826 3.95167 13.2169 3.36034 12.6262C2.76901 12.0355 2.30277 11.3426 1.96162 10.5474C1.62047 9.75221 1.44989 8.90025 1.44989 7.99148C1.44989 7.08271 1.62047 6.23075 1.96162 5.43557C2.30277 4.64039 2.76901 3.94746 3.36034 3.35676C3.95167 2.76606 4.64534 2.30032 5.44136 1.95953C6.23739 1.61874 7.09026 1.44835 8 1.44835C8.90974 1.44835 9.76261 1.61874 10.5586 1.95953C11.3547 2.30032 12.0483 2.76606 12.6397 3.35676C13.231 3.94746 13.6972 4.64039 14.0384 5.43557C14.3795 6.23075 14.5501 7.08271 14.5501 7.99148C14.5501 8.90025 14.3795 9.75221 14.0384 10.5474C13.6972 11.3426 13.231 12.0355 12.6397 12.6262C12.0483 13.2169 11.3547 13.6826 10.5586 14.0234C9.76261 14.3642 8.90974 14.5346 8 14.5346ZM10.9168 7.27583H8.73347V5.09478C8.73347 4.86759 8.66525 4.68868 8.52878 4.55804C8.39232 4.4274 8.21606 4.36209 8 4.36209C7.78394 4.36209 7.60768 4.4274 7.47122 4.55804C7.33475 4.68868 7.26652 4.86759 7.26652 5.09478V7.27583H5.08316C4.86709 7.27583 4.69368 7.34114 4.5629 7.47178C4.43212 7.60241 4.36674 7.77565 4.36674 7.99148C4.36674 8.21867 4.43212 8.39758 4.5629 8.52822C4.69368 8.65886 4.86709 8.72417 5.08316 8.72417H7.26652V10.9052C7.26652 11.1211 7.33475 11.2971 7.47122 11.4334C7.60768 11.5698 7.78394 11.6379 8 11.6379C8.21606 11.6379 8.39232 11.5698 8.52878 11.4334C8.66525 11.2971 8.73347 11.1211 8.73347 10.9052V8.72417H10.9168C11.1329 8.72417 11.3063 8.65886 11.4371 8.52822C11.5679 8.39758 11.6333 8.21867 11.6333 7.99148C11.6333 7.77565 11.5679 7.60241 11.4371 7.47178C11.3063 7.34114 11.1329 7.27583 10.9168 7.27583Z M8 0C6.88557 0 5.84507 0.210151 4.87846 0.630458C3.90049 1.03941 3.05047 1.60738 2.32836 2.3344C1.60625 3.06142 1.03483 3.9077 0.614073 4.87327C0.204689 5.8502 0 6.88959 0 7.99148C0 9.10473 0.204689 10.1441 0.614073 11.1097C1.03483 12.0866 1.60625 12.9357 2.32836 13.6571C3.05047 14.3784 3.90049 14.9492 4.87846 15.3695C5.84507 15.7898 6.88557 16 8 16C9.11443 16 10.1549 15.7898 11.1215 15.3695C12.0995 14.9492 12.9495 14.3784 13.6716 13.6571C14.3937 12.9357 14.9652 12.0866 15.3859 11.1097C15.7953 10.1441 16 9.10473 16 7.99148C16 6.88959 15.7953 5.8502 15.3859 4.87327C14.9652 3.9077 14.3937 3.06142 13.6716 2.3344C12.9495 1.60738 12.0995 1.03941 11.1215 0.630458C10.1549 0.210151 9.11443 0 8 0ZM8 14.5346C7.09026 14.5346 6.23739 14.3642 5.44136 14.0234C4.64534 13.6826 3.95167 13.2169 3.36034 12.6262C2.76901 12.0355 2.30277 11.3426 1.96162 10.5474C1.62047 9.75221 1.44989 8.90025 1.44989 7.99148C1.44989 7.08271 1.62047 6.23075 1.96162 5.43557C2.30277 4.64039 2.76901 3.94746 3.36034 3.35676C3.95167 2.76606 4.64534 2.30032 5.44136 1.95953C6.23739 1.61874 7.09026 1.44835 8 1.44835C8.90974 1.44835 9.76261 1.61874 10.5586 1.95953C11.3547 2.30032 12.0483 2.76606 12.6397 3.35676C13.231 3.94746 13.6972 4.64039 14.0384 5.43557C14.3795 6.23075 14.5501 7.08271 14.5501 7.99148C14.5501 8.90025 14.3795 9.75221 14.0384 10.5474C13.6972 11.3426 13.231 12.0355 12.6397 12.6262C12.0483 13.2169 11.3547 13.6826 10.5586 14.0234C9.76261 14.3642 8.90974 14.5346 8 14.5346ZM10.9168 7.27583H8.73347V5.09478C8.73347 4.86759 8.66525 4.68868 8.52878 4.55804C8.39232 4.4274 8.21606 4.36209 8 4.36209C7.78394 4.36209 7.60768 4.4274 7.47122 4.55804C7.33475 4.68868 7.26652 4.86759 7.26652 5.09478V7.27583H5.08316C4.86709 7.27583 4.69368 7.34114 4.5629 7.47178C4.43212 7.60241 4.36674 7.77565 4.36674 7.99148C4.36674 8.21867 4.43212 8.39758 4.5629 8.52822C4.69368 8.65886 4.86709 8.72417 5.08316 8.72417H7.26652V10.9052C7.26652 11.1211 7.33475 11.2971 7.47122 11.4334C7.60768 11.5698 7.78394 11.6379 8 11.6379C8.21606 11.6379 8.39232 11.5698 8.52878 11.4334C8.66525 11.2971 8.73347 11.1211 8.73347 10.9052V8.72417H10.9168C11.1329 8.72417 11.3063 8.65886 11.4371 8.52822C11.5679 8.39758 11.6333 8.21867 11.6333 7.99148C11.6333 7.77565 11.5679 7.60241 11.4371 7.47178C11.3063 7.34114 11.1329 7.27583 10.9168 7.27583Z" />
  </svg>
);

PlusCircle.displayName = "PlusCircle";

export default PlusCircle;