import React from 'react';
import { Icon } from './Icon.jsx';
export function EventItem({ day, month, title, time, place, action }) {
  return <div className="nb-event">
    <div className="nb-event__date"><span className="nb-event__day">{day}</span><span className="nb-event__mon">{month}</span></div>
    <div style={{ display: 'grid', gap: 6, minWidth: 0 }}><div className="nb-event__title">{title}</div>
      <div className="nb-event__meta">{time && <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="clock" size={14} />{time}</span>}{place && <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="map-pin" size={14} />{place}</span>}</div></div>
    {action}
  </div>;
}
