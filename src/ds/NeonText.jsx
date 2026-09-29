import React from 'react';
export function NeonText({ as: Tag = 'span', pulse = true, gradient, children, className, ...rest }) {
  const cls = [gradient ? 'nb-display nb-gradient-text' : 'nb-neon', !gradient && pulse && 'nb-neon--pulse', className].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
