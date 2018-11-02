import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Envelope: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      fillOpacity={0.2}
      d="M13.817 0H2.183C1.558 0 1.038.21.623.631.208 1.051 0 1.57 0 2.183v8.734c0 .625.208 1.146.623 1.56.415.416.935.623 1.56.623h11.634c.625 0 1.145-.207 1.56-.622.415-.415.623-.936.623-1.561V2.183c0-.614-.207-1.131-.623-1.552-.415-.42-.935-.631-1.56-.631zM2.183 1.467h11.634c.147 0 .275.034.383.102a.843.843 0 0 1 .282.324L8 6.413l-6.482-4.52A.843.843 0 0 1 1.8 1.57a.704.704 0 0 1 .383-.102zM13.817 11.65H2.183c-.227 0-.406-.065-.537-.196-.13-.13-.196-.31-.196-.537V3.565l6.106 4.299c.08.034.157.068.23.102A.508.508 0 0 0 8 8.017c.068 0 .14-.017.213-.051.074-.034.15-.068.23-.102l6.107-4.299v7.352c0 .227-.065.406-.196.537-.13.13-.31.196-.537.196z"
    />
    <path
      fillOpacity={0.1}
      d="M13.817 0H2.183C1.558 0 1.038.21.623.631.208 1.051 0 1.57 0 2.183v8.734c0 .625.208 1.146.623 1.56.415.416.935.623 1.56.623h11.634c.625 0 1.145-.207 1.56-.622.415-.415.623-.936.623-1.561V2.183c0-.614-.207-1.131-.623-1.552-.415-.42-.935-.631-1.56-.631zM2.183 1.467h11.634c.147 0 .275.034.383.102a.843.843 0 0 1 .282.324L8 6.413l-6.482-4.52A.843.843 0 0 1 1.8 1.57a.704.704 0 0 1 .383-.102zM13.817 11.65H2.183c-.227 0-.406-.065-.537-.196-.13-.13-.196-.31-.196-.537V3.565l6.106 4.299c.08.034.157.068.23.102A.508.508 0 0 0 8 8.017c.068 0 .14-.017.213-.051.074-.034.15-.068.23-.102l6.107-4.299v7.352c0 .227-.065.406-.196.537-.13.13-.31.196-.537.196z"
    />
  </svg>
);

Envelope.displayName = "IconEnvelope";

export default Envelope;