import React from 'react';
import { Card } from './Card.jsx';
import { Badge } from './Badge.jsx';
import { Icon } from './Icon.jsx';
// Without href (a table not open yet) the card is not a link and promises nothing.
export function GameCard({ title, section, image, logo, description, tags = [], status, href, onClick }) {
  const link = !!href;
  return <Card interactive={link} padded={false} as={link ? 'a' : 'div'} href={href} onClick={onClick} style={{ textDecoration: 'none', display: 'block' }}>
    {logo
      ? <div className="nb-card__media nb-card__media--logo" style={{ height: 227, backgroundImage: image ? `url(${image})` : undefined }}><img src={logo} alt={title} loading="lazy" style={{ height: 170 }} /></div>
      : <div className="nb-card__media" style={{ backgroundImage: image ? `url(${image})` : undefined }} />}
    <div className="nb-card__body">
      <div className="nb-card__meta">{status && <Badge tone={status === 'Attiva' ? 'ok' : 'neutral'} dot={status === 'Attiva'}>{status}</Badge>}{tags.map(t => <Badge key={t}>{t}</Badge>)}</div>
      <div>{section && <div className="nb-eyebrow" style={{ marginBottom: 6 }}>{section}</div>}<div className="nb-card__title">{title}</div></div>
      {description && <p className="nb-card__text">{description}</p>}
      {link && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: '600 14px/1 var(--font-body)', color: 'var(--accent-text)' }}>Apri il tavolo <Icon name="arrow-right" size={16} /></span>}
    </div>
  </Card>;
}
