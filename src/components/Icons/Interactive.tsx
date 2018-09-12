import * as React from "react";

interface Props {
  size: number;
  color: string;
}

const Interactive: React.SFC<Props> = ({
  size = 24,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" width={size} height={size} fill={color}>
    <path d="M14.9108 6.01014C14.8453 5.86821 14.7607 5.76176 14.657 5.6908C14.5533 5.61983 14.4305 5.58435 14.2885 5.58435H8.76969L9.39199 0.769691C9.43566 0.627761 9.41383 0.483105 9.32649 0.335716C9.23915 0.188328 9.12451 0.0982586 8.98258 0.0655058C8.84065 -2.30968e-07 8.69054 -0.0163764 8.53223 0.0163766C8.37393 0.0491294 8.24565 0.136469 8.14739 0.278399L1.15467 8.66311C1.07824 8.77229 1.02911 8.89238 1.00728 9.0234C0.985443 9.15441 1.01274 9.29088 1.08916 9.43281C1.15467 9.54198 1.23928 9.62659 1.34299 9.68664C1.44671 9.74669 1.56953 9.77671 1.71146 9.77671H7.23031L6.60801 14.6077C6.56434 14.7497 6.58617 14.8916 6.67351 15.0335C6.76085 15.1755 6.87549 15.2628 7.01742 15.2956C7.05017 15.3392 7.09657 15.3638 7.15662 15.3692C7.21666 15.3747 7.26306 15.3774 7.29581 15.3774C7.40499 15.3774 7.50871 15.3556 7.60697 15.3119C7.70523 15.2683 7.78711 15.1973 7.85261 15.099L14.8453 6.71432C14.9218 6.60515 14.9709 6.48778 14.9927 6.36223C15.0146 6.23668 14.9873 6.11932 14.9108 6.01014ZM8.2784 12.3642L8.70419 9.15441C8.70419 9.04523 8.68781 8.94151 8.65506 8.84326C8.6223 8.745 8.58955 8.66312 8.5568 8.59761C8.49129 8.52119 8.40941 8.4666 8.31115 8.43385C8.21289 8.40109 8.10918 8.38472 8 8.38472H3.18534L7.6561 2.99688L7.29581 6.22303C7.29581 6.32129 7.31219 6.41955 7.34494 6.51781C7.3777 6.61607 7.41045 6.70341 7.4432 6.77983C7.50871 6.84534 7.58786 6.89719 7.68066 6.9354C7.77346 6.97362 7.85807 6.99272 7.93449 6.99272H12.7492L8.2784 12.3642Z M14.9108 6.01014C14.8453 5.86821 14.7607 5.76176 14.657 5.6908C14.5533 5.61983 14.4305 5.58435 14.2885 5.58435H8.76969L9.39199 0.769691C9.43566 0.627761 9.41383 0.483105 9.32649 0.335716C9.23915 0.188328 9.12451 0.0982586 8.98258 0.0655058C8.84065 -2.30968e-07 8.69054 -0.0163764 8.53223 0.0163766C8.37393 0.0491294 8.24565 0.136469 8.14739 0.278399L1.15467 8.66311C1.07824 8.77229 1.02911 8.89238 1.00728 9.0234C0.985443 9.15441 1.01274 9.29088 1.08916 9.43281C1.15467 9.54198 1.23928 9.62659 1.34299 9.68664C1.44671 9.74669 1.56953 9.77671 1.71146 9.77671H7.23031L6.60801 14.6077C6.56434 14.7497 6.58617 14.8916 6.67351 15.0335C6.76085 15.1755 6.87549 15.2628 7.01742 15.2956C7.05017 15.3392 7.09657 15.3638 7.15662 15.3692C7.21666 15.3747 7.26306 15.3774 7.29581 15.3774C7.40499 15.3774 7.50871 15.3556 7.60697 15.3119C7.70523 15.2683 7.78711 15.1973 7.85261 15.099L14.8453 6.71432C14.9218 6.60515 14.9709 6.48778 14.9927 6.36223C15.0146 6.23668 14.9873 6.11932 14.9108 6.01014ZM8.2784 12.3642L8.70419 9.15441C8.70419 9.04523 8.68781 8.94151 8.65506 8.84326C8.6223 8.745 8.58955 8.66312 8.5568 8.59761C8.49129 8.52119 8.40941 8.4666 8.31115 8.43385C8.21289 8.40109 8.10918 8.38472 8 8.38472H3.18534L7.6561 2.99688L7.29581 6.22303C7.29581 6.32129 7.31219 6.41955 7.34494 6.51781C7.3777 6.61607 7.41045 6.70341 7.4432 6.77983C7.50871 6.84534 7.58786 6.89719 7.68066 6.9354C7.77346 6.97362 7.85807 6.99272 7.93449 6.99272H12.7492L8.2784 12.3642Z" />
  </svg>
);

Interactive.displayName = "Interactive";

export default Interactive;
