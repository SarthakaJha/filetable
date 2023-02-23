"use client"
import { useState } from 'react';

const data = [
  { index: 1, filename: 'file1.txt', hash: 'a1b2c3', timestamp: '2022-01-01 12:00:00', status: 'OK' },
  { index: 2, filename: 'file2.txt', hash: 'd4e5f6', timestamp: '2022-01-02 12:00:00', status: 'FAILED' },
  { index: 3, filename: 'file3.txt', hash: 'g7h8i9', timestamp: '2022-01-03 12:00:00', status: 'OK' },
  { index: 4, filename: 'file4.txt', hash: 'j1k2l3', timestamp: '2022-01-04 12:00:00', status: 'PENDING' },
];

const Table = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useState(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full overflow-x-scroll mx-auto px-10">
      <table className="w-full border">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-2 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">Index</th>
            <th className="py-2 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">Filename</th>
            <th className="py-2 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">File Hash</th>
            <th className="py-2 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">Timestamp</th>
            <th className="py-2 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.index} className="border-b border-gray-300">
              <td className="py-2 px-4 text-center text-sm font-medium text-gray-700">{item.index}</td>
              <td className="py-2 px-4 text-center text-sm font-medium text-gray-700">{item.filename}</td>
              <td className="py-2 px-4 text-center text-sm font-medium text-gray-700">{item.hash}</td>
              <td className="py-2 px-4 text-center text-sm font-medium text-gray-700">{item.timestamp}</td>
              <td className="py-2 px-4 text-center text-sm font-medium">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${
                    item.status === 'OK'
                      ? 'bg-green-500'
                      : item.status === 'FAILED'
                      ? 'bg-red-500'
                      : 'bg-yellow-500'
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;