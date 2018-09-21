import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Timer: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M8.00623 1.9726C7.03023 1.9726 6.11898 2.15684 5.27246 2.52533C4.41597 2.88385 3.67153 3.38181 3.03913 4.01919C2.40672 4.65658 1.90628 5.39852 1.53779 6.24505C1.17926 7.10154 1 8.01279 1 8.97882C1 9.95482 1.17926 10.8661 1.53779 11.7126C1.90628 12.5691 2.40672 13.3135 3.03913 13.9459C3.67153 14.5783 4.41597 15.0788 5.27246 15.4473C6.11898 15.8158 7.03023 16 8.00623 16C8.98223 16 9.89348 15.8158 10.74 15.4473C11.5965 15.0788 12.3409 14.5783 12.9733 13.9459C13.6057 13.3135 14.1062 12.5691 14.4747 11.7126C14.8332 10.8661 15.0125 9.95482 15.0125 8.97882C15.0125 8.01279 14.8332 7.10154 14.4747 6.24505C14.1062 5.39852 13.6057 4.65658 12.9733 4.01919C12.3409 3.38181 11.5965 2.88385 10.74 2.52533C9.89348 2.15684 8.98223 1.9726 8.00623 1.9726ZM8.00623 14.7153C7.2095 14.7153 6.46257 14.5659 5.76543 14.2671C5.06829 13.9683 4.46079 13.56 3.94291 13.0421C3.42504 12.5243 3.01672 11.9168 2.71795 11.2196C2.41917 10.5225 2.26979 9.77556 2.26979 8.97882C2.26979 8.18209 2.41917 7.43517 2.71795 6.73803C3.01672 6.04089 3.42504 5.43339 3.94291 4.91551C4.46079 4.39763 5.06829 3.98932 5.76543 3.69054C6.46257 3.39177 7.2095 3.24238 8.00623 3.24238C8.80296 3.24238 9.54989 3.39177 10.247 3.69054C10.9442 3.98932 11.5517 4.39763 12.0695 4.91551C12.5874 5.43339 12.9957 6.04089 13.2945 6.73803C13.5933 7.43517 13.7427 8.18209 13.7427 8.97882C13.7427 9.77556 13.5933 10.5225 13.2945 11.2196C12.9957 11.9168 12.5874 12.5243 12.0695 13.0421C11.5517 13.56 10.9442 13.9683 10.247 14.2671C9.54989 14.5659 8.80296 14.7153 8.00623 14.7153Z M8.00623 1.9726C7.03023 1.9726 6.11898 2.15684 5.27246 2.52533C4.41597 2.88385 3.67153 3.38181 3.03913 4.01919C2.40672 4.65658 1.90628 5.39852 1.53779 6.24505C1.17926 7.10154 1 8.01279 1 8.97882C1 9.95482 1.17926 10.8661 1.53779 11.7126C1.90628 12.5691 2.40672 13.3135 3.03913 13.9459C3.67153 14.5783 4.41597 15.0788 5.27246 15.4473C6.11898 15.8158 7.03023 16 8.00623 16C8.98223 16 9.89348 15.8158 10.74 15.4473C11.5965 15.0788 12.3409 14.5783 12.9733 13.9459C13.6057 13.3135 14.1062 12.5691 14.4747 11.7126C14.8332 10.8661 15.0125 9.95482 15.0125 8.97882C15.0125 8.01279 14.8332 7.10154 14.4747 6.24505C14.1062 5.39852 13.6057 4.65658 12.9733 4.01919C12.3409 3.38181 11.5965 2.88385 10.74 2.52533C9.89348 2.15684 8.98223 1.9726 8.00623 1.9726ZM8.00623 14.7153C7.2095 14.7153 6.46257 14.5659 5.76543 14.2671C5.06829 13.9683 4.46079 13.56 3.94291 13.0421C3.42504 12.5243 3.01672 11.9168 2.71795 11.2196C2.41917 10.5225 2.26979 9.77556 2.26979 8.97882C2.26979 8.18209 2.41917 7.43517 2.71795 6.73803C3.01672 6.04089 3.42504 5.43339 3.94291 4.91551C4.46079 4.39763 5.06829 3.98932 5.76543 3.69054C6.46257 3.39177 7.2095 3.24238 8.00623 3.24238C8.80296 3.24238 9.54989 3.39177 10.247 3.69054C10.9442 3.98932 11.5517 4.39763 12.0695 4.91551C12.5874 5.43339 12.9957 6.04089 13.2945 6.73803C13.5933 7.43517 13.7427 8.18209 13.7427 8.97882C13.7427 9.77556 13.5933 10.5225 13.2945 11.2196C12.9957 11.9168 12.5874 12.5243 12.0695 13.0421C11.5517 13.56 10.9442 13.9683 10.247 14.2671C9.54989 14.5659 8.80296 14.7153 8.00623 14.7153Z M 7.3562 5.04109 H 8.67127 V 10.301359999999999 H 7.3562 z M 7.3562 5.04109 H 8.67127 V 10.301359999999999 H 7.3562 z M 13.5499 2.41096 H 14.86497 V 4.970890000000001 H 13.5499 z M 13.5499 2.41096 H 14.86497 V 4.970890000000001 H 13.5499 z M 10.2054 0 H 11.52047 V 4.38356 H 10.2054 z M 10.2054 0 H 11.52047 V 4.38356 H 10.2054 z" />
  </svg>
);

Timer.displayName = "Timer";

export default Timer;