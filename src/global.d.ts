declare module '*.css';

declare module '*.scss';

declare module '*.png';

declare module '*.jpg';

declare module '*.svg';

declare module '*.webp';

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: any;
  export default content;
}

declare module '*.gif';

declare module '*.glb';
