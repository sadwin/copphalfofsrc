import React from 'react';

export default function LinkCell(cellData) {
  return (
    <a
      href={cellData.data.url}
      target="_blank"
      className="table__resource-link"
    >
      {cellData.value}
    </a>
  );
}
