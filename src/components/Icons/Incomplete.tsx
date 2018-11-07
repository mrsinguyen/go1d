import * as React from "react";

const Incomplete: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M8 0C6.886 0 5.845.21 4.878.63a7.787 7.787 0 0 0-2.55 1.704 8.234 8.234 0 0 0-1.714 2.54A7.986 7.986 0 0 0 0 7.99c0 1.114.205 2.153.614 3.119.42.977.992 1.826 1.714 2.547a8.085 8.085 0 0 0 2.55 1.713c.967.42 2.008.63 3.122.63 1.114 0 2.155-.21 3.121-.63a8.085 8.085 0 0 0 2.55-1.713 8.076 8.076 0 0 0 1.715-2.547c.41-.966.614-2.005.614-3.119a7.985 7.985 0 0 0-.614-3.118 8.233 8.233 0 0 0-1.714-2.539A7.786 7.786 0 0 0 11.122.63 7.742 7.742 0 0 0 8 0zm0 14.535c-.91 0-1.763-.17-2.559-.512a6.572 6.572 0 0 1-2.08-1.397 6.564 6.564 0 0 1-1.4-2.079 6.413 6.413 0 0 1-.511-2.556c0-.908.17-1.76.512-2.555a6.564 6.564 0 0 1 1.398-2.08A6.572 6.572 0 0 1 5.441 1.96 6.432 6.432 0 0 1 8 1.448c.91 0 1.763.17 2.559.512.796.34 1.49.806 2.08 1.397a6.566 6.566 0 0 1 1.4 2.079 6.43 6.43 0 0 1 .511 2.555c0 .91-.17 1.761-.512 2.556a6.565 6.565 0 0 1-1.398 2.08 6.573 6.573 0 0 1-2.081 1.396A6.432 6.432 0 0 1 8 14.535z" />
  </svg>
);

Incomplete.displayName = "IconIncomplete";

export default Incomplete;
