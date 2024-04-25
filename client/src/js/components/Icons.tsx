type Props = { name: IconName; onClick: (e: React.MouseEvent) => void };
type IconName = "start-task" | "complete-task" | "destroy-task";
type IconSet = Record<IconName, (props: Props) => JSX.Element>;

const icons: IconSet = {
  "start-task": ({ name, onClick }: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      onClick={onClick}
      className={`${name} icon`}
    >
      <g id="_x31_78">
        <path d="m13.2 7.6c-.8 4.3-.6 5.5-.1 8.2.4 2.3.9 4.9-.1 6.8-.6 1.2-1.5 2.3-1.9 3.8-.6 2.5.7 5.4 0 7.5-.2.8-1.1 1.7-.8 3.1 0 .7.3 1.3.8 1.8 1.6 1.7 8.9 4.5 16.6 3.5 4-.5 7.9-1.9 11.9-2.6 3.8-.7 8-.6 11.3 1.4-1.4 7.7-3.3 16.2-5.1 22.2-.3 1 .1 2.1 1 2.6.2.2.5.4.8.5.9.3 1.9 0 2.5-.7.5-.6.7-1.3.9-2.1 4.1-15.9 7-32.1 8.6-48.4.2-2.5.1-5.1.6-7.4.1-.5.1-1 0-1.5.2-2-1.4-3.4-3.1-3.5-1.3-.1-2.5.7-3.1 1.8-.4.7-.5 1.7-.4 2.5-9.6-3.2-15.6 1-21.2 2.6-6 1.7-12.8.8-18.2-2.5-.3-.4-.9-.1-1 .4zm1.9 11.5c3.9.6 7.9 1.2 11.9 1.4-.3 3.3-.8 6.6-1.6 9.8-4.8.2-9.3-.7-12.8-2.5 0-3.4 2.8-3.7 2.5-8.7zm10.3 21.1c-.5 0-1 0-1.5 0 1.1-2.7 1.9-5.5 2.7-8.4.5 0 .9-.1 1.4-.1 4-.5 7.3-1.3 11.7-1.8-.7 2.7-1.5 5.3-2.5 7.9-3.9.8-7.9 2.1-11.8 2.4zm-3.1-.1c-4.2-.3-6.4-1.5-8.9-2.3-.5-.1-1.5-.6-1.5-1.4 0-1.1 1.4-1.5 1-5.4-.1-.4-.1-.5-.2-1.4 3.2 1.5 7.2 2.4 11.4 2.4h1c-1.3 4.5-2.4 7.1-2.8 8.1zm29.2-2c-2.2-1.1-4-1.2-6.6-1.2-2.1 0-4.2.2-6 .6.9-2.6 1.7-5.2 2.4-7.8 3.9-.3 7.7-.1 11.5.8-.5 3.6-.6 3.8-1.3 7.6zm1.5-9.1c-3.7-.8-7.5-1.1-11.3-.8.7-3.1 1.3-6.2 1.7-9.3 3.6-.6 7.2-.9 10.7-.1-.4 3.4-.7 6.8-1.1 10.2zm-12.9-.7c-4.3.5-8.1 1.4-12.2 1.9-.3 0-.6 0-.8.1.7-3.2 1.2-6.4 1.5-9.7 5.4.1 8.1-.5 13.3-1.4-.5 3-1.1 6.1-1.8 9.1zm7.2 35.3c6.2-20.8 9-48.7 8.8-54.8.6.1 1.2.1 2-.1-.7 15.9-4.5 38.9-9.2 55.4-.1.2-.2.4-.4.5-.1.1-.3.1-.6 0l-.1-.1c-.4-.1-.6-.5-.5-.9zm8.2-58.5c.3-.6 1-1 1.7-1 1.4.1 2.2 1.8 1.2 2.9h-.1c-.9.5-2.1.4-3-.1 0 0 0 0-.1 0 0-.1 0-.2 0-.4 0-.4.1-1 .3-1.4zm-.9 3.8c0 .1-.1 3.9-.5 8.4-3.5-.8-7.1-.5-10.6.1.3-2.9.7-8.4.6-9.8 2.4-.4 8.3.1 10.5 1.3zm-12-1.1c0 3.3-.2 6.6-.6 9.8-5.3.9-7.9 1.6-13.3 1.5.2-2.5.2-4.9.1-7.4 5.9-.5 8.7-2.9 13.8-3.9zm-28.1 1.1c3.9 2.1 8.3 3.1 12.7 2.9.1 2.4 0 4.8-.1 7.2-4.1-.2-8.2-.8-12.1-1.5-.5-3.5-1.2-4.3-.5-8.6z" />
        <path d="m7.7 6.8c-.2.4 0 .8.4 1l2.8 1.3c.4.2.8 0 1-.4s0-.8-.4-1l-2.8-1.3c-.4-.1-.8 0-1 .4z" />
        <path d="m11.6 2.9c-.2-.4-.7-.5-1-.3-.4.2-.5.7-.3 1l1.6 2.8c.1.2.4.4.7.4.6 0 .9-.6.7-1.1z" />
        <path d="m15.1 5.9c.4 0 .7-.3.7-.6l.5-2.8c.1-.4-.2-.8-.6-.9s-.8.2-.9.6l-.5 2.8c0 .5.3.9.8.9z" />
      </g>
    </svg>
  ),
  "complete-task": ({ name, onClick }: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={onClick}
      className={`${name} icon`}
    >
      <switch>
        <g>
          <path
            d="m12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm4.3 7.6-4.6 6c-.2.2-.5.4-.8.4s-.6-.1-.8-.4l-2.4-3.1c-.3-.4-.3-1.1.2-1.4s1.1-.3 1.4.2l1.6 2.1 3.8-5c.3-.4 1-.5 1.4-.2.5.3.5.9.2 1.4z"
            fill="#02bc7d"
          />
        </g>
      </switch>
    </svg>
  ),
  "destroy-task": ({ name, onClick }: Props) => (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={`${name} icon`}
    >
      <g>
        <path d="m95.331 27.471h-14.248v-4.516a5.712 5.712 0 0 0 -5.7-5.7h-22.762a5.712 5.712 0 0 0 -5.705 5.7v4.516h-14.248a5.425 5.425 0 0 0 -5.419 5.419v5.857a5.426 5.426 0 0 0 5.419 5.419h.071v59.041a7.551 7.551 0 0 0 7.542 7.543h47.437a7.551 7.551 0 0 0 7.542-7.543v-59.041h.071a5.425 5.425 0 0 0 5.418-5.419v-5.857a5.424 5.424 0 0 0 -5.418-5.419zm-44.915-4.516a2.207 2.207 0 0 1 2.205-2.2h22.757a2.207 2.207 0 0 1 2.2 2.2v4.516h-27.162zm41.344 80.252a4.047 4.047 0 0 1 -4.042 4.043h-47.437a4.047 4.047 0 0 1 -4.042-4.043v-59.041h55.521zm5.489-64.46a1.92 1.92 0 0 1 -1.918 1.919h-62.663a1.921 1.921 0 0 1 -1.919-1.919v-5.857a1.921 1.921 0 0 1 1.919-1.919h62.663a1.92 1.92 0 0 1 1.918 1.919z" />
        <path d="m64 95.541a1.749 1.749 0 0 0 1.75-1.75v-36.166a1.75 1.75 0 1 0 -3.5 0v36.166a1.75 1.75 0 0 0 1.75 1.75z" />
        <path d="m79.333 95.541a1.75 1.75 0 0 0 1.75-1.75v-36.166a1.75 1.75 0 0 0 -3.5 0v36.166a1.75 1.75 0 0 0 1.75 1.75z" />
        <path d="m48.666 95.541a1.75 1.75 0 0 0 1.75-1.75v-36.166a1.75 1.75 0 0 0 -3.5 0v36.166a1.75 1.75 0 0 0 1.75 1.75z" />
      </g>
    </svg>
  ),
};

export function Icon({ name, onClick }: Props) {
  const getIcon = icons[name];
  return getIcon({ name, onClick });
}