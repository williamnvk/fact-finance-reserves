import { SVGProps } from 'react';

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 18 18" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M16.668 0H1.328C.595 0 0 .58 0 1.297V16.7C0 17.416.594 18 1.329 18h15.339c.734 0 1.332-.584 1.332-1.297V1.297C18 .58 17.402 0 16.668 0ZM5.34 15.339H2.668V6.746H5.34v8.593ZM4.004 5.576A1.548 1.548 0 1 1 4 2.48a1.548 1.548 0 0 1 .005 3.096Zm11.335 9.763H12.67v-4.177c0-.995-.017-2.278-1.388-2.278-1.389 0-1.6 1.086-1.6 2.208v4.247H7.017V6.746h2.56v1.175h.035c.355-.675 1.227-1.389 2.524-1.389 2.704 0 3.203 1.779 3.203 4.092v4.715Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default LinkedinIcon;
