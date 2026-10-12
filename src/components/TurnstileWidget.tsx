"use client";

import { Turnstile } from "@marsidev/react-turnstile";

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
};

export default function TurnstileWidget({
  onVerify,
  onExpire,
}: TurnstileWidgetProps) {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      onSuccess={(token) => {
      
        onVerify(token);
      }}
      onExpire={() => {
        
        onExpire?.();
      }}
    />
  );
}